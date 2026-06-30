import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Auth placeholder - will be implemented with @quov/auth
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*']
};