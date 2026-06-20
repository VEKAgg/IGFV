<script lang="ts">
	interface Props {
		status: string;
		label?: string;
	}

	let { status, label }: Props = $props();

	// Computed utility classes based on status string
	const badgeClass = $derived(() => {
		const s = status.toLowerCase();
		if (s === 'live' || s === 'ok') return 'badge-live';
		if (s === 'placeholder' || s === 'fallback') return 'badge-placeholder';
		if (s === 'coming-soon' || s === 'upcoming') return 'badge-coming-soon';
		if (s === 'urgent' || s === 'high') return 'badge-urgent';
		if (s === 'completed' || s === 'past') return 'badge-completed';
		return 'inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-white/70';
	});

	const displayLabel = $derived(label || status);
</script>

<span class={badgeClass()}>
	{#if status.toLowerCase() === 'live'}
		<span class="relative flex h-2 w-2">
			<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
			<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
		</span>
	{/if}
	{displayLabel}
</span>
