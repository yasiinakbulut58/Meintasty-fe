import { NextRequest, NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { sessionCookie } from './utils/cookie';
import { paths } from './constant/menu';

interface Config {
  locales: readonly string[];
  defaultLocale: string;
  localeDetector?: false;
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes('/auth')) {
    const nextSessionCookie = request.cookies.get(sessionCookie)?.value;

    if (nextSessionCookie) {
      const response = NextResponse.redirect(new URL(paths.home, request.url));
      return response;
    }
  }
  return i18nRouter(request, i18nConfig as Config);
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
