<script lang="ts">
	import { ChevronUpSolid } from 'svelte-awesome-icons';

	let scrollY = $state(0);

	$effect(() => {
		function onScroll() {
			scrollY = window.scrollY;
		}

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	let visible = $derived(scrollY > 300);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button
	class="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main text-white shadow-lg transition-all hover:bg-primary-light hover:shadow-glow-hover"
	class:opacity-100={visible}
	class:opacity-0={!visible}
	class:pointer-events-none={!visible}
	onclick={scrollToTop}
	aria-label="Scroll to top"
>
	<ChevronUpSolid class="h-5 w-5" />
</button>
