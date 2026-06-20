import type { SquadronStats, TestimonialItem } from '$lib/types';
import { UsersSolid, GlobeAmericasSolid, StarSolid, CrownSolid } from 'svelte-awesome-icons';

export const squadronStats: SquadronStats = {
	membersCount: '124',
	systemsExplored: '4,892',
	totalCredits: '5.8B',
	factionStatus: 'Growing'
};

export const squadronStatsWithIcons = [
	{ value: squadronStats.membersCount, label: 'Active Members', icon: UsersSolid },
	{ value: squadronStats.systemsExplored, label: 'Systems Explored', icon: GlobeAmericasSolid },
	{ value: squadronStats.totalCredits, label: 'Total Credits Earned', icon: StarSolid },
	{ value: squadronStats.factionStatus, label: 'Faction Status', icon: CrownSolid }
];

export const onboardingSteps = [
	{
		num: '01',
		title: 'Join Discord',
		description: 'Start your journey by joining our Discord server. Introduce yourself in the welcome channel and meet the crew.'
	},
	{
		num: '02',
		title: 'Meet Your Mentor',
		description: 'Every new member is paired with an experienced commander who will help you find your footing, understand squadron operations, and wing up.'
	},
	{
		num: '03',
		title: 'Choose Your Path',
		description: 'Whether you prefer trading, mining, exploring, combat, or influencing the Background Simulation (BGS) - pick the activities you enjoy.'
	},
	{
		num: '04',
		title: 'Start Flying',
		description: 'Participate in wing operations, squadron expeditions, and community events. Chart the galaxy together. You will never fly alone.'
	}
];

export const testimonials: TestimonialItem[] = [
	{
		commanderName: 'CMDR Sarah Thorne',
		role: 'Deep Space Explorer',
		quote: 'I joined IGFV as a new pilot who barely knew how to dock. Two years later, I have traveled to Beagle Point and back, supported by an amazing community.'
	},
	{
		commanderName: 'CMDR Marcus Vance',
		role: 'Combat Specialist',
		quote: 'The team coordination in our operations is top-notch. No pressure, no obligations, just solid wing combat and friendly banter.'
	},
	{
		commanderName: 'CMDR Jin-Woo',
		role: 'Trade & Logistics',
		quote: 'Fleet carrier logistics can be overwhelming, but with IGFV, loading/unloading operations are incredibly organized and highly profitable for everyone involved.'
	}
];
