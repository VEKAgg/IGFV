<script lang="ts">
	import {
		RocketSolid,
		UsersSolid,
		StarSolid,
		ExternalLinkAltSolid,
		MoonSolid,
		GlobeAmericasSolid,
		SatelliteSolid,
		HandsHelpingSolid,
		DiscordBrands,
		SpaceShuttleSolid,
		CompassSolid,
		MeteorSolid,
		ShipSolid,
		BoltSolid,
		CrownSolid,
		UserAstronautSolid
	} from 'svelte-awesome-icons';
	import ScrollDown from '$lib/components/ScrollDown.svelte';
	import { resolve } from '$app/paths';

	// ─── Cursor tracking ───
	let mouseX = $state(0);
	let mouseY = $state(0);

	$effect(() => {
		function onMove(e: MouseEvent) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}
		window.addEventListener('mousemove', onMove, { passive: true });
		return () => window.removeEventListener('mousemove', onMove);
	});

	// ─── Parallax scroll ───
	let scrollY = $state(0);

	$effect(() => {
		function onScroll() {
			scrollY = window.scrollY;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// ─── FAQ accordion ───
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{
			question: 'What is Interstellar Goodfellas?',
			answer:
				'Interstellar Goodfellas (IGFV) is a player squadron in Elite: Dangerous dedicated to exploring peaceful frontiers, engaging in meaningful PvE activities, and building a tight-knit community of commanders who value teamwork and respect.'
		},
		{
			question: 'How do I join the squadron?',
			answer:
				'Simply join our Discord server, introduce yourself in the welcome channel, and one of our recruiters will guide you through the process. We welcome commanders of all experience levels, from complete beginners to seasoned veterans.'
		},
		{
			question: 'Are there any requirements to join?',
			answer:
				'The only requirements are a copy of Elite: Dangerous (base game or Odyssey), a willingness to be active and engaged, and adherence to our code of conduct. We believe in creating a harassment-free, inclusive environment for all commanders.'
		},
		{
			question: 'What activities does the squadron participate in?',
			answer:
				'We engage in a wide variety of activities including exploration expeditions, trade routes and fleet carrier operations, bounty hunting and combat zones, mining operations, Thargoid combat, community goals, and organized PvP events. There is always something happening!'
		},
		{
			question: 'What platforms are supported?',
			answer:
				'Interstellar Goodfellas supports commanders on PC, PlayStation, and Xbox. While cross-platform play is limited in Elite: Dangerous, our community and events are coordinated across all platforms through our Discord server.'
		},
		{
			question: 'Do you use third-party tools?',
			answer:
				'Yes, we make use of several third-party tools to enhance our gameplay experience including Discord for voice/text communication, Inara for squadron management and trade data, EDSM for exploration tracking, and various other tools for specific activities.'
		}
	];

	// ─── Stats ───
	const stats = [
		{ value: '100+', label: 'Active Members', icon: UsersSolid },
		{ value: '1,247', label: 'Systems Explored', icon: GlobeAmericasSolid },
		{ value: '2.3B', label: 'Total Credits Earned', icon: StarSolid },
		{ value: 'Growing', label: 'Faction Status', icon: CrownSolid }
	];

	// ─── Quick Navigation ───
	const quickNavs = [
		{
			num: '01',
			title: 'About',
			subtitle: 'Learn our story and mission',
			icon: UserAstronautSolid,
			href: resolve('/about')
		},
		{
			num: '02',
			title: 'Fleet Carrier',
			subtitle: 'Explore our fleet operations',
			icon: ShipSolid,
			href: resolve('/fleet-carrier')
		},
		{
			num: '03',
			title: 'Events',
			subtitle: 'See upcoming activities',
			icon: StarSolid,
			href: resolve('/events')
		},
		{
			num: '04',
			title: 'Gallery',
			subtitle: 'Browse screenshots & media',
			icon: ExternalLinkAltSolid,
			href: resolve('/gallery')
		}
	];

	// ─── Journey Steps ───
	const journeySteps = [
		{
			num: '01',
			icon: DiscordBrands,
			title: 'Join Discord',
			description:
				'Start your journey by joining our Discord server. Introduce yourself and connect with fellow commanders who share your passion for the stars.'
		},
		{
			num: '02',
			icon: HandsHelpingSolid,
			title: 'Meet Your Mentor',
			description:
				'Every new member is paired with an experienced mentor who will guide you through squadron operations, wing mechanics, and help you find your footing in the galaxy.'
		},
		{
			num: '03',
			icon: CompassSolid,
			title: 'Choose Your Path',
			description:
				'Whether you prefer exploration, trading, combat, or mining — discover your niche and specialize in the activities that excite you most.'
		},
		{
			num: '04',
			icon: RocketSolid,
			title: 'Start Flying',
			description:
				'Jump into action with wing missions, squadron events, and community goals. The galaxy is vast — and with IGFV, you will never fly alone.'
		}
	];

	// ─── Inview action ───
	function inview(node: HTMLElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					node.dataset.visible = 'true';
					observer.unobserve(node);
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(node);
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	// ─── Staggered inview action (sets --delay for children) ───
	function staggerContainer(node: HTMLElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					node.dataset.staggerVisible = 'true';
					observer.unobserve(node);
				}
			},
			{ threshold: 0.1 }
		);
		observer.observe(node);
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	// ─── Ambient light circles ───
	const ambientCircles = [
		{ size: 600, x: '15%', y: '20%', delay: '0s', duration: '8s' },
		{ size: 400, x: '70%', y: '40%', delay: '2s', duration: '6s' },
		{ size: 500, x: '40%', y: '70%', delay: '4s', duration: '10s' }
	];

	// ─── Space elements for parallax ───
	const spaceElements = [
		{
			icon: MoonSolid,
			size: 28,
			top: '15%',
			left: '5%',
			speed: 0.15,
			opacity: 0.15,
			label: 'moon'
		},
		{
			icon: MeteorSolid,
			size: 20,
			top: '45%',
			left: '88%',
			speed: 0.2,
			opacity: 0.12,
			label: 'meteor'
		},
		{
			icon: GlobeAmericasSolid,
			size: 32,
			top: '75%',
			left: '12%',
			speed: 0.1,
			opacity: 0.1,
			label: 'globe'
		},
		{
			icon: SpaceShuttleSolid,
			size: 22,
			top: '10%',
			left: '80%',
			speed: 0.25,
			opacity: 0.13,
			label: 'shuttle'
		},
		{
			icon: SatelliteSolid,
			size: 18,
			top: '60%',
			left: '75%',
			speed: 0.18,
			opacity: 0.11,
			label: 'satellite'
		},
		{
			icon: ShipSolid,
			size: 24,
			top: '30%',
			left: '60%',
			speed: 0.08,
			opacity: 0.09,
			label: 'ship'
		}
	];
</script>

<!-- ─── GRID BACKGROUND ─── -->
<div
	class="fixed inset-0 -z-10 overflow-hidden"
	style="
		background-image:
			linear-gradient(to right, rgba(169, 11, 43, 0.12) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(169, 11, 43, 0.12) 1px, transparent 1px);
		background-size: 4rem 4rem;
	"
>
	<!-- Cursor glow -->
	<div
		class="pointer-events-none absolute inset-0"
		style="
			background: radial-gradient(600px circle at {mouseX}px {mouseY}px, rgba(169, 11, 43, 0.08), transparent 50%);
		"
	></div>

	<!-- Ambient floating circles -->
	{#each ambientCircles as circle (circle.x + circle.y)}
		<div
			class="ambient-blur pointer-events-none absolute rounded-full"
			style="
				width: {circle.size}px;
				height: {circle.size}px;
				top: {circle.y};
				left: {circle.x};
				background: radial-gradient(circle, rgba(169, 11, 43, 0.08), transparent 70%);
				animation-delay: {circle.delay};
				animation-duration: {circle.duration};
			"
		></div>
	{/each}
</div>

<!-- ─── SPACE ELEMENTS (Parallax) ─── -->
<div class="pointer-events-none fixed inset-0 -z-10">
	{#each spaceElements as el (el.label)}
		<div
			class="space-element absolute"
			style="
				top: {el.top};
				left: {el.left};
				opacity: {el.opacity};
				transform: translateY({scrollY * el.speed}px);
				color: rgba(255, 255, 255, 0.5);
			"
		>
			<el.icon style="width: {el.size}px; height: {el.size}px;" />
		</div>
	{/each}
</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- HERO SECTION -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
>
	<!-- Hero content -->
	<div class="fade-in-section z-10 mx-auto max-w-5xl text-center" style="--delay: 0s;">
		<!-- Eyebrow -->
		<div
			class="fade-in-item mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white/60 backdrop-blur-sm"
			style="--delay: 0.2s;"
		>
			<span class="inline-block size-2 rounded-full bg-primary-main"></span>
			<span>Elite: Dangerous Squadron</span>
		</div>

		<!-- Title -->
		<h1
			class="fade-in-item mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
			style="--delay: 0.4s;"
		>
			<span class="text-white">Interstellar</span>
			<span class="inline-flex items-center gap-3 text-primary-main">
				<SpaceShuttleSolid class="inline-block size-10 md:size-12 lg:size-14" />
				Goodfellas
			</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="fade-in-item mx-auto mb-10 max-w-2xl text-lg text-white/50 sm:text-xl"
			style="--delay: 0.6s;"
		>
			Charting Peaceful Frontiers in Elite: Dangerous
		</p>

		<!-- CTA Buttons -->
		<div
			class="fade-in-item flex flex-col items-center justify-center gap-4 sm:flex-row"
			style="--delay: 0.8s;"
		>
			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="cta-primary group inline-flex items-center gap-3 rounded-lg bg-primary-main px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-main/25 transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-primary-main/40"
			>
				<DiscordBrands class="size-5" />
				Join Our Community
				<ExternalLinkAltSolid
					class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
				/>
			</a>
			<a
				href="https://inara.cz/squadron/"
				target="_blank"
				rel="noopener noreferrer"
				class="cta-secondary group inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
			>
				<StarSolid class="size-5" />
				Squadron Profile
				<ExternalLinkAltSolid
					class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
				/>
			</a>
		</div>
	</div>

	<ScrollDown />
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- QUICK NAVIGATION -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-24 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<h2
			use:inview
			class="fade-up-section mb-16 text-center text-4xl font-bold text-white sm:text-5xl"
		>
			Quick <span class="text-primary-main">Navigation</span>
		</h2>

		<div use:staggerContainer class="stagger-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each quickNavs as nav, i (nav.title)}
				<a
					href={nav.href}
					class="stagger-item group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-main/40 hover:bg-white/10"
					style="--item-delay: {i * 0.15}s;"
				>
					<div
						class="absolute -top-8 -right-8 text-7xl font-bold text-white/5 transition-all duration-500 group-hover:text-primary-main/10"
					>
						{nav.num}
					</div>
					<div class="relative z-10">
						<div
							class="mb-6 inline-flex rounded-lg bg-primary-main/10 p-3 text-primary-main transition-colors duration-300 group-hover:bg-primary-main/20"
						>
							<nav.icon class="size-7" />
						</div>
						<h3
							class="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-main"
						>
							{nav.title}
						</h3>
						<p class="text-sm leading-relaxed text-white/50">{nav.subtitle}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- WHO WE ARE -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-24 sm:py-32">
	<div class="mx-auto max-w-4xl">
		<div
			use:inview
			class="fade-up-section relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-dark-navy via-dark-bg to-dark-slate1 p-8 shadow-xl sm:p-12 lg:p-16"
		>
			<!-- Decorative corner accent -->
			<div
				class="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-primary-main/5 blur-3xl"
			></div>
			<div
				class="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-primary-main/3 blur-3xl"
			></div>

			<div class="relative z-10">
				<h2 class="mb-4 inline-block text-4xl font-bold text-white sm:text-5xl">
					Who We
					<span class="text-primary-main">Are</span>
				</h2>
				<div class="mt-4 mb-2 h-1 w-16 rounded-full bg-primary-main"></div>

				<div class="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
					<p>
						Interstellar Goodfellas (IGFV) is a player squadron in Elite: Dangerous built on the
						foundations of camaraderie, exploration, and mutual respect. We are a diverse group of
						commanders who share a common passion for the stars and a commitment to creating a
						welcoming environment for pilots of all skill levels.
					</p>
					<p>
						Whether you are a seasoned veteran with thousands of hours in the cockpit or a
						fresh-faced cadet taking your first jump, you will find a place among the Goodfellas.
						Our squadron emphasizes teamwork over competition, exploration over exploitation, and
						friendship over factionalism.
					</p>
					<p>
						From organized wing missions and community goals to deep-space exploration expeditions
						and fleet carrier operations, there is always an opportunity to contribute, learn, and
						explore the galaxy together. We believe that the best experiences in Elite are shared
						ones — and with IGFV, the galaxy is yours to discover alongside friends.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SQUADRON OVERVIEW (Stats) -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-24 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<h2
			use:inview
			class="fade-up-section mb-4 text-center text-4xl font-bold text-white sm:text-5xl"
		>
			Squadron <span class="text-primary-main">Overview</span>
		</h2>
		<p use:inview class="fade-up-section mb-16 text-center text-white/50">
			Our growing presence in the galaxy
		</p>

		<div use:staggerContainer class="stagger-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each stats as stat, i (stat.label)}
				<div
					class="stagger-item stat-card group rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-main/40 hover:bg-white/10"
					style="--item-delay: {i * 0.15}s;"
				>
					<div
						class="mb-4 inline-flex rounded-lg bg-primary-main/10 p-3 text-primary-main transition-colors duration-300 group-hover:bg-primary-main/20"
					>
						<stat.icon class="size-8" />
					</div>
					<div class="mb-1 text-4xl font-bold text-white">{stat.value}</div>
					<div class="text-sm text-white/50">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- FAQ SECTION -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-24 sm:py-32">
	<div class="mx-auto max-w-3xl">
		<h2
			use:inview
			class="fade-up-section mb-4 text-center text-4xl font-bold text-white sm:text-5xl"
		>
			Frequently Asked
			<span class="text-primary-main">Questions</span>
		</h2>
		<p use:inview class="fade-up-section mb-16 text-center text-white/50">
			Everything you need to know about the squadron
		</p>

		<div class="space-y-4">
			{#each faqs as faq, i (faq.question)}
				<div
					use:inview
					class="fade-up-section rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300"
					style="--delay: {i * 0.1}s;"
				>
					<button
						onclick={() => toggleFaq(i)}
						class="faq-trigger flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left text-base font-semibold text-white transition-colors duration-200 hover:text-primary-main sm:text-lg"
						aria-expanded={openFaq === i}
					>
						<span class="pr-4">{faq.question}</span>
						<svg
							class="size-5 shrink-0 text-white/40 transition-transform duration-300 {openFaq === i
								? 'rotate-180'
								: ''}"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					<div
						class="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
						style="max-height: {openFaq === i ? '300px' : '0'};"
					>
						<div class="border-t border-white/5 px-6 py-5 text-base leading-relaxed text-white/60">
							{faq.answer}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- YOUR JOURNEY WITH US -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-24 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<h2
			use:inview
			class="fade-up-section mb-4 text-center text-4xl font-bold text-white sm:text-5xl"
		>
			Your Journey
			<span class="text-primary-main">With Us</span>
		</h2>
		<p use:inview class="fade-up-section mb-16 text-center text-white/50">
			Four simple steps to becoming a Goodfella
		</p>

		<div use:staggerContainer class="stagger-grid grid gap-8 md:grid-cols-2">
			{#each journeySteps as step, i (step.title)}
				<div
					class="stagger-item journey-card group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-main/40 hover:bg-white/10"
					style="--item-delay: {i * 0.15}s;"
				>
					<div
						class="absolute -top-6 -right-6 text-6xl font-bold text-white/5 transition-all duration-500 group-hover:text-primary-main/10"
					>
						{step.num}
					</div>
					<div class="relative z-10 flex items-start gap-6">
						<div
							class="shrink-0 rounded-lg bg-primary-main/10 p-4 text-primary-main transition-colors duration-300 group-hover:bg-primary-main/20"
						>
							<step.icon class="size-7" />
						</div>
						<div>
							<h3
								class="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-main"
							>
								{step.title}
							</h3>
							<p class="text-sm leading-relaxed text-white/50">{step.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- JOIN US TODAY CTA -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-24 sm:py-32">
	<div use:inview class="fade-up-section mx-auto max-w-4xl">
		<div
			class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary-main/10 via-dark-navy to-primary-darkest/20 p-12 text-center shadow-2xl sm:p-16"
		>
			<!-- Decorative elements -->
			<div
				class="pointer-events-none absolute -top-20 -left-20 size-64 rounded-full bg-primary-main/10 blur-3xl"
			></div>
			<div
				class="pointer-events-none absolute -right-20 -bottom-20 size-48 rounded-full bg-primary-main/5 blur-3xl"
			></div>

			<div class="relative z-10">
				<div class="mb-6 inline-flex rounded-full bg-primary-main/15 p-4 text-primary-main">
					<DiscordBrands class="size-10" />
				</div>

				<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">
					Join Us <span class="text-primary-main">Today</span>
				</h2>

				<p class="mx-auto mb-10 max-w-xl text-lg text-white/60">
					Ready to explore the galaxy with the finest commanders this side of the bubble? Grab your
					joystick, and let us make history together.
				</p>

				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="cta-primary group inline-flex items-center gap-3 rounded-lg bg-primary-main px-10 py-4 text-lg font-bold text-white shadow-lg shadow-primary-main/30 transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-primary-main/50"
				>
					<DiscordBrands class="size-6" />
					Join Our Discord
					<BoltSolid class="size-5 opacity-60 transition-opacity group-hover:opacity-100" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ─── STYLES ─── -->
<style>
	/* ───── Entrance animations ───── */

	@keyframes fadeSlideUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.fade-in-section {
		animation: fadeSlideUp 0.8s ease-out forwards;
	}

	.fade-in-item {
		opacity: 0;
		transform: translateY(20px);
		animation: fadeSlideUp 0.7s ease-out forwards;
		animation-delay: var(--delay, 0s);
	}

	/* ───── Scroll-triggered via inview ───── */

	.fade-up-section {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.7s ease-out,
			transform 0.7s ease-out;
	}

	.fade-up-section:global([data-visible='true']) {
		opacity: 1;
		transform: translateY(0);
	}

	/* ───── Staggered grid children ───── */

	.stagger-item {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out,
			border-color 0.3s,
			background-color 0.3s,
			box-shadow 0.3s;
		transition-delay: var(--item-delay, 0s);
	}

	:global([data-stagger-visible='true']) .stagger-item {
		opacity: 1;
		transform: translateY(0);
	}

	/* ───── Ambient floating circles ───── */

	.ambient-blur {
		animation: ambientFloat 8s ease-in-out infinite;
	}

	@keyframes ambientFloat {
		0%,
		100% {
			opacity: 0.4;
			transform: scale(1) translate(0, 0);
		}
		33% {
			opacity: 0.8;
			transform: scale(1.05) translate(10px, -15px);
		}
		66% {
			opacity: 0.6;
			transform: scale(0.95) translate(-10px, 10px);
		}
	}

	/* ───── FAQ accordion ───── */

	.faq-answer {
		transition: max-height 0.3s ease-in-out;
	}

	/* ───── CTA buttons ───── */

	.cta-primary,
	.cta-secondary {
		will-change: transform;
		transition:
			transform 0.3s,
			background-color 0.3s,
			border-color 0.3s,
			box-shadow 0.3s;
	}

	/* ───── Hover ───── */

	.stat-card:hover .text-4xl {
		color: rgb(var(--color-primary-main) / 1);
	}

	/* ───── Space element parallax ───── */

	.space-element {
		transition: transform 0.1s linear;
	}
</style>
