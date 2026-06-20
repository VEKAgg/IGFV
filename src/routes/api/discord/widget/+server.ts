import { json } from '@sveltejs/kit';
import { fetchDiscordWidget } from '$lib/server/discord';

export async function GET() {
	try {
		const data = await fetchDiscordWidget();
		return json(data, {
			headers: {
				'cache-control': 'public, max-age=30'
			}
		});
	} catch (err: any) {
		return json({ error: err?.message || 'failed' }, { status: 500 });
	}
}

