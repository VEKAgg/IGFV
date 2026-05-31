<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		HandshakeSolid,
		StarSolid,
		CheckSolid,
		UsersSolid,
		RocketSolid,
		GlobeAmericasSolid,
		ExternalLinkAltSolid,
		DiscordBrands,
		CalendarAltSolid,
		FireSolid
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
				<HandshakeSolid class="h-4 w-4" />
				<span>Partners</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Partners</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				IGFV is proud to collaborate with fellow squadrons and organizations across the galaxy.
				Together, we build a stronger, more vibrant community.
			</p>
		</div>
	</div>
</section>

<!-- Squadron Partners -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Squadron <span class="text-primary-main">Partners</span>
		</h2>
	</div>
	<div class="space-y-6">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-4">
					<div class="flex items-center gap-3 md:col-span-1">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-main/20 text-2xl font-bold text-primary-light"
						>
							NOVA
						</div>
						<div>
							<h3 class="text-lg font-bold text-white">Nova Legion</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2.5 py-0.5 text-xs font-medium text-primary-light"
							>
								Squadron
							</div>
						</div>
					</div>
					<div class="md:col-span-2">
						<p class="text-sm text-gray-400">
							A kindred spirit in exploration and community-building. Nova Legion shares our passion
							for discovery and peaceful coexistence in the galaxy. Regular joint expeditions and
							shared BGS intelligence.
						</p>
					</div>
					<div class="flex flex-col gap-2 md:col-span-1 md:items-end">
						<div class="text-xs text-gray-500">
							<p class="flex items-center gap-1">
								<FireSolid class="h-3 w-3 text-primary-main" /> Specialty: Exploration
							</p>
							<p class="flex items-center gap-1">
								<CalendarAltSolid class="h-3 w-3 text-primary-main" /> 3 joint events
							</p>
						</div>
						<a
							href="https://discord.gg/partner1"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-xs text-primary-light transition-colors hover:text-primary-main"
						>
							<DiscordBrands class="h-3 w-3" /> Connect
						</a>
					</div>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 150 }} class="inview-hidden group">
			<div
				class="bg-dark/50 rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-4">
					<div class="flex items-center gap-3 md:col-span-1">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-main/20 text-2xl font-bold text-primary-light"
						>
							DSN
						</div>
						<div>
							<h3 class="text-lg font-bold text-white">Deep Space Network</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2.5 py-0.5 text-xs font-medium text-primary-light"
							>
								Squadron
							</div>
						</div>
					</div>
					<div class="md:col-span-2">
						<p class="text-sm text-gray-400">
							A network of explorers dedicated to mapping the galaxy. Deep Space Network shares
							exploration data and coordinates long-range expeditions with IGFV.
						</p>
					</div>
					<div class="flex flex-col gap-2 md:col-span-1 md:items-end">
						<div class="text-xs text-gray-500">
							<p class="flex items-center gap-1">
								<FireSolid class="h-3 w-3 text-primary-main" /> Specialty: Data sharing
							</p>
							<p class="flex items-center gap-1">
								<CalendarAltSolid class="h-3 w-3 text-primary-main" /> 5 joint events
							</p>
						</div>
						<a
							href="https://discord.gg/partner2"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-xs text-primary-light transition-colors hover:text-primary-main"
						>
							<DiscordBrands class="h-3 w-3" /> Connect
						</a>
					</div>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-4">
					<div class="flex items-center gap-3 md:col-span-1">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-main/20 text-2xl font-bold text-primary-light"
						>
							TFD
						</div>
						<div>
							<h3 class="text-lg font-bold text-white">The Fuel Rats</h3>
							<div
								class="inline-block rounded-full bg-primary-main/10 px-2.5 py-0.5 text-xs font-medium text-primary-light"
							>
								Squadron
							</div>
						</div>
					</div>
					<div class="md:col-span-2">
						<p class="text-sm text-gray-400">
							The galaxy's premier emergency refueling service. The Fuel Rats provide critical
							support to commanders in need, and we're proud to have members who serve alongside
							them.
						</p>
					</div>
					<div class="flex flex-col gap-2 md:col-span-1 md:items-end">
						<div class="text-xs text-gray-500">
							<p class="flex items-center gap-1">
								<FireSolid class="h-3 w-3 text-primary-main" /> Specialty: Rescue ops
							</p>
							<p class="flex items-center gap-1">
								<CalendarAltSolid class="h-3 w-3 text-primary-main" /> Ongoing support
							</p>
						</div>
						<a
							href="https://discord.gg/partner3"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-xs text-primary-light transition-colors hover:text-primary-main"
						>
							<DiscordBrands class="h-3 w-3" /> Connect
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Supporting Partners -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Supporting <span class="text-primary-main">Partners</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-main/10"
					>
						<GlobeAmericasSolid class="h-8 w-8 text-primary-main/60" />
					</div>
					<h3 class="mb-1 text-lg font-bold text-white">Elite Dangerous Community</h3>
					<p class="text-xs text-gray-500">Supporting Partner</p>
					<p class="mt-2 text-sm text-gray-400">
						The official Elite Dangerous community forums and resources.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-main/10"
					>
						<StarSolid class="h-8 w-8 text-primary-main/60" />
					</div>
					<h3 class="mb-1 text-lg font-bold text-white">Inara</h3>
					<p class="text-xs text-gray-500">Supporting Partner</p>
					<p class="mt-2 text-sm text-gray-400">
						The leading Elite Dangerous companion database and social platform.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 300 }} class="inview-hidden group">
				<div
					class="bg-dark/50 rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-main/10"
					>
						<FireSolid class="h-8 w-8 text-primary-main/60" />
					</div>
					<h3 class="mb-1 text-lg font-bold text-white">Canonn Research</h3>
					<p class="text-xs text-gray-500">Supporting Partner</p>
					<p class="mt-2 text-sm text-gray-400">
						Scientific research network uncovering the mysteries of the galaxy.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Become a Partner CTA -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div use:inview class="inview-hidden">
		<div
			class="to-dark/50 rounded-lg border border-primary-main/30 bg-gradient-to-br from-primary-main/10 p-8 text-center shadow-glow backdrop-blur-sm sm:p-12"
		>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">
				Become a <span class="text-primary-main">Partner</span>
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-gray-300">
				Interested in partnering with IGFV? We're always open to collaborations with like-minded
				squadrons and organizations. Reach out to us on Discord to discuss partnership
				opportunities.
			</p>
			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-main px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
			>
				<HandshakeSolid class="h-5 w-5" />
				Contact Us
			</a>
		</div>
	</div>
</section>
