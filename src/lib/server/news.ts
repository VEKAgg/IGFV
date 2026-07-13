import type { NewsPost } from '$lib/types';
import { newsPosts as fallbackPosts } from '$lib/data/news';

const DIRECTUS_URL =
	process.env.DIRECTUS_URL || process.env.VITE_PUBLIC_DIRECTUS_URL || 'https://ms.veka.gg';
const CACHE_TTL = 60 * 1000;

interface DirectusPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	published_at: string;
	featured: boolean;
	author: { first_name: string; last_name: string } | null;
	categories: { categories_id: { name: string; slug: string } }[];
}

let cache: { ts: number; data: NewsPost[] } | null = null;

function mapDirectusPost(item: DirectusPost): NewsPost {
	const first = item.author?.first_name || '';
	const last = item.author?.last_name || '';
	const author = [first, last].filter(Boolean).join(' ') || 'Command Staff';
	const category = item.categories?.[0]?.categories_id?.name || 'Announcements';

	return {
		slug: item.slug,
		title: item.title,
		excerpt: item.excerpt || '',
		category,
		publishedAt: item.published_at,
		content: item.content || '',
		author: author.startsWith('CMDR ') ? author : `CMDR ${author}`,
		isFeatured: !!item.featured,
		dataState: 'live'
	};
}

export async function fetchNews(): Promise<NewsPost[]> {
	if (cache && Date.now() - cache.ts < CACHE_TTL) {
		return cache.data;
	}

	try {
		const url = `${DIRECTUS_URL}/items/posts?filter[status][_eq]=published&sort=-published_at&fields=*,author.first_name,author.last_name,author.avatar,image.id,image.filename_disk,categories.categories_id.name,categories.categories_id.slug`;
		const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
		if (!res.ok) throw new Error(`Directus responded with ${res.status}`);
		const json = await res.json();
		const posts: NewsPost[] = (json.data || []).map(mapDirectusPost);
		cache = { ts: Date.now(), data: posts };
		return posts;
	} catch (err) {
		console.error('Directus fetch failed, using fallback:', err);
		return fallbackPosts.map((p) => ({ ...p, dataState: 'placeholder' as const }));
	}
}

export async function fetchNewsBySlug(slug: string): Promise<NewsPost | null> {
	const posts = await fetchNews();
	return posts.find((p) => p.slug === slug) || null;
}
