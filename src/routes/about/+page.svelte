<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		HistorySolid,
		RocketSolid,
		StarSolid,
		UsersSolid,
		GlobeAmericasSolid,
		ClockSolid,
		HandshakeSolid,
		ShieldAltSolid,
		HandsHelpingSolid,
		CheckSolid,
		CompassSolid,
		HammerSolid,
		FireSolid,
		SpaceShuttleSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
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
				<HistorySolid class="h-4 w-4" />
				<span>About IGFV</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				About <span class="text-primary-main">IGFV</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				A peaceful squadron dedicated to exploration, community, and camaraderie in Elite Dangerous.
				Founded in 3305 (2019), we've grown from a small group of like-minded commanders into a
				thriving community aboard the Imperial Fleet Carrier ISS Valhall.
			</p>
		</div>
	</div>
</section>

<!-- Squadron Overview -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Squadron <span class="text-primary-main">Overview</span>
		</h2>
	</div>
	<div class="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-gray-300">
		<p
			use:inview={{ delay: 100 }}
			class="inview-hidden bg-dark/50 rounded-lg border border-primary-main/20 p-6 shadow-glow backdrop-blur-sm"
		>
			The Imperial Guard Fleet Vanguard (IGFV) is a peaceful player squadron in Elite Dangerous,
			operating primarily in the Core Systems and beyond. Since our founding in 3305 (2019), we have
			focused on building a welcoming community of commanders who share a passion for exploration,
			trade, and the many facets of the galaxy.
		</p>
		<p
			use:inview={{ delay: 200 }}
			class="inview-hidden bg-dark/50 rounded-lg border border-primary-main/20 p-6 shadow-glow backdrop-blur-sm"
		>
			Operating from our fleet carrier, the ISS Valhall (VXX-RHJ), we provide a mobile base of
			operations for our members. Whether you're charting unexplored systems, running trade routes,
			or engineering the perfect ship, IGFV offers a supportive environment where commanders can
			thrive at their own pace.
		</p>
		<p
			use:inview={{ delay: 300 }}
			class="inview-hidden bg-dark/50 rounded-lg border border-primary-main/20 p-6 shadow-glow backdrop-blur-sm"
		>
			We pride ourselves on being an inclusive and diverse community. Our members span multiple time
			zones and playstyles, from casual explorers to dedicated BGS operators. There are no activity
			requirements—we believe that real life comes first, and Elite Dangerous should be a source of
			enjoyment, not obligation.
		</p>
	</div>
</section>

