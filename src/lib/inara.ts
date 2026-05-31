const INARA_ENDPOINT = '/api/inara/proxy';

const inflightRequests = new Map<string, Promise<unknown>>();

async function dedupedFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
	const existing = inflightRequests.get(key);
	if (existing) return existing as Promise<T>;
	const promise = fetcher().finally(() => inflightRequests.delete(key));
	inflightRequests.set(key, promise);
	return promise;
}

interface InaraResponse {
	header: {
		appName: string;
		appVersion: string;
		requestTimestamp: string;
		resultStatus: string;
	};
	events: Array<{
		eventStatus: string;
		eventData?: Record<string, unknown>;
	}>;
}

export async function fetchSquadronData(squadronId: number) {
	if (!squadronId) return null;
	return dedupedFetch(`squadron-${squadronId}`, async () => {
		try {
			const response = await fetch(INARA_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					header: { appName: 'IGFV-Website', appVersion: '1.0' },
					events: [
						{
							eventName: 'getSquadron',
							eventTimestamp: new Date().toISOString(),
							eventData: { squadronID: squadronId }
						}
					]
				})
			});
			if (!response.ok) return null;
			const data: InaraResponse = await response.json();
			if (data.header.resultStatus === 'OK' && data.events[0]?.eventData)
				return data.events[0].eventData;
			return null;
		} catch {
			return null;
		}
	});
}

export async function fetchFleetCarrierData(carrierId: number) {
	if (!carrierId) return null;
	return dedupedFetch(`carrier-${carrierId}`, async () => {
		try {
			const response = await fetch(INARA_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					header: { appName: 'IGFV-Website', appVersion: '1.0' },
					events: [
						{
							eventName: 'getFleetCarrier',
							eventTimestamp: new Date().toISOString(),
							eventData: { carrierID: carrierId }
						}
					]
				})
			});
			if (!response.ok) return null;
			const data: InaraResponse = await response.json();
			if (data.header.resultStatus === 'OK' && data.events[0]?.eventData)
				return data.events[0].eventData;
			return null;
		} catch {
			return null;
		}
	});
}

export async function fetchCommanderProfile(commanderName: string) {
	if (!commanderName) return null;
	return dedupedFetch(`commander-${commanderName}`, async () => {
		try {
			const response = await fetch(INARA_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					header: { appName: 'IGFV-Website', appVersion: '1.0' },
					events: [
						{
							eventName: 'getCommanderProfile',
							eventTimestamp: new Date().toISOString(),
							eventData: { commanderName }
						}
					]
				})
			});
			if (!response.ok) return null;
			const data: InaraResponse = await response.json();
			if (data.header.resultStatus === 'OK' && data.events[0]?.eventData)
				return data.events[0].eventData;
			return null;
		} catch {
			return null;
		}
	});
}
