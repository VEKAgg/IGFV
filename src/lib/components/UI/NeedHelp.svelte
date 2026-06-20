<script lang="ts">
	import { resolve } from '$app/paths';
	import { DiscordBrands, BookOpenSolid, InfoCircleSolid } from 'svelte-awesome-icons';
</script>

<div class="rounded-xl border border-white/10 bg-[#000814]/90 p-6 shadow-md">
	<div class="flex items-start gap-4">
		<div class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-main/10 text-primary-light">
			<InfoCircleSolid class="size-5" />
		</div>
		<div>
			<h4 class="text-base font-bold text-white uppercase tracking-wider">Need Technical Assistance?</h4>
			<p class="mt-2 text-xs leading-relaxed text-gray-400">
				Elite Dangerous has a complex flight ecosystem. If you are stuck on ship engineering, trade routing, or docking etiquette, we are here to help.
			</p>
			
			<div class="mt-4 grid gap-3 sm:grid-cols-2">
				<a 
					href="https://discord.gg/igfv" 
					target="_blank" 
					rel="noopener noreferrer" 
					class="flex items-center gap-2 rounded border border-white/5 bg-[#000d22]/50 px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-primary-main/20 hover:bg-[#000d22] hover:text-white"
				>
					<DiscordBrands class="size-3.5 text-[#5865F2]" />
					<span>Ask on Discord</span>
				</a>
				<a 
					href={resolve('/guides')} 
					class="flex items-center gap-2 rounded border border-white/5 bg-[#000d22]/50 px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-primary-main/20 hover:bg-[#000d22] hover:text-white"
				>
					<BookOpenSolid class="size-3.5 text-primary-light" />
					<span>Squadron Guides</span>
				</a>
			</div>
		</div>
	</div>
</div>
