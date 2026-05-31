<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		BookSolid,
		StarSolid,
		CheckSolid,
		UsersSolid,
		RocketSolid,
		FireSolid,
		HammerSolid,
		ToolboxSolid,
		ExternalLinkAltSolid,
		GlobeAmericasSolid,
		CompassSolid
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
				<span>Guides & Operations</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Guides & <span class="text-primary-main">Operations</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				Comprehensive guides, active operations, and essential resources to help you navigate the
				galaxy and contribute to IGFV's ongoing missions.
			</p>
		</div>
	</div>
</section>

<!-- Active Operations -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Active <span class="text-primary-main">Operations</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 flex h-full flex-col rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-3 inline-block self-start rounded-full bg-green-500/10 px-3 py-0.5 text-xs font-medium text-green-400"
				>
					Active
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Deep Space Expedition</h3>
				<div class="mb-3">
					<div class="flex items-center justify-between text-xs text-gray-400">
						<span>Progress</span>
						<span>65%</span>
					</div>
					<div class="mt-1 h-2 w-full overflow-hidden rounded-full bg-dark-slate1">
						<div
							class="h-full w-[65%] rounded-full bg-primary-main transition-all duration-700"
						></div>
					</div>
				</div>
				<div class="flex-1 space-y-1 text-sm text-gray-400">
					<p class="flex items-center gap-2">
						<CheckSolid class="h-3.5 w-3.5 text-green-400" /> Chart course to Colonia
					</p>
					<p class="flex items-center gap-2">
						<CheckSolid class="h-3.5 w-3.5 text-green-400" /> 6/8 waypoints reached
					</p>
					<p class="flex items-center gap-2">
						<span class="inline-block h-3.5 w-3.5 rounded-full border-2 border-gray-500"></span> Final
						approach to Colonia
					</p>
				</div>
				<div class="mt-4 border-t border-primary-main/10 pt-3 text-xs text-gray-500">
					<p>Commander: Don Samen</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 flex h-full flex-col rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-3 inline-block self-start rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-400"
				>
					Active
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">BGS Influence Campaign</h3>
				<div class="mb-3">
					<div class="flex items-center justify-between text-xs text-gray-400">
						<span>Progress</span>
						<span>40%</span>
					</div>
					<div class="mt-1 h-2 w-full overflow-hidden rounded-full bg-dark-slate1">
						<div class="h-full w-[40%] rounded-full bg-blue-500 transition-all duration-700"></div>
					</div>
				</div>
				<div class="flex-1 space-y-1 text-sm text-gray-400">
					<p class="flex items-center gap-2">
						<CheckSolid class="h-3.5 w-3.5 text-green-400" /> Initial influence established
					</p>
					<p class="flex items-center gap-2">
						<span class="inline-block h-3.5 w-3.5 rounded-full border-2 border-gray-500"></span> Run trade
						missions
					</p>
					<p class="flex items-center gap-2">
						<span class="inline-block h-3.5 w-3.5 rounded-full border-2 border-gray-500"></span> Complete
						exploration data
					</p>
				</div>
				<div class="mt-4 border-t border-primary-main/10 pt-3 text-xs text-gray-500">
					<p>Commander: Twisted VorteK</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 flex h-full flex-col rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-3 inline-block self-start rounded-full bg-amber-500/10 px-3 py-0.5 text-xs font-medium text-amber-400"
				>
					Planning
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Mining Expedition</h3>
				<div class="mb-3">
					<div class="flex items-center justify-between text-xs text-gray-400">
						<span>Progress</span>
						<span>10%</span>
					</div>
					<div class="mt-1 h-2 w-full overflow-hidden rounded-full bg-dark-slate1">
						<div class="h-full w-[10%] rounded-full bg-amber-500 transition-all duration-700"></div>
					</div>
				</div>
				<div class="flex-1 space-y-1 text-sm text-gray-400">
					<p class="flex items-center gap-2">
						<CheckSolid class="h-3.5 w-3.5 text-green-400" /> Scout potential mining sites
					</p>
					<p class="flex items-center gap-2">
						<span class="inline-block h-3.5 w-3.5 rounded-full border-2 border-gray-500"></span> Organize
						mining wings
					</p>
					<p class="flex items-center gap-2">
						<span class="inline-block h-3.5 w-3.5 rounded-full border-2 border-gray-500"></span> Process
						and sell resources
					</p>
				</div>
				<div class="mt-4 border-t border-primary-main/10 pt-3 text-xs text-gray-500">
					<p>Commander: TBD</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Community Guides -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Community <span class="text-primary-main">Guides</span>
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
						<RocketSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-3 text-lg font-bold text-white">Getting Started with IGFV</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> How to join the squadron
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Setting up Discord and tools
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Understanding squadron ranks
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Fleet carrier access guide
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
						<CompassSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-3 text-lg font-bold text-white">Exploration Guide</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Ship builds for exploration
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Using the FSS and DSS
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Neutron star boosting
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Exploration data selling
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
						<HammerSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-3 text-lg font-bold text-white">BGS Operations Manual</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Understanding the BGS
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Influence mechanics explained
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Conflict zone tactics
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Tracking our faction
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
						<ToolboxSolid class="h-5 w-5" />
					</div>
					<h3 class="mb-3 text-lg font-bold text-white">Engineering & Ship Building</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Engineer unlock guide
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Material farming routes
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Ship optimization tips
						</li>
						<li class="flex items-start gap-2">
							<CheckSolid class="mt-0.5 h-3.5 w-3.5 text-primary-main" /> Recommended loadouts
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- External Resources -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			External <span class="text-primary-main">Resources</span>
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
					Elite Dangerous companion database. Track squadron stats, trade routes, and more.
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
					Elite Dangerous Database. Find stations, commodities, and system information.
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
				<p class="text-sm text-gray-400">Advanced ship outfitting and engineering planner.</p>
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
					Research and discovery network for Elite Dangerous mysteries.
				</p>
				<div class="mt-4 flex items-center gap-1 text-xs text-primary-light">
					<span>Visit Canonn</span>
					<ExternalLinkAltSolid class="h-3 w-3" />
				</div>
			</a>
		</div>
	</div>
</section>

<!-- Join Discord CTA -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div use:inview class="inview-hidden">
		<div
			class="to-dark/50 rounded-lg border border-primary-main/30 bg-gradient-to-br from-primary-main/10 p-8 text-center shadow-glow backdrop-blur-sm sm:p-12"
		>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">
				Join Us on <span class="text-primary-main">Discord</span>
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-gray-300">
				Get access to the latest guides, coordinate with ongoing operations, and connect with fellow
				commanders.
			</p>
			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-main px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
			>
				<RocketSolid class="h-5 w-5" />
				Join Our Discord
			</a>
		</div>
	</div>
</section>
