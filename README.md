# IGFV - Interstellar Goodfellas Squadron Website# IGFV - Interstellar Goodfellas Elite Dangerous Squadron Website# Interstellar Goodfellas (IGFV) — Website



Professional squadron website built with Next.js for the Interstellar Goodfellas Elite Dangerous squadron.



## 🌟 FeaturesProfessional squadron website built with Next.js, featuring community engagement, fleet carrier management, and exploration coordination.The official website for the Interstellar Goodfellas Elite Dangerous squadron. Built with Next.js, React, and Tailwind CSS.



- **Community Hub** - Member profiles, guidelines, and best practices

- **Fleet Carrier Management** - Valhall details and operations

- **Event Coordination** - Planned expeditions and operations## 🌟 Features## Features

- **Gallery** - Community screenshots and achievements

- **Discord Integration** - Live community widget embed

- **Responsive Design** - Mobile-first, works on all devices

- **Performance Optimized** - Sub-second load times with CDN- **Community Hub** - Member profiles, guidelines, and best practices- **Live Discord Integration** - Real-time member counter powered by Discord API



## 🛠️ Tech Stack- **Fleet Carrier Management** - Valhall details and operations  - **Fleet Carrier Info** - Valhall details, services, and jump schedule



- **Frontend:** Next.js 15, React 19, TypeScript- **Event Coordination** - Planned expeditions and operations- **Operations Board** - Active missions, BGS targets, and expeditions

- **Styling:** Tailwind CSS (burgundy/navy theme)

- **Animations:** Framer Motion- **Gallery** - Community screenshots and achievements- **Squadron News** - Latest updates and announcements

- **Icons:** React Icons

- **Deployment:** Docker, Nginx, Cloudflare- **Discord Integration** - Live community widget embed- **Responsive Design** - Works on mobile, tablet, and desktop

- **CI/CD:** GitHub Actions

- **Responsive Design** - Mobile-first, works on all devices- **Norwegian Theme** - Custom color scheme inspired by the flag

## 🚀 Quick Start

- **Performance Optimized** - Sub-second load times with CDN

### Local Development

## Tech Stack

```bash

npm install## 🛠️ Tech Stack

npm run dev          # http://localhost:3001

```| Component | Technology |



### Docker- **Frontend:** Next.js 15, React 19, TypeScript|-----------|-----------|



```bash- **Styling:** Tailwind CSS with burgundy/navy theme| Framework | Next.js 15 (App Router) |

docker-compose up -d                    # Local

docker-compose -f docker-compose.prod.yml up -d  # Production- **Animations:** Framer Motion| Language | TypeScript + React 19 |

```

- **Icons:** React Icons| Styling | Tailwind CSS |

### Build & Deploy

- **Deployment:** Docker, Nginx, Cloudflare| Animations | Framer Motion |

```bash

npm run lint         # Check code quality- **CI/CD:** GitHub Actions| Icons | react-icons |

npm run build        # Build for production

npm start            # Start production server| API Caching | Server-side proxies with TTL |

```

## 🚀 Quick Start

## 📋 Environment

## Quick Start

**Development** (.env.local):

```### Local Development

NODE_ENV=development

NEXT_PUBLIC_ENV=development### Prerequisites

```

```bash- Node.js 18+

**Production** (.env.production):

```# Install dependencies- npm or yarn

NODE_ENV=production

MONGODB_URI=mongodb://user:pass@mongodb:27017/igfvnpm install

REDIS_URL=redis://:password@redis:6379

NEXTAUTH_SECRET=your_secret### Installation

NEXTAUTH_URL=https://igfv.yourdomain.com

```# Start dev server (port 3001)



See `.env.example` and `.env.production.example` for all options.npm run dev```powershell



## 🐳 Deployment# Install dependencies



### GitHub Actions CI/CD# Open http://localhost:3001npm install



