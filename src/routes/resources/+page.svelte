<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		BookSolid,
		CheckSolid,
		StarSolid,
		RocketSolid,
		ExternalLinkAltSolid,
		CompassSolid,
		HammerSolid,
		FireSolid,
		GlobeAmericasSolid,
		ToolboxSolid,
		QuestionCircleSolid
	} from 'svelte-awesome-icons';
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20">
	<div
		class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"
	></div>
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-sm text-primary-light"
			>
				<BookSolid class="h-4 w-4" />
				<span>Resources & Guides</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Resources & <span class="text-primary-main">Guides</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				A curated collection of learning resources, external tools, and helpful guides to enhance
				your Elite Dangerous experience as part of IGFV.
			</p>
		</div>
	</div>
</section>

<!-- Learning Resources -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Learning <span class="text-primary-main">Resources</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<CompassSolid class="h-5 w-5" />
				</div>
				<h3 class="mb-3 text-lg font-bold text-white">Exploration Guide</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Recommended exploration
						ship builds (Asp Explorer, Krait Phantom, Anaconda)
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Full Spectrum System
						Scanner (FSS) and Detailed Surface Scanner (DSS) usage
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Neutron star and
						white dwarf boosting techniques
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Exploration data
						selling and first discovery bonuses
					</li>
				</ul>
			</div>
		</div>
		<div use:inview={{ delay: 150 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<HammerSolid class="h-5 w-5" />
				</div>
				<h3 class="mb-3 text-lg font-bold text-white">BGS Operations Guide</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Understanding the
						Background Simulation and faction influence
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Influence mechanics:
						trade, missions, exploration, and combat
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Conflict zone tactics
						and war/retreat mechanics
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Using Inara and
						EDDB to track faction influence
					</li>
				</ul>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<ToolboxSolid class="h-5 w-5" />
				</div>
				<h3 class="mb-3 text-lg font-bold text-white">Engineering & Crafting</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Engineer unlock
						requirements and locations
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Material farming:
						encoded, manufactured, and raw materials
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Ship optimization:
						balancing speed, jump range, and combat capability
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Recommended loadouts
						for different playstyles
					</li>
				</ul>
			</div>
		</div>
		<div use:inview={{ delay: 250 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<FireSolid class="h-5 w-5" />
				</div>
				<h3 class="mb-3 text-lg font-bold text-white">Trading & Mining</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Profitable trade
						route planning with Inara and EDDB
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Core mining vs.
						laser mining: techniques and equipment
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Best mining locations
						and current market prices
					</li>
					<li class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary-main" /> Fleet carrier trading:
						buy low, sell high strategy
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- External Tools & Databases -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				External Tools & <span class="text-primary-main">Databases</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<a
					href="https://inara.cz"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-dark/50 block h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<GlobeAmericasSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Inara</h3>
					<p class="text-sm text-gray-400">
						The essential Elite Dangerous companion. Track squadron stats, find trade routes, check
						commodity prices, and manage your CMDR profile.
					</p>
					<div class="mt-4 flex items-center gap-1 text-xs text-primary-light">
						<span>Visit Inara</span>
						<ExternalLinkAltSolid class="h-3 w-3" />
					</div>
				</a>
			</div>
			<div use:inview={{ delay: 150 }} class="inview-hidden group">
				<a
					href="https://eddb.io"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-dark/50 block h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<GlobeAmericasSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">EDDB</h3>
					<p class="text-sm text-gray-400">
						The Elite Dangerous Database. Find stations, systems, commodities, and shipyard
						information across the galaxy.
					</p>
					<div class="mt-4 flex items-center gap-1 text-xs text-primary-light">
						<span>Visit EDDB</span>
						<ExternalLinkAltSolid class="h-3 w-3" />
					</div>
				</a>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<a
					href="https://edsy.page"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-dark/50 block h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<FireSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">EDSY</h3>
					<p class="text-sm text-gray-400">
						Advanced ship outfitting and engineering planner. Design, optimize, and share ship
						builds.
					</p>
					<div class="mt-4 flex items-center gap-1 text-xs text-primary-light">
						<span>Visit EDSY</span>
						<ExternalLinkAltSolid class="h-3 w-3" />
					</div>
				</a>
			</div>
			<div use:inview={{ delay: 250 }} class="inview-hidden group">
				<a
					href="https://canonn.science"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-dark/50 block h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<StarSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Canonn Research</h3>
					<p class="text-sm text-gray-400">
						Research network dedicated to uncovering the mysteries of the Elite Dangerous galaxy
						through scientific investigation.
					</p>
					<div class="mt-4 flex items-center gap-1 text-xs text-primary-light">
						<span>Visit Canonn</span>
						<ExternalLinkAltSolid class="h-3 w-3" />
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Need Help? -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Need <span class="text-primary-main">Help</span>?
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<QuestionCircleSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Ask on Discord</h3>
				<p class="text-sm text-gray-400">
					Our community is always ready to help. Post your questions in the <span
						class="font-medium text-primary-light">#help</span
					> channel and you'll get answers quickly.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<BookSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Read the Guides</h3>
				<p class="text-sm text-gray-400">
					Check our community guides section for in-depth tutorials on exploration, BGS,
					engineering, and more.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<RocketSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">One-on-One Mentorship</h3>
				<p class="text-sm text-gray-400">
					New to the game? Request a mentor and get personalized guidance from experienced
					commanders.
				</p>
			</div>
		</div>
	</div>
	<div use:inview={{ delay: 200 }} class="inview-hidden mt-8">
		<div class="rounded-lg border border-amber-500/30 bg-amber-500/5 p-6 backdrop-blur-sm">
			<div class="flex items-start gap-3">
				<StarSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
				<div>
					<h3 class="font-semibold text-white">Pro Tip</h3>
					<p class="mt-1 text-sm text-gray-400">
						Bookmark the <a
							href="https://elite-dangerous.fandom.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary-light hover:underline">Elite Dangerous Wiki</a
						>
						and the
						<a
							href="https://forums.frontier.co.uk/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary-light hover:underline">official forums</a
						>—they're invaluable resources for both new and veteran commanders. Also, don't forget
						to join the <span class="font-medium text-primary-light">#help</span> channel on our Discord
						for real-time assistance.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
