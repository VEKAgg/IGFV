'use client';

// Define NetworkInformation interface
interface NetworkInformation {
  effectiveType: string;
  saveData: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

export function getConnectionSpeed(): 'slow' | 'medium' | 'fast' {
  if (typeof navigator === 'undefined') return 'fast';

  const nav = navigator as NavigatorWithConnection;
  const connection = nav.connection;
  if (!connection) return 'fast';

  // Check connection type
  if (connection.saveData) return 'slow';
  if (connection.effectiveType === '4g' && !connection.saveData) return 'fast';
  if (connection.effectiveType === '3g') return 'medium';
  return 'slow';
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function shouldPreloadImages(): boolean {
  const connectionSpeed = getConnectionSpeed();
  const isMobile = isMobileDevice();

  // Only preload on fast connections and non-mobile devices
  return connectionSpeed === 'fast' && !isMobile;
}

export async function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

export async function preloadImages(srcs: string[]): Promise<void> {
  if (!shouldPreloadImages()) return;

  // Load images in chunks to avoid overwhelming the browser
  const chunkSize = 3;
  for (let i = 0; i < srcs.length; i += chunkSize) {
    const chunk = srcs.slice(i, i + chunkSize);
    await Promise.all(chunk.map(src => preloadImage(src)));
  }
} 
