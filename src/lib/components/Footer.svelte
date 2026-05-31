<script lang="ts">
	import { DiscordBrands, XTwitterBrands, FacebookBrands } from 'svelte-awesome-icons';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ href: 'https://discord.gg/igfv', icon: DiscordBrands, label: 'Discord' },
		{ href: 'https://twitter.com/', icon: XTwitterBrands, label: 'X / Twitter' },
		{ href: 'https://facebook.com/', icon: FacebookBrands, label: 'Facebook' }
	];
</script>

<footer class="border-t-4 border-primary-main bg-dark-navy">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8"
	>
		<!-- Copyright -->
		<p class="text-sm text-gray-400">
			&copy; {currentYear} Interstellar Goodfellas - IGFV. All rights reserved.
		</p>

		<!-- Social Links -->
		<div class="flex items-center gap-4">
			{#each socialLinks as link (link.href)}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-white"
					aria-label={link.label}
				>
					<link.icon class="h-5 w-5" />
				</a>
			{/each}
		</div>
	</div>
</footer>
