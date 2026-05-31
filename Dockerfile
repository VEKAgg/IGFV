# syntax=docker/dockerfile:1

# ── Build stage ────────────────────────────────────────────────────────────────
FROM node:24-alpine AS builder

WORKDIR /app

RUN corepack enable

# Layer-cache deps separately from source
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
# Reads "packageManager": "pnpm@x.y.z" from package.json and downloads that exact version
RUN corepack install
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# ── Runtime stage ──────────────────────────────────────────────────────────────
FROM node:24-alpine

WORKDIR /app

# Copy built assets
COPY --from=builder /app/build ./build

ENV PORT=5060
ENV NODE_ENV=production

EXPOSE 5060

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:5060 || exit 1

CMD ["node", "build/index.js"]


