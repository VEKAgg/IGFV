<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		HistorySolid,
		RocketSolid,
		StarSolid,
		UsersSolid,
		GlobeAmericasSolid,
		ClockSolid,
		HandshakeSolid,
		ShieldAltSolid,
		HandsHelpingSolid,
		CheckSolid,
		CompassSolid,
		HammerSolid,
		FireSolid,
		SpaceShuttleSolid,
		InfoCircleSolid,
		QuestionCircleSolid,
		UserAstronautSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import NewCommandersStart from '$lib/components/UI/NewCommandersStart.svelte';

	// ─── FAQ Accordion State ───
	let openFaq = $state<number | null>(null);
	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{
			question: 'Is there a minimum rank to apply?',
			answer: 'No. We welcome pilots of all skill levels, from Harmless novices taking off for the first time to triple-Elite veterans.'
		},
		{
			question: 'What platforms are supported?',
			answer: 'We have pilots on PC, Xbox, and PlayStation. Although cross-play is limited due to the game framework, our Discord and Inara operations coordinate all platforms together.'
		},
		{
			question: 'Do you participate in PvP or piracy?',
			answer: 'No. We are strictly a peaceful PvE and BGS-focused squadron. We do not participate in piracy, griefing, or unprovoked PvP. Dueling and combat training are permitted in closed settings.'
		},
		{
			question: 'Are there weekly quotas?',
			answer: 'Never. Real life always comes first. Fly whenever you have time, and take breaks without worrying about getting kicked.'
		}
	];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-xs text-primary-light"
			>
				<HistorySolid class="h-4 w-4" />
				<span>About IGFV</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Space Operations <span class="text-primary-main">Command</span>
			</h1>
			<p class="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
				The Imperial Guard Fleet Vanguard (IGFV)—widely known as the Interstellar Goodfellas—is a peaceful, PvE-focused Elite Dangerous squadron. Founded in 3305 (2019), we operate as a supportive community of explorers, traders, combat pilots, and logistics specialists.
			</p>
		</div>
	</div>
</section>

