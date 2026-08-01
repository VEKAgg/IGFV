import type { GuideEntry } from '$lib/types';

export interface ExtendedGuideEntry extends GuideEntry {
	difficulty: 'Beginner' | 'Intermediate' | 'Squadron-Specific';
	isStartHere?: boolean;
	author?: string;
	sourceUrl?: string;
	sourceLabel?: string;
}

export const guides: ExtendedGuideEntry[] = [
	{
		slug: 'road-to-riches-exploration',
		title: 'Road to Riches: Fast-track Exploration Guide',
		category: 'Exploration',
		publishedAt: '3311-05-18',
		difficulty: 'Beginner',
		isStartHere: true,
		excerpt:
			'A step-by-step route mapping highly valuable Earth-like and Water worlds close to the Bubble for quick exploration credits.',
		content:
			'New pilots can quickly earn tens of millions of credits and unlock their first exploration ranks by scanning known high-value planets near the starting systems. This guide explains the "Road to Riches" technique.',
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
		excerpt:
			'Learn the difference between laser, subsurface, and core mining, and how to outfit your ship for maximum credit yields.',
		content:
			'Mining is one of the most lucrative careers in the galaxy. This guide will walk you through the essential equipment and techniques needed to find and extract high-value minerals like Void Opals, Low Temperature Diamonds, and Platinum.',
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
		excerpt:
			'Understand how player actions affect minor factions, system control, security status, and how to support IGFV political interests.',
		content:
			'The Background Simulation (BGS) is the living engine behind Elite Dangerous. Every mission completed, every tonne of cargo traded, and every bounty turned in influences the balance of power in the system.',
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
		excerpt:
			'A comprehensive onboarding guide explaining carrier parking rules, Tritium loading/unloading logistics, and Inara sync requirements.',
		content:
			'To keep our squadron operations running smoothly, we coordinate carrier jumps, trade loading loops, and expedition rosters. This guide explains how to properly park and support our operational base.',
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
	},
	{
		slug: 'emergency-fuel-procedures',
		title: 'What to Do When You Have No Fuel',
		category: 'Beginner Tips',
		publishedAt: '3281-08-15',
		difficulty: 'Beginner',
		isStartHere: false,
		author: 'Disodium & RadLock',
		sourceUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=500051873',
		sourceLabel: 'Steam Community Guide',
		excerpt:
			'Running out of fuel is not a death sentence. Learn the emergency procedures and how to request a rescue from The Fuel Rats.',
		content:
			'Even experienced pilots run dry. If your Fuel Scoop cannot keep up with your jump cadence, or you stray into a dead zone without KGBFOAM stars, you will eventually hit an empty tank. Do not panic — help is available.',
		steps: [
			{
				title: 'If You Are on Life Support (Urgent)',
				text: 'Note your current system name and the nearest celestial body. Check your remaining oxygen time in the HUD. Immediately log out to the main menu — this pauses the oxygen timer and gives rescue teams time to reach you.'
			},
			{
				title: 'Request a Rescue via the Website',
				text: 'Navigate to fuelrats.com and select "Get Help" then "I need to be rescued." Fill in your CMDR name, current system, platform (PC/Xbox/PlayStation), and whether you have oxygen remaining. The Fuel Rats will never ask for your password or email — only your CMDR name.'
			},
			{
				title: 'Alternative: IRC Distress Signal',
				text: 'Join #FuelRats on irc.fuelrats.com and post a distress call in this format: RATSIGNAL – CMDR Name/GamerTag, Platform, Current System, Oxygen remaining. A dispatcher will guide you through the process.'
			},
			{
				title: 'Who Are The Fuel Rats?',
				text: 'The Fuel Rats are a leaderless, volunteer-run rescue collective operating across the galaxy. They have rescued hundreds of thousands of stranded commanders and operate entirely on goodwill. No payment is required, though donations help keep their fleet fueled.'
			},
			{
				title: 'Prevention: Scoopability Check',
				text: 'Always check star class before jumping. KGBFOAM stars (O, B, A, F, G, K, M) are scoopable. Plot routes through scoopable stars using the Galaxy Map filter. Carry a Fuel Scoop rated at least to class D for your ship size.'
			},
			{
				title: 'IGFV Squadron Support',
				text: 'Join our Discord for live rescue coordination. Squadron members with Fuel Limpet controllers can perform local rescues faster than external teams. Always fuel up at ISS Valhall before deep-space sorties.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'keyboard-mouse-controls',
		title: 'Efficient Keyboard & Mouse Controls',
		category: 'Gameplay Basics',
		publishedAt: '3281-07-10',
		difficulty: 'Beginner',
		isStartHere: false,
		author: 'Cullen & Regis I>',
		sourceUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=478686362',
		sourceLabel: 'Steam Community Guide',
		excerpt:
			'Remap your flight controls to follow FPS/MMO WASD conventions for smoother, more intuitive piloting on keyboard and mouse.',
		content:
			'Default flight controls in Elite Dangerous feel clunky for keyboard and mouse players. Remapping to WASD conventions — pitch on mouse, roll and strafe on keys — transforms the flight model into something familiar to any FPS veteran.',
		steps: [
			{
				title: 'Where Keybinds Are Stored',
				text: 'Save files live at C:\\Users\\USERNAME\\AppData\\Local\\Frontier Developments\\Elite Dangerous\\Options\\Bindings\\. Custom.3.0.binds is Horizons, Custom.4.0.binds is Odyssey. Back up manually — cloud saves do not sync control settings.'
			},
			{
				title: 'Flight — Roll & Strafe Presets',
				text: 'Rotational Preset: Roll on A/D, Lateral thrust on Q/E. Strafe Preset: Roll on Q/E, Lateral on A/D. Choose one and stick with it — consistency builds muscle memory.'
			},
			{
				title: 'Flight — Thrust & Throttle',
				text: 'Forward/Backward on W/S. Vertical Up/Down on Space and Left Ctrl (or C). Mouse wheel for 10% step throttle increments. Quick throttle keys: 0% on X, 25% on O, 50% on P, 75% on [, 100% on ]. Set autorun to 50% throttle on R.'
			},
			{
				title: 'Flight Philosophy — Why WASD Works',
				text: 'Roll on digital keys (fastest rotation axis for quick reactions). Pitch on analog mouse movement (precise vertical aiming). Yaw on mouse X-axis (natural horizontal tracking). This mirrors FPS mouse-look behavior.'
			},
			{
				title: 'Flight Miscellaneous',
				text: 'Set Flight Assist to Toggle mode — tapping it mid-fight is faster than holding. Bind Frame Shift Drive to a single combined key. Toggle Rotational Correction off for cleaner flight in rotating stations.'
			},
			{
				title: 'Targeting & Weapons',
				text: 'Select Target Ahead on F. Subsystem cycling on Y/U. Target Next System in Route on `. Hardpoints deploy on R. Use Silent Running sparingly — always carry Heat Sink Launchers to avoid cooking your modules.'
			},
			{
				title: 'Miscellaneous Binds',
				text: 'Voice comms Push to Mute as a toggle. Reset HMD on F11. Never bind Jettison All Cargo to anything accessible. Sensor Zoom on Numpad 4/6. Numpad utility keys: 7 for Shield Cell Banks, 8 for Chaff, 9 for ECM, 1-3 for cosmetics. Enable Context Menu ON.'
			},
			{
				title: 'HUD & Mode Switches',
				text: 'Galaxy Map on M. System Map on ,. HUD Mode switch on C. Friends Menu on I. FSS Target Signal on F. These are safe defaults that avoid conflicts with flight controls.'
			},
			{
				title: 'Limitations & Caveats',
				text: 'This scheme assumes a full-size keyboard with Numpad. 60%/65% keyboards may need alternative binds for numpad keys. This scheme predates Odyssey on-foot controls — rebind those separately if you own the expansion.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'guardian-tech-guide',
		title: 'Ultimate Guide to Guardian Tech',
		category: 'Crafting',
		publishedAt: '3312-02-06',
		difficulty: 'Advanced',
		isStartHere: false,
		author: 'TheDiamondKiwi',
		sourceUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2772343691',
		sourceLabel: 'Steam Community Guide',
		excerpt:
			'Unlock ancient Guardian modules, weapons, and ship-launched fighters through multi-day site expeditions in the Synuefe sector.',
		content:
			'Guardian technology is ancient precursor tech vital for Thargoid AX combat. Unlocking it requires visiting remote planetary sites, fighting Sentinel defenders, and collecting blueprint fragments over multiple sessions.',
		steps: [
			{
				title: 'Overview',
				text: 'Guardian tech is split into three categories: Modules (FSD Booster, power plants, reinforcement packages), Ship-Launched Fighters (trident, javelin, lance), and Weapons (Gauss Cannon, Plasma Charger, Shard Cannon). Each requires its own blueprint unlock sequence at specific Synuefe sector sites.'
			},
			{
				title: 'Preparing for the Trip — Recommended Equipment',
				text: 'Bring a ship with 60ly+ jump range, 2–4 SRVs, topside Point Defense Turrets (intercept Sentinel missiles), a Gimballed Beam Laser (activate pylons), and at least 16t cargo space. Park a Fleet Carrier nearby as a refueling stop.'
			},
			{
				title: 'Suggested Ship Builds',
				text: 'Budget: Asp Explorer (~33ly). Balanced: Python (~23ly + AFMU for hull repair). Group/Multicrew: Beluga Liner (~27ly + 2 Ship-Launched Fighters). Use Coriolis to compare builds before committing.'
			},
			{
				title: 'General Tips',
				text: 'Use Solo Mode to avoid gankers. Fleet Carriers serve as refueling stops between sites. Scan planets with DSS on approach. Horizons mode is recommended over Odyssey for site stability — some Odyssey settlements have rendering issues at Guardian ruins.'
			},
			{
				title: 'Step 1 — Unlocking a Guardian Module Blueprint',
				text: 'Travel to Synuefe PX-J c25-8, land on Planet 7 Moon 1 within ~1km of the site for ship Point Defense support. Fight Sentinels, retrieve an Ancient Relic, charge 6 Energy Pylons by shooting them with your beam laser, jettison the Relic at the altar, scan the rising orb with your Data Link Scanner, then scan Obelisks. Relogging resets the site for repeat scans.'
			},
			{
				title: 'Step 2 — Unlocking a Ship-Launched Fighter Blueprint',
				text: 'Go to Synuefe IL-N c23-15, Planet 2A — an orbital Guardian Beacon. Charge 3 pylons to acquire an Ancient Key. Then travel to Synuefe IL-N c23-19, Planet B2 ground site and deposit the Ancient Key at the altar to access the SLF blueprint.'
			},
			{
				title: 'Step 3 — Unlocking a Weapon Blueprint',
				text: 'Visit Synuefe GV-T b50-4, Planet B1. This ground site uses the same Relic-based process as module blueprints but expect heavier Sentinel opposition. Bring extra SRVammo and patience.'
			},
			{
				title: 'Materials & Turn-In',
				text: 'Small/medium ships turn in blueprints at Synuefe EN-H d11-96 (Indigo Dock). Large ships at Soukup City (Latuba). Repeat site runs per blueprint fragment — each tech item requires multiple fragments.'
			},
			{
				title: 'Complete List of Guardian Tech',
				text: 'Weapons: Gauss Cannon (Fixed/Turreted), Plasma Charger (Fixed/Turreted), Shard Cannon (Fixed/Turreted). Modules: Hybrid Power Plant, Hybrid Power Distributor, FSD Booster (+10ly jump), Hull/Module/Shield Reinforcement Packages. SLFs: XG7 Trident (Plasma), XG8 Javelin (Shard), XG9 Lance (Gauss).'
			},
			{
				title: 'Full Unlock Material Summary',
				text: 'Estimated total per full unlock: ~179 Power Cells, 168 Power Conduits, 167 Sentinel Weapon Parts, 284 Tech Components, 145 Sentinel Wreckage Components, plus Obelisk Data and Blueprint Fragments. Community-sourced estimate — check Inara for exact per-item costs.'
			},
			{
				title: 'Known Limitations',
				text: 'This guide predates newer "Modified" weapon variants (Modified Shard Cannon, Modified Plasma Charger) which may have different or steeper requirements. Check Inara or the Elite Dangerous Wiki for the latest unlock paths.'
			},
			{
				title: 'Cross-links & CTAs',
				text: 'Inara for blueprint tracking. EDSM for site coordinates. Coriolis for ship builds. Spansh for route plotting. EDDB for material trading. Coordinate a group Guardian tech run in our Discord.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'places-to-visit',
		title: 'Places to Visit in Elite Dangerous',
		category: 'Exploration',
		publishedAt: '3312-07-06',
		difficulty: 'Intermediate',
		isStartHere: false,
		author: 'DeLacy',
		sourceUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3280766394',
		sourceLabel: 'Steam Community Guide',
		excerpt:
			'A curated list of notable systems, nebulae, and landmarks worth visiting, ranging from easy trips near Sol to extreme long-distance expeditions on the far side of the galaxy.',
		content:
			'Elite Dangerous is full of breathtaking locations — from nearby nebulae reachable in a beginner ship to galactic中心 landmarks that require weeks of preparation. This guide covers the most worthwhile destinations for explorers of all experience levels.',
		steps: [
			{
				title: 'Near-Bubble Highlights',
				text: "Sol (Earth's home system, requires permit). LHS 304 — white dwarf for FSD supercharge. Jackson's Lighthouse — neutron star, approach with caution. Nebulae near Sol: Lagoon Nebula, Spirograph Nebula, NGC 7822, Barnard's Loop region, Crab Nebula/Pulsar, and the Sadr region. These are all reachable within a few hundred light-years and make excellent first exploration trips."
			},
			{
				title: 'Deep Space / Long-Distance Expeditions',
				text: 'Sagittarius A* — the galactic中心 supermassive black hole, ~26,000 ly from Sol. Colonia — a hub station ~22,000 ly out, often called the second bubble. Beagle Point — ~65,000 ly from Sol, an endurance destination marking the farthest reach of player exploration. Formidine Rift — a region of abandoned settlements and deep lore. The Great Annihilator — a binary black hole system. The Abyss — a dangerous region of brown dwarfs and low-fuel systems between Colonia and the galactic rim.'
			},
			{
				title: 'Unique Systems & Stations',
				text: "Mitterand Hollow — a fast-orbiting moon around a planet, offering a thrilling approach. Neutron Nebula — a nebula surrounding a neutron star. Vonarburg Co-operative — a station built inside a rotating cylinder with a unique interior view. Epsilon Indi — a system with interesting binary dynamics. Kagawa Survey — a remote outpost worth visiting. Cubeo — home to Princess Aisling Duval's faction and a popular Powerplay destination."
			},
			{
				title: 'Guardian & Thargoid Sites',
				text: 'Guardian ruins at Synuefe XR-H d11-102 and Synuefe NL-N c23-4 — see our Guardian Tech Guide for full unlock details. Thargoid activity zones in the Pleiades, Coalsack, and Witch Head nebulae. Thargoid surface sites and war ruins scattered across the Pleiades. Guardian Beacons — orbital structures near Guardian ruins. Hyperdictions — Thargoid interdictions inwitch space, a signature encounter for explorers.'
			},
			{
				title: 'Scenic & Lore Landmarks',
				text: 'HR 6164 ("The View") — a system with a stunning vista of multiple nebulae. Skaudai region "Collection of Wonders" — a system of many wonders, though coordinates are disputed and require verification. Crystalline Shard Fields — rare surface features worth scanning. The Zurara megaship wreck — a derelict vessel tied to the Formidine Rift mystery. Spirograph Nebula (BD-12 1172). Betelgeuse — a red supergiant star. NGC 3242 ("Ghost of Jupiter") — a planetary nebula. Orion Nebula Tourist Center. Lave — the iconic starting system from the original Elite.'
			},
			{
				title: 'Verification Callout',
				text: 'The "Collection of Wonders" system coordinates are disputed by community comments and require verification before publishing. Always cross-check coordinates against EDSM or Inara before setting course for remote systems.'
			},
			{
				title: 'Cross-links & CTAs',
				text: 'Inara for system info and bookmarks. EDSM for exploration data and coordinates. Spansh for route plotting to any destination. Share your own favorite exploration screenshots and discoveries in our Discord.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'basics-of-mining',
		title: 'The Basics of Mining',
		category: 'Trading',
		publishedAt: '3296-08-31',
		difficulty: 'Beginner',
		isStartHere: false,
		author: '666Savior',
		sourceUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=755665078',
		sourceLabel: 'Steam Community Guide',
		excerpt:
			'A comprehensive introduction to mining mechanics — from basic surface lasers to deep core detonation — for steady credit income and Trade rank progression.',
		content:
			'Mining is a steady source of credits and Trade rank progression in Elite Dangerous. It can be done in any ship, from a small sidewinder to a large cargo hauler, and offers four distinct methods from simple surface scraping to complex deep core detonation.',
		steps: [
			{
				title: 'Introduction',
				text: 'Mining is one of the most accessible careers in Elite — you can start with a basic mining laser on any ship and work your way up. It advances Trade rank and provides a reliable income stream. The four mining methods range from simple surface scraping to complex deep core detonation, each with increasing yield and complexity.'
			},
			{
				title: 'The Four Mining Types & Required Hardware',
				text: 'Universal requirements: Cargo space + Refinery module. Basic Surface Mining: Mining Laser. Advanced Surface Mining: Abrasion Blaster. Subsurface Mining: Sub-Surface Displacement Missile. Deep Core Mining: Seismic Charge Launcher. Support equipment: Collector Limpet Controller, Prospector Limpet Controller, Pulse Wave Analyzer (PWA — mandatory for non-surface mining).'
			},
			{
				title: 'Choosing Mining Tools & Refineries',
				text: 'Mining lasers come in small and medium sizes. Turreted lasers work for multicrew; fixed lasers are more efficient for solo miners. Refineries have up to 10 bins — more bins means less frequent venting of unwanted ore. Each bin converts 100% of its contents into 1 tonne of cargo. Higher-grade refineries draw more power but process faster.'
			},
			{
				title: 'Ring & Reserve Types',
				text: 'Ring types: Rocky, Metal Rich, Metallic, Icy. Reserve levels: Pristine, Major, Normal, Low, Depleted. Prioritize Pristine rings — they yield the most ore per asteroid. Icy rings are best for low-temp diamonds and void opals. Metallic rings for platinum and gold. Metal Rich for painite and osmium.'
			},
			{
				title: 'Finding Hotspots',
				text: 'Use a Detailed Surface Scanner (DSS) while in supercruise to map planetary rings. Launch probes into the ring to reveal hotspots — concentrations of specific minerals. Hotspots significantly increase the chance of finding high-quality asteroids for your target ore.'
			},
			{
				title: 'Using the Pulse Wave Analyzer',
				text: 'Equip a PWA and enter Analysis mode with hardpoints deployed. Fire the PWA to illuminate asteroids — yellow-to-red glowing deposits indicate valuable surface minerals. Target glowing asteroids and fire a Prospector Limpet to reveal composition and fissure details before mining.'
			},
			{
				title: 'Managing Refinery Bins',
				text: 'When you see "ORE UNALLOCATED" it means your refinery bins are full of unwanted ore. Vent the lowest-value ore to free up bins. Aim for at least 6 refinery bins to avoid constant venting. You can vent ore from the Contacts panel while mining — it does not affect your cargo hold.'
			},
			{
				title: 'Basic Surface Mining',
				text: 'Yield: ~5-20% per asteroid. Equip a Mining Laser and fire at asteroid surfaces. Collect fragments with Collector Limpets or manual scooping. Simple and consistent — great for beginners learning the basics.'
			},
			{
				title: 'Advanced Surface Mining',
				text: 'Yield: ~35-60% per asteroid. Fire a Prospector Limpet to identify surface deposits, then use an Abrasion Blaster to break them off. Surface deposits appear as bright spots on the asteroid surface. More profitable than basic surface mining but requires more equipment.'
			},
			{
				title: 'Subsurface Mining',
				text: 'Yield: ~65-85% per asteroid. Fire a Prospector Limpet to reveal subsurface deposits, then use a Sub-Surface Displacement Missile. The timing UI shows a moving bar — release when the indicator is in the blue zone for maximum yield. High skill ceiling but very profitable.'
			},
			{
				title: 'Deep Core Mining',
				text: 'Yield: 90%+ per asteroid. Fire a Prospector Limpet and use the PWA to identify volatile fissures. Place Seismic Charges on fissures matching their strength to reach the Optimum Yield Range. Retreat to ~700m safe distance and detonate. Collect chunks from the explosion. Most complex method but highest payout.'
			},
			{
				title: 'Limpets Explained',
				text: 'Prospector Limpets: Reveal asteroid composition and fissure details, boost yield when attached, consumed on use — bring extras. Collector Limpets: Two modes — "Target Retrieve" (collects specific fragments) and "Search & Return" (finds any fragments in range). Essential for efficient mining — manual scooping is slow.'
			},
			{
				title: 'Selectivity & Strategy',
				text: 'Balance ore value against collection speed. Deep Core mining is lucrative but time-consuming per asteroid. Surface mining is consistent but lower yield per rock. Target high-value ores (Void Opals, Low-Temp Diamonds, Painite) when possible, but fill your hold with whatever pays well enough.'
			},
			{
				title: 'Community Tips',
				text: 'Surface Abrasion Blaster on Deep Core runs exposes extra deposits for bonus yield (Cmdr 666Savior). Orient your ship rear-facing to shorten Collector limpet travel distance (Cmdr Osmium). Fixed mining lasers are more efficient for solo miners — turreted lasers are for multicrew only (Cmdr Anarch157a).'
			},
			{
				title: 'Limitations',
				text: 'This guide may not reflect recent mining mechanics updates. Mining meta shifts with balance patches — check Inara or community forums for current best practices and hotspot locations.'
			},
			{
				title: 'Cross-links & CTAs',
				text: 'Inara for hotspot locations and commodity prices. EDSM for ring data. Coriolis for ship builds. Spansh for route plotting. EDDB for material trading. Join our Discord to coordinate group mining runs and share hotspot locations.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'how-to-become-elite-commander',
		title: 'How to Become an Elite Commander',
		category: 'Achievements',
		publishedAt: '3311-05-23',
		difficulty: 'Advanced',
		isStartHere: false,
		author: 'Devilish Dave',
		sourceUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3486237159',
		sourceLabel: 'Steam Community Guide',
		excerpt:
			'Rank progression guides for Combat, Trade, Exploration, Mercenary, and Exobiology — from time estimates to ship recommendations and reward unlocks.',
		content:
			'Reaching Elite rank in any discipline is a major milestone in Elite Dangerous. Each rank requires a different approach, ship investment, and time commitment. This guide covers all five ranks with practical strategies, time estimates, and ship recommendations.',
		steps: [
			{
				title: 'Overview',
				text: 'There are five Elite ranks: Combat, Trade, Exploration, Mercenary, and Exobiology. Each rank unlocks specific rewards — most notably the Shinrarta Dezhra permit granting access to Jameson Memorial station with a 10% discount on all ships and modules. Triple Elite (Combat + Trade + Exploration) is a prestigious achievement; Quintuple Elite adds Mercenary and Exobiology.'
			},
			{
				title: 'General Tips for Rank Progression',
				text: 'Focus on a single rank at a time — spreading effort across multiple ranks slows progress. Use role-specific outfitting and ship builds. Stack community resources: IGFV Discord for wing partners, Reddit r/EliteDangerous and r/EliteCGs for tips. Unlock early Engineering access for ship performance. Always keep enough credits for rebuy insurance — dying resets progress.'
			},
			{
				title: 'Combat Rank (Est. 100–150 hrs)',
				text: 'XP comes from ship kills — approximately 3,000 kills from Deadly to Elite. Best methods: Massacre missions at LHS 20 or Ngalinn (FDL, Vulture, or Federal Corvette for efficiency); Compromised Nav Beacons at HIP 20277; Thargoid Scout hunting with AX weapons. Manage SYS/WEP pips carefully — SYS for shield regen, WEP for weapon capacitor.'
			},
			{
				title: 'Trade Rank (Est. 50–70 hrs)',
				text: 'Threshold: approximately 1 Billion credits in profit. Best methods: Robigo-style passenger routes (Python or Anaconda); Trade loops using Inara/EDDB for commodity pricing (Type-9 Heavy or Imperial Cutter for bulk hauling); Community Goal multipliers for bonus credits. Mining Platinum or Painite also advances Trade rank.'
			},
			{
				title: 'Exploration Rank (Est. 20–40 hrs)',
				text: 'Threshold: approximately 280–300 Million credits in scan data. Best methods: "Road to Riches" routes via Spansh (DSS scanner, Asp Explorer or Anaconda); VIP passenger sightseeing missions; Guardian exploration missions. Use fuel scoops and lightweight builds for maximum jump range.'
			},
			{
				title: 'Mercenary Rank (Est. 80–120 hrs, Odyssey)',
				text: 'Requires Odyssey expansion. On-foot combat missions and ground Conflict Zones in active war systems. Settlement massacre/assassination missions. Wing team-ups for faster clears. Use ships with SRV bays for ground deployment.'
			},
			{
				title: 'Exobiology Rank (Est. 50–80 hrs, Odyssey)',
				text: 'Requires Odyssey expansion. Biological scanning on bio-rich planets — Colonia and Pleiades are hotspots. Target multi-species planets for maximum efficiency. SRV terrain navigation for reaching sample sites. Use the Genetic Sampler tool to collect DNA samples.'
			},
			{
				title: 'Rewards for Reaching Elite',
				text: 'Shinrarta Dezhra permit — access to Jameson Memorial station with 10% discount on all ships and modules. 2.5% galaxy-wide stackable discount on ship/module purchases. Elite-tier mission access with higher payouts. Triple/Quintuple Elite prestige titles displayed on your commander profile.'
			},
			{
				title: 'Recommended Ships — Combat',
				text: 'Viper Mk III — cheap, fast, great for learning combat basics. Vulture — maneuverable hull tank, ideal for RES farming. Fer-de-Lance — top-tier PvP/pve hybrid, expensive but worth it. Federal Corvette — endgame combat hauler for prolonged engagements.'
			},
			{
				title: 'Recommended Ships — Trade & Exploration',
				text: 'Trade: Hauler (budget starter), Type-8 (mid-range hauler), Type-9 Heavy (bulk hauling), Imperial Cutter (endgame trade king). Exploration: Diamondback Explorer (budget), Asp Explorer (mid-range favorite), Anaconda (long-range), Mandalay (Odyssey exobiology).'
			},
			{
				title: 'Recommended Ships — Mercenary & Exobiology',
				text: 'Mercenary: Cobra Mk V — SRV-bay equipped, versatile ground operations vehicle. Exobiology: Diamondback Explorer — cheap and effective for bio-scan missions. Asp Explorer — balanced for range and cargo. Mandalay — Odyssey-optimized with biological scanner support.'
			},
			{
				title: 'What to Avoid',
				text: 'Single-activity burnout — take breaks between grinding sessions. Skipping tutorials — they teach mechanics you will need. Playing Open Mode unprepared — other players can destroy your ship and reset progress. Ignoring third-party tools — Inara, EDSM, Spansh, and Coriolis are essential for efficient play.'
			},
			{
				title: 'Subject to Change',
				text: 'Time estimates, mission mechanics, and profitable routes evolve with game updates. Frontier Developments regularly rebalance ranks and rewards — always check community sources for current information.'
			},
			{
				title: 'Cross-links & CTAs',
				text: 'Inara for rank tracking and blueprint data. EDSM for exploration data. Coriolis for ship builds. Spansh for route plotting. EDDB for commodity trading. Discuss rank-grinding strategies and mission stacking with the IGFV community in our Discord.'
			}
		],
		dataState: 'live'
	},
	{
		slug: 'galactic-superpowers-and-major-factions',
		title: 'Galactic Superpowers and Major Factions',
		category: 'Story or Lore',
		publishedAt: '3311-05-30',
		difficulty: 'Beginner',
		isStartHere: false,
		author: 'Devilish Dave',
		sourceUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3489843602',
		sourceLabel: 'Steam Community Guide',
		excerpt:
			"A neutral overview of the galaxy's Superpowers, Powerplay leaders, and major factions — helping commanders choose their political alignment.",
		content:
			'The galaxy is dominated by three Superpowers — the Federation, the Empire, and the Alliance — each with distinct ideologies, capital systems, and rank-locked ships. Twelve Powerplay leaders offer unique benefits, and understanding the Background Simulation helps commanders navigate faction politics.',
		steps: [
			{
				title: 'Introduction',
				text: 'Elite Dangerous features three major Superpowers and numerous independent factions, each with distinct ideologies, military traditions, and Powerplay mechanics. This guide helps commanders understand the political landscape and choose which Power to support.'
			},
			{
				title: 'What Defines a Superpower?',
				text: 'A Superpower is characterized by centralized governance, a distinct ideology, a capital system, and military rank-locked ships. The Federation, Empire, and Alliance each control territory, maintain standing fleets, and offer exclusive ships to pilots who earn their military ranks. Powerplay integration allows players to influence which faction controls specific systems.'
			},
			{
				title: 'The Federation',
				text: 'Background: Corporate democracy with Sol as its capital. Federal Navy rank unlocks the Federal Corvette and Federal Gunship. Leaders: Felicia Winters (President — progressive social policies) and Jerome Archer (Security — hardline law enforcement). Federation ideology emphasizes individual liberty within a corporate framework.'
			},
			{
				title: 'The Empire',
				text: 'Background: Hereditary monarchy with Achenar as its capital. Imperial Navy rank unlocks the Imperial Cutter and Imperial Clipper. Leaders: Arissa Lavigny-Duval (Emperor — authoritarian enforcement), Aisling Duval (Reformist Princess — modernization advocate), Denton Patreus (Expansionist Senator — military expansion), Zemina Torval (Mining/Slavery Senator — industrial interests). Empire ideology emphasizes tradition and hierarchy.'
			},
			{
				title: 'The Alliance',
				text: 'Background: Decentralized coalition with Alioth as its capital. No military rank-locked ships — the Alliance Chieftain and Type-10 Defender are available to all. Leaders: Edmund Mahon (Prime Minister — diplomatic pragmatist) and Nakato Kaine (Populist critic — grassroots reform). Alliance ideology emphasizes cooperation and independence.'
			},
			{
				title: 'Independent Systems',
				text: 'Autonomy-focused factions outside the three Superpowers. Leaders: Archon Delaine (Kumo Crew — pirate lord, lawless territory), Li Yong-Rui (Sirius Corp — corporate CEO, discount markets), Pranav Antal (Utopia — idealist commune, social experiment), Yuri Grom (EG Union — military admiral, disciplined autonomy). Independent systems offer unique gameplay and political flexibility.'
			},
			{
				title: 'Powerplay & the Background Simulation',
				text: 'Powerplay merit earning: combat (destroying enemy ships), trade (delivering specific commodities), exploration (selling exploration data in Power-claimed systems). Rank rewards: each Power grants access to unique module unlocks at higher ranks — though all Powers eventually offer the same module pool over time. BGS minor faction influence: completing missions, trading, and combat shifts system control between factions. Cross-reference companion guide "Allegiances and How to Flip Them" for detailed BGS mechanics.'
			},
			{
				title: 'Closing Summary',
				text: 'Powerplay offers variety in playstyle — conquest through combat, diplomacy through trade, or piracy through independent systems. Choose a Power that matches your playstyle and commit to supporting it through weekly merit earning and system defense.'
			},
			{
				title: 'Cross-links & CTAs',
				text: 'Inara for Power standings and merit tracking. EDSM for system data and faction influence. Link to companion BGS guide for detailed flip mechanics. Discuss which Power the IGFV community should rally behind in our Discord.'
			}
		],
		dataState: 'live'
	}
];

export const guidesWithDataState = guides.map((g) => ({
	...g,
	dataState: g.dataState ?? 'live'
}));
