export interface ExternalResource {
	title: string;
	description: string;
	url: string;
	category: 'General' | 'Trading' | 'Exploration' | 'Ship Building' | 'Lore & News';
}

export const externalResources: ExternalResource[] = [
	{
		title: 'Inara',
		description: 'The definitive database for Elite Dangerous. Track your assets, search market prices, check squadron rankings, and verify engineering blueprints.',
		url: 'https://inara.cz',
		category: 'General'
	},
	{
		title: 'EDDB (Archived Legacy Reference)',
		description: 'Historically the go-to tool for trade loops and system details. Note: Elite Dangerous database has transitioned, but its legacy algorithms are now integrated directly into Inara and EDSM.',
		url: 'https://inara.cz',
		category: 'Trading'
	},
	{
		title: 'EDSM (Elite Dangerous Star Map)',
		description: 'The master log of all explored systems. Upload your logs to contribute to the visual map of the galaxy and track your flight paths.',
		url: 'https://www.edsm.net',
		category: 'Exploration'
	},
	{
		title: 'Coriolis',
		description: 'An advanced ship builder. Plan your engineering rolls, calculate heat profiles, check DPS, and estimate your rebuy costs before spending credits.',
		url: 'https://coriolis.io',
		category: 'Ship Building'
	},
	{
		title: 'EDSLA (Elite Dangerous Shipyard)',
		description: 'Alternative ship builder specializing in accurate heat capacity curves and detailed module management. Extremely helpful for AX pilot builds.',
		url: 'https://edsy.org',
		category: 'Ship Building'
	},
	{
		title: 'Spansh (Neutron Plotter)',
		description: 'Plot rapid long-distance routes using neutron star supercharging. Crucial for fast travel to Colonia or Sag A*.',
		url: 'https://www.spansh.co.uk',
		category: 'Exploration'
	},
	{
		title: 'Canonn Research Group',
		description: 'The home of science and lore in Elite. Explore coordinates for Guardian sites, Thargoid structures, generation ships, and ancient ruins.',
		url: 'https://canonn.science',
		category: 'Lore & News'
	},
	{
		title: 'GalNet Radio / News',
		description: 'Stay updated on political movements, superpower relations, and GalNet stories directly from the Pilots Federation.',
		url: 'https://elitedangerous.com/news/galnet',
		category: 'Lore & News'
	}
];
