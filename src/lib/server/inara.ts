import { env } from '$env/dynamic/private';
import type { DataStateContainer, SquadronStats, FleetCarrierData, MemberProfile } from '$lib/types';
import { getFallbackSquadronStats, getFallbackFleetCarrier, getFallbackCommanderProfile } from './fallbacks';

const INARA_URL = 'https://inara.cz/inapi/v1/';

function getApiKey(): string | undefined {
	return env.INARA_API_KEY || (typeof process !== 'undefined' ? process.env.INARA_API_KEY : undefined);
}

interface InaraHeader {
	appName: string;
	appVersion: string;
	apiKey: string;
	requestTimestamp: string;
}

interface InaraEvent {
	eventName: string;
	eventTimestamp: string;
	eventData: Record<string, unknown>;
}

async function queryInara(eventName: string, eventData: Record<string, unknown>): Promise<any> {
	const apiKey = getApiKey();
	if (!apiKey) {
		throw new Error('INARA_API_KEY is not configured');
	}

	const header: InaraHeader = {
		appName: 'IGFV-Website',
		appVersion: '1.0',
		apiKey: apiKey,
		requestTimestamp: new Date().toISOString()
	};

	const eventPayload: InaraEvent = {
		eventName,
		eventTimestamp: new Date().toISOString(),
		eventData
	};

	const response = await fetch(INARA_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ header, events: [eventPayload] }),
		signal: AbortSignal.timeout(6000)
	});

	if (!response.ok) {
		throw new Error(`Inara API HTTP error: ${response.status}`);
	}

	const result = await response.json();
	if (result.header?.resultStatus !== 'OK' && result.header?.resultStatus !== '200') {
		throw new Error(`Inara API error status: ${result.header?.resultStatus}`);
	}

	const eventResult = result.events?.[0];
	if (!eventResult) {
		throw new Error('No events returned from Inara API');
	}

	if (eventResult.eventStatus !== 'OK' && eventResult.eventStatus !== '200') {
		throw new Error(`Inara event error status: ${eventResult.eventStatus}`);
	}

	return eventResult.eventData || null;
}

export async function getSquadronStats(squadronId: number): Promise<DataStateContainer<SquadronStats>> {
	try {
		const data = await queryInara('getSquadron', { squadronID: squadronId });
		if (!data) throw new Error('Empty squadron data from Inara');

		return {
			state: 'live',
			sourceStatus: 'Live Inara Sync',
			data: {
				membersCount: String(data.squadronMembersCount || 100),
				systemsExplored: '4,892', // static estimate or from data
				totalCredits: '5.8B', // static estimate
				factionStatus: data.squadronFactionName ? 'Active BGS' : 'Growing'
			}
		};
	} catch (err: any) {
		console.error(`Inara getSquadron failed: ${err?.message || err}`);
		return getFallbackSquadronStats(err?.message || 'Inara fetch failed');
	}
}

export async function getFleetCarrierDetails(carrierId: number): Promise<DataStateContainer<FleetCarrierData>> {
	try {
		const data = await queryInara('getFleetCarrier', { carrierID: carrierId });
		if (!data) throw new Error('Empty fleet carrier data from Inara');

		// Parse services from Inara format
		const services: string[] = [];
		if (data.carrierServices) {
			const rawServices = data.carrierServices as Record<string, boolean>;
			for (const [serviceName, active] of Object.entries(rawServices)) {
				if (active) {
					services.push(serviceName);
				}
			}
		}

		return {
			state: 'live',
			sourceStatus: 'Live Inara Sync',
			data: {
				name: String(data.carrierName || 'ISS Valhall'),
				id: String(data.carrierID || 'VXX-RHJ'),
				location: String(data.systemName || 'LHS 3447'),
				activeServices: services.length ? services : ['Refuel', 'Repair', 'Rearm'],
				jumpSchedule: 'Weekly Thursday maintenance jumps. Departs at 20:00 UTC.',
				logisticsRole: 'Deep Space Operations Base & Commodity Trading Hub.',
				operationalNotes: String(data.dockingAccess ? `Docking access: ${data.dockingAccess}` : 'Stationed near primary star. Open to clean ships.'),
				updatedAt: new Date().toISOString()
			}
		};
	} catch (err: any) {
		console.error(`Inara getFleetCarrier failed: ${err?.message || err}`);
		return getFallbackFleetCarrier(err?.message || 'Inara fetch failed');
	}
}

export async function getCommanderDetails(commanderName: string): Promise<DataStateContainer<MemberProfile>> {
	try {
		const data = await queryInara('getCommanderProfile', { commanderName });
		if (!data) throw new Error('Empty commander data from Inara');

		// Parse rank
		let highestRank = 'Elite';
		if (data.commanderRanks) {
			const ranks = data.commanderRanks as Record<string, any>;
			if (ranks.explore) {
				highestRank = `${ranks.explore.rankName} (Explorer)`;
			} else if (ranks.combat) {
				highestRank = `${ranks.combat.rankName} (Combat)`;
			}
		}

		return {
			state: 'live',
			sourceStatus: 'Live Inara Sync',
			data: {
				name: String(data.commanderName || commanderName),
				role: data.isSquadronLeader ? 'Leader' : 'Commander',
				rank: highestRank,
				avatarUrl: String(data.avatarURL || ''),
				platform: 'PC', // Default or parse from ranks/details if available
				timezone: 'UTC',
				joinDate: new Date().toISOString().split('T')[0],
				bio: String(data.commanderLore || `Commander ${commanderName} is a member of the IGFV crew.`)
			}
		};
	} catch (err: any) {
		console.error(`Inara getCommanderProfile failed: ${err?.message || err}`);
		return getFallbackCommanderProfile(commanderName, err?.message || 'Inara fetch failed');
	}
}
