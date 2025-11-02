'use client';

// Define additional navigator properties
interface NavigatorWithMemory {
  deviceMemory?: number;
}

export async function generateFingerprint(): Promise<string> {
  // Check if running on the server
  if (typeof window === 'undefined') {
    return 'server-side-fingerprint';
  }
  
  const nav = navigator as Navigator & NavigatorWithMemory;
  
  const components = [
    nav.userAgent,
    nav.language,
    new Date().getTimezoneOffset(),
    screen.width,
    screen.height,
    screen.colorDepth,
    nav.hardwareConcurrency,
    nav.deviceMemory || 1,
    nav.platform || '',
    // Add canvas fingerprinting
    await getCanvasFingerprint(),
    // Add WebGL fingerprinting
    await getWebGLFingerprint(),
  ];

  // Create a hash of the components
  const fingerprintString = components.join('|||');
  return await hashString(fingerprintString);
}

async function getCanvasFingerprint(): Promise<string> {
  // Check if running on the server
  if (typeof window === 'undefined') {
    return '';
  }
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Draw various shapes and text
  canvas.width = 200;
  canvas.height = 50;
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125,1,62,20);
  ctx.fillStyle = '#069';
  ctx.fillText('VEKA:Canvas', 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText('Fingerprint', 4, 17);

  return canvas.toDataURL();
}

async function getWebGLFingerprint(): Promise<string> {
  // Check if running on the server
  if (typeof window === 'undefined') {
    return '';
  }
  
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) return '';

  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (!debugInfo) return '';

  return [
    gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
    gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
  ].join('|||');
}

async function hashString(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
} 