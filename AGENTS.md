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
