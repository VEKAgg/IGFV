<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		UsersSolid,
		StarSolid,
		ClockSolid,
		GlobeAmericasSolid,
		CheckSolid,
		RocketSolid,
		HandshakeSolid,
		FireSolid,
		ExternalLinkAltSolid,
		HammerSolid,
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
				<UsersSolid class="h-4 w-4" />
				<span>Members</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Members</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				Meet the commanders who make IGFV the vibrant community it is. From our leadership team to
				our active members, every commander plays a vital role in our squadron.
			</p>
		</div>
	</div>
</section>

<!-- Leadership Team -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Leadership <span class="text-primary-main">Team</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-center gap-4">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
					>
						SK
					</div>
					<div>
						<h3 class="text-lg font-bold text-white">Skalfinn</h3>
						<p class="text-xs text-gray-400">Squadron Leader</p>
					</div>
				</div>
				<div
					class="mb-3 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-0.5 text-xs font-medium text-yellow-400"
				>
					Founder
				</div>
				<div class="space-y-2 text-sm text-gray-400">
					<p class="flex items-center gap-2">
						<StarSolid class="h-4 w-4 text-primary-main" /> Focus: Overall leadership & strategy
					</p>
					<p class="flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" /> Timezone: UTC+1
					</p>
					<p class="flex items-center gap-2">
						<ExternalLinkAltSolid class="h-4 w-4 text-primary-main" />
						<a
							href="https://inara.cz"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary-light hover:underline">Inara Profile</a
						>
					</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 150 }} class="inview-hidden group">
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
						<p class="text-xs text-gray-400">Founder</p>
					</div>
				</div>
				<div
					class="mb-3 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-0.5 text-xs font-medium text-yellow-400"
				>
					Founder
				</div>
				<div class="space-y-2 text-sm text-gray-400">
					<p class="flex items-center gap-2">
						<StarSolid class="h-4 w-4 text-primary-main" /> Focus: Squadron operations & expansion
					</p>
					<p class="flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" /> Timezone: UTC+1
					</p>
					<p class="flex items-center gap-2">
						<ExternalLinkAltSolid class="h-4 w-4 text-primary-main" />
						<a
							href="https://inara.cz"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary-light hover:underline">Inara Profile</a
						>
					</p>
				</div>
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
				<div class="space-y-2 text-sm text-gray-400">
					<p class="flex items-center gap-2">
						<StarSolid class="h-4 w-4 text-primary-main" /> Focus: BGS operations & recruitment
					</p>
					<p class="flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" /> Timezone: UTC+2
					</p>
					<p class="flex items-center gap-2">
						<ExternalLinkAltSolid class="h-4 w-4 text-primary-main" />
						<a
							href="https://inara.cz"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary-light hover:underline">Inara Profile</a
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Active Members -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Active <span class="text-primary-main">Members</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-sm font-bold text-primary-light"
						>
							SM
						</div>
						<div>
							<h3 class="font-bold text-white">StarMiner</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2 py-0.5 text-xs font-medium text-primary-light"
							>
								Member
							</div>
						</div>
					</div>
					<div class="space-y-1 text-xs text-gray-400">
						<p class="flex items-center gap-1.5">
							<FireSolid class="h-3 w-3 text-primary-main" /> Focus: Mining & Trading
						</p>
						<p class="flex items-center gap-1.5">
							<CompassSolid class="h-3 w-3 text-primary-main" /> Specialty: Deep core mining
						</p>
						<p class="flex items-center gap-1.5">
							<ClockSolid class="h-3 w-3 text-primary-main" /> Timezone: UTC+8
						</p>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 130 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-sm font-bold text-primary-light"
						>
							VK
						</div>
						<div>
							<h3 class="font-bold text-white">VoidKraken</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2 py-0.5 text-xs font-medium text-primary-light"
							>
								Member
							</div>
						</div>
					</div>
					<div class="space-y-1 text-xs text-gray-400">
						<p class="flex items-center gap-1.5">
							<FireSolid class="h-3 w-3 text-primary-main" /> Focus: Exploration & BGS
						</p>
						<p class="flex items-center gap-1.5">
							<CompassSolid class="h-3 w-3 text-primary-main" /> Specialty: System scanning
						</p>
						<p class="flex items-center gap-1.5">
							<ClockSolid class="h-3 w-3 text-primary-main" /> Timezone: UTC+0
						</p>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 160 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-sm font-bold text-primary-light"
						>
							NR
						</div>
						<div>
							<h3 class="font-bold text-white">NovaRunner</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2 py-0.5 text-xs font-medium text-primary-light"
							>
								Member
							</div>
						</div>
					</div>
					<div class="space-y-1 text-xs text-gray-400">
						<p class="flex items-center gap-1.5">
							<FireSolid class="h-3 w-3 text-primary-main" /> Focus: Combat & Engineering
						</p>
						<p class="flex items-center gap-1.5">
							<CompassSolid class="h-3 w-3 text-primary-main" /> Specialty: Ship optimization
						</p>
						<p class="flex items-center gap-1.5">
							<ClockSolid class="h-3 w-3 text-primary-main" /> Timezone: UTC-5
						</p>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 190 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-sm font-bold text-primary-light"
						>
							QF
						</div>
						<div>
							<h3 class="font-bold text-white">QuantumFox</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2 py-0.5 text-xs font-medium text-primary-light"
							>
								Member
							</div>
						</div>
					</div>
					<div class="space-y-1 text-xs text-gray-400">
						<p class="flex items-center gap-1.5">
							<FireSolid class="h-3 w-3 text-primary-main" /> Focus: Trading & Hauling
						</p>
						<p class="flex items-center gap-1.5">
							<CompassSolid class="h-3 w-3 text-primary-main" /> Specialty: Route optimization
						</p>
						<p class="flex items-center gap-1.5">
							<ClockSolid class="h-3 w-3 text-primary-main" /> Timezone: UTC+3
						</p>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 220 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-sm font-bold text-primary-light"
						>
							PS
						</div>
						<div>
							<h3 class="font-bold text-white">PulsarSage</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2 py-0.5 text-xs font-medium text-primary-light"
							>
								Member
							</div>
						</div>
					</div>
					<div class="space-y-1 text-xs text-gray-400">
						<p class="flex items-center gap-1.5">
							<FireSolid class="h-3 w-3 text-primary-main" /> Focus: Exploration & Research
						</p>
						<p class="flex items-center gap-1.5">
							<CompassSolid class="h-3 w-3 text-primary-main" /> Specialty: Galactic discoveries
						</p>
						<p class="flex items-center gap-1.5">
							<ClockSolid class="h-3 w-3 text-primary-main" /> Timezone: UTC-8
						</p>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 250 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-3 flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-sm font-bold text-primary-light"
						>
							AE
						</div>
						<div>
							<h3 class="font-bold text-white">AetherEcho</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2 py-0.5 text-xs font-medium text-primary-light"
							>
								Member
							</div>
						</div>
					</div>
					<div class="space-y-1 text-xs text-gray-400">
						<p class="flex items-center gap-1.5">
							<FireSolid class="h-3 w-3 text-primary-main" /> Focus: BGS & Community
						</p>
						<p class="flex items-center gap-1.5">
							<CompassSolid class="h-3 w-3 text-primary-main" /> Specialty: Faction management
						</p>
						<p class="flex items-center gap-1.5">
							<ClockSolid class="h-3 w-3 text-primary-main" /> Timezone: UTC+5.5
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Squadron <span class="text-primary-main">Stats</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 rounded-lg border border-primary-main/30 p-8 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-main/20 text-primary-light"
				>
					<UsersSolid class="h-7 w-7" />
				</div>
				<p class="text-4xl font-bold text-white">100+</p>
				<p class="mt-2 text-sm text-gray-400">Active Members</p>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 rounded-lg border border-primary-main/30 p-8 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-main/20 text-primary-light"
				>
					<GlobeAmericasSolid class="h-7 w-7" />
				</div>
				<p class="text-4xl font-bold text-white">6+</p>
				<p class="mt-2 text-sm text-gray-400">Timezones Covered</p>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 rounded-lg border border-primary-main/30 p-8 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-main/20 text-primary-light"
				>
					<StarSolid class="h-7 w-7" />
				</div>
				<p class="text-4xl font-bold text-white">5+</p>
				<p class="mt-2 text-sm text-gray-400">Years of Experience</p>
			</div>
		</div>
	</div>
</section>

<!-- Join CTA -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div use:inview class="inview-hidden">
		<div
			class="to-dark/50 rounded-lg border border-primary-main/30 bg-gradient-to-br from-primary-main/10 p-8 text-center shadow-glow backdrop-blur-sm sm:p-12"
		>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">
				Join Our <span class="text-primary-main">Community</span>
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-gray-300">
				Become part of a growing community of commanders who share your passion for exploration and
				discovery.
			</p>
			<a
				href="/join"
				class="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-main px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
			>
				<HandshakeSolid class="h-5 w-5" />
				Join IGFV Today
			</a>
		</div>
	</div>
</section>
