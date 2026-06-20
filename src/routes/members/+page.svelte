<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		UsersSolid,
		StarSolid,
		ClockSolid,
		GlobeAmericasSolid,
		HandshakeSolid,
		FireSolid,
		ExternalLinkAltSolid,
		CompassSolid,
		ShieldAltSolid,
		UserAstronautSolid,
		ExclamationTriangleSolid,
		InfoCircleSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import { members, leadership, standardMembersPlaceholder } from '$lib/data/members';
	import DataStatusPanel from '$lib/components/UI/DataStatusPanel.svelte';

	// Filters
	let selectedRole = $state<string>('All');

	// Enriched roster mapping category tags
	const fullRoster = [
		{
			name: 'Don Samen',
			role: 'Leader',
			rank: 'Elite Explorer',
			platform: 'PC',
			timezone: 'UTC+1',
			bio: 'Founder and overall commander of IGFV. Coordinates carrier loops and ensures a relaxed, low-stress community.',
			categories: ['Leadership', 'Logistics', 'Mentors']
		},
		{
			name: 'Twisted VorteK',
			role: 'Manager',
			rank: 'Elite Combat V',
			platform: 'PC',
			timezone: 'UTC-5',
			bio: 'Active wing manager. Specializes in bounty hunting loops, engineering blueprints, and combat tactics training.',
			categories: ['Leadership', 'Combat Pilots', 'Mentors', 'Specialists']
		},
		{
			name: 'Sarah Thorne',
			role: 'Officer / Lead Explorer',
			rank: 'Elite Explorer III',
			platform: 'PC',
			timezone: 'UTC',
			bio: 'Lead organizer of squadron expeditions. Helps pilots route through distant nebulas and map cartography.',
			categories: ['Leadership', 'Explorers', 'Mentors']
		},
		{
			name: 'Marcus Vance',
			role: 'Recruiter',
			rank: 'Elite Trader',
			platform: 'Cross-platform',
			timezone: 'UTC+2',
			bio: 'Welcomes new pilots on Discord and assists them with their initial applications.',
			categories: ['Recruiters', 'Traders']
		},
		{
			name: 'Jin-Woo',
			role: 'Logistics Lead',
			rank: 'Elite Trader III',
			platform: 'PC',
			timezone: 'UTC+9',
			bio: 'Coordinates fleet carrier Tritium restocking runs and monitors local commodity markets.',
			categories: ['Logistics', 'Specialists', 'Traders']
		},
		{
			name: 'CMDR Aethelgard',
			role: 'Commander',
			rank: 'Dangerous',
			platform: 'PC',
			timezone: 'UTC+1',
			bio: 'Active combat wing pilot participating in LHS 3447 authority security runs.',
			categories: ['Combat Pilots']
		},
		{
			name: 'CMDR Nova_Storm',
			role: 'Commander',
			rank: 'Ranger',
			platform: 'Xbox',
			timezone: 'UTC-6',
			bio: 'Deep space mapper currently stationed aboard the ISS Valhall hangar bay.',
			categories: ['Explorers']
		},
		{
			name: 'CMDR Polaris_Cap',
			role: 'Commander',
			rank: 'Broker',
			platform: 'PlayStation',
			timezone: 'UTC',
			bio: 'Trade fleet pilot assisting with Tritium restocking trade loops.',
			categories: ['Traders']
		},
		{
			name: 'CMDR VoidWalker',
			role: 'Commander',
			rank: 'Elite Explorer',
			platform: 'PC',
			timezone: 'UTC+3',
			bio: 'Charting pristine rings and planetary surfaces beyond the bubble.',
			categories: ['Explorers']
		}
	];

	// Filter computed list
	let filteredRoster = $derived(
		fullRoster.filter(cmdr => {
			return selectedRole === 'All' || cmdr.categories.includes(selectedRole);
		})
	);

	const roleFilters = [
		'All',
		'Leadership',
		'Mentors',
		'Recruiters',
		'Explorers',
		'Traders',
		'Combat Pilots',
		'Logistics',
		'Specialists'
	];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<UsersSolid class="h-4 w-4" />
				<span>Flight Deck Roster</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Roster</span>
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				Meet the commanders flying under the Interstellar Goodfellas tag. Review active duty wing leads, support staff, and active pilots.
			</p>
		</div>
	</div>
</section>

