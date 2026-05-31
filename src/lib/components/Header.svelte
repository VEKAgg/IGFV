<script lang="ts">
	import { page } from '$app/stores';
	import { BarsSolid, XmarkSolid } from 'svelte-awesome-icons';

	let mobileOpen = $state(false);

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/guides', label: 'Guides' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/partners', label: 'Partners' }
	];

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b-4 border-primary-main bg-dark-navy shadow-lg"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2" onclick={closeMobile}>
			<span class="text-2xl font-bold tracking-widest text-primary-main">IGFV</span>
		</a>

		<!-- Desktop Nav -->
		<nav class="hidden items-center gap-8 md:flex">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="relative text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors hover:text-white"
					class:active-link={$page.url.pathname === link.href}
				>
					{link.label}
					{#if $page.url.pathname === link.href}
						<span class="absolute right-0 -bottom-1 left-0 h-0.5 bg-primary-main"></span>
					{/if}
				</a>
			{/each}
			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-md bg-primary-main px-4 py-2 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-primary-light hover:shadow-glow-hover"
			>
				Discord
			</a>
		</nav>

		<!-- Mobile Hamburger -->
		<button
			class="flex items-center text-gray-300 transition-colors hover:text-white md:hidden"
			onclick={toggleMobile}
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
		>
			{#if mobileOpen}
				<XmarkSolid class="h-6 w-6" />
			{:else}
				<BarsSolid class="h-6 w-6" />
			{/if}
		</button>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileOpen}
		<div class="border-t border-dark-slate3 bg-dark-navy md:hidden">
			<nav class="flex flex-col space-y-2 px-4 py-4">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="rounded px-3 py-2 text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-dark-slate1 hover:text-white"
						class:active-link={$page.url.pathname === link.href}
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-2 rounded-md bg-primary-main px-4 py-2 text-center text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-primary-light"
					onclick={closeMobile}
				>
					Discord
				</a>
			</nav>
		</div>
	{/if}
</header>

<!-- Spacer to offset fixed header -->
<div class="h-16"></div>
