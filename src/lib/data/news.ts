import type { NewsPost } from '$lib/types';

export const newsPosts: NewsPost[] = [
	{
		slug: 'squadron-anniversary-3311',
		title: 'Celebrating 6 Years of Interstellar Goodfellas',
		excerpt: 'Founding member CMDR Don Samen looks back at our humble beginnings in 2019 and outlines our vision for the future of our peaceful squadron.',
		category: 'Announcements',
		publishedAt: '3311-06-15',
		content: `Commanders,

Today marks exactly six years since the Imperial Guard Fleet Vanguard (IGFV) - known to many as the Interstellar Goodfellas - was registered with the Pilot's Federation. What began in 3305 as a small team of three pilots sharing trade trade data has blossomed into a multi-platform community of over 100 active pilots.

Over the past six years, we have seen fleet carriers introduced, traversed thousands of light-years to Colonia, Sag A*, and Beagle Point, fought off Thargoid incursions, and built a welcoming home for new pilots.

"Camaraderie and respect have always been our highest priorities," founder CMDR Don Samen stated in a broadcast earlier today. "We have never been a squadron that demands constant attendance or forces players into playstyles they do not enjoy. That relaxed philosophy is the secret to our longevity."

Thank you to all commanders who have flown with us, donated Tritium, shared mining loops, or simply hung out in our Discord voice channels. Here's to another six years among the stars!

Fly safe,
*IGFV Command Staff*`,
		dataState: 'live'
	},
	{
		slug: 'valhall-expedition-preparations',
		title: 'ISS Valhall Colonia Expedition Details Released',
		excerpt: 'The logistics staff have finalized the route for the upcoming summer expedition to Colonia. Tritium load operations begin this week.',
		category: 'Expeditions',
		publishedAt: '3311-06-08',
		content: `Logistics operations are now underway for the ISS Valhall's upcoming voyage to the Colonia Nebula. 

The carrier is currently taking on fuel at LHS 3447. We require approximately 5,000 tonnes of Tritium to complete the round trip, accounting for safety margins. A buying order has been placed on the commodities market at a premium price, allowing squadron haulers to make a substantial profit loading the depot.

**Expedition Schedule:**
- **June 22 - June 28**: Loading phase (LHS 3447).
- **July 1**: Departure (20:00 UTC).
- **July 3**: Arrival in Colonia.
- **July 3 - July 17**: Exploration sweep and Colonia sights.
- **July 18**: Return trip begins.

If you plan to join the expedition, please ensure your explorer and miner ships are docked in the shipyard by July 1, 19:30 UTC. Ship transfers to the carrier will not be available once we leave the Bubble, so double check your inventory!`,
		dataState: 'live'
	},
	{
		slug: 'ax-combat-training-seminar',
		title: 'Anti-Xeno Combat Training Weekend',
		excerpt: 'New to AX combat? Join our veterans next weekend for a step-by-step introduction to Guardian technology and Interceptor cold orbiting.',
		category: 'Training',
		publishedAt: '3311-05-24',
		content: `With Thargoid activity remains a persistent threat in surrounding sectors, the IGFV security department is hosting an AX Combat Training Seminar.

Our experienced combat pilots will lead classroom discussions in Discord and hands-on exercises in low-intensity threat zones.

**What you will learn:**
1. **Guardian Tech Unlock Guide**: How to efficiently gather blueprints for Guardian Gauss Cannons and Shields.
2. **Cold Orbiting Basics**: How to maintain low heat signature using heatsinks to avoid interceptor main cannons.
3. **Flak Targeting**: Mastering the remote release flak launcher to destroy Thargoid swarms.
4. **Wing Tactics**: How to share targets, coordinate shield cells, and take down interceptors together.

**Requirements:**
- A medium-sized combat ship (Krait MkII, Alliance Chieftain, or Federal Assault Ship are recommended).
- Basic engineering completed (FSD and Thrusters).
- A positive attitude and willingness to rebuy your ship! (Don't worry, we'll keep you alive as much as possible).`,
		dataState: 'live'
	}
];
export const newsPostsWithDataState = newsPosts.map(p => ({
	...p,
	dataState: p.dataState ?? 'live'
}));
