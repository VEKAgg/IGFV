<script lang="ts">
	import { DiscordBrands } from 'svelte-awesome-icons';

	let { refreshInterval = 60_000, showLabel = true } = $props();

	let memberCount = $state<number | null>(null);
	let onlineCount = $state<number | null>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);

	async function fetchWidget() {
		try {
			const response = await fetch('/api/discord/widget');
			if (!response.ok) {
				if (response.status === 429) {
					error = 'Rate limited';
				} else {
					error = `Error ${response.status}`;
				}
				memberCount = null;
				onlineCount = null;
				return;
			}
			const data = await response.json();
			if (data.error) {
				error = data.error;
				memberCount = null;
				onlineCount = null;
				return;
			}
			memberCount = data.members?.length ?? null;
			onlineCount = data.presence_count ?? null;
			error = null;
		} catch {
			error = 'Failed to connect';
			memberCount = null;
			onlineCount = null;
		} finally {
			loading = false;
		}
	}

	$effect(() => {
		fetchWidget();

		const interval = setInterval(fetchWidget, refreshInterval);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<a
	href="https://discord.gg/igfv"
	target="_blank"
	rel="noopener noreferrer"
	class="inline-flex items-center gap-2 rounded-md bg-primary-main px-4 py-2 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-primary-light hover:shadow-glow-hover"
>
	<DiscordBrands class="h-5 w-5" />
	<span>
		{#if loading}
			...
		{:else if error}
			Discord
		{:else}
			{showLabel ? 'Discord' : ''}
			{onlineCount ?? memberCount ?? '?'} Online
		{/if}
	</span>
</a>
