<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		BookSolid,
		CrosshairsSolid,
		ShoppingCartSolid,
		CompassSolid,
		GemSolid,
		ShieldAltSolid,
		WrenchSolid,
		UsersSolid,
		ChevronDownSolid,
		ExternalLinkAltSolid,
		ArrowLeftSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';

	let expandedCategory = $state<string | null>(null);

	function toggleCategory(id: string) {
		expandedCategory = expandedCategory === id ? null : id;
	}

	const categories = [
		{
			id: 'combat',
			icon: CrosshairsSolid,
			title: 'Combat',
			tips: [
				{
					title: 'Bounty Hunting at Resource Extraction Sites',
					text: 'Equip a Kill Warrant Scanner (KWS) and fire only on confirmed WANTED targets. Scan ships first — clean pilots turn hostile if you fire without a warrant. Stay near system security wings for backup in early encounters.'
				},
				{
					title: 'Conflict Zone Strategy',
					text: 'Select your faction allegiance via the Right Panel > Functions tab before engaging. Maintain wing formation and focus fire on isolated targets. Prioritize Shield Cell Banks when swarmed — pop them before your shields drop to zero.'
				},
				{
					title: 'Survival & Escape Protocol',
					text: 'When overwhelmed: retract hardpoints, charge Frame Shift Drive immediately, set power distribution to ENG (engines), boost away from the fight, and deploy Chaff Launchers + Shield Cell Banks to cover your escape.'
				}
			]
		},
		{
			id: 'trading',
			icon: ShoppingCartSolid,
			title: 'Trading',
			tips: [
				{
					title: 'Route Planning with EDDB.io',
					text: 'Use EDDB.io to find single-hop, loop, and chain trade routes. Input your current system and ship cargo capacity. The tool lists commodity price differentials between nearby stations for maximum profit per tonne.'
				},
				{
					title: 'Commodity Selection',
					text: 'Rare commodities (Legal Drugs, Combat Stabilisations, Lavian Brandy) yield high profit per tonne for smaller holds (20-100 T). Bulk haulers should target high-volume goods like Gold, Palladium, or Bertrandite on loop routes.'
				},
				{
					title: 'Smuggling Tactics',
					text: 'Submit to interdictions and boost away immediately. Approach stations below 100 km/h with landing gear deployed to bypass security scans. Silent Running can help but drains heat — use Heat Sink Launchers if you overheat.'
				}
			]
		},
		{
			id: 'exploration',
			icon: CompassSolid,
			title: 'Exploration',
			tips: [
				{
					title: 'Core Loadout',
					text: 'Essential modules: Advanced Discovery Scanner (for honking), Detailed Surface Scanner (for mapping), and the largest Fuel Scoop you can afford. A 3A or 4A scoop makes long trips far more comfortable.'
				},
				{
					title: 'Star Scoopability — KGBFOAM',
					text: 'Only O, B, A, F, G, K, and M class stars are scoopable. Filter your Galaxy Map route to include only these classes. Running out of fuel between scoopable stars is the number one cause of stranding.'
				},
				{
					title: 'Cartography Sonar Pattern',
					text: 'Scan all stellar bodies in each system — even mundane rocks pay out at distance. Sell cartographic data at stations more than 20 light-years from the source system for maximum payout bonuses. First-discovery tags are permanent.'
				}
			]
		},
		{
			id: 'mining',
			icon: GemSolid,
			title: 'Mining',
			tips: [
				{
					title: 'Required Modules',
					text: 'Minimum loadout: Mining Laser, Refinery, Prospector Limpet Controller, and Collector Limpet Controller. For core mining, add a Pulse Wave Analyser and Seismic Charge Launchers. Always bring more limpets than you think you need.'
				},
				{
					title: 'System Selection',
					text: 'Use edtools.ddns.net (Pristine Metallic Distance Calculator) to locate High Security systems with Pristine Reserves. Pristine rings yield significantly more fragments per asteroid than枯竭 or Low rings.'
				},
				{
					title: 'Efficiency Tips',
					text: 'Always scan asteroids with Prospectors before mining — unprospected rocks yield 30-70% less material. Manage refinery hoppers carefully to clear unwanted filler ores (Iron, Carbon) that block high-value slots.'
				}
			]
		},
		{
			id: 'power',
			icon: ShieldAltSolid,
			title: 'Power & Ship Management',
			tips: [
				{
					title: 'Powerplant Priority Groups',
					text: 'Set module priorities from 1 to 5. Priority 1: FSD + Engines (always active). Priority 5: Cargo Hatch + Fuel Scoop (disable first if power-starved). This ensures critical systems stay online when your canopy breaks or powerplant takes damage.'
				},
				{
					title: 'Heat Management',
					text: 'Keep heat below 100% to avoid module damage. Use Heat Sink Launchers during extended fuel scooping or silent running. Deploying hardpoints while scooping raises heat rapidly — retract between scans.'
				},
				{
					title: 'Power Pips Distribution',
					text: 'ENG pips control speed and pitch rate. SYS pips increase shield strength and recharge rate. WEP pips charge laser weapon capacitors. A balanced 4-2-0 or 2-4-0 split covers most combat scenarios.'
				}
			]
		},
		{
			id: 'engineering',
			icon: WrenchSolid,
			title: 'Engineering',
			tips: [
				{
					title: 'Core Module Upgrades',
					text: 'Priority engineering targets: FSD range (Grade 5 Increased Range), shield strength (Grade 5 Reinforced Shields), and weapon efficiency (Grade 3-5 Overcharged or Efficient). These provide the largest performance gains per materials spent.'
				},
				{
					title: 'Unlock Progression',
					text: 'Engineers unlock via Galaxy Map milestones — exploration data for some, bounty vouchers for others. Start with Felicity Farseer (FSD range) and The Dweller (power distributor). Chain unlocks to access Grade 5 specialists.'
				},
				{
					title: 'Crafting Trade-offs',
					text: 'Weigh stat bonuses against experimental side effects and mass penalties. A Grade 5 Engineered FSD gains 50%+ range but may increase mass. Always check the comparison stats before applying experimental effects.'
				}
			]
		},
		{
			id: 'beginners',
			icon: UsersSolid,
			title: 'Beginner Advice & Squadron Integration',
			tips: [
				{
					title: 'Starter Ships',
					text: 'Cobra Mk III is the best all-rounder for new pilots — decent cargo, hardpoints, and jump range. For pure exploration, the Asp Explorer offers superior range and a larger fuel scoop slot. Avoid expensive ships until you can afford rebuy.'
				},
				{
					title: 'Keybind Fix',
					text: 'Rebind your Boost key away from the default TAB position — it conflicts with the Steam Overlay in many configurations. An accidental boost into an asteroid or station wall is a common and expensive beginner mistake.'
				},
				{
					title: 'Community Integration',
					text: "Elite Dangerous has weak built-in social tools. Join IGFV's Discord immediately for organized wings, mentor pairing, and live rescue support. Squadron membership on Inara tracks your progress and unlocks group benefits."
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Almost Everything Toolkit | IGFV Training Library</title>
	<meta
		name="description"
		content="A comprehensive toolkit covering Combat, Trading, Exploration, Mining, Power Management, Engineering, and Beginner Advice for Elite Dangerous pilots."
	/>
</svelte:head>

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
				<BookSolid class="h-4 w-4" />
				<span>Command Academy</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Almost Everything <span class="text-primary-main">Toolkit</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				A digestible reference covering the seven core pillars of Elite Dangerous gameplay. From
				first launch to deep-space engineering, navigate the galaxy with confidence.
			</p>

			<!-- Attribution -->
			<div class="mt-6 inline-flex items-center gap-2 text-xs text-gray-500">
				<span>Adapted from</span>
				<a
					href="https://steamcommunity.com/sharedfiles/filedetails/?id=2880625991"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-primary-light transition-colors hover:text-white"
				>
					Waveshaper's "The Guide for Almost Everything"
				</a>
				<ExternalLinkAltSolid class="size-3" />
			</div>
		</div>
	</div>
</section>

<!-- Back to Guides -->
<div class="mx-auto max-w-5xl px-4 py-6">
	<a
		href={resolve('/guides')}
		class="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-primary-light uppercase transition-colors hover:text-white"
	>
		<ArrowLeftSolid class="size-3" />
		Back to Training Library
	</a>
</div>

<!-- CATEGORIES ACCORDION -->
<section class="mx-auto max-w-5xl px-4 pb-16 sm:pb-24">
	<div class="space-y-4">
		{#each categories as cat (cat.id)}
			<div
				use:inview
				class="inview-hidden rounded-xl border {expandedCategory === cat.id
					? 'border-primary-main/40 bg-[#000d22]'
					: 'border-white/10 bg-[#000d22]/90'} overflow-hidden transition-all duration-300"
			>
				<!-- Category Header -->
				<button
					onclick={() => toggleCategory(cat.id)}
					class="flex w-full items-center gap-4 p-6 text-left transition-colors hover:bg-white/5"
				>
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-main/15 text-primary-light"
					>
						<cat.icon class="size-5" />
					</div>
					<div class="flex-1">
						<h2 class="text-lg font-bold tracking-wide text-white uppercase">{cat.title}</h2>
						<p class="text-[10px] text-gray-500">{cat.tips.length} tips</p>
					</div>
					<ChevronDownSolid
						class="size-4 shrink-0 text-gray-500 transition-transform duration-200 {expandedCategory ===
						cat.id
							? 'rotate-180'
							: ''}"
					/>
				</button>

				<!-- Expanded Content -->
				{#if expandedCategory === cat.id}
					<div class="border-t border-white/5 px-6 pt-4 pb-6">
						<div class="space-y-4">
							{#each cat.tips as tip (tip.title)}
								<div class="relative flex gap-4 border-l border-white/10 pl-4">
									<div
										class="absolute top-1.5 left-[-5px] size-2 rounded-full bg-primary-main"
									></div>
									<div>
										<h3 class="text-xs font-bold text-white uppercase">{tip.title}</h3>
										<p class="mt-1 text-xs leading-relaxed text-gray-400">{tip.text}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
