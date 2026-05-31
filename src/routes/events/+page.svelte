<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import {
		CalendarAltSolid,
		ClockSolid,
		UsersSolid,
		CheckSolid,
		MapMarkerAltSolid,
		StarSolid,
		RocketSolid
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
				<CalendarAltSolid class="h-4 w-4" />
				<span>Events & Calendar</span>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Squadron <span class="text-primary-main">Events</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gray-300">
				Stay up-to-date with upcoming squadron activities, expeditions, and community gatherings.
				All times are in-game time (IGT).
			</p>
		</div>
	</div>
</section>

<!-- Upcoming Events -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			Upcoming <span class="text-primary-main">Events</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-start justify-between">
					<div
						class="inline-block rounded-full bg-green-500/10 px-3 py-0.5 text-xs font-medium text-green-400"
					>
						Expedition
					</div>
					<div class="flex items-center gap-1 text-xs text-gray-500">
						<ClockSolid class="h-3 w-3" />
						<span>In progress</span>
					</div>
				</div>
				<h3 class="text-xl font-bold text-white">Deep Space Expedition: Colonia Run</h3>
				<div class="mt-3 space-y-2 text-sm text-gray-400">
					<div class="flex items-center gap-2">
						<CalendarAltSolid class="h-4 w-4 text-primary-main" />
						<span>Starts: March 15, 3311</span>
					</div>
					<div class="flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" />
						<span>Duration: 2 weeks</span>
					</div>
					<div class="flex items-center gap-2">
						<UsersSolid class="h-4 w-4 text-primary-main" />
						<span>8 participants confirmed</span>
					</div>
					<div class="flex items-center gap-2">
						<MapMarkerAltSolid class="h-4 w-4 text-primary-main" />
						<span>Departure: ISS Valhall (VXX-RHJ)</span>
					</div>
				</div>
				<p class="mt-4 text-sm text-gray-400">
					A squadron expedition to Colonia via fleet carrier, with stops at notable waypoints along
					the way. Join us for exploration, sightseeing, and camaraderie.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-start justify-between">
					<div
						class="inline-block rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-400"
					>
						Operation
					</div>
					<div class="flex items-center gap-1 text-xs text-gray-500">
						<ClockSolid class="h-3 w-3" />
						<span>Coming soon</span>
					</div>
				</div>
				<h3 class="text-xl font-bold text-white">BGS Influence Campaign: HIP 12345</h3>
				<div class="mt-3 space-y-2 text-sm text-gray-400">
					<div class="flex items-center gap-2">
						<CalendarAltSolid class="h-4 w-4 text-primary-main" />
						<span>Starts: April 1, 3311</span>
					</div>
					<div class="flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" />
						<span>Duration: 1 week</span>
					</div>
					<div class="flex items-center gap-2">
						<UsersSolid class="h-4 w-4 text-primary-main" />
						<span>5 participants confirmed</span>
					</div>
					<div class="flex items-center gap-2">
						<MapMarkerAltSolid class="h-4 w-4 text-primary-main" />
						<span>HIP 12345 system</span>
					</div>
				</div>
				<p class="mt-4 text-sm text-gray-400">
					Week-long BGS campaign to increase our minor faction's influence in the HIP 12345 system.
					Various activities including trade, missions, and exploration.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-start justify-between">
					<div
						class="inline-block rounded-full bg-purple-500/10 px-3 py-0.5 text-xs font-medium text-purple-400"
					>
						Community
					</div>
					<div class="flex items-center gap-1 text-xs text-gray-500">
						<ClockSolid class="h-3 w-3" />
						<span>Coming soon</span>
					</div>
				</div>
				<h3 class="text-xl font-bold text-white">Squadron Movie & Chill Night</h3>
				<div class="mt-3 space-y-2 text-sm text-gray-400">
					<div class="flex items-center gap-2">
						<CalendarAltSolid class="h-4 w-4 text-primary-main" />
						<span>April 15, 3311</span>
					</div>
					<div class="flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" />
						<span>20:00 IGT</span>
					</div>
					<div class="flex items-center gap-2">
						<UsersSolid class="h-4 w-4 text-primary-main" />
						<span>Open to all members</span>
					</div>
					<div class="flex items-center gap-2">
						<MapMarkerAltSolid class="h-4 w-4 text-primary-main" />
						<span>Discord Voice Chat</span>
					</div>
				</div>
				<p class="mt-4 text-sm text-gray-400">
					A relaxed community evening where we watch space-themed movies together on Discord. Grab
					your popcorn and join the fun!
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 400 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div class="mb-4 flex items-start justify-between">
					<div
						class="inline-block rounded-full bg-amber-500/10 px-3 py-0.5 text-xs font-medium text-amber-400"
					>
						Training
					</div>
					<div class="flex items-center gap-1 text-xs text-gray-500">
						<ClockSolid class="h-3 w-3" />
						<span>Coming soon</span>
					</div>
				</div>
				<h3 class="text-xl font-bold text-white">New Commander Orientation</h3>
				<div class="mt-3 space-y-2 text-sm text-gray-400">
					<div class="flex items-center gap-2">
						<CalendarAltSolid class="h-4 w-4 text-primary-main" />
						<span>May 1, 3311</span>
					</div>
					<div class="flex items-center gap-2">
						<ClockSolid class="h-4 w-4 text-primary-main" />
						<span>18:00 IGT</span>
					</div>
					<div class="flex items-center gap-2">
						<UsersSolid class="h-4 w-4 text-primary-main" />
						<span>New members welcome</span>
					</div>
					<div class="flex items-center gap-2">
						<MapMarkerAltSolid class="h-4 w-4 text-primary-main" />
						<span>ISS Valhall</span>
					</div>
				</div>
				<p class="mt-4 text-sm text-gray-400">
					A beginner-friendly orientation session for new and aspiring commanders. Learn the basics,
					ask questions, and meet your fellow squadron members.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Event Guidelines -->
<section
	class="border-t border-primary-main/20 bg-gradient-to-b from-dark-bg via-primary-main/5 to-dark-bg"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div use:inview class="inview-hidden">
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
				Event <span class="text-primary-main">Guidelines</span>
			</h2>
		</div>
		<div class="mx-auto max-w-3xl space-y-4">
			<div
				use:inview={{ delay: 100 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">RSVP in Advance</h4>
					<p class="text-sm text-gray-400">
						Please confirm your participation in Discord so organizers can plan accordingly.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 150 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Be on Time</h4>
					<p class="text-sm text-gray-400">
						Arrive at the designated meeting point before the scheduled start time.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 200 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Follow the Leader</h4>
					<p class="text-sm text-gray-400">
						During organized events, follow the instructions of the event coordinator.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 250 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Use Discord Voice</h4>
					<p class="text-sm text-gray-400">
						Join the appropriate voice channel during events for better coordination.
					</p>
				</div>
			</div>
			<div
				use:inview={{ delay: 300 }}
				class="inview-hidden bg-dark/50 flex items-start gap-3 rounded-lg border border-primary-main/20 p-4 backdrop-blur-sm"
			>
				<CheckSolid class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
				<div>
					<h4 class="font-medium text-white">Have Fun</h4>
					<p class="text-sm text-gray-400">
						Events are about enjoying the game together. Help others and make it a great experience
						for everyone.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- How to Join -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div use:inview class="inview-hidden">
		<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
			How to <span class="text-primary-main">Join</span>
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<div use:inview={{ delay: 100 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					1
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Check the Calendar</h3>
				<p class="text-sm text-gray-400">
					Browse our upcoming events and find one that interests you.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 200 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					2
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">RSVP on Discord</h3>
				<p class="text-sm text-gray-400">Let us know you're coming in the events channel.</p>
			</div>
		</div>
		<div use:inview={{ delay: 300 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					3
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Prepare Your Ship</h3>
				<p class="text-sm text-gray-400">
					Make sure your ship is ready for the event's activities.
				</p>
			</div>
		</div>
		<div use:inview={{ delay: 400 }} class="inview-hidden group">
			<div
				class="bg-dark/50 h-full rounded-lg border border-primary-main/30 p-6 text-center shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-main/50 hover:shadow-glow-hover"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/20 text-xl font-bold text-primary-light"
				>
					4
				</div>
				<h3 class="mb-2 text-lg font-bold text-white">Show Up & Have Fun</h3>
				<p class="text-sm text-gray-400">Join the voice channel at event time and enjoy!</p>
			</div>
		</div>
	</div>
</section>

<!-- Info Banner -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div use:inview class="inview-hidden">
		<div
			class="rounded-lg border border-blue-500/30 bg-blue-500/5 p-6 text-center backdrop-blur-sm"
		>
			<StarSolid class="mx-auto mb-3 h-8 w-8 text-blue-400" />
			<h3 class="text-xl font-bold text-white">Stay Updated on Discord</h3>
			<p class="mt-2 text-sm text-gray-400">
				All event announcements, changes, and reminders are posted in our Discord <span
					class="font-medium text-blue-400">#events</span
				> channel. Make sure to check it regularly!
			</p>
			<a
				href="https://discord.gg/igfv"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-main px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-glow-hover"
			>
				<RocketSolid class="h-4 w-4" />
				Join Our Discord
			</a>
		</div>
	</div>
</section>
