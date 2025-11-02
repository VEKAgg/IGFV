'use client';

import { createContext, useContext, ReactNode } from 'react';

type EnvironmentContextType = {
  isProduction: boolean;
};

const EnvironmentContext = createContext<EnvironmentContextType | undefined>(undefined);

export function EnvironmentProvider({ 
  children,
  isProduction,
}: { 
  children: ReactNode;
  isProduction: boolean;
}) {
  return (
    <EnvironmentContext.Provider value={{ isProduction }}>
      {children}
    </EnvironmentContext.Provider>
  );
}

export function useEnvironment() {
  const context = useContext(EnvironmentContext);
  if (context === undefined) {
    throw new Error('useEnvironment must be used within an EnvironmentProvider');
  }
  return context;
} 