import type { NextApiRequest, NextApiResponse } from 'next';

// Simple Inara proxy. Requires INARA_API_KEY in environment for requests that need it.
const INARA_URL = 'https://inara.cz/inapi/v1/';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const apiKey = process.env.INARA_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'INARA_API_KEY not configured on server' });
  }

  try {
    // Build a safe payload object without using `any`.
    const body = req.body as Record<string, unknown> | undefined;
    const existingHeader = (body && typeof body.header === 'object' && body.header !== null)
      ? (body.header as Record<string, unknown>)
      : {};

    const payload = {
      ...body,
      header: {
        ...existingHeader,
        appName: (existingHeader as Record<string, unknown>).appName ?? 'IGFV-Website',
        appVersion: (existingHeader as Record<string, unknown>).appVersion ?? '1.0',
        apiKey,
      },
    } as Record<string, unknown>;

    const r = await fetch(INARA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    // proxy raw response
    res.status(r.status).send(text);
  } catch {
    res.status(500).json({ error: 'failed to proxy to inara' });
  }
}
