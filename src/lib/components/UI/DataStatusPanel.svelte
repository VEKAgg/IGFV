<script lang="ts">
	import type { DataState } from '$lib/types';
	import { WifiSolid, CircleSolid } from 'svelte-awesome-icons';

	let { state = 'live', source = 'Inara API', updatedAt = '' } = $props<{
		state: DataState;
		source?: string;
		updatedAt?: string;
	}>();
</script>

<div class="inline-flex items-center gap-3 rounded-lg border border-white/5 bg-[#000814]/80 px-3.5 py-1.5 text-xs text-gray-400 shadow-sm backdrop-blur-sm">
	<div class="flex items-center gap-1.5">
		{#if state === 'live'}
			<!-- Glowing green indicator -->
			<span class="relative flex h-2 w-2">
				<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
				<span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
			</span>
			<span class="font-semibold text-green-400 uppercase tracking-wider text-[10px]">Live Sync</span>
		{:else if state === 'placeholder'}
			<!-- Blinking amber indicator -->
			<span class="relative flex h-2 w-2">
				<span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
				<span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
			</span>
			<span class="font-semibold text-amber-400 uppercase tracking-wider text-[10px]">Fallback Mode</span>
		{:else}
			<!-- Blue indicator -->
			<span class="relative flex h-2 w-2">
				<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
			</span>
			<span class="font-semibold text-blue-400 uppercase tracking-wider text-[10px]">Drydock Status</span>
		{/if}
	</div>

	<span class="h-3 w-px bg-white/10"></span>

	<div class="flex items-center gap-1">
		<WifiSolid class="size-3 text-gray-500" />
		<span>Source: {source}</span>
	</div>

	{#if updatedAt}
		<span class="hidden h-3 w-px bg-white/10 sm:block"></span>
		<span class="hidden text-gray-500 sm:inline">Refreshed: {updatedAt}</span>
	{/if}
</div>
