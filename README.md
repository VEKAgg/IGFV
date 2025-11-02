# Interstellar Goodfellas (IGFV) — Website

The official website for the Interstellar Goodfellas Elite Dangerous squadron. Built with Next.js, React, and Tailwind CSS.

## Features

- **Live Discord Integration** - Real-time member counter powered by Discord API
- **Fleet Carrier Info** - Valhall details, services, and jump schedule
- **Operations Board** - Active missions, BGS targets, and expeditions
- **Squadron News** - Latest updates and announcements
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Norwegian Theme** - Custom color scheme inspired by the flag

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript + React 19 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | react-icons |
| API Caching | Server-side proxies with TTL |

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```powershell
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Build for production
npm run build
npm start

# Lint and type-check
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the project root:

```env
INARA_API_KEY=your_inara_api_key_here
```

### Getting Your Inara API Key

1. Register on [Inara.cz](https://inara.cz)
2. Visit Settings → [API Keys](https://inara.cz/settings-api/)
3. Create a new API key (give it a name like "IGFV Website")
4. Copy the API key and add to `.env.local`

The `INARA_API_KEY` is used **server-side only** for API proxy security—never exposed to client.

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── fleet-carrier/page.tsx    # Fleet Carrier details
│   ├── operations/page.tsx       # Operations board
│   ├── news/page.tsx             # News feed
│   ├── resources/page.tsx        # Resources page
│   ├── events/page.tsx           # Events calendar
│   ├── gallery/page.tsx          # Image gallery
│   ├── members/page.tsx          # Member roster
│   ├── join/page.tsx             # Join page
│   ├── globals.css               # Global styles & tokens
│   └── layout.tsx                # Root layout
│
├── components/                   # Reusable React components
│   ├── Header/Header.tsx         # Site navigation
│   ├── Footer/Footer.tsx         # Site footer
│   ├── Discord/DiscordLive.tsx   # Live member counter
│   ├── ScrollToTop/ScrollToTop.tsx
│   └── Motion/MotionDiv.tsx
│
└── pages/api/                    # API routes (server proxies)
    ├── discord/widget.ts        # Discord API proxy (60s cache)
    └── inara/proxy.ts           # Inara API proxy (env var injection)
```

## Color Scheme (Norwegian Flag)

- **Red**: `rgb(239, 43, 45)` - Buttons, accents, highlights
- **Blue**: `rgb(0, 40, 104)` - Headers, deep backgrounds
- **White**: `rgb(255, 255, 255)` - Text, primary elements

All colors are defined as CSS variables in `globals.css` for easy customization.

## Key Features Explained

### Live Discord Member Count
- Endpoint: `/api/discord/widget` (server proxy)
- Updates every 60 seconds
- Shows on homepage and Community Panel
- Server ID: `792556339359907871`

### Fleet Carrier Page
- Location: `/fleet-carrier`
- Shows Valhall details, services, jump schedule
- Mock data (update `src/app/fleet-carrier/page.tsx` to change)

### Operations Board
- Location: `/operations`
- Displays active missions with progress tracking
- Lists upcoming fleet carrier jumps
- Mock data (update `src/app/operations/page.tsx` to change)

### News Feed
- Location: `/news`
- Shows 6 recent announcements with categories
- Linked to Discord #announcements channel
- Mock data (add more items in `src/app/news/page.tsx`)

### API Proxies

**Discord Widget Proxy** (`/api/discord/widget`)
- Fetches data from Discord API
- Caches for 60 seconds
- Returns JSON with member count

**Inara Proxy** (`/api/inara/proxy`)
- Forwards requests to Inara API
- Uses `INARA_API_KEY` environment variable
- Ready for member profile lookups

## Customization

### Update Squadron Info
- Edit `src/app/fleet-carrier/page.tsx` - Change carrier details
- Edit `src/app/operations/page.tsx` - Update mission data
- Edit `src/app/news/page.tsx` - Add news posts
- Edit `src/components/Header/Header.tsx` - Change navigation

### Update Colors
- Edit `src/app/globals.css` - CSS variables (`--norway-red`, `--norway-blue`, etc.)
- Edit `tailwind.config.ts` - Tailwind theme tokens

### Update Discord Info
- Change Discord server ID in `/api/discord/widget.ts`
- Update Discord invite URL in components

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Other Hosting
- Build: `npm run build`
- Start: `npm start`
- Port: `3000` (configurable)

## Performance Optimization

- ✅ Static generation where possible (About, Join, Resources, Gallery)
- ✅ API caching (Discord: 60s, Inara: configurable)
- ✅ Image optimization (next/image)
- ✅ Code splitting (lazy loading)
- ✅ CSS-in-JS with Tailwind (minimal bundle)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test: `npm run dev`
3. Lint before commit: `npm run lint`
4. Commit and push
5. Open a pull request

## Issues & Support

- Report bugs in GitHub Issues
- Discuss on Discord: https://discord.gg/igfv
- Check [ROADMAP](./ROADMAP.md) for planned features

## Roadmap

### Phase 1 (Current - 2 weeks)
- ✅ Fleet Carrier page
- ✅ Operations board
- ✅ News feed
- ✅ Squadron stats widget

### Phase 2 (Next - 3 weeks)
- Leaderboards (credits, systems, kills)
- Member profiles with Inara links
- Community highlights
- Enhanced resources

### Phase 3 (Future - 2 weeks)
- Ship database with loadouts
- Career path guides
- Event calendar
- After-action reports

See [ROADMAP.md](./ROADMAP.md) for full details.

## License

Copyright © 2025 Interstellar Goodfellas. All rights reserved.
- Implement Inara integration for squadron data (needs API key and careful caching).

Notes
- The project uses a small pages API to provide server endpoints (proxy for Discord and Inara). This avoids CORS and exposes a stable local route for the client components.
- If you prefer the app-only router, the same server routes can be implemented as server actions or edge functions.

If you want, I can now:
1) Implement server-side proxy caching with Redis (requires installing and configuring Redis). 
2) Enhance Members roster search and UI. 
3) Add the Inara integration example call and wiring to a simple admin page.

Tell me which you'd like next and I'll continue. 
