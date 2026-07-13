import { fetchNewsBySlug } from '$lib/server/news';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await fetchNewsBySlug(params.slug);
	if (!post) {
		error(404, 'Bulletin not found');
	}
	return { post };
};