1. Add GitHub Secrets:```

   - `DEPLOY_HOST` - Server IP

   - `DEPLOY_USER` - Username# Start development server (port 3000)

   - `DEPLOY_SSH_KEY` - SSH private key

   - `DEPLOY_PORT` - SSH port### Dockernpm run dev



2. Push to main:

   ```bash

   git push origin main  # Automatic deployment```bash# Build for production

   ```

# Local testingnpm run build

### Self-Hosting

docker-compose up -dnpm start

**Cost:** $5-20/month + domain  

**Setup Time:** 4-5 hours



Full instructions: See `DEPLOYMENT_GUIDE.md`# View logs# Lint and type-check



## 📝 Commandsdocker-compose logs -f igfv-webnpm run lint



```bash```

npm run dev              # Dev server

npm run build            # Production build# Stop

npm start                # Start production

npm run lint             # Check codedocker-compose downOpen [http://localhost:3000](http://localhost:3000) in your browser.

npm run lint --fix       # Fix issues

```

docker-compose up -d     # Start containers

docker-compose down      # Stop containers## Environment Variables

docker-compose logs -f   # View logs

```### Build & Deploy



## 🔗 LinksCreate a `.env.local` file in the project root:



- **Discord:** https://discord.gg/invite/Jvrgy6EEQn```bash

- **X:** https://x.com/intrstlrgdfelas

- **Facebook:** https://www.facebook.com/interstellargoodfella# Lint code```env

- **Inara:** https://inara.cz/elite/squadron/9569/

npm run lintINARA_API_KEY=your_inara_api_key_here

## 🐛 Troubleshooting

```

**Container won't start:**

```bash# Build for production

docker-compose logs igfv-web

docker-compose build --no-cachenpm run build### Getting Your Inara API Key

docker-compose up -d

```



**Build fails:**# Start production1. Register on [Inara.cz](https://inara.cz)

```bash

npm run lint    # Check for errorsnpm start2. Visit Settings → [API Keys](https://inara.cz/settings-api/)

rm -rf .next    # Clear cache

npm run build   # Try again```3. Create a new API key (give it a name like "IGFV Website")

```

4. Copy the API key and add to `.env.local`

## 📚 Documentation

## 📋 Environment Variables

- `README.md` - This file (quick reference)

- `DEPLOYMENT_GUIDE.md` - Full deployment instructionsThe `INARA_API_KEY` is used **server-side only** for API proxy security—never exposed to client.

- `DOCS.md` - Documentation guide

### Development (.env.local)

## 📄 Key Files

```## Project Structure

| File | Purpose |

|------|---------|NODE_ENV=development

| `Dockerfile` | Container image |

| `docker-compose.yml` | Local dev setup |NEXT_PUBLIC_ENV=development```

| `docker-compose.prod.yml` | Production stack |

| `next.config.ts` | Next.js config |```src/

| `tailwind.config.ts` | Theme config |

| `.github/workflows/` | CI/CD |├── app/                          # Next.js App Router pages

| `nginx/igfv.conf` | Nginx config |

| `cloudflare/tunnel-config.yml` | Tunnel config |### Production (.env.production)│   ├── page.tsx                  # Homepage



## 🔐 Security & Performance```│   ├── about/page.tsx            # About page



