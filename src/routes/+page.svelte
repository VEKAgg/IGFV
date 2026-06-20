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
		UserAstronautSolid,
		ShieldAltSolid,
		InfoCircleSolid
	} from 'svelte-awesome-icons';
	import ScrollDown from '$lib/components/ScrollDown.svelte';
	import CurrentFocus from '$lib/components/UI/CurrentFocus.svelte';
	import NewCommandersStart from '$lib/components/UI/NewCommandersStart.svelte';
	import DataStatusPanel from '$lib/components/UI/DataStatusPanel.svelte';
	import { resolve } from '$app/paths';
	import { whyJoinReasons, squadronStatsWithIcons, onboardingSteps, testimonials } from '$lib/data/squadron';
	import { newsPosts } from '$lib/data/news';

	// ─── Latest Announcement ───
	const latestNews = newsPosts[0];

	// ─── Discord Widget Client Fetching ───
	let discordData = $state<{
		guildName: string;
		inviteLink: string;
		onlineCount: number;
		onlineMembers: Array<{ name: string; status: string; avatarUrl?: string }>;
	} | null>(null);
	let loadingDiscord = $state(true);

	async function loadDiscord() {
		try {
			const res = await fetch('/api/discord/widget');
			if (res.ok) {
				discordData = await res.json();
			}
		} catch (err) {
			console.error('Failed to load Discord widget data', err);
		} finally {
			loadingDiscord = false;
		}
	}

	$effect(() => {
		loadDiscord();
	});

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
				'We engage in a wide variety of activities including exploration expeditions, trade routes and fleet carrier operations, bounty hunting and combat zones, mining operations, Thargoid combat, community goals, and organized BGS events. There is always something happening!'
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

	// ─── Staggered inview action ───
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

