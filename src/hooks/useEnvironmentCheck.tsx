'use client';

import { usePathname } from 'next/navigation';
import { useEnvironment } from '@/components/Providers/EnvironmentProvider';
import { PRODUCTION_ALLOWED_PAGES } from '@/utils/environment';

/**
 * Hook to check if the current page or feature should be restricted in production
 * Returns true if the feature should be visible/enabled in the current environment
 */
export function useEnvironmentCheck(featurePath?: string) {
  const { isProduction } = useEnvironment();
  const pathname = usePathname();
  
  // If we're in development, always show all features
  if (!isProduction) {
    return true;
  }
  
  // Check the current path or the provided feature path
  const pathToCheck = featurePath || pathname;
  
  // For debugging
  // console.log(`Checking path: ${pathToCheck}, Production: ${isProduction}`);
  
  return PRODUCTION_ALLOWED_PAGES.some(allowedPath => {
    // Exact match
    if (pathToCheck === allowedPath) return true;
    
    // Subpath match (e.g. /blog/post-1 matches /blog)
    if (allowedPath !== '/' && pathToCheck.startsWith(`${allowedPath}/`)) return true;
    
    return false;
  });
} 