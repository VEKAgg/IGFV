<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { BookSolid, BookmarkSolid, ChevronRightSolid } from 'svelte-awesome-icons';
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
		return guides.filter((g) => g.difficulty === diff);
	}

	// Find the "Start Here" guide for new pilots
	const startHereGuide = guides.find((g) => g.isStartHere);
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
				<BookSolid class="h-4 w-4" />
				<span>Command Academy</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Training</span> Library
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Access structured gameplay guides written by experienced IGFV wing leaders. From initial
				credit loops to background simulations, navigate the galaxy with confidence.
			</p>
		</div>
	</div>
</section>

<!-- START HERE GUIDE PATH (Highlighted at the top!) -->
{#if startHereGuide}
	<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
		<div
			class="relative overflow-hidden rounded-xl border-2 border-primary-main/30 bg-linear-to-r from-primary-main/10 via-[#000d22]/95 to-primary-main/5 p-6 shadow-glow sm:p-8"
		>
			<div class="absolute -top-12 -left-12 size-36 rounded-full bg-primary-main/5 blur-2xl"></div>

			<div class="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<div class="flex-1">
					<div
						class="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary-main/30 bg-primary-main/20 px-3 py-1 text-[10px] font-bold tracking-widest text-primary-light uppercase"
					>
						<BookmarkSolid class="size-2.5" />
						<span>Start Here Path</span>
					</div>
					<h2 class="text-2xl font-bold tracking-wide text-white uppercase">
						{startHereGuide.title}
					</h2>
					<p class="mt-2 max-w-2xl text-xs leading-relaxed text-gray-400">
						{startHereGuide.excerpt}
					</p>
				</div>

				<div class="shrink-0">
					<button
						onclick={() => toggleGuide(startHereGuide.slug)}
						class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-main px-6 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
					>
						<span
							>{expandedGuideSlug === startHereGuide.slug ? 'Close Tutorial' : 'Launch Guide'}</span
						>
						<ChevronRightSolid class="size-3" />
					</button>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- TOOLKIT FEATURED CARD -->
<section class="mx-auto max-w-7xl px-4 py-8">
	<a
		href={resolve('/guides/newp-toolkit')}
		use:inview
		class="inview-hidden group block overflow-hidden rounded-xl border border-primary-main/20 bg-linear-to-r from-primary-main/10 via-[#000d22]/95 to-dark-bg/95 shadow-glow transition-all duration-300 hover:border-primary-main/40 hover:shadow-glow-hover"
	>
		<div class="flex items-center gap-6 p-6 sm:p-8">
			<div
				class="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary-main/15 text-primary-light transition-colors group-hover:bg-primary-main/25"
			>
				<BookSolid class="size-7" />
			</div>
			<div class="flex-1">
				<h2 class="text-xl font-bold tracking-wide text-white uppercase">
					Almost Everything <span class="text-primary-main">Toolkit</span>
				</h2>
				<p class="mt-1 text-xs leading-relaxed text-gray-400">
					A comprehensive reference covering Combat, Trading, Exploration, Mining, Power Management,
					Engineering, and Beginner Advice — 21 tips across 7 categories.
				</p>
			</div>
			<div
				class="hidden shrink-0 text-xs font-bold tracking-wider text-primary-light uppercase sm:inline-flex"
			>
				Open Toolkit →
			</div>
		</div>
	</a>
</section>

<!-- CURATED SECTIONS (Solid high-contrast containers) -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl">
		<div class="space-y-16">
			{#each difficulties as diff (diff)}
				{@const guidesList = getGuidesByDifficulty(diff)}
				{#if guidesList.length > 0}
					<div>
						<div class="mb-8 border-b border-white/5 pb-2">
							<h3 class="text-lg font-bold tracking-widest text-white uppercase">{diff} Modules</h3>
						</div>

						<div class="grid gap-6 md:grid-cols-2">
							{#each guidesList as guide (guide.slug)}
								<div
									id="guide-{guide.slug}"
									class="rounded-xl border {expandedGuideSlug === guide.slug
										? 'border-primary-main/40 bg-[#000d22]'
										: 'border-white/10 bg-[#000d22]/90'} flex flex-col justify-between p-6 transition-all duration-300"
								>
									<div>
										<div
											class="mb-4 flex items-center justify-between border-b border-white/5 pb-3"
										>
											<span
												class="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] font-bold tracking-wide text-gray-400 uppercase"
											>
												{guide.category}
											</span>
											<span class="font-mono text-[9px] text-gray-500"
												>Published: {guide.publishedAt}</span
											>
										</div>

										<h4 class="mb-2 text-base font-bold tracking-wide text-white uppercase">
											{guide.title}
										</h4>
										{#if guide.author}
											<p class="mb-2 text-[10px] text-gray-500">
												By {guide.author}
												{#if guide.sourceUrl}
													· <a
														href={guide.sourceUrl}
														target="_blank"
														rel="noopener noreferrer"
														class="text-primary-light transition-colors hover:text-white"
														>{guide.sourceLabel ?? 'External Source'}</a
													>
												{/if}
											</p>
										{/if}
										<p class="mb-6 text-xs leading-relaxed text-gray-400">{guide.excerpt}</p>

										<!-- Expanded Steps -->
										{#if expandedGuideSlug === guide.slug}
											<div class="mt-5 space-y-6 border-t border-white/5 pt-5">
												<p class="font-sans text-xs leading-relaxed text-gray-300">
													{guide.content}
												</p>

												{#if guide.steps && guide.steps.length > 0}
													<div class="space-y-4">
														<span
															class="block font-mono text-[10px] font-bold text-primary-light uppercase"
															>Step-by-Step Training:</span
														>
														{#each guide.steps as step (step.title)}
															<div class="relative flex gap-4 border-l border-white/10 pl-4">
																<div
																	class="absolute top-1.5 left-[-5px] size-2 rounded-full bg-primary-main"
																></div>
																<div>
																	<h5 class="text-xs font-bold text-white uppercase">
																		{step.title}
																	</h5>
																	<p class="mt-1 text-xs leading-relaxed text-gray-400">
																		{step.text}
																	</p>
																</div>
															</div>
														{/each}
													</div>
												{/if}
											</div>
										{/if}
									</div>

									<div class="mt-6 flex justify-end border-t border-white/5 pt-4">
										<button
											onclick={() => toggleGuide(guide.slug)}
											class="inline-flex items-center gap-1.5 text-xs font-bold text-primary-light uppercase transition-colors hover:text-white"
										>
											<span
												>{expandedGuideSlug === guide.slug
													? 'Collapse File'
													: 'Read Full File'}</span
											>
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
<section class="border-t border-white/5 bg-dark-bg/50 px-4 py-16 sm:py-24">
	<div class="mx-auto max-w-6xl">
		<NewCommandersStart />
	</div>
</section>
