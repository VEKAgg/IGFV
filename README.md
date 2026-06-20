# Interstellar Goodfellas (IGFV) — Website

Professional squadron website built with **SvelteKit** for the Interstellar Goodfellas Elite Dangerous squadron.

## 🌟 Features

- **Community Hub** - Member profiles, guidelines, and best practices
- **Live Discord Integration** - Real-time member counter powered by Discord API
- **Fleet Carrier Info** - Valhall details, services, and jump schedule
- **Operations Board** - Active missions, BGS targets, and expeditions
- **Squadron News** - Latest updates and announcements
- **Gallery** - Community screenshots and achievements
- **Responsive Design** - Works on mobile, tablet, and desktop with a premium dark theme

## 🛠️ Tech Stack

| Component   | Technology                   |
| ----------- | ---------------------------- |
| Framework   | SvelteKit (Svelte 5)         |
| Language    | TypeScript                   |
| Styling     | Tailwind CSS v4              |
| Animations  | Svelte Transitions           |
| Icons       | svelte-awesome-icons         |
| Deployment  | Node Adapter                 |

## 🚀 Quick Start

### Local Development

1. **Clone and install:**

```bash
git clone https://github.com/VEKAgg/IGFV.git
cd IGFV
pnpm install
```

2. **Set up environment:**

```bash
cp .env.example .env.local
# Edit .env.local and add your required keys (e.g., INARA_API_KEY)
```

3. **Run development server:**

```bash
pnpm run dev
# Opens on http://localhost:5173
```

## 📋 Environment Variables

Only one environment variable is typically required for external data:

```bash
INARA_API_KEY=your_api_key_here
```

Get your API key from [Inara Settings](https://inara.cz/settings-api/)

## 🐳 Deployment

The project is configured with `@sveltejs/adapter-node` to run as a standalone Node.js application, making it easy to deploy with Docker or PM2.

### Manual Build

```bash
pnpm run build
node build/index.js
```

## 🔧 Development Commands

```bash
pnpm run dev          # Start dev server
pnpm run build        # Build for production
pnpm run preview      # Preview production build locally
pnpm run lint         # Run ESLint and Prettier
pnpm run check        # Run svelte-check
```

## 📁 Project Structure

```
IGFV/
├── src/
│   ├── lib/              # Shared utilities, components, server logic
│   │   ├── components/   # Svelte components (Header, Footer, etc.)
│   │   └── server/       # Server-only libraries (e.g., db.ts)
│   ├── routes/           # SvelteKit file-based router
│   │   ├── about/        
│   │   ├── gallery/      
│   │   ├── fleet-carrier/
│   │   ├── operations/   
│   │   ├── api/          # API routes
│   │   └── +page.svelte  # Homepage
├── static/               # Static assets
├── svelte.config.js      # SvelteKit configuration
├── vite.config.ts        # Vite build configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Color Scheme & Theme

The project uses a custom dark theme tailored for a premium space-operations aesthetic:
- **Primary**: Deep space blacks and slate grays
- **Accents**: Neon blues/reds tailored in Tailwind configuration

## 🤝 Contributing

For squadron members: Please follow the contribution guidelines in the Discord `#dev-discussion` channel.

---

**Squadron**: Interstellar Goodfellas (IGFV)  
**Founded**: 2019  
**Fleet Carrier**: Goodfellas Valhall  
**Discord**: https://discord.gg/invite/Jvrgy6EEQn
