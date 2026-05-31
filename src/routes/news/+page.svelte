<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		NewspaperSolid,
		StarSolid,
		UserSolid,
		CalendarAltSolid,
		DiscordBrands
	} from 'svelte-awesome-icons';

	const news = [
		{
			category: 'Milestone',
			title: 'IGFV Reaches 100 Active Members!',
			date: 'March 12, 3311',
			author: 'Don Samen',
			color: 'text-green-400',
			bg: 'bg-green-500/10',
			border: 'border-green-500/30',
			excerpt:
				'We are proud to announce that IGFV has reached a significant milestone—over 100 active commanders!',
			content:
				"We are proud to announce that IGFV has reached a significant milestone—over 100 active commanders! This achievement reflects the strength of our community and the dedication of every member who has made IGFV their home among the stars. Thank you to everyone who has been part of this journey. Here's to the next 100!"
		},
		{
			category: 'Operations',
			title: 'Colonia Expedition Underway',
			date: 'March 10, 3311',
			author: 'Twisted VorteK',
			color: 'text-blue-400',
			bg: 'bg-blue-500/10',
			border: 'border-blue-500/30',
			excerpt:
				'The ISS Valhall has embarked on a major expedition to Colonia with 8 commanders aboard.',
			content:
				'The ISS Valhall has embarked on a major expedition to Colonia with 8 commanders aboard. The journey will take approximately two weeks with stops at notable waypoints along the way. Participants are enjoying the scenicroute and engaging in deep space exploration activities. Stay tuned for updates from the expedition team.'
		},
		{
			category: 'Fleet Carrier',
			title: 'ISS Valhall Service Update',
			date: 'March 5, 3311',
			author: 'Don Samen',
			color: 'text-orange-400',
			bg: 'bg-orange-500/10',
			border: 'border-orange-500/30',
			excerpt:
				'New services have been added to the ISS Valhall including expanded market options and repair facilities.',
			content:
				'New services have been added to the ISS Valhall including expanded market options and repair facilities. The carrier now offers a wider range of commodities and improved repair capabilities to better serve our commanders. These upgrades will enhance our self-sufficiency during extended expeditions away from the Bubble.'
		},
		{
			category: 'Community',
			title: 'Squadron Movie Night Announced',
			date: 'March 1, 3311',
			author: 'Twisted VorteK',
			color: 'text-purple-400',
			bg: 'bg-purple-500/10',
			border: 'border-purple-500/30',
			excerpt:
				'Join us for our first community movie night on April 15th. Space-themed movies and good company!',
			content:
				'Join us for our first community movie night on April 15th. We will be watching classic space-themed movies together on Discord voice chat. This is a great opportunity to relax, socialize, and enjoy some entertainment with fellow commanders. Details and movie polls will be posted in the #events channel soon.'
		},
		{
			category: 'Expedition',
			title: 'HIP 12345 BGS Campaign Launched',
			date: 'February 28, 3311',
			author: 'Don Samen',
			color: 'text-indigo-400',
			bg: 'bg-indigo-500/10',
			border: 'border-indigo-500/30',
			excerpt:
				'A new BGS influence campaign has begun in the HIP 12345 system. All members are encouraged to participate.',
			content:
				"A new BGS influence campaign has begun in the HIP 12345 system. All members are encouraged to participate in this week-long operation to increase our minor faction's influence. Activities include trade missions, exploration data delivery, and combat support. Check the #operations channel for detailed objectives and coordination."
		},
		{
			category: 'Community',
			title: 'New Commander Orientation Program',
			date: 'February 20, 3311',
			author: 'Twisted VorteK',
			color: 'text-purple-400',
			bg: 'bg-purple-500/10',
			border: 'border-purple-500/30',
			excerpt:
				'Introducing our new orientation program designed to help new members get started in Elite Dangerous.',
			content:
				'Introducing our new orientation program designed to help new members get started in Elite Dangerous. The program includes one-on-one mentorship, guided tutorials on key game mechanics, and scheduled orientation sessions aboard the ISS Valhall. Whether you are a brand new commander or returning after a break, we are here to help you find your way.'
		}
	];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-primary-main/20">
	<div
		class="absolute inset-0 bg-gradient-to-b from-primary-main/5 via-transparent to-transparent"
	></div>
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
		<div use:inview class="inview-hidden mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-main/30 bg-primary-main/10 px-4 py-1.5 text-sm text-primary-light"
			>
				<NewspaperSolid class="h-4 w-4" />
				<span>Squadron News</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">News</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				Stay informed with the latest IGFV news, announcements, and updates from across the
				squadron.
			</p>
		</div>
	</div>
</section>

<!-- News Articles -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Latest <span class="text-primary-main">News</span>
		</h2>
	</div>
	<div class="mx-auto max-w-4xl space-y-8">
		{#each news as article, i}
			<article use:inview={{ delay: i * 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div class="mb-4 flex flex-wrap items-center gap-3">
						<div
							class="inline-block rounded-full {article.bg} px-3 py-0.5 text-xs font-medium {article.color}"
						>
							{article.category}
						</div>
						<span class="flex items-center gap-1 text-xs text-gray-500">
							<CalendarAltSolid class="h-3 w-3" />
							{article.date}
						</span>
						<span class="flex items-center gap-1 text-xs text-gray-500">
							<UserSolid class="h-3 w-3" />
							{article.author}
						</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-white">{article.title}</h3>
					<p class="text-sm text-gray-400">{article.excerpt}</p>
					<details class="group/details mt-3">
						<summary
							class="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-primary-light transition-colors hover:text-primary-main"
						>
							<span>Read more</span>
							<svg
								class="h-3.5 w-3.5 transition-transform group-open/details:rotate-180"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/></svg
							>
						</summary>
						<p
							class="mt-3 border-t border-primary-main/10 pt-3 text-sm leading-relaxed text-gray-400"
						>
							{article.content}
						</p>
					</details>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- Info Banner -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div use:inview class="inview-hidden">
		<div
			class="rounded-lg border border-blue-500/30 bg-blue-500/5 p-6 text-center backdrop-blur-sm"
		>
			<StarSolid class="mx-auto mb-3 h-8 w-8 text-blue-400" />
			<h3 class="text-xl font-bold text-white">Real-Time Updates on Discord</h3>
			<p class="mt-2 text-sm text-gray-400">
				For the most up-to-date news and announcements, join our Discord server. The <span
					class="font-medium text-blue-400">#announcements</span
				> channel has real-time updates on all squadron activities.
			</p>
			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-main px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
			>
				<DiscordBrands class="h-4 w-4" />
				Join Our Discord
			</a>
		</div>
	</div>
</section>
