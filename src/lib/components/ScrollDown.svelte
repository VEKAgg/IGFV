<script lang="ts">
	import { ChevronDownSolid } from 'svelte-awesome-icons';

	function scrollDown() {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	}
</script>

<button
	onclick={scrollDown}
	class="group absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 border-none bg-transparent text-white/50 transition-colors duration-300 hover:text-white"
	aria-label="Scroll down"
>
	<span class="font-mono text-xs tracking-widest uppercase">Scroll</span>
	<span class="chevron-icon block">
		<ChevronDownSolid class="size-5" />
	</span>
</button>

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}

	.chevron-icon {
		animation: bounce 2s ease-in-out infinite;
	}

	.group:hover .chevron-icon {
		animation-duration: 1s;
	}
</style>
