export interface DiscordWidgetData {
	guildName: string;
	inviteLink: string;
	onlineCount: number;
	onlineMembers: Array<{ name: string; status: string; avatarUrl?: string }>;
}

const GUILD_ID = '792556339359907871';
const WIDGET_URL = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;

let cache: { ts: number; data: DiscordWidgetData } | null = null;
const CACHE_TTL = 30 * 1000; // 30 seconds cache

export async function fetchDiscordWidget(): Promise<DiscordWidgetData> {
	if (cache && Date.now() - cache.ts < CACHE_TTL) {
		return cache.data;
	}

	try {
		const res = await fetch(WIDGET_URL, { signal: AbortSignal.timeout(5000) });
		if (!res.ok) {
			throw new Error(`Discord widget API responded with status ${res.status}`);
		}
		const data = await res.json();

		const normalized: DiscordWidgetData = {
			guildName: data.name || 'Interstellar Goodfellas',
			inviteLink: data.instant_invite || 'https://discord.gg/igfv',
			onlineCount: data.presence_count ?? 0,
			onlineMembers: (data.members || []).map((m: any) => ({
				name: m.username,
				status: m.status,
				avatarUrl: m.avatar_url
			}))
		};

		cache = { ts: Date.now(), data: normalized };
		return normalized;
	} catch (err) {
		console.error('Error fetching Discord widget:', err);
		// Return a stable fallback
		return {
			guildName: 'Interstellar Goodfellas',
			inviteLink: 'https://discord.gg/igfv',
			onlineCount: 42,
			onlineMembers: []
		};
	}
}
