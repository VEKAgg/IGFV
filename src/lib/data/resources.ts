export interface ExternalResource {
	title: string;
	description: string;
	squadronUtility: string;
	url: string;
	category: 'Required Tools' | 'Recommended Tools' | 'Squadron Workflow' | 'Exploration' | 'Trade & Mining' | 'Research & Discovery';
	isNewCommanderTool?: boolean;
}

export const externalResources: ExternalResource[] = [
	{
		title: 'Discord',
		description: 'Our primary voice and text communication server for operations, announcements, and daily wing chat.',
		squadronUtility: 'Used for coordinating daily gameplay, winging up, and general voice chat during squadron events.',
		url: 'https://discord.gg/igfv',
		category: 'Required Tools',
		isNewCommanderTool: true
	},
	{
		title: 'Inara Account & Sync',
		description: 'The master database for Elite Dangerous commanders, tracking ships, credits, ranks, and logs.',
		squadronUtility: 'Required to join the official IGFV roster, track rank promotions, and view squadron-wide trade/combat operations.',
		url: 'https://inara.cz',
		category: 'Required Tools',
		isNewCommanderTool: true
	},
	{
		title: 'Elite Dangerous Market Connector (EDMC)',
		description: 'A lightweight tool that automatically downloads your flight logs and uploads them to Inara and EDSM.',
		squadronUtility: 'Essential for automatically updating your Inara profile and syncing market data to help our trade/carrier operations.',
		url: 'https://github.com/EDCD/EDMarketConnector/releases',
		category: 'Recommended Tools',
		isNewCommanderTool: true
	},
	{
		title: 'EDDiscovery',
		description: 'A powerful desktop program to read Elite Dangerous journal logs, map paths, and manage flight statistics.',
		squadronUtility: 'An alternative to EDMC for power users, providing detailed organic log inspection and historical voice feedback.',
		url: 'https://github.com/EDDiscovery/EDDiscovery/releases',
		category: 'Recommended Tools',
		isNewCommanderTool: false
	},
	{
		title: 'EDSM (Elite Dangerous Star Map)',
		description: 'The community-run ledger of all mapped systems and stars in the galaxy.',
		squadronUtility: 'Used to track exploration paths, sync system scans, and see coordinates of fellow explorers.',
		url: 'https://www.edsm.net',
		category: 'Recommended Tools',
		isNewCommanderTool: false
	},
	{
		title: 'Inara Squadron Dashboard',
		description: 'The central organizational command page for Interstellar Goodfellas roster and metrics.',
		squadronUtility: 'Used to coordinate squadron rank achievements, check commander activities, and apply to join.',
		url: 'https://inara.cz/elite/squadron/6548/',
		category: 'Squadron Workflow',
		isNewCommanderTool: false
	},
	{
		title: 'Spansh Neutron Plotter',
		description: 'A routing engine that uses neutron star supercharging to multiply your jump range by 4x.',
		squadronUtility: 'Essential for plotting long-distance expedition paths, especially when traveling to Colonia or Sag A*.',
		url: 'https://www.spansh.co.uk/plotter',
		category: 'Exploration',
		isNewCommanderTool: false
	},
	{
		title: 'Coriolis Ship Builder',
		description: 'A robust web application to design ship builds, estimate engineering costs, and inspect DPS/speed profiles.',
		squadronUtility: 'Used to share proposed ship builds with mentors and calculate rebuy budgets before purchasing parts.',
		url: 'https://coriolis.io',
		category: 'Recommended Tools',
		isNewCommanderTool: true
	},
	{
		title: 'EDSY (Elite Dangerous Shipyard)',
		description: 'An advanced ship outfitter providing accurate thermal curves and complex shield generator models.',
		squadronUtility: 'The preferred builder for anti-xeno pilots to plan exact heat dissipation systems for cold-orbiting.',
		url: 'https://edsy.org',
		category: 'Recommended Tools',
		isNewCommanderTool: false
	},
	{
		title: 'Inara Commodities & Trade Loops',
		description: 'Real-time database showing the best market buy/sell values and active carrier trading loops.',
		squadronUtility: 'Used to find profitable cargo trade loops and coordinate buying Tritium for the ISS Valhall.',
		url: 'https://inara.cz/elite/commodities/',
		category: 'Trade & Mining',
		isNewCommanderTool: false
	},
	{
		title: 'Spansh Trade Route Plotter',
		description: 'Calculates high-profit multi-hop cargo routes based on current market demands.',
		squadronUtility: 'Used by squadron traders to optimize cargo hauling runs and maximize credit gain per jump.',
		url: 'https://www.spansh.co.uk/trade',
		category: 'Trade & Mining',
		isNewCommanderTool: false
	},
	{
		title: 'Canonn Research Group',
		description: 'The definitive science archive database for alien ruins, generation ships, and lore coordinates.',
		squadronUtility: 'Used during exploration events to look up Guardian site structures, coordinate blueprints, and find alien beacons.',
		url: 'https://canonn.science',
		category: 'Research & Discovery',
		isNewCommanderTool: false
	},
	{
		title: 'Elite Dangerous Astro (ED Astro)',
		description: 'Interactive maps showing player exploration sweeps, tritium hotspots, and stellar cartography logs.',
		squadronUtility: 'Used to coordinate exploration routes through uncharted galactic regions and find pristine ring areas.',
		url: 'https://edastro.com',
		category: 'Research & Discovery',
		isNewCommanderTool: false
	}
];