<!-- ─── WHO FITS HERE section ─── -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<h2 use:inview class="inview-hidden text-3xl font-bold text-white uppercase tracking-wider">
					Who Fits <span class="text-primary-main">Here?</span>
				</h2>
				<div class="mt-4 mb-6 h-1 w-16 rounded-full bg-primary-main"></div>
				<p use:inview class="inview-hidden text-sm sm:text-base leading-relaxed text-gray-300">
					IGFV is designed for pilots who want to enjoy the vastness of Elite Dangerous without the burden of military roleplay or mandatory active logs. If you value low-stress teamwork and shared progression, you will fit right in.
				</p>

				<ul class="mt-6 space-y-4 text-sm text-gray-400">
					<li class="flex items-start gap-3">
						<span class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-main/10 text-primary-light">
							<CheckSolid class="size-3" />
						</span>
						<span><strong>Relaxed & Mature Pilots:</strong> Commanders who treat others with respect and enjoy friendly wing chat.</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-main/10 text-primary-light">
							<CheckSolid class="size-3" />
						</span>
						<span><strong>Explorers & Industry-focused:</strong> Active miners, traders, and deep-space map chartists.</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-main/10 text-primary-light">
							<CheckSolid class="size-3" />
						</span>
						<span><strong>New players seeking mentors:</strong> Cadets who want structured advice without feeling overwhelmed.</span>
					</li>
				</ul>
			</div>

			<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-8 shadow-glow">
				<h3 class="text-lg font-bold text-white uppercase mb-4 tracking-wider">What You Don't Need</h3>
				<p class="text-xs text-gray-400 leading-relaxed mb-6">
					We do not believe in gating community access behind artificial rank requirements or ship logs. In IGFV, you are welcome exactly as you are.
				</p>
				<div class="space-y-4">
					{#each [
						{ title: 'No Ranks Requirement', desc: 'No Elite rankings required to participate in wing operations.' },
						{ title: 'No Ship Gatekeeping', desc: 'You do not need an engineered Anaconda or Cutter to fly with us.' },
						{ title: 'No Attendance Quotas', desc: 'No mandatory weekly hours or active check-ins required.' }
					] as item}
						<div class="flex gap-4 border-l-2 border-primary-main pl-4">
							<div>
								<h4 class="text-xs font-bold text-white uppercase">{item.title}</h4>
								<p class="text-xs text-gray-500 mt-1">{item.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ─── HOW WE OPERATE section ─── -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center">
			<h2 use:inview class="inview-hidden text-3xl font-bold text-white uppercase tracking-wider">
				How We <span class="text-primary-main">Operate</span>
			</h2>
			<div class="mt-4 mb-2 mx-auto h-1 w-16 rounded-full bg-primary-main"></div>
			<p use:inview class="inview-hidden text-sm text-gray-400 max-w-xl mx-auto">
				Our operational guidelines balance peaceful play with community progression.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6">
				<div class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary-main/10 text-primary-light">
					<HandsHelpingSolid class="size-5" />
				</div>
				<h3 class="text-base font-bold text-white uppercase tracking-wider mb-2">Peaceful PvE Focus</h3>
				<p class="text-xs leading-relaxed text-gray-400">
					We specialize in trading, exploration, mining, BGS support, and anti-xeno security. We do not support piracy, griefing, or unprovoked hostile engagement.
				</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6">
				<div class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary-main/10 text-primary-light">
					<GlobeAmericasSolid class="size-5" />
				</div>
				<h3 class="text-base font-bold text-white uppercase tracking-wider mb-2">Cross-Platform Logs</h3>
				<p class="text-xs leading-relaxed text-gray-400">
					Although Elite Dangerous does not support cross-play between consoles and PC in live mode, our squadron is active on all systems, sharing trade networks via Inara.
				</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6">
				<div class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary-main/10 text-primary-light">
					<ClockSolid class="size-5" />
				</div>
				<h3 class="text-base font-bold text-white uppercase tracking-wider mb-2">Real Life Priority</h3>
				<p class="text-xs leading-relaxed text-gray-400">
					We believe games should be fun, not a job. Whether you fly daily or jump in once a month, you are treated as a valued squadron member.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Timeline History -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-5xl">
		<h2 use:inview class="inview-hidden mb-16 text-center text-3xl font-bold text-white uppercase tracking-wider">
			Squadron <span class="text-primary-main">Timeline</span>
		</h2>

		<div class="relative border-l border-white/10 ml-4 md:ml-32">
			{#each [
				{ year: '3305 (2019)', title: 'Founded in LHS 3447', text: 'Commander Don Samen establishes the squadron with three pilots, dedicating operations to trade logs and exploration mapping.' },
				{ year: '3307 (2021)', title: 'Valhall Acquired', text: 'The Imperial Fleet Carrier ISS Valhall (VXX-RHJ) is commissioned, expanding operations into a mobile deep space headquarters.' },
				{ year: '3311 (2025)', title: 'Galactic Expansion', text: 'Welcoming pilots across PC, Xbox, and PlayStation, achieving over 100 registered members on Inara registries.' }
			] as item}
				<div class="mb-10 ml-8 relative">
					<!-- Blinking dot on current timeline step -->
					<span class="absolute -left-12 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#000814] border border-primary-main">
						<span class="size-2 rounded-full bg-primary-light"></span>
					</span>
					<span class="hidden md:block absolute -left-44 top-1 text-sm font-bold text-primary-light">{item.year}</span>
					
					<div class="rounded-lg border border-white/5 bg-[#000814]/60 p-6">
						<span class="md:hidden block text-xs font-bold text-primary-light mb-1">{item.year}</span>
						<h3 class="text-base font-bold text-white uppercase">{item.title}</h3>
						<p class="text-xs text-gray-400 mt-2 leading-relaxed">{item.text}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHY COMMANDERS STAY section (Solid panels) ─── -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<h2 use:inview class="inview-hidden mb-16 text-center text-3xl font-bold text-white uppercase tracking-wider">
			Why Commanders <span class="text-primary-main">Stay</span>
		</h2>

		<div class="grid gap-6 md:grid-cols-3">
			{#each [
				{ cmdr: 'CMDR Sarah Thorne', quote: 'No quotas, no militaristic demands. I can disappear for three months in deep space and my cabin on ISS Valhall is still waiting for me.', role: 'Explorer' },
				{ cmdr: 'CMDR Marcus Vance', quote: 'The veteran pilots helped me coordinate my first engineering loop in a weekend. Highly active and supportive wing coordination.', role: 'Combat pilot' },
				{ cmdr: 'CMDR Jin-Woo', quote: 'Trade runs are highly organized. Fleet carrier logistics loops are mapped with exact price sheets, keeping everyone profitable.', role: 'Industry Specialist' }
			] as test}
				<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 flex flex-col justify-between shadow-glow">
					<p class="text-xs italic leading-relaxed text-gray-300">"{test.quote}"</p>
					<div class="mt-6 border-t border-white/5 pt-4">
						<div class="text-xs font-bold text-white">{test.cmdr}</div>
						<div class="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{test.role}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Leadership Team -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-5xl">
		<h2 use:inview class="inview-hidden mb-16 text-center text-3xl font-bold text-white uppercase tracking-wider">
			Squadron <span class="text-primary-main">Command Staff</span>
		</h2>

		<div class="grid gap-6 md:grid-cols-3">
			{#each [
				{ name: 'Don Samen', role: 'Leader', desc: 'Founder and overall commander. Focuses on fleet carrier operations and keeping a relaxed, low-stress squadron community.' },
				{ name: 'Twisted VorteK', role: 'Manager', desc: 'Active wing coordinator. Specializes in combat engineering, bounty hunting loops, and weapon system training.' },
				{ name: 'Sarah Thorne', role: 'Officer / Lead Explorer', desc: 'Expedition coordinator. Maps deep space pathways and guides pilots through distant nebula transits.' }
			] as lead}
				<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 transition-all duration-300 hover:border-primary-main/30">
					<div class="flex items-center gap-3 border-b border-white/5 pb-3 mb-3">
						<div class="flex size-10 items-center justify-center rounded-lg bg-primary-main/15 text-primary-light">
							<UserAstronautSolid class="size-5" />
						</div>
						<div>
							<h3 class="text-sm font-bold text-white uppercase">{lead.name}</h3>
							<span class="text-[10px] font-semibold text-primary-light uppercase tracking-wider">{lead.role}</span>
						</div>
					</div>
					<p class="text-xs leading-relaxed text-gray-400">{lead.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ Section (Solid panels) -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-3xl">
		<div class="mb-12 text-center">
			<h2 use:inview class="inview-hidden text-3xl font-bold text-white uppercase tracking-wider">
				Recruitment <span class="text-primary-main">FAQ</span>
			</h2>
			<p use:inview class="inview-hidden mt-1 text-xs text-gray-400">Common questions about joining the Goodfellas vanguard</p>
		</div>

		<div class="space-y-4">
			{#each faqs as faq, i}
				<div class="rounded-xl border border-white/10 bg-[#000d22]/90">
					<button
						onclick={() => toggleFaq(i)}
						class="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left text-sm font-bold uppercase text-white hover:text-primary-light"
					>
						<span>{faq.question}</span>
						<svg
							class="size-4 text-gray-500 transition-transform duration-300 {openFaq === i ? 'rotate-180' : ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFaq === i}
						<div class="border-t border-white/5 px-6 py-5 text-xs leading-relaxed text-gray-300 bg-[#000814]/50 rounded-b-xl">
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Onboarding Panel at the bottom -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<NewCommandersStart />
	</div>
</section>
