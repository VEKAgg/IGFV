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
	const newCommanderToolkit = externalResources.filter(r => r.isNewCommanderTool);

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
		return externalResources.filter(r => r.category === cat);
	}
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<WrenchSolid class="h-4 w-4" />
				<span>Galactic Toolkit</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Third-Party <span class="text-primary-main">Resources</span>
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				Third-party tools are a critical part of the Elite Dangerous flight ecosystem. We have indexed and categorized the best tools to help you sync profiles, plan builds, and coordinate fleet logistics.
			</p>
		</div>
	</div>
</section>

<!-- NEW COMMANDER TOOLKIT (Highlighted at the top!) -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div use:inview class="inview-hidden mb-8 border-b border-white/5 pb-4">
		<h2 class="text-2xl font-bold text-white uppercase tracking-wider">
			New Commander <span class="text-primary-main">Toolkit</span>
		</h2>
		<p class="text-xs text-gray-400 mt-1">If you are new to the squadron, set up these three essential tools first to integrate with our network</p>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each newCommanderToolkit as tool, i}
			<div use:inview={{ delay: i * 100 }} class="inview-hidden">
				<div class="bg-gradient-to-br from-primary-main/5 via-[#000d22]/95 to-primary-main/10 h-full rounded-xl border-2 border-primary-main/20 p-6 flex flex-col justify-between shadow-glow">
					<div>
						<div class="mb-4 flex items-center justify-between">
							<span class="inline-flex rounded bg-primary-main/20 px-2.5 py-0.5 text-[10px] font-bold text-primary-light uppercase tracking-wider border border-primary-main/30">
								Step {i + 1}
							</span>
							<span class="text-[10px] text-green-400 uppercase font-bold tracking-wide font-mono">Highly Critical</span>
						</div>
						<h3 class="text-lg font-bold text-white uppercase mb-2 tracking-wide">{tool.title}</h3>
						<p class="text-xs text-gray-300 leading-relaxed mb-4">{tool.description}</p>
						
						<div class="border-t border-white/5 pt-3">
							<span class="text-[10px] uppercase font-bold text-primary-light font-mono block mb-1">Squadron Utility:</span>
							<p class="text-xs text-gray-400 leading-relaxed">{tool.squadronUtility}</p>
						</div>
					</div>

					<a 
						href={tool.url} 
						target="_blank" 
						rel="noopener noreferrer" 
						class="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-main px-4 py-2.5 text-xs font-bold text-white hover:bg-primary-light uppercase tracking-wider"
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
<section class="border-t border-white/5 bg-[#000814]/90 py-12 sm:py-16 px-4">
	<div class="mx-auto max-w-7xl">
		<h2 use:inview class="inview-hidden text-2xl font-bold text-white uppercase tracking-wider mb-12 text-center">
			Galactic Database <span class="text-primary-main">& Utilities</span>
		</h2>

		<div class="space-y-16">
			{#each categories as category}
				{@const resources = getResourcesByCategory(category)}
				{#if resources.length > 0}
					<div use:inview class="inview-hidden">
						<div class="mb-6 border-b border-white/5 pb-2">
							<h3 class="text-base font-bold text-white uppercase tracking-widest">{category}</h3>
						</div>
						<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{#each resources as tool}
								<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 flex flex-col justify-between hover:border-primary-main/20 transition-colors">
									<div>
										<h4 class="text-sm font-bold text-white uppercase mb-2 tracking-wide">{tool.title}</h4>
										<p class="text-xs text-gray-400 leading-relaxed mb-4">{tool.description}</p>
										
										<div class="border-t border-white/5 pt-3">
											<span class="text-[9px] uppercase font-bold text-gray-500 tracking-wider block mb-1">Squadron Context:</span>
											<p class="text-xs text-gray-500 leading-relaxed font-sans">{tool.squadronUtility}</p>
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
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<NewCommandersStart />
	</div>
</section>
