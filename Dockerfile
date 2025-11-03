FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build with pre-compression
COPY . .
RUN npm run build

# Check that compressed files were created
RUN echo "Checking compressed files..." && \
    find build -name "*.br" -o -name "*.gz" | head -5 || echo "Pre-compression may not be enabled"

FROM node:18-alpine AS runner

WORKDIR /app

# Security: Non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S sveltekit -u 1001

# Copy everything from builder
COPY --from=builder --chown=sveltekit:nodejs /app/build ./build
COPY --from=builder --chown=sveltekit:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=sveltekit:nodejs /app/package.json ./

USER sveltekit

ENV NODE_ENV=production \
    PORT=5002 \
    ORIGIN=https://igfv.veka.gg

EXPOSE 5002

CMD ["node", "build"]
