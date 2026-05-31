<script lang="ts">
	import { RocketSolid, GamepadSolid, CodeSolid } from 'svelte-awesome-icons';

	let {
		title = 'Coming Soon',
		message = 'This feature is currently in development...',
		progress = 70,
		progressLabel = 'Progress: 70% - Debugging final boss encounter'
	} = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-dark-bg px-4">
	<div class="flex max-w-lg flex-col items-center gap-8 text-center">
		<!-- Animated Icons -->
		<div class="flex items-center gap-6">
			<div class="animate-bob">
				<RocketSolid class="h-10 w-10 text-primary-main" />
			</div>
			<div class="animate-pulse-slow">
				<GamepadSolid class="h-10 w-10 text-norway-blue" />
			</div>
			<div class="animate-bob animation-delay-500">
				<CodeSolid class="h-10 w-10 text-orange-400" />
			</div>
		</div>

		<!-- Heading -->
		<h1
			class="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-4xl font-extrabold tracking-widest text-transparent uppercase sm:text-5xl"
		>
			{title}
		</h1>

		<!-- Message -->
		<p class="max-w-md text-lg text-gray-400">{message}</p>

		<!-- Progress Bar -->
		<div class="w-full max-w-sm">
			<div class="h-3 overflow-hidden rounded-full bg-dark-slate1">
				<div
					class="animate-progress h-full rounded-full bg-gradient-to-r from-primary-main to-orange-400"
				></div>
			</div>
		</div>

		<!-- Progress Label -->
		<p class="font-mono text-sm text-gray-500">{progressLabel}</p>

		<!-- Return Link -->
		<a
			href="/"
			class="inline-flex items-center gap-2 rounded-md bg-primary-main px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-primary-light hover:shadow-glow-hover"
		>
			Return to Base
		</a>
	</div>
</div>

<style>
	@keyframes bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.1);
		}
	}

	@keyframes progress-grow {
		from {
			width: 10%;
		}
		to {
			width: 70%;
		}
	}

	.animate-bob {
		animation: bob 2s ease-in-out infinite;
	}

	.animate-pulse-slow {
		animation: pulse-slow 2.5s ease-in-out infinite;
	}

	.animation-delay-500 {
		animation-delay: 500ms;
	}

	.animate-progress {
		animation: progress-grow 2.5s ease-out forwards;
	}
</style>
