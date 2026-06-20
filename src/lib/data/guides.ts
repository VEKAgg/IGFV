import type { GuideEntry } from '$lib/types';

export interface ExtendedGuideEntry extends GuideEntry {
	difficulty: 'Beginner' | 'Intermediate' | 'Squadron-Specific';
	isStartHere?: boolean;
}

export const guides: ExtendedGuideEntry[] = [
	{
		slug: 'road-to-riches-exploration',
		title: 'Road to Riches: Fast-track Exploration Guide',
		category: 'Exploration',
		publishedAt: '3311-05-18',
		difficulty: 'Beginner',
		isStartHere: true,
		excerpt: 'A step-by-step route mapping highly valuable Earth-like and Water worlds close to the Bubble for quick exploration credits.',
		content: 'New pilots can quickly earn tens of millions of credits and unlock their first exploration ranks by scanning known high-value planets near the starting systems. This guide explains the "Road to Riches" technique.',
		steps: [
			{
				title: 'Required Outfitting',
				text: 'You need a ship with a decent jump range (25ly+ is fine; a Hauler or Diamondback Explorer are great cheap options), a Fuel Scoop, and a Detailed Surface Scanner.'
			},
			{
				title: 'Plotting the Route',
				text: 'Use the Spansh Road to Riches plotter. Input your current location, jump range, and target destination. It will generate a list of systems containing terraformable high-value worlds.'
			},
			{
				title: 'Scanning Protocol',
				text: 'Upon jumping into each system, fire your Discovery Scanner ("Honk"). Navigate to the specified planets and fire DSS probes until you achieve 100% surface mapping coverage.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'mining-for-beginners',
		title: 'Subsurface and Core Mining Guide',
		category: 'Mining',
		publishedAt: '3311-04-12',
		difficulty: 'Beginner',
		isStartHere: false,
		excerpt: 'Learn the difference between laser, subsurface, and core mining, and how to outfit your ship for maximum credit yields.',
		content: 'Mining is one of the most lucrative careers in the galaxy. This guide will walk you through the essential equipment and techniques needed to find and extract high-value minerals like Void Opals, Low Temperature Diamonds, and Platinum.',
		steps: [
			{
				title: 'Step 1: Outfitting',
				text: 'Ensure your ship is equipped with a Pulse Wave Analyser (for core mining), Prospector Limpet Controller, Collector Limpet Controller, Refinery, and the appropriate hardpoints (Mining Lasers, Sub-Surface Displacement Missiles, or Seismic Charge Launchers).'
			},
			{
				title: 'Step 2: Finding a Hotspot',
				text: 'Navigate to a planetary ring (icy or metallic). Fire a Detailed Surface Scanner probe into the ring to reveal resource hotspots. Head towards the hotspot of your desired mineral.'
			},
			{
				title: 'Step 3: Core Cracking',
				text: 'For core mining, pulse your analyser to find bright yellow asteroids. Fire a prospector to confirm a fissure core. Match the seismic charge yields to the graph to crack open the asteroid without destroying the minerals.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'introduction-to-bgs',
		title: 'Introduction to the Background Simulation (BGS)',
		category: 'Background Simulation',
		publishedAt: '3311-05-02',
		difficulty: 'Intermediate',
		isStartHere: false,
		excerpt: 'Understand how player actions affect minor factions, system control, security status, and how to support IGFV political interests.',
		content: 'The Background Simulation (BGS) is the living engine behind Elite Dangerous. Every mission completed, every tonne of cargo traded, and every bounty turned in influences the balance of power in the system.',
		steps: [
			{
				title: 'Influence & Control',
				text: 'By completing missions for our allied minor faction, we increase its influence rating in the system. When influence reaches parity with the ruling faction, a state of war or election is triggered.'
			},
			{
				title: 'Combat Zones & Elections',
				text: 'During war, winning space battles in Conflict Zones is the only way to claim system control. For elections, trading and transport missions secure victory without bloodshed.'
			},
			{
				title: 'Bounty Hunting & Security',
				text: 'Turning in bounty vouchers boosts the security rating of a system, reducing pirate spawn rates and stabilizing the local economy.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'squadron-workflow-carrier-guide',
		title: 'ISS Valhall Operations & Carrier Logistics Guide',
		category: 'Squadron Logistics',
		publishedAt: '3311-06-01',
		difficulty: 'Squadron-Specific',
		isStartHere: false,
		excerpt: 'A comprehensive onboarding guide explaining carrier parking rules, Tritium loading/unloading logistics, and Inara sync requirements.',
		content: 'To keep our squadron operations running smoothly, we coordinate carrier jumps, trade loading loops, and expedition rosters. This guide explains how to properly park and support our operational base.',
		steps: [
			{
				title: 'Docking & Roster Registration',
				text: 'Always make sure you have applied to join our squadron on Inara and synced your commander logs via EDMC. Dock your exploration and mining ships on ISS Valhall before scheduled trips.'
			},
			{
				title: 'Tritium Cargo Offloading',
				text: 'When Tritium loading operations are active, buy Tritium from local stations and sell it directly to the carrier market, or donate it to the fuel depot in the Carrier Services menu.'
			},
			{
				title: 'Expedition Preparation',
				text: 'During long voyages, docking access is set to Friends and Squadron members only. Set your ships in shipyard hangar bay at least 30 minutes before jump scheduled times.'
			}
		],
		dataState: 'live'
	}
];

export const guidesWithDataState = guides.map(g => ({
	...g,
	dataState: g.dataState ?? 'live'
}));
