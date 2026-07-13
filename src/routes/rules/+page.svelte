<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		ShieldAltSolid,
		CheckSolid,
		InfoCircleSolid,
		ExclamationTriangleSolid,
		HeartSolid,
		UsersSolid,
		WrenchSolid
	} from 'svelte-awesome-icons';
	import { codeOfConductSummary, detailedRules } from '$lib/data/squadron';
</script>

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
				<ShieldAltSolid class="h-4 w-4" />
				<span>Squadron Charter</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Code of <span class="text-primary-main">Conduct</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Rules of engagement, code of conduct, and guidelines to ensure a safe, mature, and welcoming
				bubble for all commanders.
			</p>
		</div>
	</div>
</section>

<!-- PLAIN LANGUAGE SUMMARY (At the top!) -->
<section class="mx-auto max-w-4xl px-4 py-12 sm:py-16">
	<div
		use:inview
		class="inview-hidden flex items-start gap-5 rounded-xl border-2 border-primary-main/20 bg-linear-to-br from-primary-main/5 via-[#000d22]/95 to-primary-main/10 p-6 shadow-glow sm:p-8"
	>
		<div
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-main/20 text-primary-light"
		>
			<InfoCircleSolid class="size-5" />
		</div>
		<div>
			<h2 class="mb-2 text-lg font-bold tracking-wider text-white uppercase">
				Plain Language Summary
			</h2>
			<p class="font-sans text-xs leading-relaxed text-gray-300 sm:text-sm">
				{codeOfConductSummary}
			</p>
		</div>
	</div>
</section>

<!-- WHY THESE RULES EXIST (Values-driven section) -->
<section class="border-t border-white/5 bg-dark-bg/90 px-4 py-16">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<h2
					use:inview
					class="inview-hidden mb-4 text-2xl font-bold tracking-wider text-white uppercase"
				>
					Why These Rules <span class="text-primary-main">Exist</span>
				</h2>
				<div class="mb-6 h-1 w-12 rounded bg-primary-main"></div>

				<div class="space-y-6 font-sans text-xs leading-relaxed text-gray-400 sm:text-sm">
					<p>
						Elite Dangerous can be an intimidating galaxy, and wing coordination requires trust. We
						establish these guidelines not to build bureaucracy, but to protect the friendly,
						low-stress environment that allows our pilots to relax and enjoy the game.
					</p>
					<p>Our rules ensure that:</p>
					<ul class="space-y-3.5 text-xs text-gray-300">
						<li class="flex items-center gap-3">
							<span
								class="flex size-5 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light"
							>
								<HeartSolid class="size-2.5" />
							</span>
							<span>Every pilot feels safe from harassment, regardless of platform or rank.</span>
						</li>
						<li class="flex items-center gap-3">
							<span
								class="flex size-5 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light"
							>
								<UsersSolid class="size-2.5" />
							</span>
							<span
								>Squadron wings maintain a positive reputation across the Bubble and Inara networks.</span
							>
						</li>
						<li class="flex items-center gap-3">
							<span
								class="flex size-5 shrink-0 items-center justify-center rounded bg-primary-main/10 text-primary-light"
							>
								<WrenchSolid class="size-2.5" />
							</span>
							<span
								>We coordinate campaigns and carrier jumps in a transparent, collaborative way.</span
							>
						</li>
					</ul>
				</div>
			</div>

			<!-- DETAILED RULES (Solid containers) -->
			<div class="space-y-4">
				<h3 class="mb-6 text-lg font-bold tracking-wide text-white uppercase">Core Directives</h3>
				{#each detailedRules as rule, i}
					<div
						use:inview={{ delay: i * 80 }}
						class="inview-hidden rounded-xl border border-white/10 bg-[#000d22]/90 p-5 transition-colors hover:border-primary-main/20"
					>
						<div class="mb-2 flex items-center gap-3">
							<span
								class="flex size-6 items-center justify-center rounded-full border border-primary-main/20 bg-primary-main/10 text-xs font-bold text-primary-light"
							>
								{i + 1}
							</span>
							<h4 class="text-xs font-bold tracking-wide text-white uppercase sm:text-sm">
								{rule.title}
							</h4>
						</div>
						<p class="pl-9 font-sans text-xs leading-relaxed text-gray-400">{rule.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Reporting Violations -->
<section class="border-t border-white/5 bg-dark-bg/50 px-4 py-16">
	<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
		<ExclamationTriangleSolid class="mx-auto mb-4 size-7 text-primary-light" />
		<h2 class="mb-2 text-xl font-bold tracking-wider text-white uppercase">Reporting Violations</h2>
		<p class="mx-auto mb-6 max-w-xl text-xs leading-relaxed text-gray-400 sm:text-sm">
			If you encounter harassment, griefing, or any breach of our Code of Conduct by an IGFV member,
			please take screenshots or logs and contact one of our Command Staff or managers privately via
			Discord. We review all reports discretely and firmly.
		</p>
		<a
			href="https://discord.gg/igfv"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded bg-primary-main px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
		>
			Contact Command Staff
		</a>
	</div>
</section>
