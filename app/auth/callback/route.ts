import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/onboarding";

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=missing_code", url));
  }

  return NextResponse.redirect(
    new URL(`${next}?auth_callback=ready`, url),
  );
}
