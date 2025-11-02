import { NextRequest, NextResponse } from 'next/server';
import { isProduction, isAllowedInProduction } from './utils/environment';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Static assets and special paths should always be allowed
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname === '/coming-soon' ||
    pathname.includes('assets') ||
    pathname.includes('.svg') ||
    pathname.includes('.png') ||
    pathname.includes('.jpg') ||
    pathname.includes('.jpeg') ||
    pathname.includes('.ico')
  ) {
    return NextResponse.next();
  }
  
  // In production, check if the requested page is allowed
  if (isProduction()) {
    // Check if the path is allowed in production
    const allowed = isAllowedInProduction(pathname);
    
    // Allow API routes and explicitly allowed pages
    if (pathname.includes('/api/') || allowed) {
      return NextResponse.next();
    }
    
    // For debugging in server logs
    console.log(`[Middleware] Redirecting restricted path: ${pathname} to coming-soon`);
    
    // Redirect to the coming-soon page
    const url = request.nextUrl.clone();
    url.pathname = '/coming-soon';
    return NextResponse.rewrite(url);
  }
  
  // In development, allow all routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 