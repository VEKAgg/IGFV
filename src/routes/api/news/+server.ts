import { json } from '@sveltejs/kit';
import { fetchNews } from '$lib/server/news';

export async function GET() {
	try {
		const data = await fetchNews();
		return json(data, {
			headers: {
				'cache-control': 'public, max-age=60'
			}
		});
	} catch (err: any) {
		return json({ error: err?.message || 'failed' }, { status: 500 });
	}
}
