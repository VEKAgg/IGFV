import type { SquadronStats, TestimonialItem, FAQItem } from '$lib/types';
import { UsersSolid, GlobeAmericasSolid, StarSolid, CrownSolid, ShieldAltSolid, HandsHelpingSolid, CompassSolid } from 'svelte-awesome-icons';

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
		quote: 'The team coordination in our operations is top-notch. No pressure, no obligations, just solid wing combat and friendly work toward shared goals.'
	},
	{
		commanderName: 'CMDR Jin-Woo',
		role: 'Trade & Logistics',
		quote: 'Fleet carrier logistics can be overwhelming, but with IGFV, loading/unloading operations are incredibly organized and highly profitable for everyone involved.'
	}
];

export const whyJoinReasons = [
	{
		title: 'Camaraderie First',
		description: 'We prioritize friendship and mutual support. Whether winging up for combat or exploring deep space, you fly with trusted allies.',
		icon: HandsHelpingSolid
	},
	{
		title: 'Zero Obligations',
		description: 'Real life always comes first. There are no mandatory login times, activity quotas, or contribution demands. Fly when you want, how you want.',
		icon: CompassSolid
	},
	{
		title: 'Elite Guidance',
		description: 'Our Mentor program pairs newer commanders with experienced veterans, accelerating ship engineering, credit loops, and AX training.',
		icon: ShieldAltSolid
	}
];

export const currentFocus = {
	title: 'Valhall Tritium Loading',
	description: 'Procuring and loading Tritium fuel onto the ISS Valhall in LHS 3447 in preparation for the Colonia Summer Expedition.',
	priority: 'High',
	progress: 60,
	target: '5,000 tonnes',
	current: '3,000 tonnes',
	link: '/fleet-carrier',
	linkLabel: 'View Carrier Status'
};

export const codeOfConductSummary = 'We believe a great community is built on simple, clear expectations of mutual respect. We do not tolerate griefing, harassment, or toxic behavior. Our goal is a relaxed, supportive environment for all pilots.';

export const detailedRules = [
	{
		title: 'Respect Fellow Commanders',
		description: 'Treat all players—both inside and outside the squadron—with respect. Harassment, discrimination, hate speech, and toxic behavior are strictly prohibited.'
	},
	{
		title: 'No Griefing or Unprovoked PvP',
		description: 'We are a peaceful PvE-focused squadron. Unprovoked attacks on clean players (griefing) are not permitted. Consent-based PvP (like training or duels) is allowed.'
	},
	{
		title: 'Represent IGFV Honorably',
		description: 'When flying under the IGFV tag or communicating in public channels (Inara, Forums, Discord), remember that your actions reflect on the community as a whole.'
	},
	{
		title: 'Real Life Comes First',
		description: 'Real-life duties, family, and health always take precedence. There is no penalty for inactivity. Just let us know if you will be gone long-term.'
	}
];
