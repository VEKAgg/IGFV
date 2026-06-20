import type { EventItem } from '$lib/types';

export const events: EventItem[] = [
	{
		id: 'evt-001',
		title: 'Weekly Wing Trade Loop',
		eventType: 'Trade & Mining',
		date: 'Every Thursday, 19:00 UTC',
		description: 'A relaxed wing trade night. We pool our trade resources, share wing missions, and coordinate carrier hauling routes to maximize member profits.',
		difficulty: 'Beginner Friendly',
		duration: '2 hours',
		participationRoute: 'Join "Trade Operations" voice channel on Discord.',
		status: 'weekly'
	},
	{
		id: 'evt-002',
		title: 'AX Combat Practice',
		eventType: 'Combat / Anti-Xeno',
		date: 'Every Saturday, 20:00 UTC',
		description: 'Weekly practice fighting Thargoid interceptors. Great opportunity to test your AX builds and learn cold orbiting in a wing.',
		difficulty: 'Intermediate',
		duration: '3 hours',
		participationRoute: 'AX combat builds required. Meet at Discord Combat voice channel.',
		status: 'weekly'
	},
	{
		id: 'evt-003',
		title: 'LHS 3447 System Authority Assistance',
		eventType: 'BGS Combat',
		date: '2026-06-25, 18:00 UTC',
		description: 'A focused wing hunt in High Resource Extraction Sites to clear pirate activity and boost our allied minor faction influence.',
		difficulty: 'Beginner Friendly',
		duration: '2 hours',
		participationRoute: 'Join Combat wing on Discord.',
		status: 'upcoming'
	},
	{
		id: 'evt-004',
		title: 'ISS Valhall Colonia Voyage',
		eventType: 'Expedition',
		date: '2026-07-01, 20:00 UTC',
		description: 'Departure of our fleet carrier ISS Valhall for its annual Colonia deep space voyage. Ensure you are docked by 19:30 UTC.',
		difficulty: 'Beginner Friendly',
		duration: '2 weeks',
		participationRoute: 'Dock your exploration and mining ships on the carrier.',
		status: 'upcoming'
	},
	{
		id: 'evt-005',
		title: 'The Sagittarius A* Expedition',
		eventType: 'Exploration Expedition',
		date: 'Completed 2026-04-10',
		description: 'A massive squadron trip to the supermassive black hole at the center of the galaxy. 15 pilots successfully completed the journey.',
		difficulty: 'Advanced',
		duration: '3 weeks',
		participationRoute: 'View screenshots in #gallery.',
		status: 'past'
	}
];
