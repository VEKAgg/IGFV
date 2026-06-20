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
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light font-semibold uppercase tracking-wider"
			>
				<RocketSolid class="h-4 w-4" />
				<span>Recruitment Portal</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Join the <span class="text-primary-main">Vanguard</span>
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				Ready to make the black feel a little less lonely? Joining the Goodfellas is simple, welcoming, and entirely obligation-free. Let us get you onboarded and flying with the wing.
			</p>
		</div>
	</div>
</section>

<!-- WHO WE'RE LOOKING FOR & WHAT YOU DON'T NEED -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-8 lg:grid-cols-2">
		<!-- Left: Who we want -->
		<div use:inview class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 sm:p-8 shadow-glow">
			<h2 class="text-lg font-bold text-white uppercase tracking-wider mb-4">Who We're Looking For</h2>
			<p class="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
				We are building a community of mature, friendly, and cooperative commanders who want to explore all that Elite Dangerous has to offer without drama.
			</p>
			
			<div class="space-y-4 text-xs">
				<div class="flex items-start gap-3">
					<span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
						<CheckSolid class="size-3" />
					</span>
					<div>
						<strong class="text-white block uppercase mb-0.5">Cooperative Wingmen</strong>
						<p class="text-gray-500">Commanders who enjoy playing in wings, sharing trade loops, defending stations, and exploring together.</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
						<CheckSolid class="size-3" />
					</span>
					<div>
						<strong class="text-white block uppercase mb-0.5">Respectful Comms</strong>
						<p class="text-gray-500">Commanders who treat others with decency, respect differences, and welcome newcomers warmly.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Right: What is NOT required (No gates!) -->
		<div use:inview={{ delay: 150 }} class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 sm:p-8 shadow-glow">
			<h2 class="text-lg font-bold text-white uppercase tracking-wider mb-4">What You Don't Need</h2>
			<p class="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
				Unlike military roleplay squadrons, we believe gating entry behind credits or hours kills community. There are no benchmarks here.
			</p>
			
			<div class="space-y-4 text-xs">
				<div class="flex items-start gap-3">
					<span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-main/10 text-primary-light border border-primary-main/20">
						<CheckSolid class="size-3 text-primary-light" />
					</span>
					<div>
						<strong class="text-white block uppercase mb-0.5">No Minimum Ranks</strong>
						<p class="text-gray-500">You do not need to be Elite. Whether you are Harmless or noviced, you are fully welcome.</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-main/10 text-primary-light border border-primary-main/20">
						<CheckSolid class="size-3 text-primary-light" />
					</span>
					<div>
						<strong class="text-white block uppercase mb-0.5">No Mandatory Engineering or Ship Logs</strong>
						<p class="text-gray-500">No ship outfitting requirements. Our mentors will help you unlock engineers at your own pace.</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-main/10 text-primary-light border border-primary-main/20">
						<CheckSolid class="size-3 text-primary-light" />
					</span>
					<div>
						<strong class="text-white block uppercase mb-0.5">No Activity Quotas</strong>
						<p class="text-gray-500">We do not purge members for taking breaks. Real life always comes first.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ONBOARDING TIMELINE: WHAT HAPPENS AFTER YOU JOIN DISCORD -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-4xl">
		<div class="mb-16 text-center">
			<h2 use:inview class="inview-hidden text-3xl font-bold text-white uppercase tracking-wider">
				Your Onboarding <span class="text-primary-main">Timeline</span>
			</h2>
			<div class="mt-4 mb-2 mx-auto h-1 w-16 rounded-full bg-primary-main"></div>
			<p use:inview class="inview-hidden text-sm text-gray-400 max-w-xl mx-auto">
				Four simple actions to set up your ship and join squadron wings.
			</p>
		</div>

		<div class="relative border-l border-white/10 ml-4 md:ml-32">
			{#each [
				{ step: '01', title: 'Connect to Comms', desc: 'Click the Discord invite link. Say hello in the #welcome channel and select your platform/roles in self-roles.' },
				{ step: '02', title: 'Submit Inara Request', desc: 'Sync your flight profile via EDMC/Inara and submit a request to join Interstellar Goodfellas roster.' },
				{ step: '03', title: 'Meet Your Flight Mentor', desc: 'An officer will assign you a Flight Mentor in Discord. They will help review ship builds and engineering routes.' },
				{ step: '04', title: 'Launch with the Wing', desc: 'Jump into our weekly Thursday wing trade loops, mining runs, or AX practice. Welcome to the crew!' }
			] as timeline}
				<div class="mb-10 ml-8 relative">
					<span class="absolute -left-12 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#000814] border border-primary-main">
						<span class="size-2 rounded-full bg-primary-light"></span>
					</span>
					<span class="hidden md:block absolute -left-28 top-1 text-sm font-bold text-primary-light uppercase tracking-wider font-mono">Step {timeline.step}</span>
					
					<div class="rounded-lg border border-white/5 bg-[#000814]/60 p-6">
						<span class="md:hidden block text-xs font-bold text-primary-light mb-1 uppercase tracking-wider font-mono">Step {timeline.step}</span>
						<h3 class="text-base font-bold text-white uppercase">{timeline.title}</h3>
						<p class="text-xs text-gray-400 mt-2 leading-relaxed">{timeline.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TESTIMONIALS (Solid cards layout) -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<h2 use:inview class="inview-hidden mb-16 text-center text-3xl font-bold text-white uppercase tracking-wider">
			Commander <span class="text-primary-main">Logs</span>
		</h2>

		<div class="grid gap-6 md:grid-cols-3">
			{#each testimonials as Quote}
				<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 flex flex-col justify-between shadow-glow">
					<p class="text-xs italic leading-relaxed text-gray-300">"{Quote.quote}"</p>
					<div class="mt-6 border-t border-white/5 pt-4">
						<div class="text-xs font-bold text-white">{Quote.commanderName}</div>
						<div class="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{Quote.role}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Call to Action (Pre-onboarding bridge) -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div use:inview class="inview-hidden mx-auto max-w-4xl">
		<div class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary-main/10 via-[#000d22]/95 to-[#000814]/95 p-12 text-center shadow-2xl">
			
			<div class="mb-6 inline-flex rounded-full bg-primary-main/15 p-4 text-primary-light">
				<DiscordBrands class="size-10 text-[#5865F2]" />
			</div>

			<h2 class="mb-4 text-3xl font-bold text-white uppercase tracking-wide">Ready for Launch?</h2>
			<p class="mx-auto mb-8 max-w-xl text-xs leading-relaxed text-gray-300">
				Warp into our Discord server to connect with wing leads and complete your flight checks.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded bg-primary-main px-8 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-primary-light"
				>
					<DiscordBrands class="size-4" />
					Join Discord Comms
				</a>
				<a
					href="https://inara.cz/elite/squadron/6548/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-8 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10"
				>
					<StarSolid class="size-4 text-yellow-500" />
					Inara Squadron Profile
				</a>
			</div>
		</div>
	</div>
</section>
