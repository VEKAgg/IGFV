<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		BookSolid,
		CheckSolid,
		StarSolid,
		RocketSolid,
		ExternalLinkAltSolid,
		CompassSolid,
		HammerSolid,
		FireSolid,
		GlobeAmericasSolid,
		ToolboxSolid,
		QuestionCircleSolid,
		WrenchSolid
	} from 'svelte-awesome-icons';
	import { externalResources } from '$lib/data/resources';
	import NewCommandersStart from '$lib/components/UI/NewCommandersStart.svelte';

	// Filters
	const newCommanderToolkit = externalResources.filter((r) => r.isNewCommanderTool);

	// Group remaining resources by category
	const categories = [
		'Required Tools',
		'Recommended Tools',
		'Squadron Workflow',
		'Exploration',
		'Trade & Mining',
		'Research & Discovery'
	];

	function getResourcesByCategory(cat: string) {
		return externalResources.filter((r) => r.category === cat);
	}
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
				<WrenchSolid class="h-4 w-4" />
				<span>Galactic Toolkit</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Third-Party <span class="text-primary-main">Resources</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Third-party tools are a critical part of the Elite Dangerous flight ecosystem. We have
				indexed and categorized the best tools to help you sync profiles, plan builds, and
				coordinate fleet logistics.
			</p>
		</div>
	</div>
</section>

<!-- NEW COMMANDER TOOLKIT (Highlighted at the top!) -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div use:inview class="inview-hidden mb-8 border-b border-white/5 pb-4">
		<h2 class="text-2xl font-bold tracking-wider text-white uppercase">
			New Commander <span class="text-primary-main">Toolkit</span>
		</h2>
		<p class="mt-1 text-xs text-gray-400">
			If you are new to the squadron, set up these three essential tools first to integrate with our
			network
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each newCommanderToolkit as tool, i}
			<div use:inview={{ delay: i * 100 }} class="inview-hidden">
				<div
					class="flex h-full flex-col justify-between rounded-xl border-2 border-primary-main/20 bg-linear-to-br from-primary-main/5 via-[#000d22]/95 to-primary-main/10 p-6 shadow-glow"
				>
					<div>
						<div class="mb-4 flex items-center justify-between">
							<span
								class="inline-flex rounded border border-primary-main/30 bg-primary-main/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-primary-light uppercase"
							>
								Step {i + 1}
							</span>
							<span class="font-mono text-[10px] font-bold tracking-wide text-green-400 uppercase"
								>Highly Critical</span
							>
						</div>
						<h3 class="mb-2 text-lg font-bold tracking-wide text-white uppercase">{tool.title}</h3>
						<p class="mb-4 text-xs leading-relaxed text-gray-300">{tool.description}</p>

						<div class="border-t border-white/5 pt-3">
							<span class="mb-1 block font-mono text-[10px] font-bold text-primary-light uppercase"
								>Squadron Utility:</span
							>
							<p class="text-xs leading-relaxed text-gray-400">{tool.squadronUtility}</p>
						</div>
					</div>

					<a
						href={tool.url}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-main px-4 py-2.5 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
					>
						<span>Get Setup</span>
						<ExternalLinkAltSolid class="size-3.5" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- CATEGORIZED TOOLS (Solid panel listings) -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl">
		<h2
			use:inview
			class="inview-hidden mb-12 text-center text-2xl font-bold tracking-wider text-white uppercase"
		>
			Galactic Database <span class="text-primary-main">& Utilities</span>
		</h2>

		<div class="space-y-16">
			{#each categories as category}
				{@const resources = getResourcesByCategory(category)}
				{#if resources.length > 0}
					<div use:inview class="inview-hidden">
						<div class="mb-6 border-b border-white/5 pb-2">
							<h3 class="text-base font-bold tracking-widest text-white uppercase">{category}</h3>
						</div>
						<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{#each resources as tool}
								<div
									class="flex flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/90 p-6 transition-colors hover:border-primary-main/20"
								>
									<div>
										<h4 class="mb-2 text-sm font-bold tracking-wide text-white uppercase">
											{tool.title}
										</h4>
										<p class="mb-4 text-xs leading-relaxed text-gray-400">{tool.description}</p>

										<div class="border-t border-white/5 pt-3">
											<span
												class="mb-1 block text-[9px] font-bold tracking-wider text-gray-500 uppercase"
												>Squadron Context:</span
											>
											<p class="font-sans text-xs leading-relaxed text-gray-500">
												{tool.squadronUtility}
											</p>
										</div>
									</div>

									<a
										href={tool.url}
										target="_blank"
										rel="noopener noreferrer"
										class="mt-6 inline-flex items-center justify-center gap-2 rounded border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-white/10 hover:text-white"
									>
										<span>Access Tool</span>
										<ExternalLinkAltSolid class="size-3" />
									</a>
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
