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
	const weeklyEvents = events.filter(e => e.status === 'weekly');
	const upcomingEvents = events.filter(e => e.status === 'upcoming');
	const pastEvents = events.filter(e => e.status === 'past');

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
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<CalendarAltSolid class="h-4 w-4" />
				<span>Flight Deck Operations</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Events</span>
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				Coordinate flight loops with wing members. View weekly recurring schedules, upcoming expeditions, and past operational milestones.
			</p>
		</div>
	</div>
</section>

<!-- WEEKLY RHYTHM SECTION -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div use:inview class="inview-hidden mb-12 border-b border-white/5 pb-4">
		<h2 class="text-2xl font-bold text-white uppercase tracking-wider">
			Weekly <span class="text-primary-main">Rhythm</span>
		</h2>
		<p class="text-xs text-gray-400 mt-1">Our recurring gameplay loops. Predictable schedules designed for easy entry</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each weeklyEvents as event, i}
			{@const prep = weeklyPreparation[event.id]}
			<div use:inview={{ delay: i * 100 }} class="inview-hidden">
				<div class="bg-[#000d22]/95 h-full rounded-xl border border-white/10 p-6 shadow-glow flex flex-col justify-between hover:border-primary-main/20 transition-colors">
					<div>
						<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
							<span class="inline-flex rounded-full bg-primary-main/20 px-2.5 py-0.5 text-[9px] font-bold text-primary-light uppercase tracking-widest border border-primary-main/30">
								{event.eventType}
							</span>
							<span class="inline-flex items-center gap-1 rounded bg-green-500/10 px-2 py-0.5 text-[9px] font-bold text-green-400 border border-green-500/20 uppercase tracking-wide">
								{event.difficulty}
							</span>
						</div>

						<h3 class="text-lg font-bold text-white uppercase mb-2 tracking-wide">{event.title}</h3>
						<span class="text-xs text-primary-light font-semibold block mb-4">{event.date}</span>
						<p class="text-xs text-gray-400 leading-relaxed mb-6">{event.description}</p>
						
						{#if prep}
							<div class="space-y-3.5 border-t border-white/5 pt-4 text-xs">
								<div>
									<span class="text-[9px] uppercase font-bold text-gray-500 tracking-wider block mb-0.5">Campaign Purpose:</span>
									<p class="text-gray-300 leading-relaxed">{prep.purpose}</p>
								</div>
								<div>
									<span class="text-[9px] uppercase font-bold text-gray-500 tracking-wider block mb-0.5">Preparation & Fitting:</span>
									<p class="text-gray-300 leading-relaxed font-sans">{prep.requirements}</p>
								</div>
								<div>
									<span class="text-[9px] uppercase font-bold text-gray-500 tracking-wider block mb-0.5">How to Join:</span>
									<p class="text-xs text-gray-400 font-sans leading-relaxed">{prep.joinStep}</p>
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
<section class="border-t border-white/5 bg-[#000814]/90 py-12 sm:py-16 px-4">
	<div class="mx-auto max-w-7xl">
		<h2 use:inview class="inview-hidden text-2xl font-bold text-white uppercase tracking-wider mb-12 text-center">
			Upcoming Campaigns <span class="text-primary-main">& Expeditions</span>
		</h2>

		<div class="grid gap-6 md:grid-cols-2">
			{#each upcomingEvents as event, i}
				<div use:inview={{ delay: i * 100 }} class="inview-hidden">
					<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 flex flex-col justify-between hover:border-primary-main/20 transition-colors">
						<div>
							<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
								<span class="inline-flex rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[9px] font-bold text-gray-400 uppercase tracking-wide">
									{event.eventType}
								</span>
								<span class="inline-flex items-center gap-1 rounded bg-green-500/10 px-2 py-0.5 text-[9px] font-bold text-green-400 border border-green-500/20 uppercase tracking-wide">
									{event.difficulty}
								</span>
							</div>

							<h3 class="text-base font-bold text-white uppercase tracking-wide mb-1">{event.title}</h3>
							<span class="text-xs text-primary-light font-mono block mb-4">{event.date}</span>
							<p class="text-xs text-gray-400 leading-relaxed mb-6">{event.description}</p>

							<div class="border-t border-white/5 pt-4 text-xs space-y-2.5 text-gray-400">
								<div class="flex items-center justify-between">
									<span class="text-gray-500">Scheduled Duration</span>
									<span class="font-bold text-white">{event.duration}</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-gray-500">Landing Location</span>
									<span class="font-medium text-white">{event.participationRoute.includes('carrier') ? 'ISS Valhall Hangar' : 'Sector Wing'}</span>
								</div>
							</div>
						</div>

						<div class="mt-6 border-t border-white/5 pt-4 flex flex-col gap-2">
							<span class="text-[9px] uppercase font-bold text-primary-light font-mono block">Action Checklist:</span>
							<p class="text-xs text-gray-400 font-sans leading-relaxed">{event.participationRoute}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PAST MILESTONES (Group list) -->
<section class="border-t border-white/5 bg-[#000814]/50 py-12 sm:py-16 px-4">
	<div class="mx-auto max-w-5xl">
		<h2 use:inview class="inview-hidden text-2xl font-bold text-white uppercase tracking-wider mb-12 text-center">
			Past <span class="text-primary-main">Milestones</span>
		</h2>

		<div class="space-y-4">
			{#each pastEvents as event}
				<div class="rounded-xl border border-white/5 bg-[#000814]/70 p-5 flex items-start gap-4">
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light">
						<StarSolid class="size-5" />
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center justify-between text-xs mb-1">
							<span class="inline-flex rounded-full bg-white/5 border border-white/5 px-2 py-0.5 text-[9px] font-bold text-gray-400 uppercase tracking-wide">{event.eventType}</span>
							<span class="text-[10px] text-gray-500 font-mono">{event.date.replace('Completed ', '')}</span>
						</div>
						<h4 class="text-xs font-bold text-white uppercase tracking-wide truncate">{event.title}</h4>
						<p class="text-xs text-gray-400 mt-1 leading-relaxed">{event.description}</p>
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
			<h3 class="text-xl font-bold text-white uppercase tracking-wide">RSVP on Discord</h3>
			<p class="mt-2 text-xs leading-relaxed text-gray-400 max-w-xl mx-auto">
				Wing coordination, carrier refueling jumps, and expedition schedules are posted and updated in our Discord #events channels. Prepare your flight setup and meet the wings!
			</p>
			
			<div class="mt-6 flex flex-wrap justify-center gap-4">
				<a 
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded bg-primary-main px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-primary-light"
				>
					<RocketSolid class="size-4" />
					Join Comms Network
				</a>
			</div>
		</div>
	</div>
</section>
