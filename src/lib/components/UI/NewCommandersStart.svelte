<script lang="ts">
	import { onboardingSteps } from '$lib/data/squadron';
	import { resolve } from '$app/paths';
	import { DiscordBrands, RocketSolid, UserAstronautSolid, StarSolid } from 'svelte-awesome-icons';

	// Step icons mapped to steps
	const icons = [DiscordBrands, UserAstronautSolid, StarSolid, RocketSolid];
</script>

<div class="relative overflow-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-xl sm:p-8">
	<!-- Decorative grid overlay -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 16px 16px;"></div>

	<div class="relative z-10">
		<div class="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
			<div>
				<h3 class="text-xl font-bold tracking-wide text-white uppercase sm:text-2xl">
					New Commanders <span class="text-primary-main">Start Here</span>
				</h3>
				<p class="mt-1 text-xs text-gray-400 sm:text-sm">Follow these steps to establish your wings in the squadron</p>
			</div>
			<span class="animate-blink hidden h-2.5 w-2.5 rounded-full bg-primary-main sm:block" title="Ready for onboarding"></span>
		</div>

		<!-- Step Flow -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each onboardingSteps as step, i}
				{@const IconComponent = icons[i]}
				<div class="relative flex flex-col justify-between rounded-lg border border-white/5 bg-[#000814]/75 p-5 transition-all duration-300 hover:border-primary-main/20 hover:bg-[#000814]/95">
					<div class="absolute -top-3 -right-3 flex size-8 items-center justify-center rounded-full border border-white/5 bg-[#000d22] text-xs font-bold text-gray-500">
						{step.num}
					</div>
					<div>
						<div class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary-main/10 text-primary-light">
							<IconComponent class="size-5" />
						</div>
						<h4 class="text-base font-bold text-white mb-2">{step.title}</h4>
						<p class="text-xs leading-relaxed text-gray-400">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Quick Onboarding CTAs -->
		<div class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
			<p class="text-xs text-gray-400 sm:text-sm">
				Need a hand? Our recruiters and mentors are standing by in the Discord communication channels.
			</p>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a 
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-main px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-glow-hover"
				>
					<DiscordBrands class="size-4" />
					Join Discord
				</a>
				<a 
					href={resolve('/join')}
					class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10"
				>
					Onboarding Details
				</a>
			</div>
		</div>
	</div>
</div>