- ✅ SSL/TLS (Let's Encrypt)NODE_ENV=production│   ├── fleet-carrier/page.tsx    # Fleet Carrier details

- ✅ DDoS protection (Cloudflare)

- ✅ Security headersNEXT_PUBLIC_ENV=production│   ├── operations/page.tsx       # Operations board

- ✅ Gzip compression

- ✅ Browser caching (30 days)MONGODB_URI=mongodb://user:pass@mongodb:27017/igfv│   ├── news/page.tsx             # News feed

- ✅ Global CDN

REDIS_URL=redis://:password@redis:6379│   ├── resources/page.tsx        # Resources page

---

NEXTAUTH_SECRET=your_secret_here│   ├── events/page.tsx           # Events calendar

**Status:** ✅ Production Ready  

**Updated:** November 3, 2025  NEXTAUTH_URL=https://igfv.yourdomain.com│   ├── gallery/page.tsx          # Image gallery

**Next.js:** 15.1.7 | **Node:** 20.x

```│   ├── members/page.tsx          # Member roster

│   ├── join/page.tsx             # Join page

See `.env.example` for all available options.│   ├── globals.css               # Global styles & tokens

│   └── layout.tsx                # Root layout

## 📦 Project Structure│

├── components/                   # Reusable React components

```│   ├── Header/Header.tsx         # Site navigation

src/│   ├── Footer/Footer.tsx         # Site footer

├── app/              # Next.js pages│   ├── Discord/DiscordLive.tsx   # Live member counter

│   ├── page.tsx      # Homepage│   ├── ScrollToTop/ScrollToTop.tsx

│   ├── about/        # About page│   └── Motion/MotionDiv.tsx

│   ├── fleet-carrier/# Fleet carrier info│

│   ├── events/       # Events page└── pages/api/                    # API routes (server proxies)

│   └── gallery/      # Gallery page    ├── discord/widget.ts        # Discord API proxy (60s cache)

├── components/       # React components    └── inara/proxy.ts           # Inara API proxy (env var injection)

│   ├── Header/```

│   ├── Footer/

│   ├── Motion/## Color Scheme (Norwegian Flag)

│   └── ScrollDown/

└── globals.css       # Theme & styles- **Red**: `rgb(239, 43, 45)` - Buttons, accents, highlights

```- **Blue**: `rgb(0, 40, 104)` - Headers, deep backgrounds

- **White**: `rgb(255, 255, 255)` - Text, primary elements

## 🎨 Theme

All colors are defined as CSS variables in `globals.css` for easy customization.

- **Primary:** Burgundy (#A90B2B)

- **Dark:** Navy (#00205B)## Key Features Explained

- **Background:** #000814

- **Accents:** Slates### Live Discord Member Count

- Endpoint: `/api/discord/widget` (server proxy)

All colors defined as Tailwind tokens in `tailwind.config.ts`.- Updates every 60 seconds

- Shows on homepage and Community Panel

## 🐳 Deployment- Server ID: `792556339359907871`



### Docker Production### Fleet Carrier Page

- Location: `/fleet-carrier`

```bash- Shows Valhall details, services, jump schedule

# Start full stack- Mock data (update `src/app/fleet-carrier/page.tsx` to change)

docker-compose -f docker-compose.prod.yml up -d

### Operations Board

# Includes: Next.js, MongoDB, Redis, Nginx, Cloudflare Tunnel- Location: `/operations`

```- Displays active missions with progress tracking

- Lists upcoming fleet carrier jumps

### GitHub Actions CI/CD- Mock data (update `src/app/operations/page.tsx` to change)



1. Add secrets to GitHub repo:### News Feed

   - `DEPLOY_HOST` - Server IP- Location: `/news`

   - `DEPLOY_USER` - Username- Shows 6 recent announcements with categories

   - `DEPLOY_SSH_KEY` - SSH private key- Linked to Discord #announcements channel

   - `DEPLOY_PORT` - SSH port- Mock data (add more items in `src/app/news/page.tsx`)



2. Push to main:### API Proxies

   ```bash

   git push origin main**Discord Widget Proxy** (`/api/discord/widget`)

   ```- Fetches data from Discord API

- Caches for 60 seconds

3. Automatic: Test → Build → Deploy- Returns JSON with member count



### Self-Hosting**Inara Proxy** (`/api/inara/proxy`)

- Forwards requests to Inara API

**Cost:** $5-20/month + domain  - Uses `INARA_API_KEY` environment variable

**Setup Time:** 4-5 hours- Ready for member profile lookups



Prerequisites: VPS with Docker, domain, Cloudflare account## Customization



## 🔗 Social Links### Update Squadron Info

- Edit `src/app/fleet-carrier/page.tsx` - Change carrier details

- **Discord:** https://discord.gg/invite/Jvrgy6EEQn- Edit `src/app/operations/page.tsx` - Update mission data

- **X (Twitter):** https://x.com/intrstlrgdfelas- Edit `src/app/news/page.tsx` - Add news posts

- **Facebook:** https://www.facebook.com/interstellargoodfella- Edit `src/components/Header/Header.tsx` - Change navigation

- **Inara Squadron:** https://inara.cz/elite/squadron/9569/

### Update Colors

## 📝 Common Commands- Edit `src/app/globals.css` - CSS variables (`--norway-red`, `--norway-blue`, etc.)

- Edit `tailwind.config.ts` - Tailwind theme tokens

```bash

npm run dev              # Start dev server### Update Discord Info

npm run build            # Build for production- Change Discord server ID in `/api/discord/widget.ts`

npm start                # Start production- Update Discord invite URL in components

npm run lint             # Check code quality

npm run lint --fix       # Fix issues## Deployment



docker-compose up -d     # Start containers### Vercel (Recommended)

docker-compose down      # Stop containers```bash

docker-compose logs -f   # View logsnpm run build

```vercel deploy

```

## 🐛 Troubleshooting

### Docker

### Container won't start```dockerfile

```bashFROM node:18-alpine

docker-compose logs igfv-webWORKDIR /app

docker-compose downCOPY package*.json ./

docker-compose build --no-cacheRUN npm ci

docker-compose up -dCOPY . .

```RUN npm run build

CMD ["npm", "start"]

### Build fails```

```bash

npm run lint    # Check errors### Other Hosting

npm run build   # Try building- Build: `npm run build`

rm -rf .next    # Clear cache- Start: `npm start`

```- Port: `3000` (configurable)



### Port in use## Performance Optimization

Change port in docker-compose.yml or use different port

- ✅ Static generation where possible (About, Join, Resources, Gallery)

## 📄 Files- ✅ API caching (Discord: 60s, Inara: configurable)

- ✅ Image optimization (next/image)

| File | Purpose |- ✅ Code splitting (lazy loading)

|------|---------|- ✅ CSS-in-JS with Tailwind (minimal bundle)

| `Dockerfile` | Container image |

| `docker-compose.yml` | Local dev setup |## Contributing

| `docker-compose.prod.yml` | Production stack |

| `next.config.ts` | Next.js config |1. Create a feature branch: `git checkout -b feature/your-feature`

| `tailwind.config.ts` | Tailwind theme |2. Make changes and test: `npm run dev`

| `.github/workflows/` | CI/CD automation |3. Lint before commit: `npm run lint`

| `nginx/igfv.conf` | Nginx config |4. Commit and push

| `cloudflare/tunnel-config.yml` | Tunnel config |5. Open a pull request



## 🔐 Security## Issues & Support



- ✅ SSL/TLS certificates (Let's Encrypt)- Report bugs in GitHub Issues

- ✅ Security headers configured- Discuss on Discord: https://discord.gg/igfv

- ✅ DDoS protection (Cloudflare)- Check [ROADMAP](./ROADMAP.md) for planned features

- ✅ SSH key authentication

- ✅ Non-root container user## Roadmap



## ⚡ Performance### Phase 1 (Current - 2 weeks)

- ✅ Fleet Carrier page

- ✅ Gzip compression- ✅ Operations board

- ✅ Browser caching (30 days)- ✅ News feed

- ✅ Global CDN- ✅ Squadron stats widget

- ✅ Image optimization

- ✅ Code splitting### Phase 2 (Next - 3 weeks)

- Leaderboards (credits, systems, kills)

## 📚 Resources- Member profiles with Inara links

- Community highlights

- [Next.js Docs](https://nextjs.org/docs)- Enhanced resources

- [Docker Docs](https://docs.docker.com/)

- [Tailwind CSS](https://tailwindcss.com/)### Phase 3 (Future - 2 weeks)

- [GitHub Actions](https://docs.github.com/en/actions)- Ship database with loadouts

- Career path guides

---- Event calendar

- After-action reports

**Status:** ✅ Production Ready  

**Last Updated:** November 3, 2025  See [ROADMAP.md](./ROADMAP.md) for full details.

**Next.js:** 15.1.7 | **Node:** 20.x

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
