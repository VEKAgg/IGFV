<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		RocketSolid,
		CheckSolid,
		DiscordBrands,
		StarSolid,
		UserSolid,
		HandshakeSolid
	} from 'svelte-awesome-icons';
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
				<RocketSolid class="h-4 w-4" />
				<span>Join IGFV</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Join the <span class="text-primary-main">Imperial Guard</span> Fleet Vanguard
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				Ready to become part of our community? Joining IGFV is simple and there are no
				requirements—just a desire to explore the galaxy with good people. Whether you're a seasoned
				veteran or a brand new commander, you're welcome here.
			</p>
		</div>
	</div>
</section>

<!-- Quick Apply -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<div
			class="to-dark/50 rounded-lg border border-primary-main/30 bg-gradient-to-br from-primary-main/10 p-8 text-center shadow-glow backdrop-blur-sm sm:p-12"
		>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">
				Quick <span class="text-primary-main">Apply</span>
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-gray-300">
				The fastest way to join is through our Discord server. Simply click the button below,
				introduce yourself in the welcome channel, and one of our leadership team will get you set
				up.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="https://discord.gg/igfv"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-primary-main px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
				>
					<DiscordBrands class="h-5 w-5" />
					Join Our Discord
				</a>
				<a
					href="https://inara.cz/squadron/1234"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg border border-primary-main/50 px-8 py-3 font-semibold text-primary-light transition-all duration-300 hover:bg-primary-main/10 hover:shadow-glow-hover"
				>
					<StarSolid class="h-5 w-5" />
					Apply on Inara
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Onboarding Steps -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Onboarding <span class="text-primary-main">Steps</span>
			</h2>
		</div>
		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
			<div use:inview={{ delay: 100 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-lg font-bold text-primary-light"
					>
						1
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Introduce Yourself</h3>
					<p class="text-sm text-gray-400">
						Join our Discord and say hello in the <span class="font-medium text-primary-light"
							>#introductions</span
						> channel. Tell us a bit about yourself and your experience with Elite Dangerous.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 150 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-lg font-bold text-primary-light"
					>
						2
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Get Verified</h3>
					<p class="text-sm text-gray-400">
						A member of the leadership team will verify your application and assign you the
						appropriate roles in Discord.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 200 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-lg font-bold text-primary-light"
					>
						3
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Squadron Invite</h3>
					<p class="text-sm text-gray-400">
						You'll receive an in-game squadron invitation from one of our leaders. Accept it to
						officially become part of IGFV.
					</p>
				</div>
			</div>
			<div use:inview={{ delay: 250 }} class="inview-hidden group">
				<div
					class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/20 text-lg font-bold text-primary-light"
					>
						4
					</div>
					<h3 class="mb-2 text-lg font-bold text-white">Welcome Aboard!</h3>
					<p class="text-sm text-gray-400">
						You're now a member of IGFV! Check the <span class="font-medium text-primary-light"
							>#announcements</span
						> channel for info on current activities and events.
					</p>
				</div>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden mt-8">
			<div class="bg-dark/50 rounded-lg border border-primary-main/20 p-6 backdrop-blur-sm">
				<div class="flex items-start gap-3">
					<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
					<div>
						<h4 class="font-medium text-white">No Application Forms Required</h4>
						<p class="text-sm text-gray-400">
							We keep things simple. No lengthy application forms or interviews. Just show up, be
							friendly, and you're in. There are no activity requirements, no minimum playtime, and
							no mandatory events—just good people exploring the galaxy together.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
