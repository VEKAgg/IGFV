import type { Operation } from '$lib/types';

export const operations: Operation[] = [
	{
		id: 'op-001',
		title: 'Operation Bright Star',
		category: 'Exploration & Cartography',
		priority: 'Low',
		summary: 'A deep space cartographic sweep of the systems adjacent to the Vulcan Nebula. Goal is to locate potential Tritium hotspots.',
		lead: 'CMDR Sarah Thorne',
		eta: '3311-07-10',
		participation: 'Open to all. Bring exploration-fitted ships with Detailed Surface Scanners.',
		progress: 45,
		status: 'active'
	},
	{
		id: 'op-002',
		title: 'LHS 3447 Security Initiative',
		category: 'Combat & System Security',
		priority: 'Urgent',
		summary: 'Supporting the local system authorities to suppress pirate activities in resource extraction sites around LHS 3447 A 3.',
		lead: 'CMDR Twisted VorteK',
		eta: '3311-06-25',
		participation: 'Wing combat. Join Discord Combat channel. Medium/Heavy combat ships recommended.',
		progress: 82,
		status: 'active'
	},
	{
		id: 'op-003',
		title: 'Valhall Tritium Re-stock',
		category: 'Trade & Logistics',
		priority: 'High',
		summary: 'Procuring and loading 5,000 tonnes of Tritium fuel onto the ISS Valhall in preparation for the upcoming expedition.',
		lead: 'CMDR Don Samen',
		eta: '3311-06-28',
		participation: 'Open to all cargo haulers. High payout trade loop active from surrounding stations.',
		progress: 60,
		status: 'active'
	},
	{
		id: 'op-004',
		title: 'Colonia Highway Recon',
		category: 'Expedition',
		priority: 'Medium',
		summary: 'Establishing a safe route and scouting station markets along the Colonia connection points.',
		lead: 'CMDR Don Samen',
		eta: '3311-08-01',
		participation: 'Explorers and long-range haulers welcome. Details in #highway-ops.',
		progress: 0,
		status: 'upcoming'
	},
	{
		id: 'op-005',
		title: 'Operation Aegis Shield',
		category: 'Anti-Xeno Combat',
		priority: 'Urgent',
		summary: 'Deploying AX wings to defend a planetary outpost from Thargoid interceptor incursions.',
		lead: 'CMDR Twisted VorteK',
		eta: 'Completed 3311-05-12',
		participation: 'AX-combat wings. Heavy engineering required.',
		progress: 100,
		status: 'completed'
	},
	{
		id: 'op-006',
		title: 'The Great Cartography Race',
		category: 'Exploration Event',
		priority: 'Medium',
		summary: 'A friendly race to discover and map the most water worlds within 1,000 light-years of the Bubble.',
		lead: 'CMDR Sarah Thorne',
		eta: 'Completed 3311-04-20',
		participation: 'All members.',
		progress: 100,
		status: 'completed'
	}
];
