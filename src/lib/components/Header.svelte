<script lang="ts">
	import { page } from '$app/stores';
	import { BarsSolid, XmarkSolid, ChevronDownSolid } from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import DiscordLive from './DiscordLive.svelte';

	let mobileOpen = $state(false);
	let opsDropdownOpen = $state(false);
	let mediaDropdownOpen = $state(false);
	let infoDropdownOpen = $state(false);

	const aboutLinks = [{ href: resolve('/about'), label: 'About' }];

	const opsLinks = [
		{ href: resolve('/operations'), label: 'Operations' },
		{ href: resolve('/fleet-carrier'), label: 'Fleet Carrier' },
		{ href: resolve('/events'), label: 'Events' }
	];

	const mediaLinks = [
		{ href: resolve('/news'), label: 'News' },
		{ href: resolve('/gallery'), label: 'Gallery' }
	];

	const infoLinks = [
		{ href: resolve('/guides'), label: 'Guides' },
		{ href: resolve('/resources'), label: 'Resources' },
		{ href: resolve('/rules'), label: 'Rules' }
	];

	const endLinks = [
		{ href: resolve('/members'), label: 'Members' },
		{ href: resolve('/join'), label: 'Join' }
	];

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	function toggleOpsDropdown() {
		opsDropdownOpen = !opsDropdownOpen;
		mediaDropdownOpen = false;
		infoDropdownOpen = false;
	}

	function toggleMediaDropdown() {
		mediaDropdownOpen = !mediaDropdownOpen;
		opsDropdownOpen = false;
		infoDropdownOpen = false;
	}

	function toggleInfoDropdown() {
		infoDropdownOpen = !infoDropdownOpen;
		opsDropdownOpen = false;
		mediaDropdownOpen = false;
	}

	function closeAllDropdowns() {
		opsDropdownOpen = false;
		mediaDropdownOpen = false;
		infoDropdownOpen = false;
	}

	function isActive(href: string) {
		return $page.url.pathname === href;
	}

	function isGroupActive(links: { href: string }[]) {
		return links.some((l) => $page.url.pathname === l.href);
	}

	$effect(() => {
		function handleClickOutside(e: MouseEvent) {
			const target = e.target as HTMLElement;
			if (
				!target.closest('[data-ops-dropdown]') &&
				!target.closest('[data-media-dropdown]') &&
				!target.closest('[data-info-dropdown]')
			) {
				closeAllDropdowns();
			}
		}
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b-4 border-primary-main bg-dark-navy shadow-lg"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<a href={resolve('/')} class="flex items-center gap-2" onclick={closeMobile}>
			<span class="text-2xl font-bold tracking-widest text-primary-main">IGFV</span>
		</a>

		<!-- Desktop Nav -->
		<nav class="hidden items-center gap-4 md:flex lg:gap-6">
			<!-- About (top-level) -->
			{#each aboutLinks as link (link.href)}
				<a
					href={link.href}
					class="relative text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:text-white lg:text-sm"
					class:active-link={isActive(link.href)}
				>
					{link.label}
					{#if isActive(link.href)}
						<span class="absolute right-0 -bottom-1 left-0 h-0.5 bg-primary-main"></span>
					{/if}
				</a>
			{/each}

			<!-- Operations Dropdown -->
			<div class="relative" data-ops-dropdown>
				<button
					onclick={toggleOpsDropdown}
					class="flex items-center gap-1 text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:text-white lg:text-sm"
				>
					<span>Operations</span>
					<ChevronDownSolid
						class="size-3 transition-transform duration-200 {opsDropdownOpen ? 'rotate-180' : ''}"
					/>
					{#if isGroupActive(opsLinks)}
						<span class="absolute right-0 -bottom-1 left-0 h-0.5 bg-primary-main"></span>
					{/if}
				</button>

				{#if opsDropdownOpen}
					<div
						class="absolute top-full right-0 z-50 mt-2 min-w-[160px] rounded-lg border border-white/10 bg-dark-navy py-1.5 shadow-xl"
					>
						{#each opsLinks as link (link.href)}
							<a
								href={link.href}
								class="block px-4 py-2 text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-white/5 hover:text-white"
								class:active-link={isActive(link.href)}
								onclick={closeAllDropdowns}
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Media Dropdown -->
			<div class="relative" data-media-dropdown>
				<button
					onclick={toggleMediaDropdown}
					class="flex items-center gap-1 text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:text-white lg:text-sm"
				>
					<span>Media</span>
					<ChevronDownSolid
						class="size-3 transition-transform duration-200 {mediaDropdownOpen ? 'rotate-180' : ''}"
					/>
					{#if isGroupActive(mediaLinks)}
						<span class="absolute right-0 -bottom-1 left-0 h-0.5 bg-primary-main"></span>
					{/if}
				</button>

				{#if mediaDropdownOpen}
					<div
						class="absolute top-full right-0 z-50 mt-2 min-w-[160px] rounded-lg border border-white/10 bg-dark-navy py-1.5 shadow-xl"
					>
						{#each mediaLinks as link (link.href)}
							<a
								href={link.href}
								class="block px-4 py-2 text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-white/5 hover:text-white"
								class:active-link={isActive(link.href)}
								onclick={closeAllDropdowns}
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Information Dropdown -->
			<div class="relative" data-info-dropdown>
				<button
					onclick={toggleInfoDropdown}
					class="flex items-center gap-1 text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:text-white lg:text-sm"
				>
					<span>Information</span>
					<ChevronDownSolid
						class="size-3 transition-transform duration-200 {infoDropdownOpen ? 'rotate-180' : ''}"
					/>
					{#if isGroupActive(infoLinks)}
						<span class="absolute right-0 -bottom-1 left-0 h-0.5 bg-primary-main"></span>
					{/if}
				</button>

				{#if infoDropdownOpen}
					<div
						class="absolute top-full right-0 z-50 mt-2 min-w-[160px] rounded-lg border border-white/10 bg-dark-navy py-1.5 shadow-xl"
					>
						{#each infoLinks as link (link.href)}
							<a
								href={link.href}
								class="block px-4 py-2 text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-white/5 hover:text-white"
								class:active-link={isActive(link.href)}
								onclick={closeAllDropdowns}
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- End Links (Members, Join) -->
			{#each endLinks as link (link.href)}
				<a
					href={link.href}
					class="relative text-xs font-medium tracking-wider text-gray-300 uppercase transition-colors hover:text-white lg:text-sm"
					class:active-link={isActive(link.href)}
				>
					{link.label}
					{#if isActive(link.href)}
						<span class="absolute right-0 -bottom-1 left-0 h-0.5 bg-primary-main"></span>
					{/if}
				</a>
			{/each}

			<DiscordLive showLabel={false} />
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
			<nav class="flex flex-col space-y-1 px-4 py-4">
				<!-- About -->
				{#each aboutLinks as link (link.href)}
					<a
						href={link.href}
						class="rounded px-3 py-2 text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-dark-slate1 hover:text-white"
						class:active-link={isActive(link.href)}
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}

				<!-- Mobile Operations Group -->
				<div>
					<button
						onclick={toggleOpsDropdown}
						class="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-dark-slate1 hover:text-white"
					>
						<span>Operations</span>
						<ChevronDownSolid
							class="size-3 transition-transform duration-200 {opsDropdownOpen ? 'rotate-180' : ''}"
						/>
					</button>
					{#if opsDropdownOpen}
						<div class="ml-3 space-y-1 border-l border-white/10 pl-3">
							{#each opsLinks as link (link.href)}
								<a
									href={link.href}
									class="block rounded px-3 py-1.5 text-xs font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-white"
									class:active-link={isActive(link.href)}
									onclick={closeMobile}
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Mobile Media Group -->
				<div>
					<button
						onclick={toggleMediaDropdown}
						class="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-dark-slate1 hover:text-white"
					>
						<span>Media</span>
						<ChevronDownSolid
							class="size-3 transition-transform duration-200 {mediaDropdownOpen
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if mediaDropdownOpen}
						<div class="ml-3 space-y-1 border-l border-white/10 pl-3">
							{#each mediaLinks as link (link.href)}
								<a
									href={link.href}
									class="block rounded px-3 py-1.5 text-xs font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-white"
									class:active-link={isActive(link.href)}
									onclick={closeMobile}
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Mobile Information Group -->
				<div>
					<button
						onclick={toggleInfoDropdown}
						class="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-dark-slate1 hover:text-white"
					>
						<span>Information</span>
						<ChevronDownSolid
							class="size-3 transition-transform duration-200 {infoDropdownOpen
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if infoDropdownOpen}
						<div class="ml-3 space-y-1 border-l border-white/10 pl-3">
							{#each infoLinks as link (link.href)}
								<a
									href={link.href}
									class="block rounded px-3 py-1.5 text-xs font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-white"
									class:active-link={isActive(link.href)}
									onclick={closeMobile}
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- End Links -->
				{#each endLinks as link (link.href)}
					<a
						href={link.href}
						class="rounded px-3 py-2 text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors hover:bg-dark-slate1 hover:text-white"
						class:active-link={isActive(link.href)}
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}

				<DiscordLive />
			</nav>
		</div>
	{/if}
</header>

<!-- Spacer to offset fixed header -->
<div class="h-16"></div>
