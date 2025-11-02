'use client';

import { ReactNode } from 'react';
import { useEnvironmentCheck } from '@/hooks/useEnvironmentCheck';
import { useEnvironment } from '@/components/Providers/EnvironmentProvider';

interface EnvironmentWrapperProps {
  children: ReactNode;
  featurePath?: string;
  fallback?: ReactNode;
  devOnly?: boolean;
}

/**
 * A wrapper component that conditionally renders content based on the current environment
 * 
 * @param children The content to render if allowed in the current environment
 * @param featurePath Optional path to check against allowed paths (defaults to current URL)
 * @param fallback Optional content to render if not allowed in the current environment
 * @param devOnly If true, the content will only be shown in development
 */
export function EnvironmentWrapper({
  children,
  featurePath,
  fallback = null,
  devOnly = false,
}: EnvironmentWrapperProps) {
  const isAllowed = useEnvironmentCheck(featurePath);
  const { isProduction } = useEnvironment();
  
  // If devOnly is true, we only show the content in development
  // Otherwise, we check against the allowed paths
  const shouldRender = devOnly ? !isProduction : isAllowed;
  
  if (shouldRender) {
    return <>{children}</>;
  }
  
  return <>{fallback}</>;
} 