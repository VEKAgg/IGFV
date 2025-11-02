'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { QueryProvider } from './QueryProvider';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { EnvironmentProvider } from './EnvironmentProvider';

interface ClientProvidersProps {
  children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  // Get environment from the client side
  const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

  return (
    <EnvironmentProvider isProduction={isProduction}>
      <SessionProvider>
        <QueryProvider>
          <ParallaxProvider>
            {children}
          </ParallaxProvider>
        </QueryProvider>
      </SessionProvider>
    </EnvironmentProvider>
  );
} 