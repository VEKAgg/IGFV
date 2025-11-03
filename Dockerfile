FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Optional: Pre-compress static files
RUN apk add --no-cache brotli gzip && \
    find .next/static -type f \( -name '*.js' -o -name '*.css' -o -name '*.html' \) | while read file; do \
      brotli -q 11 "$file" -o "$file.br" && \
      gzip -9 -k "$file"; \
    done 2>/dev/null || true

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=5002 \
    NEXT_TELEMETRY_DISABLED=1

# Security: Non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy .next folder with proper permissions
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Copy production node_modules
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 5002

# Use next start instead of node build
CMD ["npx", "next", "start", "-p", "5002"]
