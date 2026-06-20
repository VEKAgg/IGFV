<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		ImagesSolid,
		ImageSolid,
		StarSolid,
		CalendarAltSolid,
		UserSolid,
		CheckSolid,
		SpaceShuttleSolid,
		CompassSolid,
		FireSolid,
		HammerSolid,
		DiscordBrands,
		ExternalLinkAltSolid
	} from 'svelte-awesome-icons';
	import { galleryItems, galleryCategories } from '$lib/data/gallery';

	// Category filter state
	let activeCategory = $state<string>('all');

	// Filtering
	let filteredItems = $derived(
		galleryItems.filter(item => {
			return activeCategory === 'all' || item.category === activeCategory;
		})
	);

	// Featured shot: Sagittarius A* arrival or ISS Valhall
	const featuredShot = galleryItems.find(item => item.id === 'gal-002') || galleryItems[0];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<ImagesSolid class="h-4 w-4" />
				<span>Visual Logbook</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Gallery</span>
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				A curated archive of expeditions, combat maneuvers, tritium loops, and stellar discoveries logged by our active commanders.
			</p>
		</div>
	</div>
</section>

<!-- FEATURED SHOT (Curated spotlight section) -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div use:inview class="inview-hidden mb-8 border-b border-white/5 pb-4">
		<h2 class="text-2xl font-bold text-white uppercase tracking-wider">
			Featured <span class="text-primary-main">Spotlight</span>
		</h2>
		<p class="text-xs text-gray-400 mt-1">Highlighted moment from our deep-space cartographic expeditions</p>
	</div>

	{#if featuredShot}
		<div use:inview class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 overflow-hidden shadow-glow grid md:grid-cols-3">
			<div class="md:col-span-2 relative aspect-video md:aspect-auto min-h-[300px]">
				<img 
					src={featuredShot.imageUrl} 
					alt={featuredShot.title} 
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
				/>
				<!-- Category overlay badge -->
				<span class="absolute top-4 left-4 rounded bg-primary-main/80 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
					{featuredShot.category}
				</span>
			</div>
			
			<div class="p-6 sm:p-8 flex flex-col justify-between">
				<div>
					<span class="text-[10px] text-primary-light uppercase tracking-widest font-mono block mb-2">Operational Moment</span>
					<h3 class="text-xl font-bold text-white uppercase tracking-wide mb-3">{featuredShot.title}</h3>
					<p class="text-xs text-gray-400 leading-relaxed font-sans">{featuredShot.caption}</p>
				</div>

				<div class="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-xs text-gray-500">
					<span>Log Credit:</span>
					<span class="font-bold text-white flex items-center gap-1">
						<UserSolid class="size-3 text-primary-light" />
						{featuredShot.credit}
					</span>
				</div>
			</div>
		</div>
	{/if}
</section>

<!-- CURATED GALLERY MEDIA GRID -->
<section class="border-t border-white/5 bg-[#000814]/90 py-12 sm:py-16 px-4">
	<div class="mx-auto max-w-7xl">
		
		<!-- Category tabs -->
		<div class="mb-12 flex flex-wrap gap-2 justify-center">
			{#each galleryCategories as cat}
				<button
					onclick={() => activeCategory = cat.id}
					class="rounded px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all {activeCategory === cat.id 
						? 'bg-primary-main text-white shadow-md' 
						: 'text-gray-400 hover:bg-white/5 hover:text-white border border-white/10 bg-[#000d22]/50'}"
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<!-- Grid list (Frosted cards with solid layout) -->
		{#if filteredItems.length > 0}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredItems as item, idx}
					<div use:inview={{ delay: idx * 60 }} class="inview-hidden">
						<div class="rounded-xl border border-white/10 bg-[#000d22]/90 overflow-hidden shadow-sm hover:border-primary-main/20 transition-colors flex flex-col justify-between h-full">
							<div class="relative aspect-video overflow-hidden">
								<img 
									src={item.imageUrl} 
									alt={item.title} 
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
								/>
							</div>
							
							<div class="p-5 flex-1 flex flex-col justify-between">
								<div>
									<h3 class="text-sm font-bold text-white uppercase tracking-wide mb-2">{item.title}</h3>
									<p class="text-xs text-gray-400 leading-relaxed font-sans mb-4">{item.caption}</p>
								</div>

								<div class="mt-4 border-t border-white/5 pt-3 flex items-center justify-between text-[11px] text-gray-500">
									<span class="uppercase tracking-wider font-mono text-[9px] text-gray-500">{item.category}</span>
									<span class="font-bold text-white flex items-center gap-1">
										<UserSolid class="size-2.5 text-primary-light" />
										{item.credit}
									</span>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="text-center rounded-xl border border-white/10 bg-[#000d22]/90 p-12 max-w-md mx-auto">
				<ImageSolid class="size-8 text-gray-500 mx-auto mb-3" />
				<h3 class="text-lg font-bold text-white uppercase mb-1">No media found</h3>
				<p class="text-xs text-gray-400">All coordinates in this quadrant are currently uncharted.</p>
			</div>
		{/if}

	</div>
</section>

<!-- Submit screen section -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div use:inview class="inview-hidden mx-auto max-w-3xl">
		<div class="rounded-xl border border-white/10 bg-[#000d22]/95 p-8 text-center shadow-glow">
			<ImagesSolid class="mx-auto mb-4 h-8 w-8 text-primary-light" />
			<h3 class="text-xl font-bold text-white uppercase tracking-wide">Submit Flight Logs</h3>
			<p class="mt-2 text-xs leading-relaxed text-gray-400 max-w-xl mx-auto mb-6">
				Warp into the Discord coms channel and share your screenshot in the #screenshots room. Let our cartographers review and feature your captures here on the operations dashboard!
			</p>
			
			<a 
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded bg-[#5865F2] px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#4752C4]"
			>
				<DiscordBrands class="size-4" />
				Open Discord Screenshots
			</a>
		</div>
	</div>
</section>
