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
		galleryItems.filter((item) => {
			return activeCategory === 'all' || item.category === activeCategory;
		})
	);

	// Featured shot: Sagittarius A* arrival or ISS Valhall
	const featuredShot = galleryItems.find((item) => item.id === 'gal-002') || galleryItems[0];
</script>

<!-- Hero Section -->
<section
	class="relative overflow-hidden border-b border-primary-main/20 bg-linear-to-b from-dark-bg/0 to-dark-bg/80"
>
	<div
		class="absolute inset-0 bg-linear-to-b from-primary-main/5 via-transparent to-transparent"
	></div>
	<div class="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary-light uppercase"
			>
				<ImagesSolid class="h-4 w-4" />
				<span>Visual Logbook</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Gallery</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				A curated archive of expeditions, combat maneuvers, tritium loops, and stellar discoveries
				logged by our active commanders.
			</p>
		</div>
	</div>
</section>

<!-- FEATURED SHOT (Curated spotlight section) -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div use:inview class="inview-hidden mb-8 border-b border-white/5 pb-4">
		<h2 class="text-2xl font-bold tracking-wider text-white uppercase">
			Featured <span class="text-primary-main">Spotlight</span>
		</h2>
		<p class="mt-1 text-xs text-gray-400">
			Highlighted moment from our deep-space cartographic expeditions
		</p>
	</div>

	{#if featuredShot}
		<div
			use:inview
			class="inview-hidden grid overflow-hidden rounded-xl border border-white/10 bg-[#000d22]/90 shadow-glow md:grid-cols-3"
		>
			<div class="relative aspect-video min-h-[300px] md:col-span-2 md:aspect-auto">
				<img
					src={featuredShot.imageUrl}
					alt={featuredShot.title}
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
				/>
				<!-- Category overlay badge -->
				<span
					class="absolute top-4 left-4 rounded bg-primary-main/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase"
				>
					{featuredShot.category}
				</span>
			</div>

			<div class="flex flex-col justify-between p-6 sm:p-8">
				<div>
					<span
						class="mb-2 block font-mono text-[10px] tracking-widest text-primary-light uppercase"
						>Operational Moment</span
					>
					<h3 class="mb-3 text-xl font-bold tracking-wide text-white uppercase">
						{featuredShot.title}
					</h3>
					<p class="font-sans text-xs leading-relaxed text-gray-400">{featuredShot.caption}</p>
				</div>

				<div
					class="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-gray-500"
				>
					<span>Log Credit:</span>
					<span class="flex items-center gap-1 font-bold text-white">
						<UserSolid class="size-3 text-primary-light" />
						{featuredShot.credit}
					</span>
				</div>
			</div>
		</div>
	{/if}
</section>

<!-- CURATED GALLERY MEDIA GRID -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl">
		<!-- Category tabs -->
		<div class="mb-12 flex flex-wrap justify-center gap-2">
			{#each galleryCategories as cat}
				<button
					onclick={() => (activeCategory = cat.id)}
					class="rounded px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all {activeCategory ===
					cat.id
						? 'bg-primary-main text-white shadow-md'
						: 'border border-white/10 bg-[#000d22]/50 text-gray-400 hover:bg-white/5 hover:text-white'}"
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
						<div
							class="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#000d22]/90 shadow-sm transition-colors hover:border-primary-main/20"
						>
							<div class="relative aspect-video overflow-hidden">
								<img
									src={item.imageUrl}
									alt={item.title}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>

							<div class="flex flex-1 flex-col justify-between p-5">
								<div>
									<h3 class="mb-2 text-sm font-bold tracking-wide text-white uppercase">
										{item.title}
									</h3>
									<p class="mb-4 font-sans text-xs leading-relaxed text-gray-400">{item.caption}</p>
								</div>

								<div
									class="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-gray-500"
								>
									<span class="font-mono text-[9px] tracking-wider text-gray-500 uppercase"
										>{item.category}</span
									>
									<span class="flex items-center gap-1 font-bold text-white">
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
			<div
				class="mx-auto max-w-md rounded-xl border border-white/10 bg-[#000d22]/90 p-12 text-center"
			>
				<ImageSolid class="mx-auto mb-3 size-8 text-gray-500" />
				<h3 class="mb-1 text-lg font-bold text-white uppercase">No media found</h3>
				<p class="text-xs text-gray-400">
					All coordinates in this quadrant are currently uncharted.
				</p>
			</div>
		{/if}
	</div>
</section>

<!-- Submit screen section -->
<section class="border-t border-white/5 bg-dark-bg/50 px-4 py-16 sm:py-24">
	<div use:inview class="inview-hidden mx-auto max-w-3xl">
		<div class="rounded-xl border border-white/10 bg-[#000d22]/95 p-8 text-center shadow-glow">
			<ImagesSolid class="mx-auto mb-4 h-8 w-8 text-primary-light" />
			<h3 class="text-xl font-bold tracking-wide text-white uppercase">Submit Flight Logs</h3>
			<p class="mx-auto mt-2 mb-6 max-w-xl text-xs leading-relaxed text-gray-400">
				Warp into the Discord coms channel and share your screenshot in the #screenshots room. Let
				our cartographers review and feature your captures here on the operations dashboard!
			</p>

			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded bg-[#5865F2] px-6 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-[#4752C4]"
			>
				<DiscordBrands class="size-4" />
				Open Discord Screenshots
			</a>
		</div>
	</div>
</section>
