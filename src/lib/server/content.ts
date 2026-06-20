import { newsPosts } from '$lib/data/news';
import { guides } from '$lib/data/guides';
import type { NewsPost, GuideEntry } from '$lib/types';

export async function getAllNews(): Promise<NewsPost[]> {
	// Simulate async CMS retrieval
	return newsPosts;
}

export async function getNewsBySlug(slug: string): Promise<NewsPost | undefined> {
	return newsPosts.find(post => post.slug === slug);
}

export async function getAllGuides(): Promise<GuideEntry[]> {
	return guides;
}

export async function getGuideBySlug(slug: string): Promise<GuideEntry | undefined> {
	return guides.find(guide => guide.slug === slug);
}
