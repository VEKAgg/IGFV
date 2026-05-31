<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { RocketSolid } from 'svelte-awesome-icons';

	let { status, error } = $props();
</script>

<section class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
	<div
		class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"
	></div>

	<div class="relative z-10 mx-auto max-w-2xl px-4 text-center">
		<div use:inview class="inview-hidden">
			<h1 class="text-9xl font-bold tracking-tight text-primary-main sm:text-[10rem]">{status}</h1>
			<p class="mt-4 text-3xl font-bold text-white sm:text-4xl">Game Over!</p>
			<p class="mt-4 text-lg text-gray-300">
				The quest you're looking for seems to be in another castle...
			</p>
			{#if status && error}
				<p class="mt-2 text-sm text-gray-500">Status: {status} — {error?.message}</p>
			{/if}
			<div class="mt-8">
				<a
					href="/"
					class="inline-flex items-center gap-2 rounded-lg bg-primary-main px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
				>
					<RocketSolid class="h-5 w-5" />
					Return to Base
				</a>
			</div>
			<p class="animate-blink mt-8 text-sm text-gray-500">Press START to continue...</p>
		</div>
	</div>
</section>
