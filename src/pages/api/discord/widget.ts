import type { NextApiRequest, NextApiResponse } from 'next';

// Simple server-side proxy for Discord widget JSON with basic in-memory caching
let cache: { ts: number; data: Record<string, unknown> } | null = null;
const CACHE_TTL = 60 * 1000; // 60s
const GUILD_ID = '792556339359907871';
const WIDGET_URL = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (cache && Date.now() - cache.ts < CACHE_TTL) {
      res.setHeader('x-cache', 'HIT');
      return res.status(200).json(cache.data);
    }

    const r = await fetch(WIDGET_URL);
    if (!r.ok) return res.status(r.status).end();
    const data = await r.json();

    cache = { ts: Date.now(), data };
    res.setHeader('x-cache', 'MISS');
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: 'failed to fetch' });
  }
}
