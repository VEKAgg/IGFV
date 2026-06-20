<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		BookSolid,
		CheckSolid,
		StarSolid,
		RocketSolid,
		FireSolid,
		HammerSolid,
		ToolboxSolid,
		ExternalLinkAltSolid,
		GlobeAmericasSolid,
		CompassSolid,
		ExclamationTriangleSolid,
		BookmarkSolid,
		ChevronRightSolid
	} from 'svelte-awesome-icons';
	import { guides } from '$lib/data/guides';
	import { resolve } from '$app/paths';
	import NewCommandersStart from '$lib/components/UI/NewCommandersStart.svelte';

	// Difficulty categories: 'Beginner' | 'Intermediate' | 'Squadron-Specific'
	const difficulties = ['Beginner', 'Intermediate', 'Squadron-Specific'] as const;

	// Keep track of which guide is expanded
	let expandedGuideSlug = $state<string | null>(null);

	function toggleGuide(slug: string) {
		expandedGuideSlug = expandedGuideSlug === slug ? null : slug;
		if (expandedGuideSlug) {
			// Scroll to expanded guide
			setTimeout(() => {
				document.getElementById(`guide-${slug}`)?.scrollIntoView({ behavior: 'smooth' });
			}, 100);
		}
	}

	// Filter guides by difficulty
	function getGuidesByDifficulty(diff: 'Beginner' | 'Intermediate' | 'Squadron-Specific') {
		return guides.filter(g => g.difficulty === diff);
	}

	// Find the "Start Here" guide for new pilots
	const startHereGuide = guides.find(g => g.isStartHere);
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<BookSolid class="h-4 w-4" />
				<span>Command Academy</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Training</span> Library
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				Access structured gameplay guides written by experienced IGFV wing leaders. From initial credit loops to background simulations, navigate the galaxy with confidence.
			</p>
		</div>
	</div>
</section>

<!-- START HERE GUIDE PATH (Highlighted at the top!) -->
{#if startHereGuide}
	<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
		<div class="relative overflow-hidden rounded-xl border-2 border-primary-main/30 bg-gradient-to-r from-primary-main/10 via-[#000d22]/95 to-primary-main/5 p-6 sm:p-8 shadow-glow">
			<div class="absolute -top-12 -left-12 size-36 rounded-full bg-primary-main/5 blur-2xl"></div>
			
			<div class="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<div class="flex-1">
					<div class="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-main/20 border border-primary-main/30 px-3 py-1 text-[10px] font-bold text-primary-light uppercase tracking-widest">
						<BookmarkSolid class="size-2.5" />
						<span>Start Here Path</span>
					</div>
					<h2 class="text-2xl font-bold text-white uppercase tracking-wide">{startHereGuide.title}</h2>
					<p class="mt-2 text-xs text-gray-400 leading-relaxed max-w-2xl">{startHereGuide.excerpt}</p>
				</div>

				<div class="shrink-0">
					<button 
						onclick={() => toggleGuide(startHereGuide.slug)}
						class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-main px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-primary-light"
					>
						<span>{expandedGuideSlug === startHereGuide.slug ? 'Close Tutorial' : 'Launch Guide'}</span>
						<ChevronRightSolid class="size-3" />
					</button>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- CURATED SECTIONS (Solid high-contrast containers) -->
<section class="border-t border-white/5 bg-[#000814]/90 py-12 sm:py-16 px-4">
	<div class="mx-auto max-w-7xl">
		
		<div class="space-y-16">
			{#each difficulties as diff}
				{@const guidesList = getGuidesByDifficulty(diff)}
				{#if guidesList.length > 0}
					<div>
						<div class="mb-8 border-b border-white/5 pb-2">
							<h3 class="text-lg font-bold text-white uppercase tracking-widest">{diff} Modules</h3>
						</div>

						<div class="grid gap-6 md:grid-cols-2">
							{#each guidesList as guide}
								<div 
									id="guide-{guide.slug}"
									class="rounded-xl border {expandedGuideSlug === guide.slug ? 'border-primary-main/40 bg-[#000d22]' : 'border-white/10 bg-[#000d22]/90'} p-6 transition-all duration-300 flex flex-col justify-between"
								>
									<div>
										<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
											<span class="inline-flex items-center gap-1 rounded bg-white/5 border border-white/10 px-2.5 py-0.5 text-[9px] font-bold text-gray-400 uppercase tracking-wide">
												{guide.category}
											</span>
											<span class="text-[9px] text-gray-500 font-mono">Published: {guide.publishedAt}</span>
										</div>

										<h4 class="text-base font-bold text-white uppercase tracking-wide mb-2">{guide.title}</h4>
										<p class="text-xs text-gray-400 leading-relaxed mb-6">{guide.excerpt}</p>
										
										<!-- Expanded Steps -->
										{#if expandedGuideSlug === guide.slug}
											<div class="border-t border-white/5 pt-5 mt-5 space-y-6">
												<p class="text-xs leading-relaxed text-gray-300 font-sans">{guide.content}</p>
												
												{#if guide.steps && guide.steps.length > 0}
													<div class="space-y-4">
														<span class="text-[10px] uppercase font-bold text-primary-light font-mono block">Step-by-Step Training:</span>
														{#each guide.steps as step, idx}
															<div class="flex gap-4 border-l border-white/10 pl-4 relative">
																<div class="absolute -left-[5px] top-1.5 size-2 rounded-full bg-primary-main"></div>
																<div>
																	<h5 class="text-xs font-bold text-white uppercase">{step.title}</h5>
																	<p class="text-xs text-gray-400 mt-1 leading-relaxed">{step.text}</p>
																</div>
															</div>
														{/each}
													</div>
												{/if}
											</div>
										{/if}
									</div>

									<div class="mt-6 border-t border-white/5 pt-4 flex justify-end">
										<button 
											onclick={() => toggleGuide(guide.slug)}
											class="inline-flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-white uppercase transition-colors"
										>
											<span>{expandedGuideSlug === guide.slug ? 'Collapse File' : 'Read Full File'}</span>
											<ChevronRightSolid class="size-3.5" />
										</button>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>

	</div>
</section>

<!-- Onboarding Panel at the bottom -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<NewCommandersStart />
	</div>
</section>
