'use client';

import React, { useEffect, useState } from 'react';

const WIDGET_URL = `/api/discord/widget`;

export default function DiscordLive() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        // Simple caching in localStorage for 60s to avoid excessive calls
        const cacheKey = 'discord_widget_cache_v1';
        const raw = localStorage.getItem(cacheKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          const age = Date.now() - parsed.ts;
          if (age < 60_000 && parsed?.presence_count != null) {
            setCount(parsed.presence_count);
            setLoading(false);
            return;
          }
        }

        const res = await fetch(WIDGET_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch widget');
        const data = await res.json();
        const presence = data.presence_count ?? data.members?.length ?? null;
        if (mounted) {
          setCount(presence);
          setLoading(false);
          try {
            localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), presence_count: presence }));
          } catch {
            // ignore storage errors
          }
        }
      } catch {
        if (mounted) {
          setCount(null);
          setLoading(false);
        }
      }
    }

    load();
    const iv = setInterval(load, 60_000);
    return () => { mounted = false; clearInterval(iv); };
  }, []);

  if (loading) return <div className="text-2xl font-bold">—</div>;
  if (count == null) return <div className="text-sm text-gray-300">Unavailable</div>;
  return <div className="text-2xl font-bold">{count}</div>;
}
