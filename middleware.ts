import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, isLocale, localeCookieName, locales, type Locale } from "@/lib/i18n";

function detectLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return defaultLocale;
  }

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .find((value) =>
      value && locales.some((locale: Locale) => value === locale || value.startsWith(`${locale}-`))
    );

  if (!preferred) {
    return defaultLocale;
  }

  return locales.find((locale: Locale) => preferred === locale || preferred.startsWith(`${locale}-`)) ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-current-locale", firstSegment);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.cookies.set(localeCookieName, firstSegment, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const locale = detectLocale(request);
  const target = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  const response = NextResponse.redirect(target);

  response.cookies.set(localeCookieName, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
