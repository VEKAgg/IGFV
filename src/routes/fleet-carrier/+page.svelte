<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		SpaceShuttleSolid,
		MapMarkerAltSolid,
		UsersSolid,
		CheckSolid,
		ClockSolid,
		FireSolid,
		ToolboxSolid,
		HammerSolid,
		InfoCircleSolid,
		ShieldAltSolid,
		ShipSolid,
		HistorySolid,
		MapSolid
	} from 'svelte-awesome-icons';
	import DataStatusPanel from '$lib/components/UI/DataStatusPanel.svelte';
	import { fleetCarrierPlaceholder, carrierEtiquette, carrierServicesDetail, carrierJumpHistory } from '$lib/data/fleet-carrier';
</script>

<!-- Live Operational Dashboard (Status at the top!) -->
<section class="relative border-b border-primary-main/20 bg-[#000814]/90 px-4 py-16 sm:py-24">
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>
	<div class="mx-auto max-w-7xl relative z-10">
		
		<!-- Header with Live Status Note -->
		<div class="mb-12 flex flex-col justify-between items-start gap-4 md:flex-row md:items-center">
			<div>
				<div class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1 text-xs text-primary-light uppercase tracking-wider font-semibold">
					<SpaceShuttleSolid class="h-3.5 w-3.5" />
					<span>Logistics Command Console</span>
				</div>
				<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
					ISS <span class="text-primary-main">Valhall</span>
				</h1>
				<p class="mt-1 text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-mono">Registry: {fleetCarrierPlaceholder.id} &bull; Majestic-Class Fleet Vanguard</p>
			</div>
			
			<!-- Data Status Note -->
			<div>
				<DataStatusPanel state="placeholder" source="Inara Carrier Sync" updatedAt={fleetCarrierPlaceholder.updatedAt.slice(0,10)} />
			</div>
		</div>

		<!-- Dashboard Grid -->
		<div class="grid gap-6 md:grid-cols-3">
			
			<!-- Left: Location Block -->
			<div use:inview class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow">
				<div class="mb-4 flex items-center gap-3 border-b border-white/5 pb-3">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-main/15 text-primary-light">
						<MapMarkerAltSolid class="h-5 w-5" />
					</div>
					<h3 class="text-sm font-bold text-white uppercase tracking-wider">Current Coordinates</h3>
				</div>
				
				<div class="space-y-3.5 text-xs text-gray-300">
					<div class="flex items-center justify-between border-b border-white/5 pb-2">
						<span class="text-gray-500">Sector / System</span>
						<span class="font-bold text-white font-mono">{fleetCarrierPlaceholder.location}</span>
					</div>
					<div class="flex items-center justify-between border-b border-white/5 pb-2">
						<span class="text-gray-500">Orbit Target</span>
						<span class="font-medium text-white">{fleetCarrierPlaceholder.location} A 3</span>
					</div>
					<div class="flex items-center justify-between border-b border-white/5 pb-2">
						<span class="text-gray-500">Docking Access</span>
						<span class="inline-flex items-center gap-1 rounded bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-400 border border-green-500/20">Open to All</span>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-gray-500">Jump Status</span>
						<span class="text-primary-light font-medium uppercase font-mono tracking-wider">Parked in Orbit</span>
					</div>
				</div>
			</div>

			<!-- Center: Operational Stats -->
			<div use:inview={{ delay: 100 }} class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow">
				<div class="mb-4 flex items-center gap-3 border-b border-white/5 pb-3">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-main/15 text-primary-light">
						<SpaceShuttleSolid class="h-5 w-5" />
					</div>
					<h3 class="text-sm font-bold text-white uppercase tracking-wider">Carrier Logs</h3>
				</div>
				
				<div class="space-y-3.5 text-xs text-gray-300">
					<div class="flex items-center justify-between border-b border-white/5 pb-2">
						<span class="text-gray-500">Services Active</span>
						<span class="font-medium text-white">{fleetCarrierPlaceholder.activeServices.length} / 8 Services</span>
					</div>
					<div class="flex items-center justify-between border-b border-white/5 pb-2">
						<span class="text-gray-500">Cargo Capacity</span>
						<span class="font-medium text-white">25,000 Tonnes</span>
					</div>
					<div class="flex items-center justify-between border-b border-white/5 pb-2">
						<span class="text-gray-500">Tariff Rate</span>
						<span class="font-bold text-green-400 font-mono">0% (Squadron Standard)</span>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-gray-500">Superpower Faction</span>
						<span class="font-medium text-white">Empire Allied</span>
					</div>
				</div>
			</div>

			<!-- Right: CURRENT OPERATIONS ORDER -->
			<div use:inview={{ delay: 200 }} class="inview-hidden rounded-xl border border-primary-main/20 bg-gradient-to-br from-primary-main/5 via-[#000d22]/95 to-primary-main/10 p-6 shadow-glow">
				<div class="mb-4 flex items-center gap-3 border-b border-white/5 pb-3">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-main/15 text-primary-light">
						<ShieldAltSolid class="h-5 w-5 animate-pulse" />
					</div>
					<h3 class="text-sm font-bold text-white uppercase tracking-wider">Active Logistic Orders</h3>
				</div>
				
				<h4 class="text-sm font-bold text-white mb-1 uppercase tracking-wide">Tritium Loading Phase</h4>
				<p class="text-xs text-gray-400 leading-relaxed mb-4">
					Loading Tritium fuel for upcoming summer deep-space Colonia voyage. Haulers are buying Tritium from surrounding sectors and selling to Valhall commodities market.
				</p>
				
				<div class="flex items-center justify-between text-xs border-t border-white/5 pt-3">
					<span class="text-gray-500 font-medium uppercase text-[10px]">Tritium Depot:</span>
					<span class="font-bold text-primary-light font-mono">3,000 / 5,000 T (60%)</span>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- ─── WHY VALHALL MATTERS section ─── -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<h2 use:inview class="inview-hidden text-3xl font-bold text-white uppercase tracking-wider">
					Why Valhall <span class="text-primary-main">Matters</span>
				</h2>
				<div class="mt-4 mb-6 h-1 w-16 rounded-full bg-primary-main"></div>
				
				<div class="space-y-6 text-sm text-gray-300">
					<p>
						In the dangerous deep-space regions of the galaxy, ISS Valhall serves as our mobile operations base. It bridges the huge distance between Colonia and the bubble, providing safety and services to exploration and trade wings.
					</p>
					<div class="flex gap-4">
						<span class="flex size-8 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light">
							<MapSolid class="size-4" />
						</span>
						<div>
							<h4 class="text-xs font-bold text-white uppercase">Mobile Logistic Platform</h4>
							<p class="text-xs text-gray-500 mt-1">Acquires commodities, supports trade loops, and provides refuel/repair services in remote sectors.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="flex size-8 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light">
							<SpaceShuttleSolid class="size-4" />
						</span>
						<div>
							<h4 class="text-xs font-bold text-white uppercase">Deep Space Headquarters</h4>
							<p class="text-xs text-gray-500 mt-1">Serves as the launching pad for exploration expeditions, allowing members to safely store multiple ships.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-8 shadow-glow">
				<h3 class="text-lg font-bold text-white uppercase mb-6 tracking-wider">MEMBER USAGE GUIDE</h3>
				<div class="space-y-4">
					{#each [
						{ title: 'Storing Ships', desc: 'Dock and use the Shipyard service to store your combat, mining, and exploration ships. Perfect for moving your entire fleet.' },
						{ title: 'Selling Data', desc: 'Sold scans to Universal Cartographics on board will help fund the carrier bank, but deducts a standard 25% tax.' },
						{ title: 'Tritium Fuel Donations', desc: 'Operating a fleet carrier requires Tritium fuel. Help us by transferring Tritium from your cargo bay to the carrier depot.' },
						{ title: 'No Illegal Trade Outlets', desc: 'Dumping illegal cargo/black market goods is blocked unless specific black market operations are active.' }
					] as guide}
						<div class="border-l-2 border-primary-main pl-4">
							<h4 class="text-xs font-bold text-white uppercase">{guide.title}</h4>
							<p class="text-xs text-gray-500 mt-1 leading-relaxed">{guide.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Available Services Detail (Solid panels) -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center">
			<h2 use:inview class="inview-hidden text-3xl font-bold text-white uppercase tracking-wider">
				Available <span class="text-primary-main">Services</span>
			</h2>
			<p use:inview class="inview-hidden text-xs text-gray-400 mt-1">Essential carrier modules active for squadron support</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each carrierServicesDetail as service}
				<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 flex flex-col justify-between transition-all hover:border-primary-main/20">
					<div>
						<div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
							<span class="inline-flex items-center gap-1 rounded bg-green-500/10 px-2 py-0.5 text-[10px] font-bold text-green-400 border border-green-500/20">
								{service.status}
							</span>
							<span class="text-[10px] text-gray-500 uppercase font-mono tracking-wider">{service.cost}</span>
						</div>
						<h3 class="text-base font-bold text-white uppercase mb-2 tracking-wide">{service.name}</h3>
						<p class="text-xs leading-relaxed text-gray-400">{service.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Jump Schedule & History -->
<section class="border-t border-white/5 bg-[#000814]/90 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-12 lg:grid-cols-2">
			
			<!-- Left: Jump Schedule -->
			<div>
				<h2 use:inview class="inview-hidden text-2xl font-bold text-white uppercase tracking-wider mb-6">
					Jump <span class="text-primary-main">Schedule</span>
				</h2>
				<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-glow">
					<div class="mb-4 flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" />
						<span class="text-xs font-bold text-primary-light uppercase tracking-wider">Scheduled Departure</span>
					</div>
					<h3 class="text-base font-bold text-white uppercase">Colonia Summer Expedition Run</h3>
					<p class="text-xs text-gray-400 leading-relaxed mt-2">
						The next scheduled voyage is a round trip to Colonia Nebula. Jumps depart LHS 3447 at 20:00 UTC. Ensure you are docked by 19:30 UTC. Late transits will be left behind in drydock.
					</p>
					<div class="mt-6 flex flex-wrap gap-4 text-xs font-mono text-gray-300">
						<div class="rounded bg-black/40 px-3 py-1.5 border border-white/5">Departure: July 1</div>
						<div class="rounded bg-black/40 px-3 py-1.5 border border-white/5">ETA Colonia: July 3</div>
						<div class="rounded bg-black/40 px-3 py-1.5 border border-white/5">Tritium Need: 5,000 T</div>
					</div>
				</div>
			</div>

			<!-- Right: Jump Log History (Solid container list) -->
			<div>
				<h2 use:inview class="inview-hidden text-2xl font-bold text-white uppercase tracking-wider mb-6">
					Carrier <span class="text-primary-main">Logs</span>
				</h2>
				
				<div class="space-y-4">
					{#each carrierJumpHistory as log}
						<div class="rounded-xl border border-white/5 bg-[#000814]/60 p-5 flex items-start gap-4">
							<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light">
								<HistorySolid class="size-4" />
							</div>
							<div class="flex-1 min-w-0">
								<div class="flex items-center justify-between text-xs mb-1">
									<span class="font-bold text-gray-300">{log.date}</span>
									<span class="text-[10px] text-gray-500 font-mono">Fuel: {log.tritiumUsed}</span>
								</div>
								<h4 class="text-xs font-bold text-white uppercase tracking-wide truncate">
									{log.origin} &rarr; {log.destination}
								</h4>
								<p class="text-xs text-gray-400 mt-1 leading-relaxed">{log.purpose}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

		</div>
	</div>
</section>

<!-- Carrier Etiquette FAQ section (Solid panels) -->
<section class="border-t border-white/5 bg-[#000814]/50 py-16 sm:py-24 px-4">
	<div class="mx-auto max-w-3xl">
		<div class="mb-12 text-center">
			<h2 use:inview class="inview-hidden text-3xl font-bold text-white uppercase tracking-wider">
				Carrier <span class="text-primary-main">Etiquette</span>
			</h2>
			<p use:inview class="inview-hidden text-xs text-gray-400 mt-1">Rules for landing pad reservations and cargo management</p>
		</div>

		<div class="space-y-4">
			{#each carrierEtiquette as rule}
				<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-6">
					<h3 class="text-sm font-bold text-white uppercase tracking-wide mb-2">{rule.title}</h3>
					<p class="text-xs leading-relaxed text-gray-400">{rule.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
