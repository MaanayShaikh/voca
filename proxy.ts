import { NextResponse, type NextRequest } from "next/server";

const protectedPrefixes = ["/generate", "/history", "/onboarding"];

function hasSupabaseSessionCookie(request: NextRequest) {
  return request.cookies.getAll().some((cookie) => {
    return (
      cookie.name === "supabase-auth-token" ||
      (cookie.name.startsWith("sb-") && cookie.name.endsWith("-auth-token"))
    );
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!protectedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  if (hasSupabaseSessionCookie(request)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/generate/:path*", "/history/:path*", "/onboarding/:path*"],
};
