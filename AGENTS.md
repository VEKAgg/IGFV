## Project Configuration

- **Language**: TypeScript (strict mode)
- **Package Manager**: pnpm 11.5.0 (engine-strict)
- **Framework**: SvelteKit with Svelte 5 (runes mode)
- **Styling**: Tailwind CSS v4 (with `@theme` and `@utility` directives)
- **Deployment**: Node adapter (Docker available)
- **Add-ons**: prettier, eslint, tailwindcss, sveltekit-adapter, mcp

---

## Quick Commands

```bash
pnpm install          # Install dependencies
pnpm run dev          # Start dev server (http://localhost:5173)
pnpm run build        # Build for production
pnpm run preview      # Preview production build
pnpm run check        # Type-check with svelte-check
pnpm run lint         # Run prettier --check + eslint
pnpm run format       # Auto-format with prettier
```

**Command order for validation**: `pnpm run lint && pnpm run check`

---

## Architecture

### Single-package SvelteKit app

- **Entry point**: `src/routes/+page.svelte` (homepage)
- **Layout**: `src/routes/+layout.svelte` (wraps all pages with Header/Footer)
- **Components**: `src/lib/components/` (reusable UI components)
- **Data**: `src/lib/data/` (static TypeScript data files, NOT a CMS)
- **Server logic**: `src/lib/server/` (Inara API, Discord widget, fallbacks)
- **API routes**: `src/routes/api/` (proxy endpoints for external APIs)
- **Types**: `src/lib/types/index.ts` (shared type definitions)

### Key data flow

1. **Inara API** (`src/lib/server/inara.ts`): Server-side calls to Inara API with 6s timeout
2. **Discord Widget** (`src/lib/server/discord.ts`): 30s cached guild member data
3. **Fallbacks** (`src/lib/server/fallbacks.ts`): Static fallback data when APIs fail

### External APIs

