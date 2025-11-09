FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
  PORT=5002 \
  NEXT_TELEMETRY_DISABLED=1 \
  HOSTNAME="0.0.0.0"

RUN addgroup -g 1001 -S nodejs && \
  adduser -S nextjs -u 1001

# Standalone mode includes all needed dependencies
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 5002

CMD ["node", "server.js"]

