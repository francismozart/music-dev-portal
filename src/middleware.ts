import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { locales, defaultLocale } = i18n;
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (
    pathnameHasLocale ||
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/server/") ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(
    new URL(
      `/${defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
    )
  );
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
