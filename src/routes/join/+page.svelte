<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		RocketSolid,
		CheckSolid,
		DiscordBrands,
		StarSolid,
		UsersSolid,
		HandshakeSolid,
		ShieldAltSolid,
		InfoCircleSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import { testimonials } from '$lib/data/squadron';
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
				<span>Recruitment Portal</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Join the <span class="text-primary-main">Vanguard</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Ready to make the black feel a little less lonely? Joining the Goodfellas is simple,
				welcoming, and entirely obligation-free. Let us get you onboarded and flying with the wing.
			</p>
		</div>
	</div>
</section>

<!-- WHO WE'RE LOOKING FOR & WHAT YOU DON'T NEED -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-8 lg:grid-cols-2">
		<!-- Left: Who we want -->
		<div
			use:inview
			class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow sm:p-8"
		>
			<h2 class="mb-4 text-lg font-bold tracking-wider text-white uppercase">
				Who We're Looking For
			</h2>
			<p class="mb-6 font-sans text-xs leading-relaxed text-gray-400">
				We are building a community of mature, friendly, and cooperative commanders who want to
				explore all that Elite Dangerous has to offer without drama.
			</p>

			<div class="space-y-4 text-xs">
				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400"
					>
						<CheckSolid class="size-3" />
					</span>
					<div>
						<strong class="mb-0.5 block text-white uppercase">Cooperative Wingmen</strong>
						<p class="text-gray-500">
							Commanders who enjoy playing in wings, sharing trade loops, defending stations, and
							exploring together.
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400"
					>
						<CheckSolid class="size-3" />
					</span>
					<div>
						<strong class="mb-0.5 block text-white uppercase">Respectful Comms</strong>
						<p class="text-gray-500">
							Commanders who treat others with decency, respect differences, and welcome newcomers
							warmly.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Right: What is NOT required (No gates!) -->
		<div
			use:inview={{ delay: 150 }}
			class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow sm:p-8"
		>
			<h2 class="mb-4 text-lg font-bold tracking-wider text-white uppercase">
				What You Don't Need
			</h2>
			<p class="mb-6 font-sans text-xs leading-relaxed text-gray-400">
				Unlike military roleplay squadrons, we believe gating entry behind credits or hours kills
				community. There are no benchmarks here.
			</p>

			<div class="space-y-4 text-xs">
				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-primary-main/20 bg-primary-main/10 text-primary-light"
					>
						<CheckSolid class="size-3 text-primary-light" />
					</span>
					<div>
						<strong class="mb-0.5 block text-white uppercase">No Minimum Ranks</strong>
						<p class="text-gray-500">
							You do not need to be Elite. Whether you are Harmless or noviced, you are fully
							welcome.
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-primary-main/20 bg-primary-main/10 text-primary-light"
					>
						<CheckSolid class="size-3 text-primary-light" />
					</span>
					<div>
						<strong class="mb-0.5 block text-white uppercase"
							>No Mandatory Engineering or Ship Logs</strong
						>
						<p class="text-gray-500">
							No ship outfitting requirements. Our mentors will help you unlock engineers at your
							own pace.
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-primary-main/20 bg-primary-main/10 text-primary-light"
					>
						<CheckSolid class="size-3 text-primary-light" />
					</span>
					<div>
						<strong class="mb-0.5 block text-white uppercase">No Activity Quotas</strong>
						<p class="text-gray-500">
							We do not purge members for taking breaks. Real life always comes first.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ONBOARDING TIMELINE: WHAT HAPPENS AFTER YOU JOIN DISCORD -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-16 sm:py-24">
	<div class="mx-auto max-w-4xl">
		<div class="mb-16 text-center">
			<h2 use:inview class="inview-hidden text-3xl font-bold tracking-wider text-white uppercase">
				Your Onboarding <span class="text-primary-main">Timeline</span>
			</h2>
			<div class="mx-auto mt-4 mb-2 h-1 w-16 rounded-full bg-primary-main"></div>
			<p use:inview class="inview-hidden mx-auto max-w-xl text-sm text-gray-400">
				Four simple actions to set up your ship and join squadron wings.
			</p>
		</div>

		<div class="relative ml-4 border-l border-white/10 md:ml-32">
			{#each [{ step: '01', title: 'Connect to Comms', desc: 'Click the Discord invite link. Say hello in the #welcome channel and select your platform/roles in self-roles.' }, { step: '02', title: 'Submit Inara Request', desc: 'Sync your flight profile via EDMC/Inara and submit a request to join Interstellar Goodfellas roster.' }, { step: '03', title: 'Meet Your Flight Mentor', desc: 'An officer will assign you a Flight Mentor in Discord. They will help review ship builds and engineering routes.' }, { step: '04', title: 'Launch with the Wing', desc: 'Jump into our weekly Thursday wing trade loops, mining runs, or AX practice. Welcome to the crew!' }] as timeline}
				<div class="relative mb-10 ml-8">
					<span
						class="absolute top-1.5 -left-12 flex h-4 w-4 items-center justify-center rounded-full border border-primary-main bg-dark-bg"
					>
						<span class="size-2 rounded-full bg-primary-light"></span>
					</span>
					<span
						class="absolute top-1 -left-28 hidden font-mono text-sm font-bold tracking-wider text-primary-light uppercase md:block"
						>Step {timeline.step}</span
					>

					<div class="rounded-lg border border-white/5 bg-dark-bg/60 p-6">
						<span
							class="mb-1 block font-mono text-xs font-bold tracking-wider text-primary-light uppercase md:hidden"
							>Step {timeline.step}</span
						>
						<h3 class="text-base font-bold text-white uppercase">{timeline.title}</h3>
						<p class="mt-2 text-xs leading-relaxed text-gray-400">{timeline.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TESTIMONIALS (Solid cards layout) -->
<section class="border-t border-white/5 bg-dark-bg/50 px-4 py-16 sm:py-24">
	<div class="mx-auto max-w-6xl">
		<h2
			use:inview
			class="inview-hidden mb-16 text-center text-3xl font-bold tracking-wider text-white uppercase"
		>
			Commander <span class="text-primary-main">Logs</span>
		</h2>

		<div class="grid gap-6 md:grid-cols-3">
			{#each testimonials as Quote}
				<div
					class="flex flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow"
				>
					<p class="text-xs leading-relaxed text-gray-300 italic">"{Quote.quote}"</p>
					<div class="mt-6 border-t border-white/5 pt-4">
						<div class="text-xs font-bold text-white">{Quote.commanderName}</div>
						<div class="mt-0.5 text-[10px] tracking-widest text-gray-500 uppercase">
							{Quote.role}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Call to Action (Pre-onboarding bridge) -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-16 sm:py-24">
	<div use:inview class="inview-hidden mx-auto max-w-4xl">
		<div
			class="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-primary-main/10 via-[#000d22]/95 to-dark-bg/95 p-12 text-center shadow-2xl"
		>
			<div class="mb-6 inline-flex rounded-full bg-primary-main/15 p-4 text-primary-light">
				<DiscordBrands class="size-10 text-[#5865F2]" />
			</div>

			<h2 class="mb-4 text-3xl font-bold tracking-wide text-white uppercase">Ready for Launch?</h2>
			<p class="mx-auto mb-8 max-w-xl text-xs leading-relaxed text-gray-300">
				Warp into our Discord server to connect with wing leads and complete your flight checks.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded bg-primary-main px-8 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
				>
					<DiscordBrands class="size-4" />
					Join Discord Comms
				</a>
				<a
					href="https://inara.cz/elite/squadron/6548/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-8 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-white/10"
				>
					<StarSolid class="size-4 text-yellow-500" />
					Inara Squadron Profile
				</a>
			</div>
		</div>
	</div>
</section>
