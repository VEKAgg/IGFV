<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		RocketSolid,
		StarSolid,
		CheckSolid,
		UsersSolid,
		CalendarAltSolid,
		CompassSolid,
		SpaceShuttleSolid,
		ShieldAltSolid,
		ExclamationTriangleSolid,
		UserAstronautSolid
	} from 'svelte-awesome-icons';
	import { operations } from '$lib/data/operations';
	import DataStatusPanel from '$lib/components/UI/DataStatusPanel.svelte';
	import CurrentFocus from '$lib/components/UI/CurrentFocus.svelte';

	// Filter tabs
	let activeTab = $state<'active' | 'upcoming' | 'completed'>('active');

	const enrichedOps = operations.map(op => {
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
			help = 'Meet in LHS 3447 resource extraction sites and wing up to suppress pirate incursions.';
			beginnerFriendly = true;
			tags = ['combat', 'security', 'open-to-new-pilots'];
		} else if (op.id === 'op-003') {
			roles = 'Cargo Haulers, Logistics Crew';
			help = 'Procure Tritium from nearby markets and deliver to ISS Valhall storage depot.';
			beginnerFriendly = true;
			tags = ['logistics', 'trade', 'open-to-new-pilots'];
		} else if (op.id === 'op-004') {
			roles = 'Long-Range Explorers';
			help = 'Help establish safe path points and scan market rates along the transit connection stations.';
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

	let filteredOps = $derived(enrichedOps.filter(op => op.status === activeTab));
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<RocketSolid class="h-4 w-4" />
				<span>Mission Control Center</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Tactical <span class="text-primary-main">Mission</span> Board
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				Monitor ongoing squadron operations, check logistics goals, and find active wing missions to contribute to the Goodfellas presence in the galaxy.
			</p>
		</div>
	</div>
</section>

<!-- Current Focus & Live status indicator -->
<section class="mx-auto max-w-7xl px-4 py-8">
	<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
		<h2 class="text-xl font-bold text-white uppercase tracking-wider">Tactical Focus</h2>
		<DataStatusPanel state="live" source="Squadron Registry API" />
	</div>
	<CurrentFocus />
</section>

<!-- Mission board board view -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	
	<!-- Filter Tabs -->
	<div class="mb-12 flex justify-center">
		<div class="inline-flex rounded-lg border border-white/10 bg-[#000d22]/90 p-1">
			{#each [
				{ id: 'active', label: 'Active Missions' },
				{ id: 'upcoming', label: 'Upcoming Plans' },
				{ id: 'completed', label: 'Archived / Complete' }
			] as tab}
				<button
					onclick={() => activeTab = tab.id as any}
					class="rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all {activeTab === tab.id 
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
			{#each filteredOps as op, i}
				<div use:inview={{ delay: i * 80 }} class="inview-hidden group">
					<div class="bg-[#000d22]/95 h-full rounded-xl border border-white/10 p-6 shadow-glow transition-all duration-300 hover:border-primary-main/30 flex flex-col justify-between">
						
						<!-- Header -->
						<div>
							<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
								<div class="flex items-center gap-2">
									<!-- Priority Badge -->
									{#if op.priority === 'Urgent'}
										<span class="inline-flex items-center gap-1 rounded-full bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 text-[10px] font-bold text-red-400">
											<ExclamationTriangleSolid class="size-2.5 animate-pulse" />
											Urgent
										</span>
									{:else if op.priority === 'High'}
										<span class="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-400">
											High
										</span>
									{:else}
										<span class="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-bold text-gray-400">
											{op.priority}
										</span>
									{/if}

									<!-- Beginner Friendly indicator -->
									{#if op.beginnerFriendly}
										<span class="inline-flex items-center rounded bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-[10px] font-bold text-green-400 uppercase tracking-wide">
											New Pilots Welcome
										</span>
									{/if}
								</div>

								<span class="text-[10px] text-gray-500 font-mono">ID: {op.id}</span>
							</div>

							<h3 class="mb-2 text-xl font-bold text-white uppercase tracking-wide">{op.title}</h3>
							<p class="text-xs text-gray-400 mb-4 leading-relaxed">{op.summary}</p>
							
							<!-- Progress bar for active -->
							{#if op.status === 'active'}
								<div class="mb-5">
									<div class="flex items-center justify-between text-[11px] text-gray-500 mb-1">
										<span>Campaign Progress</span>
										<span>{op.progress}%</span>
									</div>
									<div class="h-1.5 w-full overflow-hidden rounded-full bg-white/5 border border-white/5">
										<div class="h-full bg-primary-main rounded-full" style="width: {op.progress}%"></div>
									</div>
								</div>
							{/if}

							<!-- Detailed Specifications -->
							<div class="space-y-3.5 border-t border-white/5 pt-4">
								<div class="flex flex-col gap-1.5">
									<span class="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Required Wing Roles</span>
									<span class="text-xs font-semibold text-white">{op.roles}</span>
								</div>
								<div class="flex flex-col gap-1.5">
									<span class="text-[10px] uppercase font-bold text-gray-500 tracking-wider">How to Contribute</span>
									<span class="text-xs text-gray-300 leading-relaxed">{op.help}</span>
								</div>
							</div>
						</div>

						<!-- Footer info -->
						<div class="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-xs text-gray-500">
							<span class="flex items-center gap-1"><UserAstronautSolid class="size-3.5 text-primary-light" /> Operations Lead: {op.lead}</span>
							<span class="font-mono">{op.eta}</span>
						</div>

					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="text-center rounded-xl border border-white/10 bg-[#000d22]/90 p-12">
			<ExclamationTriangleSolid class="size-8 text-gray-500 mx-auto mb-3" />
			<h3 class="text-lg font-bold text-white uppercase mb-1">No Missions Found</h3>
			<p class="text-xs text-gray-400">All campaigns in this sector are currently resolved or idle.</p>
		</div>
	{/if}

</section>
