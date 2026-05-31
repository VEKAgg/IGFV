<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		RocketSolid,
		StarSolid,
		CheckSolid,
		UsersSolid,
		CalendarAltSolid,
		CompassSolid,
		SpaceShuttleSolid
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
				<RocketSolid class="h-4 w-4" />
				<span>Operations Board</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Operations <span class="text-primary-main">Board</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				Track ongoing operations, upcoming fleet carrier jumps, and find opportunities to contribute
				to squadron activities.
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
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-center justify-between">
					<div
						class="inline-block rounded-full bg-green-500/10 px-3 py-0.5 text-xs font-medium text-green-400"
					>
						Active
					</div>
					<span class="flex items-center gap-1 text-xs text-gray-500"
						><CalendarAltSolid class="h-3 w-3" /> Started Mar 1, 3311</span
					>
				</div>
				<h3 class="mb-3 text-xl font-bold text-white">Colonia Expedition</h3>
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
				<div class="space-y-1.5 text-sm text-gray-400">
					<p class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" /> Chart course to Colonia
					</p>
					<p class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" /> 6/8 waypoints reached
					</p>
					<p class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" /> Exploration data collected
					</p>
					<p class="flex items-start gap-2">
						<span
							class="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-gray-500"
						></span> Final approach to Colonia
					</p>
				</div>
				<div class="mt-4 border-t border-primary-main/10 pt-3 text-xs text-gray-500">
					<p class="flex items-center gap-1"><UsersSolid class="h-3 w-3" /> Commander: Don Samen</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 150 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-center justify-between">
					<div
						class="inline-block rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-400"
					>
						Active
					</div>
					<span class="flex items-center gap-1 text-xs text-gray-500"
						><CalendarAltSolid class="h-3 w-3" /> Started Mar 5, 3311</span
					>
				</div>
				<h3 class="mb-3 text-xl font-bold text-white">HIP 12345 BGS Campaign</h3>
				<div class="mb-3">
					<div class="flex items-center justify-between text-xs text-gray-400">
						<span>Progress</span>
						<span>40%</span>
					</div>
					<div class="mt-1 h-2 w-full overflow-hidden rounded-full bg-dark-slate1">
						<div class="h-full w-[40%] rounded-full bg-blue-500 transition-all duration-700"></div>
					</div>
				</div>
				<div class="space-y-1.5 text-sm text-gray-400">
					<p class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" /> Initial influence established
					</p>
					<p class="flex items-start gap-2">
						<span
							class="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-gray-500"
						></span> Run trade missions
					</p>
					<p class="flex items-start gap-2">
						<span
							class="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-gray-500"
						></span> Complete exploration data
					</p>
					<p class="flex items-start gap-2">
						<span
							class="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-gray-500"
						></span> Combat support if needed
					</p>
				</div>
				<div class="mt-4 border-t border-primary-main/10 pt-3 text-xs text-gray-500">
					<p class="flex items-center gap-1">
						<UsersSolid class="h-3 w-3" /> Commander: Twisted VorteK
					</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-center justify-between">
					<div
						class="inline-block rounded-full bg-amber-500/10 px-3 py-0.5 text-xs font-medium text-amber-400"
					>
						Planning
					</div>
					<span class="flex items-center gap-1 text-xs text-gray-500"
						><CalendarAltSolid class="h-3 w-3" /> Planned for Apr 1</span
					>
				</div>
				<h3 class="mb-3 text-xl font-bold text-white">Deep Space Mining Expedition</h3>
				<div class="mb-3">
					<div class="flex items-center justify-between text-xs text-gray-400">
						<span>Progress</span>
						<span>10%</span>
					</div>
					<div class="mt-1 h-2 w-full overflow-hidden rounded-full bg-dark-slate1">
						<div class="h-full w-[10%] rounded-full bg-amber-500 transition-all duration-700"></div>
					</div>
				</div>
				<div class="space-y-1.5 text-sm text-gray-400">
					<p class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" /> Scout potential mining
						sites
					</p>
					<p class="flex items-start gap-2">
						<span
							class="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-gray-500"
						></span> Organize mining wings
					</p>
					<p class="flex items-start gap-2">
						<span
							class="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-gray-500"
						></span> Process and sell resources
					</p>
				</div>
				<div class="mt-4 border-t border-primary-main/10 pt-3 text-xs text-gray-500">
					<p class="flex items-center gap-1"><UsersSolid class="h-3 w-3" /> Commander: TBD</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 250 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-center justify-between">
					<div
						class="inline-block rounded-full bg-purple-500/10 px-3 py-0.5 text-xs font-medium text-purple-400"
					>
						Recruiting
					</div>
					<span class="flex items-center gap-1 text-xs text-gray-500"
						><CalendarAltSolid class="h-3 w-3" /> Open</span
					>
				</div>
				<h3 class="mb-3 text-xl font-bold text-white">Squadron Recruitment Drive</h3>
				<div class="mb-3">
					<div class="flex items-center justify-between text-xs text-gray-400">
						<span>Progress</span>
						<span>75%</span>
					</div>
					<div class="mt-1 h-2 w-full overflow-hidden rounded-full bg-dark-slate1">
						<div
							class="h-full w-[75%] rounded-full bg-purple-500 transition-all duration-700"
						></div>
					</div>
				</div>
				<div class="space-y-1.5 text-sm text-gray-400">
					<p class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" /> Social media presence
						established
					</p>
					<p class="flex items-start gap-2">
						<CheckSolid class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" /> Recruitment posts active
					</p>
					<p class="flex items-start gap-2">
						<span
							class="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-gray-500"
						></span> Welcome new members
					</p>
				</div>
				<div class="mt-4 border-t border-primary-main/10 pt-3 text-xs text-gray-500">
					<p class="flex items-center gap-1">
						<UsersSolid class="h-3 w-3" /> Commander: Twisted VorteK
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Fleet Carrier Jump Schedule -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Fleet Carrier Jump <span class="text-primary-main">Schedule</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-2">
						<SpaceShuttleSolid class="h-5 w-5 text-primary-main" />
						<h3 class="font-bold text-white">Jump #1</h3>
					</div>
					<div class="space-y-2 text-sm text-gray-400">
						<p class="flex items-center gap-2">
							<CalendarAltSolid class="h-4 w-4 text-primary-main" /> March 20, 3311 — 14:00 IGT
						</p>
						<p class="flex items-center gap-2">
							<CompassSolid class="h-4 w-4 text-primary-main" /> Destination: Colonia
						</p>
						<p class="flex items-center gap-2">
							<RocketSolid class="h-4 w-4 text-primary-main" /> Distance: ~22,000 LY
						</p>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-2">
						<SpaceShuttleSolid class="h-5 w-5 text-primary-main" />
						<h3 class="font-bold text-white">Jump #2</h3>
					</div>
					<div class="space-y-2 text-sm text-gray-400">
						<p class="flex items-center gap-2">
							<CalendarAltSolid class="h-4 w-4 text-primary-main" /> April 5, 3311 — 10:00 IGT
						</p>
						<p class="flex items-center gap-2">
							<CompassSolid class="h-4 w-4 text-primary-main" /> Destination: Sol (Return)
						</p>
						<p class="flex items-center gap-2">
							<RocketSolid class="h-4 w-4 text-primary-main" /> Distance: Direct route
						</p>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 300 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-2">
						<SpaceShuttleSolid class="h-5 w-5 text-primary-main" />
						<h3 class="font-bold text-white">Jump #3</h3>
					</div>
					<div class="space-y-2 text-sm text-gray-400">
						<p class="flex items-center gap-2">
							<CalendarAltSolid class="h-4 w-4 text-primary-main" /> April 20, 3311 — 08:00 IGT
						</p>
						<p class="flex items-center gap-2">
							<CompassSolid class="h-4 w-4 text-primary-main" /> Destination: HIP 12345
						</p>
						<p class="flex items-center gap-2">
							<RocketSolid class="h-4 w-4 text-primary-main" /> Distance: ~150 LY
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- How to Participate -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			How to <span class="text-primary-main">Participate</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					1
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Check the Board</h3>
				<p class="text-sm text-gray-400">
					Browse active operations and find one that matches your playstyle and availability.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					2
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Sign Up on Discord</h3>
				<p class="text-sm text-gray-400">
					Let the operation commander know you're interested in participating.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					3
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Contribute & Earn</h3>
				<p class="text-sm text-gray-400">
					Complete objectives, earn squadron credits, and help IGFV grow stronger.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Tip Banner -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div use:inview class="inview-hidden">
		<div class="rounded-lg border border-amber-500/30 bg-amber-500/5 p-6 backdrop-blur-sm">
			<div class="flex items-start gap-3">
				<StarSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
				<div>
					<h3 class="font-semibold text-white">Pro Tip</h3>
					<p class="mt-1 text-sm text-gray-400">
						New to operations? Start with a BGS campaign—they're beginner-friendly and a great way
						to learn the ropes while contributing to the squadron. The <span
							class="font-medium text-primary-light">#operations</span
						> channel on Discord has all the details you need to get started.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
