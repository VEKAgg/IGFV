<script lang="ts">
	import { inview } from '$lib/actions/inview';

	interface Props {
		value: string;
		label: string;
		icon?: any;
		delay?: number;
	}

	let { value, label, icon: IconComponent, delay = 0 }: Props = $props();
</script>

<div
	use:inview={{ delay }}
	class="inview-hidden panel-interactive group flex flex-col items-center justify-center text-center"
>
	{#if IconComponent}
		<div
			class="mb-4 inline-flex rounded-lg bg-primary-main/10 p-3 text-primary-main transition-colors duration-300 group-hover:bg-primary-main/20"
		>
			<IconComponent class="size-8" />
		</div>
	{/if}
	<div
		class="mb-1 text-4xl font-bold text-white transition-colors duration-300 group-hover:text-primary-light"
	>
		{value}
	</div>
	<div class="text-sm text-white/50">{label}</div>
</div>
