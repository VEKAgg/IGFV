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

<div
	class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-dark-bg px-4"
>
	<!-- Gradient glow background -->
	<div
		class="absolute inset-0 bg-linear-to-b from-primary-main/5 via-transparent to-transparent"
	></div>

	<div
		class="relative z-10 flex max-w-xl flex-col items-center gap-8 rounded-xl border border-white/10 bg-[#000d22]/90 p-8 text-center shadow-glow sm:p-12"
	>
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
			<div
				class="mb-3 inline-flex items-center gap-1.5 rounded border border-primary-main/20 bg-primary-main/15 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-primary-light uppercase"
			>
				System Status: Drydock Maintenance
			</div>
			<h1 class="text-3xl font-extrabold tracking-wider text-white uppercase sm:text-4xl">
				{featureName} <span class="text-primary-main">Incoming</span>
			</h1>
		</div>

		<!-- Explanations -->
		<div
			class="space-y-4 border-t border-b border-white/5 py-6 font-sans text-xs leading-relaxed text-gray-400 sm:text-sm"
		>
			<div>
				<span class="mb-1 block font-mono text-[9px] font-bold text-primary-light uppercase"
					>Target Capability:</span
				>
				<p class="text-gray-300">{whyItMatters}</p>
			</div>
			<div>
				<span class="mb-1 block font-mono text-[9px] font-bold text-gray-500 uppercase"
					>Target Rollout Timeline:</span
				>
				<p class="font-mono text-gray-300">{completionEst}</p>
			</div>
		</div>

		<!-- Recovery instructions -->
		<div>
			<p class="mb-6 font-sans text-xs text-gray-500">
				In the meantime, head back to active flight coordinates or read our logistics dashboards.
			</p>

			<div class="flex flex-col justify-center gap-3 sm:flex-row">
				<a
					href={resolve('/')}
					class="inline-flex items-center justify-center gap-2 rounded bg-primary-main px-6 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
				>
					Return to Base
				</a>
				<a
					href={resolve(alternativeRoute)}
					class="inline-flex items-center justify-center gap-2 rounded border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-white/10"
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
