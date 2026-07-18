<script lang="ts">
	import { resolve } from '$app/paths';
	import { UserSolid, ChevronRightSolid } from 'svelte-awesome-icons';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);

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
	<title>{post.title} | Interstellar Goodfellas</title>
	<meta name="description" content={post.description} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	{#if post.image}
		<meta property="og:image" content={post.image} />
	{/if}
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-16 sm:py-24">
	<a
		href={resolve('/blog')}
		class="mb-8 inline-flex items-center gap-1 text-xs font-bold tracking-wider text-primary-light uppercase transition-colors hover:text-white"
	>
		<ChevronRightSolid class="size-3 rotate-180" /> Back to Blog
	</a>

	<h1 class="mb-4 text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
		{post.title}
	</h1>

	<div class="mb-8 flex items-center gap-3 text-xs text-gray-400">
		<span class="flex items-center gap-1.5 text-primary-light">
			<UserSolid class="size-3.5" />
			{post.author.name}
		</span>
		{#if post.publishedAt}
			<span class="text-gray-600">·</span>
			<span class="font-mono">{formatDate(post.publishedAt)}</span>
		{/if}
	</div>

	{#if post.image}
		<div class="mb-10 overflow-hidden rounded-xl border border-white/10 bg-black/40">
			<img src={post.image} alt={post.title} class="w-full object-cover" />
		</div>
	{/if}

	<!-- post.content is admin-authored CMS HTML from Directus (trusted), not user input -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="blog-content text-sm leading-relaxed text-gray-300 sm:text-base">
		{@html post.content}
	</div>
</article>

<style>
	.blog-content :global(h1),
	.blog-content :global(h2),
	.blog-content :global(h3) {
		color: white;
		font-weight: 700;
		margin: 1.75em 0 0.6em;
		line-height: 1.25;
	}
	.blog-content :global(h2) {
		font-size: 1.5rem;
	}
	.blog-content :global(h3) {
		font-size: 1.25rem;
	}
	.blog-content :global(p) {
		margin: 0 0 1.1em;
	}
	.blog-content :global(a) {
		color: var(--color-primary-light, #e0607e);
		text-decoration: underline;
	}
	.blog-content :global(img) {
		max-width: 100%;
		border-radius: 0.75rem;
		margin: 1.5em 0;
	}
	.blog-content :global(ul),
	.blog-content :global(ol) {
		margin: 0 0 1.1em;
		padding-left: 1.4em;
	}
	.blog-content :global(li) {
		margin: 0.3em 0;
	}
	.blog-content :global(blockquote) {
		border-left: 3px solid var(--color-primary-main, #a90b2b);
		padding-left: 1em;
		margin: 1.4em 0;
		color: rgba(255, 255, 255, 0.75);
	}
	.blog-content :global(pre) {
		background: rgba(255, 255, 255, 0.05);
		padding: 1em;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 1.4em 0;
	}
	.blog-content :global(code) {
		font-family: monospace;
		font-size: 0.9em;
	}
</style>
