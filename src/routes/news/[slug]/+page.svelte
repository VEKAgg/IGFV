<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { NewspaperSolid, UserSolid, ChevronLeftSolid } from 'svelte-awesome-icons';
	import { resolve } from '$app/paths';
	import type { NewsPost } from '$lib/types';

	let { data }: { data: { post: NewsPost } } = $props();
</script>

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
				<span>Command Bulletin</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Dispatch</span>
			</h1>
		</div>
	</div>
</section>

<div class="mx-auto max-w-4xl px-4 py-12 sm:py-16">
	<div class="rounded-xl border border-primary-main/20 bg-[#000d22] p-6 shadow-xl sm:p-8">
		<div class="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
			<div class="flex items-center gap-3">
				<span
					class="inline-flex rounded-full border border-primary-main/30 bg-primary-main/20 px-3 py-1 text-xs font-semibold text-primary-light"
					>{data.post.category}</span
				>
				<span class="font-mono text-xs text-gray-400">{data.post.publishedAt}</span>
			</div>
			<a
				href={resolve('/news')}
				class="inline-flex items-center gap-1 text-xs font-bold text-gray-400 uppercase transition-colors hover:text-white"
			>
				<ChevronLeftSolid class="size-3" />
				<span>Back to Board</span>
			</a>
		</div>

		<h2 class="mb-4 text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
			{data.post.title}
		</h2>

		{#if data.post.author}
			<div class="mb-8 flex items-center gap-2 text-xs text-primary-light">
				<UserSolid class="size-3.5" />
				<span>Logged by {data.post.author}</span>
			</div>
		{/if}

		<div
			class="max-w-none space-y-6 border-t border-white/5 pt-6 font-sans text-xs leading-relaxed whitespace-pre-line text-gray-300 sm:text-sm"
		>
			{data.post.content}
		</div>

		<div class="mt-8 border-t border-white/5 pt-6">
			<a
				href={resolve('/news')}
				class="inline-flex items-center justify-center rounded-lg bg-primary-main px-6 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-primary-light"
			>
				Return to news board
			</a>
		</div>
	</div>
</div>
