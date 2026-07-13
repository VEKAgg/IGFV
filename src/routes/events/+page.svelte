<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		CalendarAltSolid,
		ClockSolid,
		UsersSolid,
		CheckSolid,
		MapMarkerAltSolid,
		StarSolid,
		RocketSolid,
		BookOpenSolid,
		ShieldAltSolid,
		GlobeAmericasSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import { events } from '$lib/data/events';

	// Grouping events
	const weeklyEvents = events.filter((e) => e.status === 'weekly');
	const upcomingEvents = events.filter((e) => e.status === 'upcoming');
	const pastEvents = events.filter((e) => e.status === 'past');

	// Mapping how to prepare for weekly loops
	const weeklyPreparation = {
		'evt-001': {
			purpose: 'Maxing pilot credits via cargo pooling runs.',
			requirements: 'Cargo hauler (Type-9, Cutter, or Python). Clean ship.',
			joinStep: 'Connect to "Trade Operations" voice channels in Discord.'
		},
		'evt-002': {
			purpose: 'Classroom practice for cold orbiting and target coordination.',
			requirements: 'Medium combat ship with AX weapons (Gauss/Enhanced Multicannons).',
			joinStep: 'Meet in Combat Operations voice channels in Discord.'
		}
	} as Record<string, { purpose: string; requirements: string; joinStep: string }>;
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
				<CalendarAltSolid class="h-4 w-4" />
				<span>Flight Deck Operations</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Events</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Coordinate flight loops with wing members. View weekly recurring schedules, upcoming
				expeditions, and past operational milestones.
			</p>
		</div>
	</div>
</section>

