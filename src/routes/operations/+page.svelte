<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		RocketSolid,
		ExclamationTriangleSolid,
		UserAstronautSolid,
		ArrowRightSolid
	} from 'svelte-awesome-icons';
	import { operations } from '$lib/data/operations';
	import DataStatusPanel from '$lib/components/UI/DataStatusPanel.svelte';
	import CurrentFocus from '$lib/components/UI/CurrentFocus.svelte';

	// Filter tabs
	let activeTab = $state<'active' | 'upcoming' | 'completed'>('active');

	const enrichedOps = operations.map((op) => {
		let roles = 'All pilots';
		let help = 'Join Discord and report to wing commander.';
		let beginnerFriendly = true;
		let tags: string[] = [];

		if (op.id === 'op-001') {
			roles = 'Explorers, Cartographers';
			help = 'Equip a Detailed Surface Scanner (DSS) and map systems adjacent to Vulcan Nebula.';
			beginnerFriendly = true;
			tags = ['expedition', 'logistics', 'open-to-new-pilots'];
		} else if (op.id === 'op-002') {
			roles = 'Combat Pilots, Escorts';
			help =
				'Meet in LHS 3447 resource extraction sites and wing up to suppress pirate incursions.';
			beginnerFriendly = true;
			tags = ['combat', 'security', 'open-to-new-pilots'];
		} else if (op.id === 'op-003') {
			roles = 'Cargo Haulers, Logistics Crew';
			help = 'Procure Tritium from nearby markets and deliver to ISS Valhall storage depot.';
			beginnerFriendly = true;
			tags = ['logistics', 'trade', 'open-to-new-pilots'];
		} else if (op.id === 'op-004') {
			roles = 'Long-Range Explorers';
			help =
				'Help establish safe path points and scan market rates along the transit connection stations.';
			beginnerFriendly = false;
			tags = ['expedition', 'navigation'];
		} else if (op.id === 'op-005') {
			roles = 'AX Combat Pilots, Engineers';
			help = 'Warp to planetary outposts and engage Thargoid interceptors in defensive wings.';
			beginnerFriendly = false;
			tags = ['combat', 'anti-xeno', 'urgent'];
		} else if (op.id === 'op-006') {
			roles = 'All Active Pilots';
			help = 'Scan and log high-value worlds within 1,000 light-years of the Bubble.';
			beginnerFriendly = true;
			tags = ['expedition', 'community-goal'];
		}

		return {
			...op,
			roles,
			help,
			beginnerFriendly,
			tags
		};
	});

	let filteredOps = $derived(enrichedOps.filter((op) => op.status === activeTab));
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
				<RocketSolid class="h-4 w-4" />
				<span>Mission Control Center</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Tactical <span class="text-primary-main">Mission</span> Board
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Monitor ongoing squadron operations, check logistics goals, and find active wing missions to
				contribute to the Goodfellas presence in the galaxy.
			</p>
		</div>
	</div>
</section>

<!-- Current Focus & Live status indicator -->
<section class="mx-auto max-w-7xl px-4 py-8">
	<div class="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
		<h2 class="text-xl font-bold tracking-wider text-white uppercase">Tactical Focus</h2>
		<DataStatusPanel state="live" source="Squadron Registry API" />
	</div>
	<CurrentFocus />
</section>

<!-- Mission board board view -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<!-- Filter Tabs -->
	<div class="mb-12 flex justify-center">
		<div class="inline-flex rounded-lg border border-white/10 bg-[#000d22]/90 p-1">
			{#each [{ id: 'active', label: 'Active Missions' }, { id: 'upcoming', label: 'Upcoming Plans' }, { id: 'completed', label: 'Archived / Complete' }] as tab (tab.id)}
				<button
					onclick={() => (activeTab = tab.id as any)}
					class="rounded-md px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all {activeTab ===
					tab.id
						? 'bg-primary-main text-white shadow-md'
						: 'text-gray-400 hover:text-white'}"
				>
					{tab.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Cards list -->
	{#if filteredOps.length > 0}
		<div class="grid gap-6 md:grid-cols-2">
			{#each filteredOps as op, i (op.id)}
				<div use:inview={{ delay: i * 80 }} class="inview-hidden group">
					<div
						class="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/95 p-6 shadow-glow transition-all duration-300 hover:border-primary-main/30"
					>
						<!-- Header -->
						<div>
							<div class="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
								<div class="flex items-center gap-2">
									<!-- Priority Badge -->
									{#if op.priority === 'Urgent'}
										<span
											class="inline-flex items-center gap-1 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-[10px] font-bold text-red-400"
										>
											<ExclamationTriangleSolid class="size-2.5 animate-pulse" />
											Urgent
										</span>
									{:else if op.priority === 'High'}
										<span
											class="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-400"
										>
											High
										</span>
									{:else}
										<span
											class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold text-gray-400"
										>
											{op.priority}
										</span>
									{/if}

									<!-- Beginner Friendly indicator -->
									{#if op.beginnerFriendly}
										<span
											class="inline-flex items-center rounded border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-green-400 uppercase"
										>
											New Pilots Welcome
										</span>
									{/if}
								</div>

								<span class="font-mono text-[10px] text-gray-500">ID: {op.id}</span>
							</div>

							<h3 class="mb-2 text-xl font-bold tracking-wide text-white uppercase">{op.title}</h3>
							<p class="mb-4 text-xs leading-relaxed text-gray-400">{op.summary}</p>

							<!-- Progress bar for active -->
							{#if op.status === 'active'}
								<div class="mb-5">
									<div class="mb-1 flex items-center justify-between text-[11px] text-gray-500">
										<span>Campaign Progress</span>
										<span>{op.progress}%</span>
									</div>
									<div
										class="h-1.5 w-full overflow-hidden rounded-full border border-white/5 bg-white/5"
									>
										<div
											class="h-full rounded-full bg-primary-main"
											style="width: {op.progress}%"
										></div>
									</div>
								</div>
							{/if}

							<!-- Detailed Specifications -->
							<div class="space-y-3.5 border-t border-white/5 pt-4">
								<div class="flex flex-col gap-1.5">
									<span class="text-[10px] font-bold tracking-wider text-gray-500 uppercase"
										>Required Wing Roles</span
									>
									<span class="text-xs font-semibold text-white">{op.roles}</span>
								</div>
								<div class="flex flex-col gap-1.5">
									<span class="text-[10px] font-bold tracking-wider text-gray-500 uppercase"
										>How to Contribute</span
									>
									<span class="text-xs leading-relaxed text-gray-300">{op.help}</span>
								</div>
							</div>
						</div>

						<!-- Footer info -->
						<div
							class="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-gray-500"
						>
							<span class="flex items-center gap-1"
								><UserAstronautSolid class="size-3.5 text-primary-light" /> Operations Lead: {op.lead}</span
							>
							<span class="font-mono">{op.eta}</span>
						</div>
						{#if op.relatedLink}
							<a
								href={op.relatedLink}
								class="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-primary-light uppercase transition-colors hover:text-white"
							>
								{op.relatedLinkLabel ?? 'View Details'}
								<ArrowRightSolid class="size-3" />
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-12 text-center">
			<ExclamationTriangleSolid class="mx-auto mb-3 size-8 text-gray-500" />
			<h3 class="mb-1 text-lg font-bold text-white uppercase">No Missions Found</h3>
			<p class="text-xs text-gray-400">
				All campaigns in this sector are currently resolved or idle.
			</p>
		</div>
	{/if}
</section>
