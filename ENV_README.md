# VEKA Environment Setup

This document explains how to use the development and production environments for the VEKA project.

## Available Environments

### Development Environment
In the development environment, all pages and features are available. This is used for local development and testing.

### Production Environment
In the production environment, only the following pages are available:
1. Home page
2. About Us page
3. Blog
4. Squadron
5. Sign-up and Login pages

All other pages will display a "Coming Soon" page with a techy, gamer-themed message.

## Environment Files
- `.env.development` - Environment variables for development
- `.env.production` - Environment variables for production

## Running the Project

### Development Mode
```bash
# Start development server with all features
npm run dev
```

### Production Mode
```bash
# Build for production with restricted features
npm run build

# Start production server
npm run start
```

### Development Build
```bash
# Build with development environment (all features)
npm run build:dev

# Start server with development build
npm run start
```

## How It Works

The project uses Next.js middleware to check if the current environment is production. In production, it restricts access to pages not in the allowed list and redirects to a "Coming Soon" page.

The environment detection is done via `process.env.NODE_ENV` which Next.js sets automatically based on the command being run:
- `npm run dev` sets NODE_ENV to "development"
- `npm run build` sets NODE_ENV to "production"

You can override this by setting the NODE_ENV environment variable manually before running commands, as in the `build:dev` script. 