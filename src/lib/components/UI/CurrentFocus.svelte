<script lang="ts">
	import { currentFocus } from '$lib/data/squadron';
	import { resolve } from '$app/paths';
	import { ShieldAltSolid, ArrowRightSolid } from 'svelte-awesome-icons';

	let { focus = currentFocus } = $props();
</script>

<div class="relative overflow-hidden rounded-xl border border-primary-main/20 bg-gradient-to-r from-primary-main/10 via-[#000d22]/90 to-primary-main/5 p-6 shadow-glow">
	<!-- Decorative glow -->
	<div class="pointer-events-none absolute -top-12 -left-12 size-36 rounded-full bg-primary-main/5 blur-2xl"></div>

	<div class="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
		<!-- Left: Text and Priority -->
		<div class="flex-1">
			<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-primary-main/10 px-3 py-1 text-xs font-semibold text-primary-light">
				<ShieldAltSolid class="h-3.5 w-3.5" />
				<span>Current Focus: {focus.priority} Priority</span>
			</div>
			<h3 class="text-2xl font-bold text-white tracking-wide">{focus.title}</h3>
			<p class="mt-2 text-sm leading-relaxed text-gray-300 max-w-2xl">{focus.description}</p>
		</div>

		<!-- Right: Progress and Action -->
		<div class="flex shrink-0 flex-col gap-4 md:w-80">
			<!-- Progress Bar -->
			<div>
				<div class="mb-2 flex items-center justify-between text-xs font-semibold">
					<span class="text-gray-400">Tactical Progress</span>
					<span class="text-primary-light">{focus.progress}%</span>
				</div>
				<div class="h-2 w-full overflow-hidden rounded-full bg-white/5 border border-white/10">
					<div 
						class="h-full rounded-full bg-gradient-to-r from-primary-dark to-primary-main shadow-[0_0_8px_rgba(169,11,43,0.5)] transition-all duration-500" 
						style="width: {focus.progress}%"
					></div>
				</div>
				<div class="mt-1.5 flex justify-between text-[11px] text-gray-500">
					<span>0 tonnes</span>
					<span>Target: {focus.target}</span>
				</div>
			</div>

			<!-- Direct CTA Link -->
			<a 
				href={resolve(focus.link)} 
				class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-main px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-main/20 transition-all duration-300 hover:scale-[1.02] hover:bg-primary-light hover:shadow-primary-main/40"
			>
				<span>{focus.linkLabel}</span>
				<ArrowRightSolid class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</div>
