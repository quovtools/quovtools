import { NextResponse } from "next/server";

export async function middleware(request: Request) {
  const token = request.headers.get("authorization");

  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // Attach user context to request headers for downstream use
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-token", token);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/api/:path*"],
};
