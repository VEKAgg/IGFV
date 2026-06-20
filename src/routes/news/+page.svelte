<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		NewspaperSolid,
		StarSolid,
		UserSolid,
		CalendarAltSolid,
		DiscordBrands,
		FilterSolid,
		ExclamationTriangleSolid,
		ChevronRightSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';

	// Structured News Posts matching specified categories:
	// 'Milestone' | 'Logistics' | 'Community' | 'Fleet Carrier' | 'Operations' | 'Recruitment'
	const newsPosts = [
		{
			id: 'news-001',
			slug: 'six-years-anniversary',
			category: 'Milestone',
			title: 'Celebrating 6 Years of Interstellar Goodfellas',
			publishedAt: '3311-06-15',
			author: 'CMDR Don Samen',
			excerpt: 'Founding member CMDR Don Samen looks back at our humble beginnings in 2019 and outlines our vision for the future of our peaceful squadron.',
			content: `Commanders,

Today marks exactly six years since the Imperial Guard Fleet Vanguard (IGFV) - known to many as the Interstellar Goodfellas - was registered with the Pilot's Federation. What began in 3305 as a small team of three pilots sharing trade trade data has blossomed into a multi-platform community of over 100 active pilots.

Over the past six years, we have seen fleet carriers introduced, traversed thousands of light-years to Colonia, Sag A*, and Beagle Point, fought off Thargoid incursions, and built a welcoming home for new pilots.

"Camaraderie and respect have always been our highest priorities," founder CMDR Don Samen stated in a broadcast earlier today. "We have never been a squadron that demands constant attendance or forces players into playstyles they do not enjoy. That relaxed philosophy is the secret to our longevity."

Thank you to all commanders who have flown with us, donated Tritium, shared mining loops, or simply hung out in our Discord voice channels. Here's to another six years among the stars!

Fly safe,
*IGFV Command Staff*`,
			isFeatured: true
		},
		{
			id: 'news-002',
			slug: 'valhall-expedition-preparations',
			category: 'Fleet Carrier',
			title: 'ISS Valhall Colonia Expedition Details Released',
			publishedAt: '3311-06-08',
			author: 'CMDR Don Samen',
			excerpt: 'The logistics staff have finalized the route for the upcoming summer expedition to Colonia. Tritium load operations begin this week.',
			content: `Logistics operations are now underway for the ISS Valhall's upcoming voyage to the Colonia Nebula. 

The carrier is currently taking on fuel at LHS 3447. We require approximately 5,000 tonnes of Tritium to complete the round trip, accounting for safety margins. A buying order has been placed on the commodities market at a premium price, allowing squadron haulers to make a substantial profit loading the depot.

**Expedition Schedule:**
- **June 22 - June 28**: Loading phase (LHS 3447).
- **July 1**: Departure (20:00 UTC).
- **July 3**: Arrival in Colonia.
- **July 3 - July 17**: Exploration sweep and Colonia sights.
- **July 18**: Return trip begins.

If you plan to join the expedition, please ensure your explorer and miner ships are docked in the shipyard by July 1, 19:30 UTC. Ship transfers to the carrier will not be available once we leave the Bubble, so double check your inventory!`,
			isFeatured: false
		},
		{
			id: 'news-003',
			slug: 'ax-combat-training-seminar',
			category: 'Operations',
			title: 'Anti-Xeno Combat Training Weekend',
			publishedAt: '3311-05-24',
			author: 'CMDR Twisted VorteK',
			excerpt: 'New to AX combat? Join our veterans next weekend for a step-by-step introduction to Guardian technology and Interceptor cold orbiting.',
			content: `With Thargoid activity remaining a persistent threat in surrounding sectors, the IGFV security department is hosting an AX Combat Training Seminar.

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
			isFeatured: false
		},
		{
			id: 'news-004',
			slug: 'squadron-milestone-members',
			category: 'Milestone',
			title: 'Squadron Reaches 120 Registered Pilots',
			publishedAt: '3311-05-10',
			author: 'CMDR Marcus Vance',
			excerpt: 'We have hit a new record of 120 verified command members logged on Inara registries.',
			content: 'A huge welcome to all the new commanders who have joined our ranks over the past few weeks! We have reached 120 verified command profiles on Inara. This milestone represents a thriving community across all supported platforms. Thank you all for flying under the IGFV colors.',
			isFeatured: false
		},
		{
			id: 'news-005',
			slug: 'tritium-logistics-update',
			category: 'Logistics',
			title: 'Carrier Fuel Pricing Adjustment',
			publishedAt: '3311-04-18',
			author: 'CMDR Jin-Woo',
			excerpt: 'Logistics staff adjusting Tritium buy pricing to match updated market loops.',
			content: 'To coordinate Tritium load cycles and keep our haulers profitable, the buying price in the ISS Valhall commodities hangar has been raised to 105% of the average Bubble index. Load operations remain open to all members.',
			isFeatured: false
		},
		{
			id: 'news-006',
			slug: 'orientation-onboarding-program',
			category: 'Recruitment',
			title: 'Cadet Orientation and Mentor Guide',
			publishedAt: '3311-04-02',
			author: 'CMDR Twisted VorteK',
			excerpt: 'Launching our updated orientation program to pair incoming cadets with mentors.',
			content: 'Incoming commanders are now automatically paired with a Flight Mentor. Mentors will assist with ship outfitting, credit trading loops, and general exploration coordinates. Check the Discord #mentor channels to meet your wing partner.',
			isFeatured: false
		}
	];

	// Filter and Active News State
	let selectedCategory = $state<string>('All');
	let activePost = $state<typeof newsPosts[0] | null>(null);

	// Computed lists
	const categories = ['All', 'Milestone', 'Logistics', 'Community', 'Fleet Carrier', 'Operations', 'Recruitment'];
	const featuredPost = newsPosts.find(p => p.isFeatured) || newsPosts[0];

	// Filtered posts excluding the active featured post (unless Tab is set to a specific category)
	let filteredNews = $derived(
		newsPosts.filter(p => {
			const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
			return matchesCategory;
		})
	);

	// Grouping historical news posts by Year/Month
	let archivedGroups = $derived(
		newsPosts.reduce((acc, p) => {
			const yearMonth = p.publishedAt.slice(0, 7); // e.g. 3311-06
			if (!acc[yearMonth]) acc[yearMonth] = [];
			acc[yearMonth].push(p);
			return acc;
		}, {} as Record<string, typeof newsPosts>)
	);

	function showPostDetails(post: typeof newsPosts[0]) {
		activePost = post;
		// Scroll to view
		document.getElementById('bulletin-details')?.scrollIntoView({ behavior: 'smooth' });
	}

	function closePostDetails() {
		activePost = null;
	}
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<NewspaperSolid class="h-4 w-4" />
				<span>Command Announcements</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Bulletins</span>
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				Official operational updates, logistical logs, and milestone announcements straight from the command staff of Interstellar Goodfellas.
			</p>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	
	<!-- Active details overlay panel (Full Bulletin view) -->
	{#if activePost}
		<div id="bulletin-details" class="mb-12 rounded-xl border-2 border-primary-main/40 bg-[#000d22] p-6 sm:p-8 shadow-xl">
			<div class="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
				<div class="flex items-center gap-3">
					<span class="inline-flex rounded-full bg-primary-main/20 px-3 py-1 text-xs font-semibold text-primary-light border border-primary-main/30">
						{activePost.category}
					</span>
					<span class="text-xs text-gray-400 font-mono">{activePost.publishedAt}</span>
				</div>
				<button 
					onclick={closePostDetails}
					class="text-xs font-bold text-gray-400 hover:text-white uppercase transition-colors"
				>
					&larr; Back to Board
				</button>
			</div>

			<h2 class="text-2xl font-bold text-white uppercase tracking-wide mb-4 sm:text-3xl">{activePost.title}</h2>
			<div class="flex items-center gap-2 text-xs text-primary-light mb-8">
				<UserSolid class="size-3.5" />
				<span>Logged by {activePost.author}</span>
			</div>

			<div class="text-xs sm:text-sm leading-relaxed text-gray-300 space-y-6 max-w-none whitespace-pre-line font-sans border-t border-white/5 pt-6">
				{activePost.content}
			</div>

			<div class="mt-8 pt-6 border-t border-white/5">
				<button 
					onclick={closePostDetails}
					class="inline-flex items-center justify-center rounded-lg bg-primary-main px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-primary-light"
				>
					Return to news board
				</button>
			</div>
		</div>
	{/if}

	<!-- Layout Grid -->
	<div class="grid gap-12 lg:grid-cols-4">
		
		<!-- Left: Filters & Archive (Logistics sidebar) -->
		<div class="lg:col-span-1 space-y-8">
			
			<!-- Category Filter Block -->
			<div class="rounded-xl border border-white/10 bg-[#000d22]/95 p-5 shadow-sm">
				<h3 class="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
					<FilterSolid class="size-3.5 text-primary-light" />
					<span>Category Filter</span>
				</h3>
				<div class="flex flex-col gap-1.5">
					{#each categories as cat}
						<button
							onclick={() => { selectedCategory = cat; closePostDetails(); }}
							class="text-left rounded px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all {selectedCategory === cat 
								? 'bg-primary-main text-white' 
								: 'text-gray-400 hover:bg-white/5 hover:text-white'}"
						>
							{cat}
						</button>
					{/each}
				</div>
			</div>

			<!-- Archive Groups Block -->
			<div class="rounded-xl border border-white/10 bg-[#000d22]/95 p-5 shadow-sm">
				<h3 class="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
					<CalendarAltSolid class="size-3.5 text-primary-light" />
					<span>Archive Logs</span>
				</h3>
				<div class="space-y-4">
					{#each Object.entries(archivedGroups) as [month, posts]}
						<div>
							<h4 class="text-[10px] font-bold text-gray-500 uppercase font-mono tracking-wider mb-2">{month}</h4>
							<div class="space-y-1.5">
								{#each posts as post}
									<button 
										onclick={() => showPostDetails(post)}
										class="w-full text-left text-xs text-gray-400 hover:text-primary-light truncate block"
									>
										&bull; {post.title}
									</button>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Right: Featured and News List -->
		<div class="lg:col-span-3 space-y-12">
			
			<!-- Featured Bulletin (Render only if no category filter active) -->
			{#if selectedCategory === 'All' && !activePost}
				<div use:inview class="inview-hidden rounded-xl border border-primary-main/20 bg-gradient-to-r from-primary-main/10 via-[#000d22]/95 to-[#000814]/95 p-8 shadow-glow">
					<div class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-primary-main/15 px-3 py-1 text-[10px] font-bold text-primary-light uppercase tracking-widest">
						Featured Bulletin
					</div>
					<h2 class="text-2xl font-bold text-white uppercase tracking-wide sm:text-3xl mb-3">{featuredPost.title}</h2>
					<p class="text-xs text-gray-400 leading-relaxed mb-6 font-sans">{featuredPost.excerpt}</p>
					
					<div class="flex items-center justify-between border-t border-white/5 pt-4 text-xs">
						<span class="text-gray-500 font-mono">Logged: {featuredPost.publishedAt}</span>
						<button 
							onclick={() => showPostDetails(featuredPost)}
							class="text-xs font-bold text-primary-light hover:text-white uppercase transition-colors flex items-center gap-1"
						>
							<span>Access Full File</span>
							<ChevronRightSolid class="size-3" />
						</button>
					</div>
				</div>
			{/if}

			<!-- Bulletins list (Solid tinted panels) -->
			<div>
				<h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 font-mono">Board Entries</h3>
				
				{#if filteredNews.length > 0}
					<div class="space-y-6">
						{#each filteredNews as post}
							<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-sm flex flex-col justify-between hover:border-primary-main/20 transition-colors">
								<div>
									<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
										<span class="inline-flex rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
											{post.category}
										</span>
										<span class="text-xs text-gray-500 font-mono">{post.publishedAt}</span>
									</div>
									<h4 class="text-lg font-bold text-white uppercase tracking-wide mb-2">{post.title}</h4>
									<p class="text-xs text-gray-400 leading-relaxed font-sans">{post.excerpt}</p>
								</div>

								<div class="mt-5 border-t border-white/5 pt-4 flex items-center justify-between text-xs">
									<span class="text-gray-500 font-medium flex items-center gap-1">
										<UserSolid class="size-3 text-primary-light" />
										CMDR {post.author.replace('CMDR ', '')}
									</span>
									<button 
										onclick={() => showPostDetails(post)}
										class="text-xs font-bold text-primary-light hover:text-white uppercase transition-colors flex items-center gap-1"
									>
										<span>View Details</span>
										<ChevronRightSolid class="size-3" />
									</button>
								</div>
							</div>
						{/each}
					</div>
				{:else}
					<div class="text-center rounded-xl border border-white/10 bg-[#000d22]/90 p-12">
						<ExclamationTriangleSolid class="size-8 text-gray-500 mx-auto mb-3" />
						<h3 class="text-lg font-bold text-white uppercase mb-1">No Bulletins Found</h3>
						<p class="text-xs text-gray-400">Try adjusting your category filtering options.</p>
					</div>
				{/if}
			</div>

		</div>
	</div>

</div>
