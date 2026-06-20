import type { DataStateContainer, SquadronStats, FleetCarrierData, MemberProfile } from '$lib/types';
import { squadronStats } from '$lib/data/squadron';
import { fleetCarrierPlaceholder } from '$lib/data/fleet-carrier';

export function getFallbackSquadronStats(error?: string): DataStateContainer<SquadronStats> {
	return {
		data: { ...squadronStats },
		state: 'placeholder',
		sourceStatus: 'Offline / Fallback Data',
		error: error || 'API unconfigured'
	};
}

export function getFallbackFleetCarrier(error?: string): DataStateContainer<FleetCarrierData> {
	return {
		data: { ...fleetCarrierPlaceholder },
		state: 'placeholder',
		sourceStatus: 'Offline / Fallback Data',
		error: error || 'API unconfigured'
	};
}

export function getFallbackCommanderProfile(commanderName: string, error?: string): DataStateContainer<MemberProfile> {
	return {
		data: {
			name: commanderName,
			role: 'Commander',
			rank: 'Elite',
			platform: 'PC',
			timezone: 'UTC',
			joinDate: new Date().toISOString().split('T')[0],
			bio: `Commander ${commanderName} is an active pilot of the Interstellar Goodfellas.`
		},
		state: 'placeholder',
		sourceStatus: 'Offline / Fallback Data',
		error: error || 'API unconfigured'
	};
}
