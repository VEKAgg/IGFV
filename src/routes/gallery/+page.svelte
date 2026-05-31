<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		ImagesSolid,
		ImageSolid,
		StarSolid,
		CalendarAltSolid,
		ClockSolid,
		UserSolid,
		CheckSolid,
		SpaceShuttleSolid,
		CompassSolid,
		FireSolid,
		HammerSolid,
		UsersSolid,
		RocketSolid,
		DiscordBrands
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
				<ImagesSolid class="h-4 w-4" />
				<span>Gallery</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				IGFV <span class="text-primary-main">Gallery</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				Capturing the beauty of the galaxy through the eyes of our commanders. Browse screenshots
				from our expeditions, operations, and everyday adventures.
			</p>
		</div>
	</div>
</section>

<!-- Gallery Categories -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Gallery <span class="text-primary-main">Categories</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<SpaceShuttleSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Fleet Carrier</h3>
				<p class="text-sm text-gray-400">Images of the ISS Valhall and fleet carrier operations.</p>
				<div
					class="mt-4 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
				>
					24 photos
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 150 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<CompassSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Exploration</h3>
				<p class="text-sm text-gray-400">Breathtaking views from deep space expeditions.</p>
				<div
					class="mt-4 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
				>
					36 photos
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<FireSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Mining</h3>
				<p class="text-sm text-gray-400">Asteroid mining operations and resource extraction.</p>
				<div
					class="mt-4 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
				>
					18 photos
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 250 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<StarSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Events</h3>
				<p class="text-sm text-gray-400">
					Squadron gatherings, expeditions, and community moments.
				</p>
				<div
					class="mt-4 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
				>
					30 photos
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<ImageSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Ship Collections</h3>
				<p class="text-sm text-gray-400">Showcasing our commanders' ships and loadouts.</p>
				<div
					class="mt-4 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
				>
					42 photos
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 350 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
				>
					<HammerSolid class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">BGS</h3>
				<p class="text-sm text-gray-400">Background Simulation campaign snapshots.</p>
				<div
					class="mt-4 inline-block rounded-full bg-primary-main/10 px-3 py-0.5 text-xs font-medium text-primary-light"
				>
					12 photos
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Recent Uploads -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Recent <span class="text-primary-main">Uploads</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-3 flex aspect-video items-center justify-center rounded-lg bg-primary-main/10"
					>
						<ImageSolid class="h-10 w-10 text-primary-main/30" />
					</div>
					<div
						class="mb-2 inline-block rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400"
					>
						Exploration
					</div>
					<h3 class="text-lg font-bold text-white">Nebula Sunrise</h3>
					<div class="mt-2 flex items-center gap-4 text-xs text-gray-500">
						<span class="flex items-center gap-1"><UserSolid class="h-3 w-3" /> CMDR Don Samen</span
						>
						<span class="flex items-center gap-1"
							><CalendarAltSolid class="h-3 w-3" /> Mar 10, 3311</span
						>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 150 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-3 flex aspect-video items-center justify-center rounded-lg bg-primary-main/10"
					>
						<ImageSolid class="h-10 w-10 text-primary-main/30" />
					</div>
					<div
						class="mb-2 inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400"
					>
						Fleet Carrier
					</div>
					<h3 class="text-lg font-bold text-white">Valhall Docking Bay</h3>
					<div class="mt-2 flex items-center gap-4 text-xs text-gray-500">
						<span class="flex items-center gap-1"
							><UserSolid class="h-3 w-3" /> CMDR Twisted VorteK</span
						>
						<span class="flex items-center gap-1"
							><CalendarAltSolid class="h-3 w-3" /> Mar 8, 3311</span
						>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-3 flex aspect-video items-center justify-center rounded-lg bg-primary-main/10"
					>
						<ImageSolid class="h-10 w-10 text-primary-main/30" />
					</div>
					<div
						class="mb-2 inline-block rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400"
					>
						Mining
					</div>
					<h3 class="text-lg font-bold text-white">Void Opal Score</h3>
					<div class="mt-2 flex items-center gap-4 text-xs text-gray-500">
						<span class="flex items-center gap-1"><UserSolid class="h-3 w-3" /> CMDR StarMiner</span
						>
						<span class="flex items-center gap-1"
							><CalendarAltSolid class="h-3 w-3" /> Mar 5, 3311</span
						>
					</div>
				</div>
			</div>
			<div use:inview={{ delay: 250 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-3 flex aspect-video items-center justify-center rounded-lg bg-primary-main/10"
					>
						<ImageSolid class="h-10 w-10 text-primary-main/30" />
					</div>
					<div
						class="mb-2 inline-block rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-400"
					>
						Events
					</div>
					<h3 class="text-lg font-bold text-white">Squadron Group Photo</h3>
					<div class="mt-2 flex items-center gap-4 text-xs text-gray-500">
						<span class="flex items-center gap-1"><UserSolid class="h-3 w-3" /> CMDR Don Samen</span
						>
						<span class="flex items-center gap-1"
							><CalendarAltSolid class="h-3 w-3" /> Feb 28, 3311</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Submit Your Screenshots -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-6 text-center text-3xl font-bold text-white sm:text-4xl">
			Submit Your <span class="text-primary-main">Screenshots</span>
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-gray-400">
			Want to share your best screenshots with the squadron? Here's how:
		</p>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					1
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Capture</h3>
				<p class="text-sm text-gray-400">
					Take your screenshot using the in-game camera suite or your preferred capture tool.
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
				<h3 class="mb-2 text-lg font-bold text-white">Upload</h3>
				<p class="text-sm text-gray-400">
					Share your image in the Discord <span class="font-medium text-primary-light"
						>#screenshots</span
					> channel.
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
				<h3 class="mb-2 text-lg font-bold text-white">Get Featured</h3>
				<p class="text-sm text-gray-400">
					The best screenshots are featured on this page and our social media channels.
				</p>
			</div>
		</div>
	</div>
	<div use:inview={{ delay: 250 }} class="inview-hidden mt-8">
		<div class="bg-dark/50 rounded-lg border border-primary-main/20 p-6 backdrop-blur-sm">
			<h4 class="mb-3 font-semibold text-white">Submission Guidelines</h4>
			<ul class="space-y-2 text-sm text-gray-400">
				<li class="flex items-start gap-2">
					<CheckSolid class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" /> High-resolution images recommended
					(1920x1080 or higher)
				</li>
				<li class="flex items-start gap-2">
					<CheckSolid class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" /> No offensive or inappropriate
					content
				</li>
				<li class="flex items-start gap-2">
					<CheckSolid class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" /> Include a short description
					and your CMDR name
				</li>
				<li class="flex items-start gap-2">
					<CheckSolid class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" /> By submitting, you grant
					IGFV permission to share your screenshots
				</li>
			</ul>
		</div>
	</div>
	<div use:inview={{ delay: 300 }} class="inview-hidden mt-6 text-center">
		<a
			href="https://discord.gg/igfv"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-lg bg-primary-main px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
		>
			<DiscordBrands class="h-5 w-5" />
			Share on Discord
		</a>
	</div>
</section>