<!-- ─── LATEST ANNOUNCEMENT STRIP ─── -->
{#if latestNews}
	<div class="relative z-20 border-b border-primary-main/20 bg-black/60 px-4 py-2.5 backdrop-blur-md">
		<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
			<div class="flex flex-col items-center gap-2 sm:flex-row">
				<span class="inline-flex items-center rounded-full bg-primary-main/20 px-2.5 py-0.5 text-xs font-semibold text-primary-light border border-primary-main/30">
					Latest Update
				</span>
				<span class="text-xs text-gray-300 font-medium text-center sm:text-left">{latestNews.title} ({latestNews.publishedAt})</span>
			</div>
			<a
				href={resolve(`/news/${latestNews.slug}`)}
				class="text-xs font-bold text-primary-light hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
			>
				<span>Read Command Bulletin</span>
				<ExternalLinkAltSolid class="size-3" />
			</a>
		</div>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- HERO SECTION -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section
	class="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4"
>
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
				href={resolve('/join')}
				class="cta-primary group inline-flex items-center gap-3 rounded-lg bg-primary-main px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-main/25 transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-primary-main/40"
			>
				<RocketSolid class="size-5" />
				Join the Squadron
				<BoltSolid class="size-4" />
			</a>
			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="cta-secondary group inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
			>
				<DiscordBrands class="size-5 text-[#5865F2]" />
				Warp into Discord
				<ExternalLinkAltSolid
					class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
				/>
			</a>
		</div>
	</div>

	<ScrollDown />
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SQUADRON HUB STATUS (Current Focus & Discord widget) -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-16 sm:py-24 border-t border-white/5 bg-gradient-to-b from-[#000814]/0 to-[#000814]/80">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 flex flex-col justify-between items-start gap-4 sm:flex-row sm:items-center">
			<div>
				<h2 use:inview class="fade-up-section text-3xl font-bold text-white tracking-wide uppercase sm:text-4xl">
					Squadron <span class="text-primary-main">Command Hub</span>
				</h2>
				<p use:inview class="fade-up-section mt-1.5 text-sm text-gray-400">Weekly targets and comms channels network status</p>
			</div>
			<div use:inview class="fade-up-section">
				<DataStatusPanel state={discordData ? 'live' : 'placeholder'} source="Discord Comms API" />
			</div>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			<!-- Current Focus Banner -->
			<div use:inview class="fade-up-section lg:col-span-2">
				<CurrentFocus />
			</div>

			<!-- Live Discord Panel -->
			<div use:inview class="fade-up-section flex flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow">
				<div>
					<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
						<div class="flex items-center gap-2 text-white font-bold">
							<DiscordBrands class="size-5 text-[#5865F2]" />
							<span>Discord Comms</span>
						</div>
						{#if loadingDiscord}
							<span class="text-xs text-gray-500 animate-pulse">Syncing...</span>
						{:else if discordData}
							<span class="inline-flex items-center gap-1 rounded bg-green-500/10 px-2 py-0.5 text-[10px] font-bold text-green-400 border border-green-500/20">
								{discordData.onlineCount} Online
							</span>
						{:else}
							<span class="text-xs text-amber-500">Offline Fallback</span>
						{/if}
					</div>

					<p class="text-xs leading-relaxed text-gray-400 mb-4">
						Active pilots coordinates in voice networks and sector briefings:
					</p>

					<!-- Online list or placeholders -->
					<div class="space-y-2.5 max-h-40 overflow-y-auto pr-1">
						{#if loadingDiscord}
							{#each Array(3) as _}
								<div class="flex items-center gap-3 animate-pulse">
									<div class="size-6 rounded-full bg-white/5"></div>
									<div class="h-3 w-24 rounded bg-white/5"></div>
								</div>
							{/each}
						{:else if discordData && discordData.onlineMembers.length > 0}
							{#each discordData.onlineMembers.slice(0, 5) as member}
								<div class="flex items-center justify-between text-xs">
									<div class="flex items-center gap-2.5">
										{#if member.avatarUrl}
											<img src={member.avatarUrl} alt="" class="size-6 rounded-full border border-white/10" />
										{:else}
											<div class="flex size-6 items-center justify-center rounded-full bg-white/10 text-gray-400">
												<UserAstronautSolid class="size-3" />
											</div>
										{/if}
										<span class="font-medium text-gray-200">{member.name}</span>
									</div>
									<span class="text-[10px] text-gray-500 capitalize">{member.status === 'online' ? 'active' : 'idle'}</span>
								</div>
							{/each}
							{#if discordData.onlineMembers.length > 5}
								<p class="text-[10px] text-center text-gray-500 mt-2">Plus {discordData.onlineMembers.length - 5} more commanders</p>
							{/if}
						{:else}
							<!-- Fallback list -->
							<div class="flex items-center justify-between text-xs">
								<div class="flex items-center gap-2.5">
									<div class="flex size-6 items-center justify-center rounded-full bg-[#002868]/30 text-primary-light border border-primary-light/20">
										<UserAstronautSolid class="size-3" />
									</div>
									<span class="font-medium text-gray-300">CMDR Don Samen</span>
								</div>
								<span class="inline-flex size-2 rounded-full bg-green-500"></span>
							</div>
							<div class="flex items-center justify-between text-xs">
								<div class="flex items-center gap-2.5">
									<div class="flex size-6 items-center justify-center rounded-full bg-[#002868]/30 text-primary-light border border-primary-light/20">
										<UserAstronautSolid class="size-3" />
									</div>
									<span class="font-medium text-gray-300">CMDR Twisted VorteK</span>
								</div>
								<span class="inline-flex size-2 rounded-full bg-green-500"></span>
							</div>
							<div class="flex items-center justify-between text-xs">
								<div class="flex items-center gap-2.5">
									<div class="flex size-6 items-center justify-center rounded-full bg-[#002868]/30 text-primary-light border border-primary-light/20">
										<UserAstronautSolid class="size-3" />
									</div>
									<span class="font-medium text-gray-300">CMDR Sarah Thorne</span>
								</div>
								<span class="inline-flex size-2 rounded-full bg-green-500"></span>
							</div>
						{/if}
					</div>
				</div>

				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#4752C4]"
				>
					<DiscordBrands class="size-4" />
					Join Voice Channel
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- WHY IGFV (3 pillars) -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-20 sm:py-28 border-t border-white/5 bg-[#000814]/90">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center">
			<h2 use:inview class="fade-up-section text-3xl font-bold text-white tracking-wide uppercase sm:text-4xl">
				Why Join <span class="text-primary-main">IGFV?</span>
			</h2>
			<div class="mt-4 mb-2 mx-auto h-1 w-16 rounded-full bg-primary-main"></div>
			<p use:inview class="fade-up-section text-sm text-gray-400 max-w-xl mx-auto">
				Built around mutual support, zero demands, and shared galactic adventures
			</p>
		</div>

		<div use:staggerContainer class="stagger-grid grid gap-8 md:grid-cols-3">
			{#each whyJoinReasons as reason, i (reason.title)}
				<div
					class="stagger-item rounded-xl border border-white/10 bg-[#000d22]/90 p-8 shadow-glow transition-all duration-300 hover:-translate-y-1 hover:border-primary-main/30"
					style="--item-delay: {i * 0.15}s;"
				>
					<div class="mb-5 inline-flex rounded-lg bg-primary-main/10 p-3.5 text-primary-light">
						<reason.icon class="size-8" />
					</div>
					<h3 class="mb-3 text-lg font-bold text-white uppercase tracking-wider">{reason.title}</h3>
					<p class="text-sm leading-relaxed text-gray-400">{reason.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- NEW COMMANDERS START HERE PANEL -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-20 border-t border-white/5 bg-gradient-to-b from-[#000814]/90 to-[#000814]/50">
	<div class="mx-auto max-w-6xl">
		<NewCommandersStart />
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- QUICK NAVIGATION -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-20 border-t border-white/5 bg-[#000814]/50">
	<div class="mx-auto max-w-6xl">
		<h2
			use:inview
			class="fade-up-section mb-16 text-center text-3xl font-bold text-white tracking-wide uppercase sm:text-4xl"
		>
			Tactical <span class="text-primary-main">Console</span>
		</h2>

		<div use:staggerContainer class="stagger-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ num: '01', title: 'Operations', subtitle: 'Check active wing missions', icon: RocketSolid, href: resolve('/operations') },
				{ num: '02', title: 'Carrier', subtitle: 'Logistics and jump logs', icon: ShipSolid, href: resolve('/fleet-carrier') },
				{ num: '03', title: 'Resources', subtitle: 'Curated third-party tools', icon: StarSolid, href: resolve('/resources') },
				{ num: '04', title: 'About', subtitle: 'Ranks and code values', icon: UserAstronautSolid, href: resolve('/about') }
			] as nav, i}
				<a
					href={nav.href}
					class="stagger-item group relative overflow-hidden rounded-xl border border-white/10 bg-[#000d22]/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-main/40 hover:bg-[#000d22]/95"
					style="--item-delay: {i * 0.1}s;"
				>
					<div
						class="absolute -top-8 -right-8 text-7xl font-bold text-white/5 transition-all duration-500 group-hover:text-primary-main/10"
					>
						{nav.num}
					</div>
					<div class="relative z-10">
						<div
							class="mb-6 inline-flex rounded-lg bg-primary-main/10 p-3 text-primary-light transition-colors duration-300 group-hover:bg-primary-main/20"
						>
							<nav.icon class="size-6" />
						</div>
						<h3
							class="mb-2 text-lg font-bold text-white tracking-wider uppercase group-hover:text-primary-light"
						>
							{nav.title}
						</h3>
						<p class="text-xs leading-relaxed text-gray-400">{nav.subtitle}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SQUADRON OVERVIEW (Stats) -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-20 border-t border-white/5 bg-[#000814]/90">
	<div class="mx-auto max-w-6xl">
		<h2
			use:inview
			class="fade-up-section mb-4 text-center text-3xl font-bold text-white tracking-wide uppercase sm:text-4xl"
		>
			Squadron <span class="text-primary-main">Logistics</span>
		</h2>
		<p use:inview class="fade-up-section mb-16 text-center text-gray-400 text-sm">
			Our verified presence in the Milky Way galaxy
		</p>

		<div use:staggerContainer class="stagger-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each squadronStatsWithIcons as stat, i (stat.label)}
				<div
					class="stagger-item group rounded-xl border border-white/10 bg-[#000d22]/90 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-main/40"
					style="--item-delay: {i * 0.1}s;"
				>
					<div
						class="mb-4 inline-flex rounded-lg bg-primary-main/10 p-3 text-primary-light transition-colors duration-300 group-hover:bg-primary-main/20"
					>
						<stat.icon class="size-7" />
					</div>
					<div class="mb-1 text-3xl font-bold text-white">{stat.value}</div>
					<div class="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- FAQ SECTION (Solid contrast panels) -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative px-4 py-20 border-t border-white/5 bg-[#000814]/50">
	<div class="mx-auto max-w-3xl">
		<h2
			use:inview
			class="fade-up-section mb-4 text-center text-3xl font-bold text-white tracking-wide uppercase sm:text-4xl"
		>
			Frequently Asked <span class="text-primary-main">Questions</span>
		</h2>
		<p use:inview class="fade-up-section mb-16 text-center text-gray-400 text-sm">
			Answers from the squadron flight operations desk
		</p>

		<div class="space-y-4">
			{#each faqs as faq, i (faq.question)}
				<div
					use:inview
					class="fade-up-section rounded-xl border border-white/10 bg-[#000d22]/90 transition-all duration-300"
					style="--delay: {i * 0.08}s;"
				>
					<button
						onclick={() => toggleFaq(i)}
						class="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left text-base font-semibold text-white transition-colors duration-200 hover:text-primary-light"
						aria-expanded={openFaq === i}
					>
						<span class="pr-4 tracking-wide text-sm uppercase">{faq.question}</span>
						<svg
							class="size-5 shrink-0 text-gray-500 transition-transform duration-300 {openFaq === i
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
						class="overflow-hidden transition-all duration-300 ease-in-out"
						style="max-height: {openFaq === i ? '300px' : '0'};"
					>
						<div class="border-t border-white/5 px-6 py-5 text-sm leading-relaxed text-gray-300 bg-[#000814]/80 rounded-b-xl">
							{faq.answer}
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
<section class="relative px-4 py-24 border-t border-white/5 bg-[#000814]/90">
	<div use:inview class="fade-up-section mx-auto max-w-4xl">
		<div
			class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary-main/10 via-[#000d22]/90 to-[#000814]/95 p-12 text-center shadow-2xl sm:p-16"
		>
			<div
				class="pointer-events-none absolute -top-20 -left-20 size-64 rounded-full bg-primary-main/5 blur-3xl"
			></div>
			<div
				class="pointer-events-none absolute -right-20 -bottom-20 size-48 rounded-full bg-primary-main/5 blur-3xl"
			></div>

			<div class="relative z-10">
				<div class="mb-6 inline-flex rounded-full bg-primary-main/15 p-4 text-primary-light">
					<DiscordBrands class="size-10 text-[#5865F2]" />
				</div>

				<h2 class="mb-4 text-3xl font-bold text-white tracking-wide uppercase sm:text-4xl">
					Join Us <span class="text-primary-main">Today</span>
				</h2>

				<p class="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-gray-300">
					Ready to explore the galaxy with the finest commanders this side of the bubble? Apply now, meet your mentor, and let's fly together.
				</p>

				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="cta-primary group inline-flex items-center gap-3 rounded-lg bg-primary-main px-10 py-4 text-sm font-bold text-white shadow-lg shadow-primary-main/30 transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-primary-main/50 uppercase tracking-wider"
				>
					<DiscordBrands class="size-5" />
					Join Our Discord Comms
					<BoltSolid class="size-4 opacity-70 transition-opacity group-hover:opacity-100" />
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

	/* ───── Space element parallax ───── */

	.space-element {
		transition: transform 0.1s linear;
	}
</style>
