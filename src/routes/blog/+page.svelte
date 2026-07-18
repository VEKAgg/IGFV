<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		NewspaperSolid,
		UserSolid,
		ExclamationTriangleSolid,
		ChevronRightSolid
	} from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const posts = $derived(data.posts);
	const featured = $derived(posts[0]);
	const rest = $derived(posts.slice(1));

	function formatDate(value: string | null): string {
		if (!value) return '';
		return new Date(value).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog | Interstellar Goodfellas</title>
	<meta name="description" content="Articles and updates from Interstellar Goodfellas." />
</svelte:head>

<!-- Hero -->
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
				<span>From the Squadron</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				The <span class="text-primary-main">Blog</span>
			</h1>
			<p class="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
				Longform articles, guides, and stories published to Interstellar Goodfellas.
			</p>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	{#if posts.length === 0}
		<div class="rounded-xl border border-white/10 bg-[#000d22]/90 p-12 text-center">
			<ExclamationTriangleSolid class="mx-auto mb-3 size-8 text-gray-500" />
			<h2 class="mb-1 text-lg font-bold text-white uppercase">No Articles Yet</h2>
			<p class="text-xs text-gray-400">
				Tag a post with the <span class="text-primary-light">igfv</span> site in the CMS and it will appear
				here.
			</p>
		</div>
	{:else}
		<!-- Featured -->
		<a
			href={resolve(`/blog/${featured.slug}`)}
			use:inview
			class="inview-hidden group mb-12 block overflow-hidden rounded-xl border border-primary-main/20 bg-linear-to-r from-primary-main/10 via-[#000d22]/95 to-dark-bg/95 shadow-glow"
		>
			<div class="grid md:grid-cols-2">
				{#if featured.image}
					<div class="h-56 overflow-hidden md:h-full">
						<img
							src={featured.image}
							alt={featured.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
				{/if}
				<div class="p-8">
					<div
						class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-light/30 bg-primary-main/15 px-3 py-1 text-[10px] font-bold tracking-widest text-primary-light uppercase"
					>
						Featured
					</div>
					<h2 class="mb-3 text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
						{featured.title}
					</h2>
					<p class="mb-6 line-clamp-3 text-xs leading-relaxed text-gray-400">
						{featured.description}
					</p>
					<div class="flex items-center justify-between border-t border-white/5 pt-4 text-xs">
						<span class="flex items-center gap-1.5 text-gray-500">
							<UserSolid class="size-3 text-primary-light" />
							{featured.author.name}
						</span>
						<span class="flex items-center gap-1 font-bold text-primary-light uppercase">
							Read <ChevronRightSolid class="size-3" />
						</span>
					</div>
				</div>
			</div>
		</a>

		<!-- Grid -->
		{#if rest.length > 0}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each rest as post (post.slug)}
					<a
						href={resolve(`/blog/${post.slug}`)}
						class="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#000d22]/90 shadow-sm transition-colors hover:border-primary-main/30"
					>
						{#if post.image}
							<div class="h-40 overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									loading="lazy"
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
						{/if}
						<div class="flex flex-1 flex-col p-6">
							<h3 class="mb-2 text-lg font-bold tracking-wide text-white uppercase">
								{post.title}
							</h3>
							<p class="mb-4 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-400">
								{post.description}
							</p>
							<div class="flex items-center justify-between border-t border-white/5 pt-3 text-xs">
								<span class="text-gray-500">{formatDate(post.publishedAt)}</span>
								<span class="flex items-center gap-1 font-bold text-primary-light uppercase">
									Read <ChevronRightSolid class="size-3" />
								</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>
