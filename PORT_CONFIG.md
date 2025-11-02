# VEKA Port Configuration

## Port Usage

This project uses different ports for different purposes:

- **Port 3000**: Used for actual production deployment on the internet (configured in `deploy.json`)
- **Port 3001**: Used for local development and testing

## Configuration Files

- **package.json**: Scripts are configured to use port 3001 for development and local testing
- **deploy.json**: Used for PM2 deployment on port 3000 for actual production environment
- **.env.development**: Base URL set to `http://localhost:3001` for local development
- **.env.production**: Base URL set to the production URL for deployment

## Starting the Development Server

```bash
# Start development server on port 3001
npm run dev
```

## Testing Production Build Locally

```bash
# Build and start production build on port 3001
npm run start:prod
```

## Production Deployment

The GitHub Actions workflow will deploy the application to the production server using PM2 and the deploy.json configuration.

The workflow:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the application
5. Starts or restarts the PM2 process
6. Performs a health check

For manual deployment on the production server:

```bash
# Install PM2 if not already installed
npm install -g pm2

# Start the application using PM2
pm2 start deploy.json
```

This setup ensures that your local development and testing environments won't conflict with the actual production deployment running on port 3000. 