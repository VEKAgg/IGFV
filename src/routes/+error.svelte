<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { RocketSolid, ExclamationTriangleSolid } from 'svelte-awesome-icons';
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
</script>

<section class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
	<div
		class="absolute inset-0 bg-linear-to-b from-primary-main/5 via-transparent to-transparent"
	></div>

	<div class="relative z-10 mx-auto max-w-2xl px-4 text-center">
		<div use:inview class="inview-hidden">
			<div class="mb-6 flex justify-center">
				<div class="rounded-full border border-primary-main/30 bg-primary-main/10 p-4">
					<ExclamationTriangleSolid class="h-10 w-10 text-primary-light" />
				</div>
			</div>

			<h1 class="text-6xl font-bold tracking-tight text-primary-main sm:text-8xl">
				{$page.status}
			</h1>

			<p class="mt-4 text-2xl font-bold tracking-wider text-white uppercase sm:text-3xl">
				Navigation Computer Error
			</p>
			<p class="mt-2 text-sm font-semibold tracking-widest text-primary-light uppercase">
				Frame Shift Drive Malfunction
			</p>

			<p class="mt-6 text-sm leading-relaxed text-gray-400">
				{#if $page.status === 404}
					The stellar body you are requesting does not exist in any known star system.
					Verify your coordinates and try again.
				{:else}
					Flight computers encountered an unexpected anomaly. Check your systems and retry.
				{/if}
			</p>

			{#if $page.error?.message}
				<p class="mt-3 font-mono text-xs text-gray-500">
					Error Log: {$page.status} — {$page.error.message}
				</p>
			{/if}

			<div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
				<a
					href={resolve('/')}
					class="inline-flex items-center gap-2 rounded-lg bg-primary-main px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
				>
					<RocketSolid class="h-4 w-4" />
					Return to Base
				</a>
				<a
					href={resolve('/join')}
					class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-white/10"
				>
					Join Squadron
				</a>
				<a
					href={resolve('/operations')}
					class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-white/10"
				>
					Operations
				</a>
				<a
					href={resolve('/resources')}
					class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-white/10"
				>
					Resources
				</a>
			</div>

			<p class="animate-blink mt-10 text-xs text-gray-500">
				Recalibrating navigation array...
			</p>
		</div>
	</div>
</section>
