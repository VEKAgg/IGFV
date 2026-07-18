import { env as publicEnv } from '$env/dynamic/public';
import { env as privateEnv } from '$env/dynamic/private';

// Server-side Directus reader for the IGFV blog.
//
// The multi-site CMS lives in one Directus instance; each site pulls ONLY the
// posts tagged with its own `sites` entry. The single line that makes this a
// per-site feed (rather than "every post on every site") is the `sites` filter
// in buildFilter() below — that is the whole multi-site contract.
//
// Base URL (not secret — it's the public Directus host): prefer the PUBLIC_
// var, fall back to a private DIRECTUS_URL, then the current VEKA instance.
const DIRECTUS_URL = (
	publicEnv.PUBLIC_DIRECTUS_URL ||
	privateEnv.DIRECTUS_URL ||
	'https://devms.veka.gg'
).replace(/\/$/, '');

// This site's key in the Directus `sites` collection. Change this one constant
// to reuse the module for another site (e.g. 'tttr').
const SITE_KEY = 'igfv';

export interface BlogAuthor {
	name: string;
	avatar: string | null;
}

export interface BlogPost {
	id: string;
	slug: string;
	title: string;
	description: string;
	content: string;
	image: string | null;
	publishedAt: string | null;
	author: BlogAuthor;
}

const POST_FIELDS = [
	'id',
	'slug',
	'title',
	'description',
	'content',
	'image',
	'published_at',
	'date_created',
	'author.first_name',
	'author.last_name',
	'author.avatar'
].join(',');

export function assetUrl(id: string | null | undefined): string | null {
	return id ? `${DIRECTUS_URL}/assets/${id}` : null;
}

interface RawPost {
	id: string;
	slug: string;
	title: string;
	description?: string | null;
	content?: string | null;
	image?: string | null;
	published_at?: string | null;
	date_created?: string | null;
	author?: { first_name?: string | null; last_name?: string | null; avatar?: string | null } | null;
}

function normalize(raw: RawPost): BlogPost {
	const name = [raw.author?.first_name, raw.author?.last_name].filter(Boolean).join(' ') || 'IGFV';
	return {
		id: raw.id,
		slug: raw.slug,
		title: raw.title,
		description: raw.description ?? '',
		content: raw.content ?? '',
		image: assetUrl(raw.image),
		publishedAt: raw.published_at ?? raw.date_created ?? null,
		author: { name, avatar: assetUrl(raw.author?.avatar) }
	};
}

// published + tagged to THIS site. The `sites` clause is the multi-site filter.
function buildFilter(extra?: Record<string, unknown>) {
	const filter: Record<string, unknown> = {
		status: { _eq: 'published' },
		sites: { sites_id: { key: { _eq: SITE_KEY } } }
	};
	return extra ? { ...filter, ...extra } : filter;
}

async function query(params: URLSearchParams): Promise<RawPost[]> {
	const res = await fetch(`${DIRECTUS_URL}/items/posts?${params}`, {
		headers: { Accept: 'application/json' }
	});
	if (!res.ok) throw new Error(`Directus posts request failed: ${res.status}`);
	const body = await res.json();
	return (body.data ?? []) as RawPost[];
}

export async function getPosts(): Promise<BlogPost[]> {
	try {
		const params = new URLSearchParams({
			fields: POST_FIELDS,
			filter: JSON.stringify(buildFilter()),
			sort: '-published_at'
		});
		return (await query(params)).map(normalize);
	} catch (err) {
		console.error('[igfv blog] Failed to load posts:', err);
		return [];
	}
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	try {
		const params = new URLSearchParams({
			fields: POST_FIELDS,
			filter: JSON.stringify(buildFilter({ slug: { _eq: slug } })),
			limit: '1'
		});
		const rows = await query(params);
		return rows.length ? normalize(rows[0]) : null;
	} catch (err) {
		console.error('[igfv blog] Failed to load post:', err);
		return null;
	}
}