<!-- ROSTER SUMMARY MODULE (Explaining kinds of members) -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-8 lg:grid-cols-3">
		<!-- Left: Roles Summary Card -->
		<div use:inview class="inview-hidden lg:col-span-2 rounded-xl border border-white/10 bg-[#000d22]/90 p-6 sm:p-8 shadow-glow">
			<h2 class="text-xl font-bold text-white uppercase tracking-wider mb-4">Squadron Roles Guide</h2>
			<p class="text-xs text-gray-400 leading-relaxed mb-6">
				To support a thriving multi-platform community, our members coordinate around specialized operational groups. These roles help keep the squadron active and secure.
			</p>
			
			<div class="grid gap-4 sm:grid-cols-2 text-xs">
				<div class="border-l border-primary-main pl-4">
					<span class="font-bold text-white uppercase block">Mentors & Recruiters</span>
					<p class="text-gray-500 mt-1">Recruiters welcome new arrivals in Discord. Mentors pair with newer pilots to help with outfitting and credit farming loops.</p>
				</div>
				<div class="border-l border-primary-main pl-4">
					<span class="font-bold text-white uppercase block">Explorers & Combat</span>
					<p class="text-gray-500 mt-1">Explorers chart coordinates beyond the bubble. Combat pilots wing up for authority security runs and AX defence.</p>
				</div>
			</div>
		</div>

		<!-- Right: Status sync note -->
		<div use:inview={{ delay: 150 }} class="inview-hidden flex flex-col justify-between rounded-xl border border-primary-main/20 bg-gradient-to-br from-primary-main/5 to-primary-main/15 p-6 shadow-glow">
			<div>
				<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
					<span class="text-xs font-bold text-white uppercase">Sync Status</span>
					<DataStatusPanel state="placeholder" source="Inara DB Sync" />
				</div>
				<h3 class="text-sm font-bold text-white uppercase mb-2">Registry Connection</h3>
				<p class="text-xs text-gray-400 leading-relaxed">
					Automated Inara API logs sync is currently undergoing maintenance. The registry below represents featured command wing pilots and active rosters. Full sync is coming soon.
				</p>
			</div>
			
			<a 
				href="https://inara.cz/elite/squadron/6548/" 
				target="_blank" 
				rel="noopener noreferrer" 
				class="mt-6 inline-flex items-center justify-center gap-2 rounded bg-primary-main px-4 py-2.5 text-xs font-bold text-white hover:bg-primary-light uppercase tracking-wider"
			>
				<span>View Inara Registry</span>
				<ExternalLinkAltSolid class="size-3" />
			</a>
		</div>
	</div>
</section>

<!-- ROSTER GRID (Role filtering) -->
<section class="border-t border-white/5 bg-[#000814]/90 py-12 sm:py-16 px-4">
	<div class="mx-auto max-w-7xl">
		
		<!-- Role Filters -->
		<div class="mb-12 flex flex-wrap gap-2 justify-center">
			{#each roleFilters as role}
				<button
					onclick={() => selectedRole = role}
					class="rounded px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all {selectedRole === role 
						? 'bg-primary-main text-white shadow-md' 
						: 'text-gray-400 hover:bg-white/5 hover:text-white border border-white/10 bg-[#000d22]/50'}"
				>
					{role}
				</button>
			{/each}
		</div>

		<!-- Members Grid (Solid tinted panels) -->
		{#if filteredRoster.length > 0}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredRoster as cmdr, idx}
					<div use:inview={{ delay: idx * 50 }} class="inview-hidden group">
						<div class="bg-[#000d22]/95 h-full rounded-xl border border-white/10 p-6 shadow-sm transition-all hover:border-primary-main/20 flex flex-col justify-between">
							<div>
								<div class="flex items-center gap-3.5 border-b border-white/5 pb-3.5 mb-4">
									<div class="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-main/15 text-sm font-bold text-primary-light border border-primary-main/30">
										{cmdr.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}
									</div>
									<div>
										<h3 class="text-sm font-bold text-white uppercase tracking-wide">CMDR {cmdr.name.replace('CMDR ', '')}</h3>
										<span class="text-[10px] font-semibold text-primary-light uppercase tracking-widest">{cmdr.role}</span>
									</div>
								</div>

								<p class="text-xs text-gray-400 leading-relaxed font-sans mb-4">{cmdr.bio}</p>

								<div class="flex flex-wrap gap-1.5 mb-4">
									{#each cmdr.categories as tag}
										<span class="rounded bg-white/5 px-2 py-0.5 text-[9px] text-gray-400 font-semibold uppercase border border-white/5">
											{tag}
										</span>
									{/each}
								</div>
							</div>

							<div class="border-t border-white/5 pt-3.5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
								<span>Platform: {cmdr.platform}</span>
								<span>Timezone: {cmdr.timezone}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="text-center rounded-xl border border-white/10 bg-[#000d22]/90 p-12 max-w-md mx-auto">
				<ExclamationTriangleSolid class="size-8 text-gray-500 mx-auto mb-3" />
				<h3 class="text-lg font-bold text-white uppercase mb-1">No Members found</h3>
				<p class="text-xs text-gray-400">Try choosing a different role filter category tag.</p>
			</div>
		{/if}

	</div>
</section>