<!-- Founding History -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Founding <span class="text-primary-main">History</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<RocketSolid class="h-6 w-6" />
					</div>
					<div
						class="mb-2 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
					>
						3305
					</div>
					<h3 class="mb-2 text-xl font-bold text-white">2019 — Founded</h3>
					<p class="text-sm text-gray-400">
						IGFV was established by Commander Don Samen with a vision of creating a peaceful,
						community-focused squadron in Elite Dangerous.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<SpaceShuttleSolid class="h-6 w-6" />
					</div>
					<div
						class="mb-2 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
					>
						3307
					</div>
					<h3 class="mb-2 text-xl font-bold text-white">2021 — Fleet Carrier</h3>
					<p class="text-sm text-gray-400">
						Acquisition of the ISS Valhall (VXX-RHJ), a majestic Fleet Carrier serving as the
						squadron's mobile headquarters and central hub for all operations.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 300 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
					>
						<StarSolid class="h-6 w-6" />
					</div>
					<div
						class="mb-2 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
					>
						3311
					</div>
					<h3 class="mb-2 text-xl font-bold text-white">2025 — Growing Strong</h3>
					<p class="text-sm text-gray-400">
						IGFV continues to expand its ranks, welcoming commanders from all backgrounds and time
						zones, with an ever-growing presence across the galaxy.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Core Values -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Core <span class="text-primary-main">Values</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<UsersSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Community First</h3>
				<p class="text-sm text-gray-400">
					We prioritize building a friendly, supportive community where every member feels welcome.
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
					<GlobeAmericasSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Peaceful Expansion</h3>
				<p class="text-sm text-gray-400">
					We explore and expand peacefully, focusing on discovery and cooperation rather than
					conflict.
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
					<FireSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Diverse Playstyles</h3>
				<p class="text-sm text-gray-400">
					From exploration to trading, mining to BGS—every playstyle is valued and supported.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 400 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<ClockSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Timezone Coverage</h3>
				<p class="text-sm text-gray-400">
					Active across multiple time zones ensuring there's always someone to fly with.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Leadership Team -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Leadership <span class="text-primary-main">Team</span>
			</h2>
		</div>
		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-4 flex items-center gap-4">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
						>
							DS
						</div>
						<div>
							<h3 class="text-lg font-bold text-white">Don Samen</h3>
							<p class="text-xs text-gray-400">Founder & Squadron Leader</p>
						</div>
					</div>
					<div
						class="mb-3 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-0.5 text-xs font-medium text-yellow-400"
					>
						Founder
					</div>
					<p class="text-sm text-gray-400">
						Founded IGFV in 3305 with a vision of peaceful exploration and community. Leads the
						squadron with dedication and oversees all strategic decisions.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-4 flex items-center gap-4">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
						>
							TV
						</div>
						<div>
							<h3 class="text-lg font-bold text-white">Twisted VorteK</h3>
							<p class="text-xs text-gray-400">Squadron Manager</p>
						</div>
					</div>
					<div
						class="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-400"
					>
						Manager
					</div>
					<p class="text-sm text-gray-400">
						Manages day-to-day squadron operations, coordinates activities, and ensures the
						community remains a welcoming place for all commanders.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Primary Activities -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Primary <span class="text-primary-main">Activities</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<CompassSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Deep Space Exploration</h3>
				<p class="text-sm text-gray-400">
					Venturing into the black, charting undiscovered systems, and contributing to the
					collective knowledge of the galaxy.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<SpaceShuttleSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Trade & Mining</h3>
				<p class="text-sm text-gray-400">
					Operating trade routes and mining operations to build squadron wealth and support fleet
					carrier maintenance.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<HammerSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">BGS Operations</h3>
				<p class="text-sm text-gray-400">
					Influencing the Background Simulation to support our minor faction and shape the political
					landscape.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 400 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<FireSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Engineering & Combat</h3>
				<p class="text-sm text-gray-400">
					Helping members engineer their ships and providing support for combat scenarios when
					needed.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Playstyle & Culture -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Playstyle & <span class="text-primary-main">Culture</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 text-green-400"
					>
						<ShieldAltSolid class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">PvE Focus</h3>
					<p class="text-sm text-gray-400">
						We are a PvE-oriented squadron. While we respect PvPers, our focus is on cooperative
						gameplay and exploration.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400"
					>
						<ClockSolid class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">No Activity Requirements</h3>
					<p class="text-sm text-gray-400">
						Real life comes first. There are no mandatory activities or minimum playtime
						requirements.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 300 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400"
					>
						<GlobeAmericasSolid class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">All Timezones Welcome</h3>
					<p class="text-sm text-gray-400">
						With members spanning the globe, there's almost always someone online to fly with.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 400 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400"
					>
						<HandsHelpingSolid class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Mentorship</h3>
					<p class="text-sm text-gray-400">
						New to Elite? Our experienced commanders are always ready to help you find your way.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mission & Values -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Mission & <span class="text-primary-main">Values</span>
		</h2>
	</div>
	<div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<h3 class="mb-3 text-lg font-bold text-white">Our Mission</h3>
				<p class="text-sm text-gray-400">
					To provide a welcoming home for commanders who value exploration, community, and the
					freedom to play Elite Dangerous their way.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<h3 class="mb-3 text-lg font-bold text-white">Our Vision</h3>
				<p class="text-sm text-gray-400">
					A galaxy where commanders from all walks of life can come together, share experiences, and
					create lasting friendships among the stars.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<h3 class="mb-3 text-lg font-bold text-white">Our Promise</h3>
				<p class="text-sm text-gray-400">
					No drama, no obligations, no pressure. Just good people exploring the galaxy together.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Code of Conduct -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Code of <span class="text-primary-main">Conduct</span>
			</h2>
		</div>
		<div class="mx-auto max-w-3xl space-y-4">
			<div
				use:inview={{ delay: 100 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Be Respectful</h4>
					<p class="text-sm text-gray-400">
						Treat all members with respect. Harassment, discrimination, and toxic behavior will not
						be tolerated.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 150 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Help Others</h4>
					<p class="text-sm text-gray-400">
						Share your knowledge and experience. We grow stronger when we help each other.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 200 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Stay Active</h4>
					<p class="text-sm text-gray-400">
						While there's no minimum activity requirement, staying engaged with the community helps
						keep IGFV vibrant.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 250 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Represent Well</h4>
					<p class="text-sm text-gray-400">
						When flying under the IGFV tag, you represent the squadron. Act in a way that brings
						honor to our name.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 300 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">No Griefing</h4>
					<p class="text-sm text-gray-400">
						We do not engage in or encourage griefing, seal clubbing, or any form of player
						harassment.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 350 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Communicate</h4>
					<p class="text-sm text-gray-400">
						Join us on Discord and stay in touch. Communication is key to a thriving community.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 400 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Have Fun</h4>
					<p class="text-sm text-gray-400">
						Above all, remember that Elite Dangerous is a game. Enjoy the journey and the
						camaraderie.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Join CTA -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<div
			class="to-dark/50 rounded-lg border border-primary-main/30 bg-gradient-to-br from-primary-main/10 p-8 text-center shadow-glow backdrop-blur-sm sm:p-12"
		>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">
				Ready to Join <span class="text-primary-main">IGFV</span>?
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-gray-300">
				Whether you're a seasoned explorer or a brand new commander, there's a place for you in the
				Imperial Guard Fleet Vanguard. Join us on Discord and become part of our community.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href={resolve('/join')}
					class="inline-flex items-center gap-2 rounded-lg bg-primary-main px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
				>
					<HandshakeSolid class="h-5 w-5" />
					Join IGFV
				</a>
				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer external"
					class="inline-flex items-center gap-2 rounded-lg border border-primary-main/50 px-8 py-3 font-semibold text-primary-light transition-all duration-300 hover:bg-primary-main/10 hover:shadow-glow-hover"
				>
					Join Our Discord
				</a>
			</div>
		</div>
	</div>
</section>
