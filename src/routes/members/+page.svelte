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
	import { members, standardMembersPlaceholder } from '$lib/data/members';
	import DataStatusPanel from '$lib/components/UI/DataStatusPanel.svelte';

	// Combine real members with placeholder roster
	const allMembers = [...members, ...standardMembersPlaceholder];

	// Compute role distribution for community summary
	const roleGroups = $derived(
		allMembers.reduce(
			(acc, m) => {
				const cats = m.categories ?? [];
				for (const cat of cats) {
					acc[cat] = (acc[cat] ?? 0) + 1;
				}
				return acc;
			},
			{} as Record<string, number>
		)
	);

	// Filters
	let selectedRole = $state<string>('All');

	const filteredRoster = $derived(
		allMembers.filter((cmdr) => {
			return selectedRole === 'All' || (cmdr.categories ?? []).includes(selectedRole);
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
				<UsersSolid class="h-4 w-4" />
				<span>Flight Deck Roster</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Roster</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Meet the commanders flying under the Interstellar Goodfellas tag. Review active duty wing
				leads, support staff, and active pilots.
			</p>
		</div>
	</div>
</section>

<!-- COMMUNITY MAKEUP SUMMARY -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-8 lg:grid-cols-3">
		<!-- Left: Role Distribution -->
		<div
			use:inview
			class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow sm:p-8 lg:col-span-2"
		>
			<h2 class="mb-4 text-xl font-bold tracking-wider text-white uppercase">
				Community Makeup
			</h2>
			<p class="mb-6 text-xs leading-relaxed text-gray-400">
				{allMembers.length} active pilots across {Object.keys(roleGroups).length} operational
				groups. Roles coordinate around specialized operational groups to keep the squadron active
				and secure.
			</p>

			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{#each Object.entries(roleGroups).sort((a, b) => b[1] - a[1]) as [role, count]}
					<div class="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-2.5">
						<span class="text-xs font-semibold text-gray-300 uppercase">{role}</span>
						<span class="font-mono text-sm font-bold text-primary-light">{count}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Right: Status sync note -->
		<div
			use:inview={{ delay: 150 }}
			class="inview-hidden flex flex-col justify-between rounded-xl border border-primary-main/20 bg-linear-to-br from-primary-main/5 to-primary-main/15 p-6 shadow-glow"
		>
			<div>
				<div class="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
					<span class="text-xs font-bold text-white uppercase">Sync Status</span>
					<DataStatusPanel state="placeholder" source="Inara DB Sync" />
				</div>
				<h3 class="mb-2 text-sm font-bold text-white uppercase">Registry Connection</h3>
				<p class="text-xs leading-relaxed text-gray-400">
					Automated Inara API logs sync is currently undergoing maintenance. The registry below
					represents featured command wing pilots and active rosters. Full sync is coming soon.
				</p>
			</div>

			<a
				href="https://inara.cz/elite/squadron/6548/"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-6 inline-flex items-center justify-center gap-2 rounded bg-primary-main px-4 py-2.5 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
			>
				<span>View Inara Registry</span>
				<ExternalLinkAltSolid class="size-3" />
			</a>
		</div>
	</div>
</section>

<!-- ROSTER GRID (Role filtering) -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl">
		<!-- Role Filters -->
		<div class="mb-12 flex flex-wrap justify-center gap-2">
			{#each roleFilters as role}
				<button
					onclick={() => (selectedRole = role)}
					class="rounded px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all {selectedRole ===
					role
						? 'bg-primary-main text-white shadow-md'
						: 'border border-white/10 bg-[#000d22]/50 text-gray-400 hover:bg-white/5 hover:text-white'}"
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
						<div
							class="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/95 p-6 shadow-sm transition-all hover:border-primary-main/20"
						>
							<div>
								<div class="mb-4 flex items-center gap-3.5 border-b border-white/5 pb-3.5">
									<div
										class="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary-main/30 bg-primary-main/15 text-sm font-bold text-primary-light"
									>
										{cmdr.name
											.split(' ')
											.map((n) => n[0])
											.join('')
											.slice(0, 2)
											.toUpperCase()}
									</div>
									<div class="min-w-0 flex-1">
										<h3 class="text-sm font-bold tracking-wide text-white uppercase">
											CMDR {cmdr.name.replace('CMDR ', '')}
										</h3>
										<span
											class="text-[10px] font-semibold tracking-widest text-primary-light uppercase"
											>{cmdr.role}</span
										>
									</div>
									{#if cmdr.inaraUrl}
										<a
											href={cmdr.inaraUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="shrink-0 text-gray-500 transition-colors hover:text-primary-light"
											title="View on Inara"
										>
											<ExternalLinkAltSolid class="size-3.5" />
										</a>
									{/if}
								</div>

								<p class="mb-3 font-sans text-xs leading-relaxed text-gray-400">{cmdr.bio}</p>

								<div class="mb-3 flex items-center gap-2 text-[10px] text-gray-500">
									<StarSolid class="size-3 text-primary-light" />
									<span class="font-semibold text-gray-400">{cmdr.rank}</span>
								</div>

								<div class="mb-4 flex flex-wrap gap-1.5">
									{#each cmdr.categories ?? [] as tag}
										<span
											class="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-semibold text-gray-400 uppercase"
										>
											{tag}
										</span>
									{/each}
								</div>
							</div>

							<div
								class="flex items-center justify-between border-t border-white/5 pt-3.5 font-mono text-[11px] text-gray-500"
							>
								<span>Platform: {cmdr.platform}</span>
								<span>Timezone: {cmdr.timezone}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div
				class="mx-auto max-w-md rounded-xl border border-white/10 bg-[#000d22]/90 p-12 text-center"
			>
				<ExclamationTriangleSolid class="mx-auto mb-3 size-8 text-gray-500" />
				<h3 class="mb-1 text-lg font-bold text-white uppercase">No Members found</h3>
				<p class="text-xs text-gray-400">Try choosing a different role filter category tag.</p>
			</div>
		{/if}
	</div>
</section>
