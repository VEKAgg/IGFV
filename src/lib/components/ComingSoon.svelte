<script lang="ts">
	import { RocketSolid, SpaceShuttleSolid, BoltSolid } from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';

	let {
		featureName = 'Galactic Trade Ledger Sync',
		whyItMatters = 'Automatically maps cargo loops and Tritium fuel depots directly from Inara and elite logs.',
		alternativeRoute = '/fleet-carrier',
		alternativeLabel = 'View Carrier Logistics',
		completionEst = '3311-08-01 (Estimated)'
	} = $props<{
		featureName?: string;
		whyItMatters?: string;
		alternativeRoute?: string;
		alternativeLabel?: string;
		completionEst?: string;
	}>();
</script>

<div class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-dark-bg px-4 overflow-hidden">
	<!-- Gradient glow background -->
	<div class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"></div>

	<div class="relative z-10 flex max-w-xl flex-col items-center gap-8 text-center rounded-xl border border-white/10 bg-[#000d22]/90 p-8 shadow-glow sm:p-12">
		<!-- Operational Drydock Graphic -->
		<div class="flex items-center gap-6">
			<div class="animate-bob text-primary-light">
				<SpaceShuttleSolid class="h-10 w-10 rotate-90" />
			</div>
			<span class="h-6 w-px bg-white/15"></span>
			<div class="animate-pulse text-gray-500">
				<RocketSolid class="h-8 w-8" />
			</div>
		</div>

		<!-- Status Label -->
		<div>
			<div class="mb-3 inline-flex items-center gap-1.5 rounded bg-primary-main/15 px-2.5 py-0.5 text-[10px] font-bold text-primary-light uppercase tracking-widest border border-primary-main/20">
				System Status: Drydock Maintenance
			</div>
			<h1 class="text-3xl font-extrabold tracking-wider text-white uppercase sm:text-4xl">
				{featureName} <span class="text-primary-main">Incoming</span>
			</h1>
		</div>

		<!-- Explanations -->
		<div class="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-400 font-sans border-t border-b border-white/5 py-6">
			<div>
				<span class="text-[9px] uppercase font-bold text-primary-light font-mono block mb-1">Target Capability:</span>
				<p class="text-gray-300">{whyItMatters}</p>
			</div>
			<div>
				<span class="text-[9px] uppercase font-bold text-gray-500 font-mono block mb-1">Target Rollout Timeline:</span>
				<p class="text-gray-300 font-mono">{completionEst}</p>
			</div>
		</div>

		<!-- Recovery instructions -->
		<div>
			<p class="text-xs text-gray-500 mb-6 font-sans">
				In the meantime, head back to active flight coordinates or read our logistics dashboards.
			</p>

			<div class="flex flex-col gap-3 sm:flex-row justify-center">
				<a
					href={resolve('/')}
					class="inline-flex items-center justify-center gap-2 rounded bg-primary-main px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-primary-light"
				>
					Return to Base
				</a>
				<a
					href={resolve(alternativeRoute)}
					class="inline-flex items-center justify-center gap-2 rounded border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10"
				>
					{alternativeLabel}
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	.animate-bob {
		animation: bob 2.5s ease-in-out infinite;
	}
</style>
