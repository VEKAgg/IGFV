import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

const INARA_URL = 'https://inara.cz/inapi/v1/';

export async function POST(event: RequestEvent) {
	const apiKey = process.env.INARA_API_KEY;
	if (!apiKey) {
		return json({ error: 'INARA_API_KEY not configured on server' }, { status: 500 });
	}

	try {
		const body = await event.request.json();
		const existingHeader = body.header && typeof body.header === 'object' ? body.header : {};

		const payload = {
			...body,
			header: {
				...existingHeader,
				appName: existingHeader.appName ?? 'IGFV-Website',
				appVersion: existingHeader.appVersion ?? '1.0',
				apiKey
			}
		};

		const r = await fetch(INARA_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});

		const text = await r.text();
		return new Response(text, { status: r.status });
	} catch {
		return json({ error: 'failed to proxy to inara' }, { status: 500 });
	}
}
