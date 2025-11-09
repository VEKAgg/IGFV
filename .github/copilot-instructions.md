# IGFV Copilot Instructions

## Project Overview
Next.js 15 squadron website for Elite Dangerous community (Interstellar Goodfellas). Uses App Router with TypeScript, React 19, and focuses on performance optimization with server-side caching.

## Architecture & Key Patterns

### App Structure
- **App Router**: `src/app/` with route folders (`about/`, `events/`, etc.)
- **API Routes**: `src/pages/api/` (Pages Router style) for Discord/Inara proxies
- **Components**: Organized by feature in `src/components/[Feature]/[Feature].tsx`
- **Lib**: Shared utilities in `src/lib/` (e.g., `inara.ts` for API integration)

### Performance Optimization Strategy
**Critical**: This project prioritizes performance heavily. Follow these patterns:

1. **Server-Side Caching**: API proxies use in-memory caching (60s TTL)
   - Example: `src/pages/api/discord/widget.ts` caches Discord API calls
   - Pattern: `let cache: { ts: number; data: T } | null = null`

2. **Client-Side Caching**: Components use `localStorage` with timestamps
   - Example: `DiscordLive.tsx` caches for 60s client-side
   - Always validate cache age before use

3. **Animation Optimization**: Use `will-change-transform` and reduced motion ranges
   - See `src/app/page.tsx` AnimatedShip component
   - Keep animations simple (5s duration, reduced ranges)

4. **React Server Components**: Use `'use client'` directive only when needed
   - Client: Interactive components, animations, hooks
   - Server: Static content, data fetching with `cache()`

### Styling & Theme
- **Color Scheme**: Burgundy red (`#A90B2B`) + Navy blue (`#00205B`)
  - Primary: `primary-main`, `primary-light`, `primary-dark`
  - Background: `dark-bg`, `dark-navy`, `dark-slate[1-3]`
- **Tailwind Config**: Custom colors in `tailwind.config.ts`, shadows (`shadow-glow`)
- **Global Styles**: `src/app/globals.css` has `.bg-grid` for background pattern
- **Utility Classes**: `.hardware-accelerated`, `.will-change-transform` for perf

### External API Integration
**Discord Widget**: Proxied through `/api/discord/widget` to avoid CORS and add caching
- Guild ID: `792556339359907871`

**Inara API**: Proxied through `/api/inara/proxy` to hide API key
- Requires `INARA_API_KEY` in environment
- Client uses `fetchSquadronData()` from `src/lib/inara.ts` with React cache

### Component Patterns
1. **Motion Components**: Wrap `framer-motion` in `MotionDiv` (`src/components/Motion/`)
2. **Layout Pattern**: Fixed header + footer with grid background overlay
   - Grid is fixed, content stack is relative z-10
3. **Coming Soon Pages**: Use `ComingSoon.tsx` component for placeholder pages

## Development Workflows

### Local Development
```bash
npm run dev          # Starts on port 3001 (not 3000!)
npm run build        # Production build
npm run lint         # ESLint check
```

### Docker Deployment
- **Dockerfile**: Multi-stage build with Node.js 18 Alpine, runs on port 5002
- **Docker Compose**: Exposes port 5002, connects to `proxy-network`
- **CI/CD**: `.github/workflows/deploy.yml` - self-hosted runner deployment
  - Creates `.env` from GitHub secrets (`INARA_API_KEY`)
  - Builds and validates image before deployment
  - Zero-downtime container swap with health checks
  - Automatic rollback on failure

### Environment Variables
- `INARA_API_KEY`: Required for Inara API proxy (server-side only)
- Port: **3001** for dev, **5002** for Docker production

## Project-Specific Conventions

1. **File Naming**: PascalCase for components (`Header.tsx`), kebab-case for routes
2. **Import Alias**: Use `@/*` for absolute imports from `src/`
3. **Type Safety**: Avoid `any`, use `Record<string, unknown>` for dynamic objects
4. **API Response Handling**: Always handle error cases, return proper status codes
5. **Animation Delays**: Use Tailwind's extended delays (400-900ms in config)

## Common Gotchas

- **Port Confusion**: App runs on 3001 locally, not 3000
- **API Proxies**: Always use server-side proxies for external APIs (Discord, Inara)
- **Cache Invalidation**: Both server and client caches use 60s TTL - adjust if needed
- **Client Components**: Page.tsx uses extensive client-side animations - keep in mind bundle size
- **Environment**: Only `INARA_API_KEY` is required - no complex env configs needed
