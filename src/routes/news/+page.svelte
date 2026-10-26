<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { untrack } from 'svelte';
	import {
		NewspaperSolid,
		UserSolid,
		CalendarAltSolid,
		FilterSolid,
		ExclamationTriangleSolid,
		ChevronRightSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import { newsPosts as fallbackPosts } from '$lib/data/news';
	import type { NewsPost } from '$lib/types';

	let newsPosts = $state<NewsPost[]>(
		fallbackPosts.map((p) => ({ ...p, dataState: 'placeholder' as const }))
	);

	async function loadNews() {
		try {
			const res = await fetch('/api/news');
			if (res.ok) {
				const data: NewsPost[] = await res.json();
				if (data.length > 0) {
					newsPosts = data;
				}
			}
		} catch (err) {
			console.error('Failed to load news from Directus, using fallback:', err);
		}
	}

	$effect(() => {
		untrack(() => {
			loadNews();
		});
	});

	// Filter and Active News State
	let selectedCategory = $state<string>('All');
	let activePost = $state<NewsPost | null>(null);

	// Computed lists
	const categories = [
		'All',
		'Milestone',
		'Logistics',
		'Community',
		'Fleet Carrier',
		'Operations',
		'Recruitment'
	];
	const featuredPost = $derived(newsPosts.find((p) => p.isFeatured) || newsPosts[0]);

	// Filtered posts
	const filteredNews = $derived(
		newsPosts.filter((p) => {
			const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
			return matchesCategory;
		})
	);

	// Grouping by Year/Month
	const archivedGroups = $derived(
		newsPosts.reduce(
			(acc, p) => {
				const yearMonth = p.publishedAt.slice(0, 7);
				if (!acc[yearMonth]) acc[yearMonth] = [];
				acc[yearMonth].push(p);
				return acc;
			},
			{} as Record<string, NewsPost[]>
		)
	);

	function showPostDetails(post: NewsPost) {
		activePost = post;
		document.getElementById('bulletin-details')?.scrollIntoView({ behavior: 'smooth' });
	}

	function closePostDetails() {
		activePost = null;
	}
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
				<NewspaperSolid class="h-4 w-4" />
				<span>Command Announcements</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Bulletins</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Official operational updates, logistical logs, and milestone announcements straight from the
				command staff of Interstellar Goodfellas.
			</p>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<!-- Active details overlay panel -->
	{#if activePost}
		<div
			id="bulletin-details"
			class="mb-12 rounded-xl border-2 border-primary-main/40 bg-[#000d22] p-6 shadow-xl sm:p-8"
		>
			<div class="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
				<div class="flex items-center gap-3">
					<span
						class="inline-flex rounded-full border border-primary-main/30 bg-primary-main/20 px-3 py-1 text-xs font-semibold text-primary-light"
					>
						{activePost.category}
					</span>
					<span class="font-mono text-xs text-gray-400">{activePost.publishedAt}</span>
				</div>
				<button
					onclick={closePostDetails}
					class="text-xs font-bold text-gray-400 uppercase transition-colors hover:text-white"
				>
					&larr; Back to Board
				</button>
			</div>

			<h2 class="mb-4 text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
				{activePost.title}
			</h2>
			{#if activePost.author}
				<div class="mb-8 flex items-center gap-2 text-xs text-primary-light">
					<UserSolid class="size-3.5" />
					<span>Logged by {activePost.author}</span>
				</div>
			{/if}

			<div
				class="max-w-none space-y-6 border-t border-white/5 pt-6 font-sans text-xs leading-relaxed whitespace-pre-line text-gray-300 sm:text-sm"
			>
				{activePost.content}
			</div>

			<div class="mt-8 border-t border-white/5 pt-6">
				<button
					onclick={closePostDetails}
					class="inline-flex items-center justify-center rounded-lg bg-primary-main px-6 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
				>
					Return to news board
				</button>
			</div>
		</div>
	{/if}

	<!-- Layout Grid -->
	<div class="grid gap-12 lg:grid-cols-4">
		<!-- Left: Filters & Archive -->
		<div class="space-y-8 lg:col-span-1">
			<!-- Category Filter -->
			<div class="rounded-xl border border-white/10 bg-[#000d22]/95 p-5 shadow-sm">
				<h3
					class="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-white uppercase"
				>
					<FilterSolid class="size-3.5 text-primary-light" />
					<span>Category Filter</span>
				</h3>
				<div class="flex flex-col gap-1.5">
					{#each categories as cat (cat)}
						<button
							onclick={() => {
								selectedCategory = cat;
								closePostDetails();
							}}
							class="rounded px-3 py-2 text-left text-xs font-bold tracking-wider uppercase transition-all {selectedCategory ===
							cat
								? 'bg-primary-main text-white'
								: 'text-gray-400 hover:bg-white/5 hover:text-white'}"
						>
							{cat}
						</button>
					{/each}
				</div>
			</div>

			<!-- Archive Groups -->
			{#if Object.keys(archivedGroups).length > 0}
				<div class="rounded-xl border border-white/10 bg-[#000d22]/95 p-5 shadow-sm">
					<h3
						class="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-white uppercase"
					>
						<CalendarAltSolid class="size-3.5 text-primary-light" />
						<span>Archive Logs</span>
					</h3>
					<div class="space-y-4">
						{#each Object.entries(archivedGroups) as [month, posts] (month)}
							<div>
								<h4
									class="mb-2 font-mono text-[10px] font-bold tracking-wider text-gray-500 uppercase"
								>
									{month}
								</h4>
								<div class="space-y-1.5">
									{#each posts as post (post.slug)}
										<button
											onclick={() => showPostDetails(post)}
											class="block w-full truncate text-left text-xs text-gray-400 hover:text-primary-light"
										>
											&bull; {post.title}
										</button>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<!-- Right: Content -->
		<div class="space-y-12 lg:col-span-3">
			<!-- Featured Bulletin -->
			{#if selectedCategory === 'All' && !activePost && featuredPost}
				<div
					use:inview
					class="inview-hidden rounded-xl border border-primary-main/20 bg-linear-to-r from-primary-main/10 via-[#000d22]/95 to-dark-bg/95 p-8 shadow-glow"
				>
					<div
						class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-primary-main/15 px-3 py-1 text-[10px] font-bold tracking-widest text-primary-light uppercase"
					>
						Featured Bulletin
					</div>
					<h2 class="mb-3 text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
						{featuredPost.title}
					</h2>
					<p class="mb-6 font-sans text-xs leading-relaxed text-gray-400">{featuredPost.excerpt}</p>

					<div class="flex items-center justify-between border-t border-white/5 pt-4 text-xs">
						<span class="font-mono text-gray-500">Logged: {featuredPost.publishedAt}</span>
						<button
							onclick={() => showPostDetails(featuredPost)}
							class="flex items-center gap-1 text-xs font-bold text-primary-light uppercase transition-colors hover:text-white"
						>
							<span>Access Full File</span>
							<ChevronRightSolid class="size-3" />
						</button>
					</div>
				</div>
			{/if}

			<!-- Board Entries -->
			<div>
				<h3 class="mb-6 font-mono text-xs font-bold tracking-widest text-gray-500 uppercase">
					Board Entries
				</h3>

				{#if filteredNews.length > 0}
					<div class="space-y-6">
						{#each filteredNews as post (post.slug)}
							<div
								class="flex flex-col justify-between rounded-xl border border-white/10 bg-[#000d22]/90 p-6 shadow-sm transition-colors hover:border-primary-main/20"
							>
								<div>
									<div class="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
										<span
											class="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-gray-400 uppercase"
										>
											{post.category}
										</span>
										<span class="font-mono text-xs text-gray-500">{post.publishedAt}</span>
									</div>
									<h4 class="mb-2 text-lg font-bold tracking-wide text-white uppercase">
										{post.title}
									</h4>
									<p class="font-sans text-xs leading-relaxed text-gray-400">{post.excerpt}</p>
								</div>

								<div
									class="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs"
								>
									<span class="flex items-center gap-1 font-medium text-gray-500">
										<UserSolid class="size-3 text-primary-light" />
										{post.author ? `CMDR ${post.author.replace('CMDR ', '')}` : 'Command Staff'}
									</span>
									<a
										href={resolve(`/news/${post.slug}`)}
										class="flex items-center gap-1 text-xs font-bold text-primary-light uppercase transition-colors hover:text-white"
									>
										<span>View Details</span>
										<ChevronRightSolid class="size-3" />
									</a>
								</div>
							</div>
						{/each}
					</div>
				{:else}
					<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-12 text-center">
						<ExclamationTriangleSolid class="mx-auto mb-3 size-8 text-gray-500" />
						<h3 class="mb-1 text-lg font-bold text-white uppercase">No Bulletins Found</h3>
						<p class="text-xs text-gray-400">Try adjusting your category filtering options.</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
