# Self-Hosting Setup Guide: Docker + Nginx Proxy Manager + Cloudflare Tunnel + GitHub Actions

This guide walks you through setting up IGFV for self-hosting with automated CI/CD, containerization, and secure tunneling.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Local Setup & Testing](#local-setup--testing)
3. [Docker Setup](#docker-setup)
4. [GitHub Actions CI/CD](#github-actions-cicd)
5. [Server Deployment](#server-deployment)
6. [Nginx Proxy Manager Setup](#nginx-proxy-manager-setup)
7. [Cloudflare Tunnel Setup](#cloudflare-tunnel-setup)
8. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Prerequisites

You'll need the following installed locally:
- **Docker** & **Docker Compose** (v2.0+)
- **Git** (for version control)
- **Node.js** 20.x (for local development)
- **SSH client** (for server access)

On your server:
- **Linux** (Ubuntu 20.04+ recommended)
- **Docker** & **Docker Compose**
- **Nginx Proxy Manager** (containerized)
- **Cloudflare Tunnel client** (`cloudflared`)

---

## Local Setup & Testing

### 1. Clone and Install Locally

```bash
git clone https://github.com/VEKAgg/IGFV.git
cd IGFV
npm install
```

### 2. Create Local Environment File

Create `.env.local` in your project root:

```bash
# Next.js
NODE_ENV=development
NEXT_PUBLIC_ENV=development

# Database (if using MongoDB)
# MONGODB_URI=mongodb://localhost:27017/igfv
# MONGO_USER=admin
# MONGO_PASSWORD=your_secure_password

# API Keys (if needed)
# API_KEY=your_api_key
```

### 3. Run Locally

```bash
# Development mode
npm run dev

# Visit http://localhost:3001
```

### 4. Test Docker Locally

```bash
# Build the image
docker build -t igfv:latest .

# Run the container
docker run -p 3001:3001 igfv:latest

# Or use docker-compose for convenience
docker-compose up -d

# View logs
docker-compose logs -f igfv-web

# Stop
docker-compose down
```

---

## Docker Setup

### Dockerfile Breakdown

The provided `Dockerfile` uses a **multi-stage build** for optimization:

**Stage 1 (Builder):**
- Uses `node:20-alpine` (lightweight)
- Installs dependencies
- Builds Next.js application

**Stage 2 (Runtime):**
- Copies only built artifacts
- Creates non-root user (security)
- Includes health check
- Much smaller final image (~500MB vs 1.2GB)

### Build Optimization

The image size is optimized by:
- Using Alpine Linux (small base)
- Multi-stage builds (remove build dependencies)
- `.dockerignore` (exclude unnecessary files)
- Production-only npm dependencies

### Environment Variables in Docker

Create a `.env.production` file for production:

```bash
# Server will read environment variables
NODE_ENV=production
NEXT_PUBLIC_ENV=production

# Add your production secrets via:
# 1. docker-compose.yml (for local)
# 2. GitHub Secrets (for CI/CD)
# 3. Server environment (for deployed)
```

---

## GitHub Actions CI/CD

### Setup GitHub Secrets

Go to **Settings → Secrets and variables → Actions** in your GitHub repo and add:

```
DEPLOY_HOST        = your.server.ip
DEPLOY_USER        = deploy
DEPLOY_SSH_KEY     = (contents of private SSH key)
DEPLOY_PORT        = 22
```

### Generate SSH Key for Deployment

On your local machine:

```bash
ssh-keygen -t rsa -b 4096 -f deploy_key -N ""

# Copy public key to server
cat deploy_key.pub | ssh user@server "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# Copy private key to GitHub Secrets (contents of deploy_key)
cat deploy_key
```

### Workflow Files

Two workflows are provided:

**1. `lint.yml` - Code Quality**
- Runs on: Every push and PR
- Steps:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Run ESLint
  - Build Next.js
  - Report status

**2. `docker.yml` - Build & Push & Deploy**
- Runs on: Push to main/develop, manual trigger
- Steps:
  - Build Docker image
  - Push to GitHub Container Registry (ghcr.io)
  - Run tests
  - Deploy via SSH on main branch

### Manual Workflow Trigger

```bash
# Via GitHub CLI
gh workflow run docker.yml

# Or trigger via GitHub web UI: Actions → Select workflow → Run workflow
```

---

## Server Deployment

### 1. Server Setup (Ubuntu 20.04+)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker

# Install Cloudflare Tunnel
curl -L https://pkg.cloudflare.com/cloudflare-release-key.gpg | sudo gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-archive-keyring.gpg
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-archive-keyring.gpg] https://pkg.cloudflare.com/linux focal main' | sudo tee /etc/apt/sources.list.d/cloudflare-main.list
sudo apt-get update && sudo apt-get install -y cloudflared
```

### 2. Create Deployment Directory

```bash
mkdir -p ~/igfv
cd ~/igfv

# Create docker-compose.yml and other files
# (Copy from your git repo)
```

### 3. Set Up Environment

```bash
# Create production environment file
cat > ~/igfv/.env.production << EOF
NODE_ENV=production
NEXT_PUBLIC_ENV=production
# Add other production secrets
EOF

chmod 600 ~/igfv/.env.production
```

### 4. Deploy Container

```bash
cd ~/igfv

# Pull latest image
docker compose pull

# Start services
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs -f igfv-web
```

### 5. Set Up Auto-Updates (Optional)

Create a cron job for automated deployments:

```bash
crontab -e

# Add this line to pull and restart daily at 2 AM
0 2 * * * cd ~/igfv && docker compose pull && docker compose up -d >> /tmp/igfv-cron.log 2>&1
```

---

## Nginx Proxy Manager Setup

### 1. Run Nginx Proxy Manager

```bash
# Add to your docker-compose.yml or run separately
docker run -d \
  -p 80:80 \
  -p 443:443 \
  -p 81:81 \
  -e DB_MYSQL_HOST=localhost \
  -e DB_MYSQL_PORT=3306 \
  -e DB_MYSQL_USER=npm \
  -e DB_MYSQL_PASSWORD=npm \
  -e DB_MYSQL_NAME=npm \
  --name npm \
  jc21/nginx-proxy-manager:latest
```

Or use Docker Compose:

```yaml
services:
  npm:
    image: jc21/nginx-proxy-manager:latest
    container_name: npm
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "81:81"
    environment:
      DB_MYSQL_HOST: db
      DB_MYSQL_PORT: 3306
      DB_MYSQL_USER: npm
      DB_MYSQL_PASSWORD: npm
      DB_MYSQL_NAME: npm
    volumes:
      - npm_data:/data
      - npm_letsencrypt:/etc/letsencrypt
    networks:
      - npm-network

  # Database for NPM
  db:
    image: mysql:8
    container_name: npm-db
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: npm
      MYSQL_DATABASE: npm
      MYSQL_USER: npm
      MYSQL_PASSWORD: npm
    volumes:
      - npm_db:/var/lib/mysql
    networks:
      - npm-network

volumes:
  npm_data:
  npm_letsencrypt:
  npm_db:

networks:
  npm-network:
    driver: bridge
```

### 2. Access Nginx Proxy Manager UI

Open browser: `http://your-server-ip:81`

Default credentials:
- **Email:** admin@example.com
- **Password:** changeme

### 3. Create Proxy Host for IGFV

In NPM Web UI:

1. **Hosts → Proxy Hosts → Add Proxy Host**

2. **Details Tab:**
   - Domain Names: `igfv.yourdomain.com`
   - Scheme: `http`
   - Forward Hostname/IP: `igfv-web` (Docker container name)
   - Forward Port: `3001`
   - Cache Assets: ✓ (optional, for performance)
   - Block Common Exploits: ✓

3. **SSL Tab:**
   - SSL Certificate: Request a new SSL Certificate
   - Use a DNS challenge: (select your DNS provider)
   - Force SSL: ✓
   - HSTS Enabled: ✓

4. **Advanced Tab (Paste this Nginx config):**

```nginx
# Buffer sizes for Next.js
proxy_buffer_size 128k;
proxy_buffers 4 256k;
proxy_busy_buffers_size 256k;

# WebSocket support
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';

# Security headers
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;

# Caching for static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    add_header Cache-Control "public, immutable";
    expires 30d;
}
```

---

## Cloudflare Tunnel Setup

### 1. Install and Authenticate

```bash
# Login to Cloudflare
cloudflared tunnel login

# This will open a browser to authenticate
# Select your domain and authorize
```

### 2. Create Tunnel

```bash
# Create a tunnel named 'igfv-tunnel'
cloudflared tunnel create igfv-tunnel

# Note the tunnel UUID for later
```

### 3. Configure Tunnel

Create `~/.cloudflared/config.yml`:

```yaml
tunnel: igfv-tunnel
credentials-file: /root/.cloudflared/igfv-tunnel-credentials.json

ingress:
  - hostname: igfv.yourdomain.com
    service: http://localhost:3001
    originRequest:
      httpHostHeader: igfv.yourdomain.com
      connectTimeout: 30s
  
  - service: http_status:404
```

### 4. Route DNS

In Cloudflare Dashboard:

1. **DNS → Create CNAME record**
   - Name: `igfv`
   - Type: `CNAME`
   - Target: `igfv-tunnel.cfargotunnel.com`
   - Proxy status: Proxied (orange cloud)

2. Or use command line:

```bash
cloudflared tunnel route dns igfv-tunnel igfv.yourdomain.com
```

### 5. Run Tunnel Service

**Option A: Manual (for testing)**

```bash
cloudflared tunnel run igfv-tunnel
```

**Option B: Install as System Service**

```bash
# Install service
sudo cloudflared service install

# Enable and start
sudo systemctl enable cloudflared
sudo systemctl start cloudflared

# Check status
sudo systemctl status cloudflared

# View logs
sudo journalctl -u cloudflared -f
```

### 6. Verify Tunnel

```bash
# Check tunnel status
cloudflared tunnel list

# Check if accessible
curl https://igfv.yourdomain.com

# Tail tunnel logs
cloudflared tunnel logs igfv-tunnel
```

---

## Architecture Overview

```
┌─────────────┐
│  GitHub     │
│  (Code)     │
└──────┬──────┘
       │
       ├─→ GitHub Actions (Test, Build, Push)
       │
       ├─→ ghcr.io (Docker Image Registry)
       │
       └─→ SSH Deploy Script
           ├─→ Pull Docker Image
           └─→ Update Container
               │
               ├─→ Docker Container (Next.js)
               │   │
               │   └─→ Port 3001
               │
               ├─→ Nginx Proxy Manager
               │   │
               │   └─→ SSL/TLS (Let's Encrypt)
               │   └─→ Port 80/443
               │
               └─→ Cloudflare Tunnel
                   │
                   └─→ cloudflared daemon
                       │
                       └─→ Cloudflare Network
                           │
                           └─→ Public Internet (yourdomain.com)
```

---

## Monitoring & Maintenance

### Health Checks

Container includes built-in health check:

```bash
# View health status
docker-compose ps

# Manual check
curl http://localhost:3001/health
```

### Logs

```bash
# View real-time logs
docker-compose logs -f igfv-web

# View last 100 lines
docker-compose logs --tail=100 igfv-web

# Save logs to file
docker-compose logs igfv-web > logs.txt
```

### Updates

**Pull latest changes and redeploy:**

```bash
cd ~/igfv
git pull origin main
docker-compose pull
docker-compose up -d --force-recreate
```

### Backup

```bash
# Backup docker volumes
docker-compose exec -T igfv-web tar czf - /app > backup.tar.gz

# Or backup entire container state
docker-compose down
tar czf igfv-backup.tar.gz ~/igfv/
```

### Troubleshooting

**Container won't start:**

```bash
# Check logs
docker-compose logs igfv-web

# Rebuild image
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

**Tunnel connection issues:**

```bash
# Restart tunnel
sudo systemctl restart cloudflared

# Check tunnel logs
sudo journalctl -u cloudflared -n 50

# Verify DNS resolution
nslookup igfv.yourdomain.com
```

**SSL certificate issues:**

- Go to Nginx Proxy Manager UI (port 81)
- Check SSL certificates section
- Renew certificate if needed
- Check Let's Encrypt logs for errors

---

## Security Checklist

- [ ] Change Nginx Proxy Manager default credentials
- [ ] Set strong database passwords
- [ ] Enable 2FA on Cloudflare account
- [ ] Configure Cloudflare security settings (DDoS, WAF)
- [ ] Set SSH key-only authentication (no passwords)
- [ ] Configure firewall (ufw on Linux)
- [ ] Set up automated backups
- [ ] Monitor logs regularly
- [ ] Keep Docker images updated
- [ ] Use environment variables for secrets

---

## Cost Breakdown

- **Cloudflare Tunnel:** Free tier available
- **Cloudflare DNS:** Free tier
- **Server:** Varies (DigitalOcean: $5-10/mo minimum)
- **Domain:** $8-15/year
- **Total Minimum:** ~$5-10/month

---

## Next Steps

1. Complete local testing with `docker-compose up -d`
2. Set up GitHub Secrets for CI/CD
3. Deploy to your server
4. Configure Nginx Proxy Manager
5. Set up Cloudflare Tunnel
6. Monitor and test the setup

For questions, refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Docker Docs](https://docs.docker.com/)
- [Cloudflare Tunnel Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
- [Nginx Proxy Manager](https://nginxproxymanager.com/)
