<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		SpaceShuttleSolid,
		MapMarkerAltSolid,
		UsersSolid,
		CheckSolid,
		ClockSolid,
		FireSolid,
		ToolboxSolid,
		HammerSolid
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
				<SpaceShuttleSolid class="h-4 w-4" />
				<span>Fleet Carrier</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				ISS <span class="text-primary-main">Valhall</span>
			</h1>
			<p class="mt-3 text-lg text-primary-light">VXX-RHJ</p>
			<p class="mt-4 text-lg leading-relaxed text-gray-300">
				Our mobile headquarters and home away from home. The ISS Valhall serves as the central hub
				for all IGFV operations, providing essential services and a safe harbor for our commanders.
			</p>
		</div>
	</div>
</section>

<!-- Location & Carrier Info -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Current <span class="text-primary-main">Status</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<MapMarkerAltSolid class="h-5 w-5" />
					</div>
					<h3 class="text-lg font-bold text-white">Current Location</h3>
				</div>
				<div class="space-y-3 text-sm">
					<div class="flex items-center justify-between border-b border-primary-main/10 pb-2">
						<span class="text-gray-400">System</span>
						<span class="font-medium text-white">Shinrarta Dezhra</span>
					</div>
					<div class="flex items-center justify-between border-b border-primary-main/10 pb-2">
						<span class="text-gray-400">Body</span>
						<span class="font-medium text-white">Jameson Memorial</span>
					</div>
					<div class="flex items-center justify-between border-b border-primary-main/10 pb-2">
						<span class="text-gray-400">Population</span>
						<span class="font-medium text-white">38,000,000+</span>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-gray-400">Allegiance</span>
						<span class="font-medium text-white">Independent</span>
					</div>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<SpaceShuttleSolid class="h-5 w-5" />
					</div>
					<h3 class="text-lg font-bold text-white">Carrier Information</h3>
				</div>
				<div class="space-y-3 text-sm">
					<div class="flex items-center justify-between border-b border-primary-main/10 pb-2">
						<span class="text-gray-400">Name</span>
						<span class="font-medium text-white">ISS Valhall</span>
					</div>
					<div class="flex items-center justify-between border-b border-primary-main/10 pb-2">
						<span class="text-gray-400">Callsign</span>
						<span class="font-medium text-white">VXX-RHJ</span>
					</div>
					<div class="flex items-center justify-between border-b border-primary-main/10 pb-2">
						<span class="text-gray-400">Class</span>
						<span class="font-medium text-white">Majestic-Class Fleet Carrier</span>
					</div>
					<div class="flex items-center justify-between border-b border-primary-main/10 pb-2">
						<span class="text-gray-400">Crew Capacity</span>
						<span class="font-medium text-white">1,000+</span>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-gray-400">Max Jump Range</span>
						<span class="font-medium text-white">500 LY</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Available Services -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Available <span class="text-primary-main">Services</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-4 flex items-center justify-between">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
						>
							<ToolboxSolid class="h-5 w-5" />
						</div>
						<div
							class="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
							Active
						</div>
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Commodity Market</h3>
					<p class="text-sm text-gray-400">
						Buy and sell goods directly from the carrier's market. Stock varies based on location
						and recent trade activities.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-4 flex items-center justify-between">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
						>
							<UsersSolid class="h-5 w-5" />
						</div>
						<div
							class="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
							Active
						</div>
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Crew Quarters</h3>
					<p class="text-sm text-gray-400">
						Rest and relax between expeditions. Full crew facilities available for all squadron
						members.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 300 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-4 flex items-center justify-between">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
						>
							<HammerSolid class="h-5 w-5" />
						</div>
						<div
							class="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
							Active
						</div>
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Repair & Rearm</h3>
					<p class="text-sm text-gray-400">
						Full repair, restock, and rearming services available. Get your ship battle-ready before
						heading out.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 400 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-4 flex items-center justify-between">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
						>
							<FireSolid class="h-5 w-5" />
						</div>
						<div
							class="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
							Active
						</div>
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Fuel Depot</h3>
					<p class="text-sm text-gray-400">
						Refuel your ship and the carrier's own fuel reserves. Essential for long-range
						exploration operations.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Upcoming Jumps -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Upcoming <span class="text-primary-main">Jumps</span>
		</h2>
	</div>
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-3 flex items-center gap-2">
					<ClockSolid class="h-4 w-4 text-primary-main" />
					<span class="text-sm text-gray-400">March 20, 3311 — 14:00 IGT</span>
				</div>
				<h3 class="text-lg font-bold text-white">Jump to Colonia</h3>
				<div class="mt-3 space-y-1 text-sm text-gray-400">
					<p>Distance: ~22,000 LY</p>
					<p>Stops: 8 waypoints</p>
					<p>Duration: ~2 weeks</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-3 flex items-center gap-2">
					<ClockSolid class="h-4 w-4 text-primary-main" />
					<span class="text-sm text-gray-400">April 5, 3311 — 10:00 IGT</span>
				</div>
				<h3 class="text-lg font-bold text-white">Return to Bubble</h3>
				<div class="mt-3 space-y-1 text-sm text-gray-400">
					<p>Destination: Sol</p>
					<p>Stops: Direct route</p>
					<p>Duration: ~3 days</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-3 flex items-center gap-2">
					<ClockSolid class="h-4 w-4 text-primary-main" />
					<span class="text-sm text-gray-400">April 20, 3311 — 08:00 IGT</span>
				</div>
				<h3 class="text-lg font-bold text-white">HIP 12345 Campaign</h3>
				<div class="mt-3 space-y-1 text-sm text-gray-400">
					<p>Destination: HIP 12345</p>
					<p>Distance: ~150 LY</p>
					<p>Duration: 1 week</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Rules & Guidelines -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Carrier Rules & <span class="text-primary-main">Guidelines</span>
			</h2>
		</div>
		<div class="mx-auto max-w-3xl space-y-4">
			<div
				use:inview={{ delay: 100 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Parking</h4>
					<p class="text-sm text-gray-400">
						Please use designated landing pads. Large ships should use the outer landing pads to
						leave room for smaller vessels.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 150 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Cargo Storage</h4>
					<p class="text-sm text-gray-400">
						Do not store illegal or prohibited goods on the carrier without prior authorization.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 200 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Jump Notifications</h4>
					<p class="text-sm text-gray-400">
						Always check the schedule before logging out. If the carrier is jumping, make sure
						you're aboard or aware of the departure time.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 250 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Respect the Crew</h4>
					<p class="text-sm text-gray-400">
						Treat the carrier crew and fellow commanders with respect at all times.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 300 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Report Issues</h4>
					<p class="text-sm text-gray-400">
						Report any technical issues or problems to squadron leadership immediately.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
