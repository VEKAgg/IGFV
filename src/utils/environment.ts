/**
 * Utility functions for environment detection and feature flags
 */

// List of pages that should be available in production
export const PRODUCTION_ALLOWED_PAGES = [
  '/', // Home
  '/about', // About Us
  '/blog', // Blog
  '/squadron', // Squadron
  '/auth', // Login/Signup
  '/auth/login', // Login specific page
  '/auth/signup', // Signup specific page
  '/auth/forgot-password', // Password recovery
  '/coming-soon', // Coming soon page itself
  '/api', // API routes (as a parent path)
];

/**
 * Checks if the current environment is production
 */
export const isProduction = () => {
  // Check using Node.js process.env
  if (typeof process !== 'undefined' && process.env.NODE_ENV) {
    return process.env.NODE_ENV === 'production';
  }
  
  // Fallback for browser (using the env variable exposed through Next.js config)
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_ENV === 'production';
  }
  
  // Default to false for safety
  return false;
};

/**
 * Checks if a given path should be available in production
 * @param path The path to check
 */
export const isAllowedInProduction = (path: string): boolean => {
  // Always allow API routes in production
  if (path.startsWith('/api/')) return true;
  
  // Check if the path or any parent path is in the allowed list
  return PRODUCTION_ALLOWED_PAGES.some(allowedPath => {
    // Exact match
    if (path === allowedPath) return true;
    
    // Subpath match (e.g. /blog/post-1 matches /blog)
    if (allowedPath !== '/' && path.startsWith(`${allowedPath}/`)) return true;
    
    return false;
  });
}; 