- **Inara API**: Requires `INARA_API_KEY` env var (get from https://inara.cz/settings-api/)
- **Discord Widget**: Public API, no key needed (guild ID: 792556339359907871)

---

## Styling

### Tailwind CSS v4 specifics

- Uses `@theme` directive for custom colors in `src/routes/layout.css`
- Custom utility classes defined with `@utility` (e.g., `panel-solid`, `panel-glass`, `badge-live`)
- **Prettier config**: tabs, single quotes, no trailing commas, 100 char width
- **Tailwind plugin**: prettier-plugin-tailwindcss for class sorting

### Color palette

- Primary reds: `--color-primary-main: #a90b2b` (and variants)
- Dark backgrounds: `--color-dark-bg: #000814`, `--color-dark-navy: #00205b`
- Custom shadows: `--shadow-glow`, `--shadow-glow-hover`

---

## Code Conventions

### Svelte 5 runes

- All components use `$state`, `$effect`, `$props` (runes mode enforced in svelte.config.js)
- Use `{@render children()}` for slot composition (not `<slot>`)
- Use `$derived` for computed values

### TypeScript

- Strict mode enabled
- `no-undef` rule disabled (recommended for TypeScript projects)
- Path aliases: `$lib` → `src/lib`, `$app` → SvelteKit internals

### Component patterns

- Import icons from `svelte-awesome-icons` (e.g., `RocketSolid`, `DiscordBrands`)
- Use `$app/paths` → `resolve()` for internal links
- Animations use CSS `@keyframes` + IntersectionObserver (see `inview` action in homepage)
- Client-side data fetching with `$effect()` for async operations

---

## Environment

### Required

Create `.env.local` with:

```bash
INARA_API_KEY=your_key_here
```

Get your API key from https://inara.cz/settings-api/

---

## Deployment

### Docker

```bash
docker build -t igfv .
docker run -p 5060:5060 -e INARA_API_KEY=xxx igfv
```

- Exposes port 5060
- Health check: `wget http://127.0.0.1:5060`

### Manual

```bash
pnpm run build
node build/index.js  # Runs on PORT env (default 5060)
```

### CI/CD

- **Workflow**: `.github/workflows/deploy.yml` (triggered on push to `main`)
- **Runner**: Self-hosted (`veka` label), Docker-based
- **Deploy flow**: Build → Pre-swap health check → Swap container → Post-swap verify → Cleanup
- **Rollback**: Automatic on failure (reverts to previous image tag)
- **Domain**: `igfv.veka.gg` via Traefik reverse proxy (port 5060)

---

## MCP Server

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

## Gotchas

- **Tailwind v4 syntax**: Uses `@theme` and `@utility` (NOT `@apply` or `theme()` from v3)
- **Data is static**: Content lives in `src/lib/data/*.ts` files, not a database or CMS
- **Inara API**: All calls go through server-side proxy (`src/routes/api/inara/proxy/+server.ts`)
- **Discord widget**: Returns fallback data if API fails (30s cache)
- **Runes mode**: Enforced globally except for node_modules (see svelte.config.js)
- **Prettier**: Uses tabs, not spaces; single quotes; no trailing commas
- **Build output**: Goes to `build/` directory (node adapter)

---

## Feature Implementation Directives

When building or updating features according to the project roadmap, strictly adhere to the following directives and architectural patterns:

### 1. Members Page (`/members`)
- **Route Setup**: Create `src/routes/members/+page.server.ts` and `src/routes/members/+page.svelte`.
- **Top Section**: Include a community makeup summary detailing the distribution of roles within the squadron.
- **Leadership Section**: Re-use Command Staff data from `src/lib/data/squadron.ts` or `about`.
- **Roster & Filtering**: Featured Commanders section + filterable roster grid with role tags (`Explorer`, `Trader`, `Combat Pilot`, `Logistics`, `Mentor`, `Recruiter`).
- **Member Card Schema**: Name, Elite Rank, Squadron Role, Platform (`PC`/`Xbox`/`PS`), Timezone, and optional Inara profile link.
- **Data State**: Follow the `dataState` pattern (`live`, `placeholder`, `coming-soon`); display a "Full roster sync coming soon" status card if live synchronization is pending.
- **Navigation**: Include `Members` in the main navigation.

### 2. Events Page (`/events`)
- **Route Setup**: Create `src/routes/events/+page.server.ts` and `src/routes/events/+page.svelte`.
- **Weekly Rhythm**: Structured schedule for recurring operations (e.g., Thursday Wing Trade Loops, Saturday AX Combat Practice) detailing day, UTC time, activity type, and beginner-friendly tag.
- **Upcoming Events**: Coordinated non-recurring activities (e.g., carrier jump departures).
- **Past Milestones**: Historical archive cross-referenced with `src/lib/data/gallery.ts` (e.g., Sagittarius A* expedition).
- **Participation Guide**: Explainer on recurring events and how members can participate.
- **Navigation**: Include `Events` in the main navigation.

### 3. Data Consistency & Single Source of Truth
- **Member Count**: Unify current active member count across Home, About, and global header stats via a shared data source (`SquadronStats` / server fallbacks). Dated historical News posts retain their timestamped snapshot values.
- **Tritium Depot Progress**: Standardize Fleet Carrier Tritium depot progress ("3,000 / 5,000 T (60%)") across Home (`CurrentFocus`), Fleet Carrier dashboard, and Operations cards by referencing a single shared data object in `$lib/data/` or server load functions.

### 4. Sitewide Date & Tone Conventions
- **Primary Format**: In-universe Elite Dangerous date format (`3311-06-15`, `3305`, etc.) across News, Operations, and Gallery.
- **Secondary Reference**: Real-world year in parentheses (e.g., `3305 (2019)`) used consistently for major historical milestones (founding date, major achievements).

### 5. Error Handling & Placeholder Standards
- **404 Error Page**: Ensure `src/routes/+error.svelte` reflects the space-operations command theme ("Navigation Computer Error - Frame Shift Drive Malfunction") with links to Home, Join, Operations, and Resources.
- **Placeholder UI**: Standardize on `src/lib/components/ComingSoon.svelte` for all pending sections across pages instead of writing ad-hoc text placeholders.

### 6. Live Integrations & Status Badges
- **Server API Proxies**: `/api/inara/proxy` and `src/lib/server/discord.ts` must handle live data fetching, update "Refreshed" timestamps, and toggle `dataState` between `live` and `fallback`/`placeholder`.
- **Fallback Resilience**: Ensure clean fallback data displays gracefully if external API calls fail or timeout.

### 7. Navigation Structure & Footer Links
- **Footer Social Links**: Remove unmaintained generic social links (e.g. non-squadron twitter.com/facebook.com URLs) or replace with official handles.
- **Header Navigation**: Add `Members` and `Events`. With 11 total navigation links, implement responsive grouping or dropdowns (e.g., grouping `Guides` and `Resources` under a `Knowledge Base` dropdown) to prevent viewport overcrowding while preserving sticky header, Discord CTA, and live counters.

### 8. Cross-linking Architecture
- Link Gallery entries to corresponding Events archive entries.
- Link Operations cards directly to Fleet Carrier logistics sections.
- Link Member cards on `/members` to their respective Inara profiles.

### 9. Almost Everything Toolkit Guide (`/guides/newp-toolkit` or `/guides`)
- **Route / Location**: Create sub-page `src/routes/guides/newp-toolkit/+page.svelte` or extend `src/lib/data/guides.ts` with a dedicated "Almost Everything Toolkit" module on the main `/guides` page.
- **Source & Attribution**: Include a prominent credit/attribution line linking to Waveshaper's Steam Community guide *"The Guide for Almost Everything"* for deep-dive lore, factions, and Powerplay content.
- **UI Structure**: Digestible tip cards or expandable accordion organized into 7 activity categories matching `ResourceCard` / `GuideEntry` component patterns:
  1. **Combat**:
     - Bounty hunting at Resource Extraction Sites (RES) with Kill Warrant Scanner (KWS), firing only on confirmed WANTED targets.
     - Conflict Zone faction selection (Right Panel -> Functions tab), maintaining wing formation, and prioritizing Shield Cell Banks when swarmed.
     - Survival / Escape protocol: retract hardpoints, charge FSD, set power to ENG, boost away, pop Chaff + Shield Cell Banks.
  2. **Trading**:
     - Route planning using EDDB.io for single-hop, loop, and chain trade routes.
     - Commodity selection: Rare commodities for smaller holds (20-100 T), high-volume commodities for bulk haulers.
     - Smuggling tactics: submit to interdictions and boost away; approach stations below 100 km/h with landing gear deployed to bypass scans.
  3. **Exploration**:
     - Core loadout: Advanced Discovery Scanner, Detailed Surface Scanner, and largest affordable Fuel Scoop.
     - Star scoopability: KGBFOAM (O, B, A, F, G, K, M class stars).
     - Cartography sonar pattern: scan stellar bodies and sell cartographic data at distant stations (>20 Ly) for maximum payouts.
  4. **Mining**:
     - Required modules: Mining Laser, Refinery, Prospector Limpet Controller, Collector Limpet Controller.
     - System selection: Use `edtools.ddns.net` (Pristine Metallic Distance Calculator) to locate High Security systems with Pristine Reserves.
     - Efficiency: Always scan asteroids with prospectors before mining; manage refinery hoppers to clear unwanted filler ores.
  5. **Power and Ship Management**:
     - Powerplant priorities (1 to 5): Priority 1 for FSD + Engines; Priority 5 for Cargo Hatch + Fuel Scoop.
     - Heat management: Use Heat Sink Launchers to prevent heat damage above 100%.
     - Power pips distribution: ENG (speed/pitch), SYS (shield strength & regen), WEP (laser weapon capacitor).
  6. **Engineering**:
     - Core module upgrades (FSD range, shields, weapon efficiency).
     - Unlock progression via Galaxy Map milestones (exploration data, bounty vouchers).
     - Reputation & Grade 1-5 crafting: Weigh stat bonuses against experimental side effects and mass penalties.
  7. **Beginner Advice & Squadron Integration**:
     - Baseline starter ships: Cobra Mk III (all-rounder), Asp Explorer (exploration go-to).
     - Keybind fix: Rebind Boost key away from TAB to prevent accidental Steam Overlay triggers.
     - Community integration: Explain Elite's weak built-in social tools and link directly to joining IGFV's Discord & Mentor program for organized wings.

---

## Deferred Work (Future Sessions)

The following items are documented but deferred to future sessions. Do not implement until explicitly requested.

### A. Almost Everything Toolkit Guide (Directive 9)
- **Route**: Create `src/routes/guides/newp-toolkit/+page.svelte` or extend `src/lib/data/guides.ts`.
- **Attribution**: Prominent credit linking to Waveshaper's Steam Community guide *"The Guide for Almost Everything"*.
- **Content**: 7 activity categories (Combat, Trading, Exploration, Mining, Power/Ship Management, Engineering, Beginner Advice).
- **Status**: Content-heavy task, deferred. Existing guides cover Exploration, Mining, BGS, and Squadron Logistics.

### B. Dynamic Status Badges & Live Data Fetching (Directive 6)
- **Goal**: Pages should dynamically toggle `DataStatusPanel` between `live` and `fallback`/`placeholder` based on actual API response.
- **Current state**: Only homepage toggles dynamically (Discord widget). All other pages use hardcoded `state="placeholder"` or `state="live"`.
- **Pages needing dynamic status**: Operations, Fleet Carrier, Members, News.
- **Prerequisite**: Server load functions (`+page.server.ts`) or client-side `$effect` fetching from `/api/inara/proxy` with proper squadron ID configuration.
- **Status**: Deferred until Inara API integration is matured (currently only the proxy endpoint exists with no consumers).

### C. Dynamic Member Count from Inara (Directive 3)
- **Goal**: Home page stats should fetch live member count from Inara API instead of using static `'124'` from `squadron.ts`.
- **Current state**: `squadronStatsWithIcons` imports static data. API proxy exists at `/api/inara/proxy` but no client consumes it.
- **Status**: Deferred with dynamic status badges (item B above).

### 10. Emergency Fuel Procedures & The Fuel Rats Guide (`/guides`)
- **Data Location & Schema**: Add a new `GuideEntry` object in `src/lib/data/guides.ts` adhering to the standard schema with `dataState: "live"`.
- **Metadata**:
  - `title`: "What to Do When You Have No Fuel"
  - `category`: "Beginner Tips" (secondary tag: "Emergency Procedures")
  - `author`: "Disodium & RadLock"
  - `sourceUrl`: `https://steamcommunity.com/sharedfiles/filedetails/?id=500051873`
  - `sourceLabel`: "Steam Community Guide"
  - `datePublished`: `2015-08-15`, `dateUpdated`: `2020-08-10`
  - `dataState`: `"live"`
- **Content Sections (Paraphrased Collapsible Accordion Subsections)**:
  1. **Overview**: Explain that running out of fuel is not fatal and introduce The Fuel Rats rescue collective.
  2. **If You're on Life Support (Urgent)**: Note system name and nearby celestial body, record remaining oxygen time, and **log out to the main menu immediately** to pause the oxygen timer.
  3. **How to Request a Rescue (Website Method)**: Navigate to `fuelrats.com` -> "Get Help" -> "I need to be rescued"; fill in CMDR name, system, platform (PC/Xbox/PS), and oxygen status. Note that Rats only request CMDR names (never passwords/emails).
  4. **Alternative Method (IRC)**: Join `#FuelRats` on `irc.fuelrats.com` and post a distress call formatted as: `RATSIGNAL – CMDR Name/GamerTag, Platform, Current System, Oxygen remaining`.
  5. **Who Are The Fuel Rats?**: Describe them as a leaderless volunteer community dedicated to fuel rescues across the galaxy.
  6. **Cross-links & CTAs**: Include links to `fuelrats.com`, external ED tools (Inara, EDSM, Coriolis, Spansh, EDDB), and an IGFV Discord CTA ("Join our Discord for live rescue coordination and community support").
- **Attribution & Rules**: Include explicit credit: *"Adapted from a Steam Community guide by Disodium & RadLock"* linking to `https://steamcommunity.com/sharedfiles/filedetails/?id=500051873`. Ensure paraphrased original wording and ARIA keyboard accessibility.

### 11. Efficient Keyboard and Mouse Controls Guide (`/guides`)
- **Data Location & Schema**: Add a new `GuideEntry` object in `src/lib/data/guides.ts` using the existing schema with `dataState: "live"`.
- **Metadata**:
  - `title`: "Efficient Keyboard & Mouse Controls for Elite Dangerous"
  - `category`: "Gameplay Basics" (secondary tag: "Ship Controls / Keybinds")
  - `author`: "Cullen & Regis I>"
  - `sourceUrl`: `https://steamcommunity.com/sharedfiles/filedetails/?id=478686362`
  - `sourceLabel`: "Steam Community Guide"
  - `datePublished`: `2015-07-10`, `dateUpdated`: `2024-10-10`
  - `dataState`: `"live"`
- **Content Sections (Paraphrased Collapsible Accordion Subsections)**:
  1. **Introduction**: Explain why default flight controls feel clunky for M&K players and how WASD FPS/MMO conventions improve flight ergonomics.
  2. **Where Keybinds Are Stored**: Save path `C:\Users\USERNAME\AppData\Local\Frontier Developments\Elite Dangerous\Options\Bindings\`; difference between `Custom.3.0.binds` (Horizons) and `Custom.4.0.binds` (Odyssey); reminder to back up files manually (cloud saves do not sync control settings).
  3. **Flight — Roll & Strafe Presets**: Rotational Preset (Roll A/D, Lateral Q/E) vs. Strafe Preset (Roll Q/E, Lateral A/D).
  4. **Flight — Thrust & Throttle**: Forward/Backward (W/S); Vertical Up/Down (Space / Left Ctrl or C); Mouse wheel 10% step increments; Quick throttle keys (0% X, 25% O, 50% P, 75% [, 100% ]); Autorun key tip (50% on R).
  5. **Flight Philosophy / Why WASD Works**: Roll on digital keybinds (fastest rotation axis), Pitch on analog mouse movement, Yaw on mouse X-axis.
  6. **Flight Miscellaneous**: Flight Assist set to Toggle mode; Frame Shift Drive combined single-key bind; Rotational Correction toggle.
  7. **Targeting & Weapons**: Select Target Ahead (F); Subsystem cycling (Y/U); Target Next System in Route (`); Hardpoints (R); Silent Running precautions & Heat Sink Launchers.
  8. **Miscellaneous Binds**: Voice comms Push to Mute toggle; Reset HMD (F11); Avoid careless "Jettison All Cargo"; Sensor Zoom (Numpad 4/6); Numpad utility keys (7 SCB, 8 Chaff, 9 ECM, 1-3 Cosmetics); Enable Context Menu ON.
  9. **HUD & Mode Switches**: Galaxy Map (M), System Map (,), HUD Mode switch (C), Friends Menu (I), FSS Target Signal (F).
  10. **Limitations & Caveats**: Numpad layout requirement (60%/65% keyboard adjustments); clean keybind tables; note that scheme predates full Odyssey on-foot controls.
  11. **Cross-links & CTAs**: Links to Inara, EDSM, Coriolis, Spansh, EDDB, and IGFV Discord CTA ("Share your own keybind setup in our Discord").
- **Attribution & Rules**: Include visible attribution: *"Adapted from a Steam Community guide by Cullen & Regis I>"* linking to source URL. Render keybind tables using existing site table/list UI components. Preserving ARIA keyboard accessibility.
