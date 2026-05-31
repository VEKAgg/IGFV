<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Interstellar Goodfellas - IGFV</title>
	<meta name="description" content="Elite: Dangerous squadron - Founded in 2019" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-dark-bg text-white">
	<div class="bg-grid pointer-events-none fixed inset-0 z-0"></div>
	<div class="relative z-10 flex min-h-screen flex-col">
		<Header />
		<main class="grow bg-transparent">{@render children()}</main>
		<Footer />
		<ScrollToTop />
	</div>
</div>