<!-- WEEKLY RHYTHM SECTION -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div use:inview class="inview-hidden mb-12 border-b border-white/5 pb-4">
		<h2 class="text-2xl font-bold tracking-wider text-white uppercase">
			Weekly <span class="text-primary-main">Rhythm</span>
		</h2>
		<p class="mt-1 text-xs text-gray-400">
			Our recurring gameplay loops. Predictable schedules designed for easy entry
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each weeklyEvents as event, i}
			{@const prep = weeklyPreparation[event.id]}
			<div use:inview={{ delay: i * 100 }} class="inview-hidden">
				<div
					class="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/95 p-6 shadow-glow transition-colors hover:border-primary-main/20"
				>
					<div>
						<div class="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
							<span
								class="inline-flex rounded-full border border-primary-main/30 bg-primary-main/20 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-primary-light uppercase"
							>
								{event.eventType}
							</span>
							<span
								class="inline-flex items-center gap-1 rounded border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[9px] font-bold tracking-wide text-green-400 uppercase"
							>
								{event.difficulty}
							</span>
						</div>

						<h3 class="mb-2 text-lg font-bold tracking-wide text-white uppercase">{event.title}</h3>
						<span class="mb-4 block text-xs font-semibold text-primary-light">{event.date}</span>
						<p class="mb-6 text-xs leading-relaxed text-gray-400">{event.description}</p>

						{#if prep}
							<div class="space-y-3.5 border-t border-white/5 pt-4 text-xs">
								<div>
									<span
										class="mb-0.5 block text-[9px] font-bold tracking-wider text-gray-500 uppercase"
										>Campaign Purpose:</span
									>
									<p class="leading-relaxed text-gray-300">{prep.purpose}</p>
								</div>
								<div>
									<span
										class="mb-0.5 block text-[9px] font-bold tracking-wider text-gray-500 uppercase"
										>Preparation & Fitting:</span
									>
									<p class="font-sans leading-relaxed text-gray-300">{prep.requirements}</p>
								</div>
								<div>
									<span
										class="mb-0.5 block text-[9px] font-bold tracking-wider text-gray-500 uppercase"
										>How to Join:</span
									>
									<p class="font-sans text-xs leading-relaxed text-gray-400">{prep.joinStep}</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- UPCOMING SPECIAL EVENTS (Solid panels list) -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl">
		<h2
			use:inview
			class="inview-hidden mb-12 text-center text-2xl font-bold tracking-wider text-white uppercase"
		>
			Upcoming Campaigns <span class="text-primary-main">& Expeditions</span>
		</h2>

		<div class="grid gap-6 md:grid-cols-2">
			{#each upcomingEvents as event, i}
				<div use:inview={{ delay: i * 100 }} class="inview-hidden">
					<div
						class="flex flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/90 p-6 transition-colors hover:border-primary-main/20"
					>
						<div>
							<div class="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
								<span
									class="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] font-bold tracking-wide text-gray-400 uppercase"
								>
									{event.eventType}
								</span>
								<span
									class="inline-flex items-center gap-1 rounded border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[9px] font-bold tracking-wide text-green-400 uppercase"
								>
									{event.difficulty}
								</span>
							</div>

							<h3 class="mb-1 text-base font-bold tracking-wide text-white uppercase">
								{event.title}
							</h3>
							<span class="mb-4 block font-mono text-xs text-primary-light">{event.date}</span>
							<p class="mb-6 text-xs leading-relaxed text-gray-400">{event.description}</p>

							<div class="space-y-2.5 border-t border-white/5 pt-4 text-xs text-gray-400">
								<div class="flex items-center justify-between">
									<span class="text-gray-500">Scheduled Duration</span>
									<span class="font-bold text-white">{event.duration}</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-gray-500">Landing Location</span>
									<span class="font-medium text-white"
										>{event.participationRoute.includes('carrier')
											? 'ISS Valhall Hangar'
											: 'Sector Wing'}</span
									>
								</div>
							</div>
						</div>

						<div class="mt-6 flex flex-col gap-2 border-t border-white/5 pt-4">
							<span class="block font-mono text-[9px] font-bold text-primary-light uppercase"
								>Action Checklist:</span
							>
							<p class="font-sans text-xs leading-relaxed text-gray-400">
								{event.participationRoute}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PAST MILESTONES (Group list) -->
<section class="border-t border-white/5 bg-dark-bg/50 px-4 py-12 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2
			use:inview
			class="inview-hidden mb-12 text-center text-2xl font-bold tracking-wider text-white uppercase"
		>
			Past <span class="text-primary-main">Milestones</span>
		</h2>

		<div class="space-y-4">
			{#each pastEvents as event}
				<div class="flex items-start gap-4 rounded-xl border border-white/5 bg-dark-bg/70 p-5">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light"
					>
						<StarSolid class="size-5" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="mb-1 flex items-center justify-between text-xs">
							<span
								class="inline-flex rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold tracking-wide text-gray-400 uppercase"
								>{event.eventType}</span
							>
							<span class="font-mono text-[10px] text-gray-500"
								>{event.date.replace('Completed ', '')}</span
							>
						</div>
						<h4 class="truncate text-xs font-bold tracking-wide text-white uppercase">
							{event.title}
						</h4>
						<p class="mt-1 text-xs leading-relaxed text-gray-400">{event.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Guidelines Info Banner -->
<section class="mx-auto max-w-4xl px-4 py-16 sm:py-24">
	<div use:inview class="inview-hidden">
		<div class="rounded-xl border border-white/10 bg-[#000d22]/95 p-8 text-center shadow-glow">
			<CalendarAltSolid class="mx-auto mb-4 h-8 w-8 text-primary-light" />
			<h3 class="text-xl font-bold tracking-wide text-white uppercase">RSVP on Discord</h3>
			<p class="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-gray-400">
				Wing coordination, carrier refueling jumps, and expedition schedules are posted and updated
				in our Discord #events channels. Prepare your flight setup and meet the wings!
			</p>

			<div class="mt-6 flex flex-wrap justify-center gap-4">
				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded bg-primary-main px-6 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
				>
					<RocketSolid class="size-4" />
					Join Comms Network
				</a>
			</div>
		</div>
	</div>
</section>
