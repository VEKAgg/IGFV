import { json } from '@sveltejs/kit';

let cache: { ts: number; data: unknown } | null = null;
const CACHE_TTL = 60 * 1000;
const GUILD_ID = '792556339359907871';
const WIDGET_URL = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;

export async function GET() {
	try {
		if (cache && Date.now() - cache.ts < CACHE_TTL) {
			return json(cache.data, { headers: { 'x-cache': 'HIT' } });
		}

		const r = await fetch(WIDGET_URL);
		if (!r.ok) return new Response(null, { status: r.status });
		const data = await r.json();

		cache = { ts: Date.now(), data };
		return json(data, { headers: { 'x-cache': 'MISS' } });
	} catch {
		return json({ error: 'failed to fetch' }, { status: 500 });
	}
}
