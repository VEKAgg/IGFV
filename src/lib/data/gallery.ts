import type { GalleryItem } from '$lib/types';

export const galleryItems: GalleryItem[] = [
	{
		id: 'gal-001',
		title: 'ISS Valhall in Orbit',
		caption: 'The majestic flagship ISS Valhall parked in orbit around a ringed gas giant in LHS 3447.',
		category: 'carrier',
		imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800',
		credit: 'CMDR Don Samen'
	},
	{
		id: 'gal-002',
		title: 'Sagittarius A* Arrival',
		caption: 'A fleet of IGFV exploration ships posing in front of the supermassive black hole at the center of the Milky Way.',
		category: 'exploration',
		imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=800',
		credit: 'CMDR Sarah Thorne'
	},
	{
		id: 'gal-003',
		title: 'Wing Combat over LHS 3447',
		caption: 'Commanders engaging pirate targets in a high-intensity resource extraction site.',
		category: 'operations',
		imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800',
		credit: 'CMDR Twisted VorteK'
	},
	{
		id: 'gal-004',
		title: 'Sunset over a Metal-Rich World',
		caption: 'An SRV exploring the surface of an iron-rich planet during an expedition landing.',
		category: 'exploration',
		imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800',
		credit: 'CMDR Sarah Thorne'
	},
	{
		id: 'gal-005',
		title: 'Tritium Loading Operations',
		caption: 'A fleet of Type-9 Heavy cargo haulers offloading fuel at the Valhall landing pads.',
		category: 'community',
		imageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800',
		credit: 'CMDR Jin-Woo'
	},
	{
		id: 'gal-006',
		title: 'Squadron Meetup at Sol',
		caption: 'Celebrating our anniversary by lining up our ships in front of Earth.',
		category: 'milestones',
		imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800',
		credit: 'CMDR Marcus Vance'
	}
];
export const galleryCategories = [
	{ id: 'all', label: 'All Media' },
	{ id: 'carrier', label: 'Fleet Carrier' },
	{ id: 'exploration', label: 'Exploration' },
	{ id: 'operations', label: 'Operations' },
	{ id: 'community', label: 'Community' },
	{ id: 'milestones', label: 'Milestones' }
];
