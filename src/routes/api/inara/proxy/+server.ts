import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { getSquadronStats, getFleetCarrierDetails, getCommanderDetails } from '$lib/server/inara';
import { getFallbackSquadronStats, getFallbackFleetCarrier, getFallbackCommanderProfile } from '$lib/server/fallbacks';

export async function POST(event: RequestEvent) {
	try {
		const body = await event.request.json();
		const { action, id, name } = body;

		if (!action) {
			return json({ ok: false, errorCode: 'MISSING_ACTION', error: 'Action parameter is required' }, { status: 400 });
		}

		if (action === 'getSquadron') {
			const squadronId = Number(id);
			if (isNaN(squadronId)) {
				return json({
					ok: false,
					errorCode: 'INVALID_ID',
					error: 'Valid squadron ID is required',
					data: getFallbackSquadronStats().data,
					fallbackUsed: true
				});
			}
			const result = await getSquadronStats(squadronId);
			return json({
				ok: result.state === 'live',
				fallbackUsed: result.state !== 'live',
				data: result.data,
				sourceStatus: result.sourceStatus,
				errorCode: result.error ? 'FETCH_FAILED' : undefined
			});
		}

		if (action === 'getFleetCarrier') {
			const carrierId = Number(id);
			if (isNaN(carrierId)) {
				return json({
					ok: false,
					errorCode: 'INVALID_ID',
					error: 'Valid carrier ID is required',
					data: getFallbackFleetCarrier().data,
					fallbackUsed: true
				});
			}
			const result = await getFleetCarrierDetails(carrierId);
			return json({
				ok: result.state === 'live',
				fallbackUsed: result.state !== 'live',
				data: result.data,
				sourceStatus: result.sourceStatus,
				errorCode: result.error ? 'FETCH_FAILED' : undefined
			});
		}

		if (action === 'getCommander') {
			const commanderName = String(name || '');
			if (!commanderName) {
				return json({
					ok: false,
					errorCode: 'INVALID_NAME',
					error: 'Commander name is required',
					data: getFallbackCommanderProfile('Unknown').data,
					fallbackUsed: true
				});
			}
			const result = await getCommanderDetails(commanderName);
			return json({
				ok: result.state === 'live',
				fallbackUsed: result.state !== 'live',
				data: result.data,
				sourceStatus: result.sourceStatus,
				errorCode: result.error ? 'FETCH_FAILED' : undefined
			});
		}

		return json({ ok: false, errorCode: 'UNKNOWN_ACTION', error: `Action ${action} is not supported` }, { status: 400 });
	} catch (err: any) {
		console.error('Error in Inara proxy route:', err);
		return json({
			ok: false,
			errorCode: 'INTERNAL_ERROR',
			error: err?.message || 'Internal proxy error',
			fallbackUsed: true
		}, { status: 500 });
	}
}
