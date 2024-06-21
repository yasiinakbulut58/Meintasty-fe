import { NextResponse, NextRequest } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from './app/i18n/settings';
import { sessionCookie } from './utils/cookie';

// acceptLanguage.languages(languages);

export const config = {
  matcher: [
    '/',
    '/auth/:path*',
    ...languages.map((item) => `/${item}/auth/:path*`),
    '/restaurants/:path*',
    '/user-dashboard/:path*',
    '/about-us/:path*',
    '/contact-us/:path*',
    '/faq/:path*',
    '/booking/:path*',
  ],
};
const cookieName = 'i18next';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  let lng: any;
  // debugger;

  if (req.cookies.has(cookieName)) {
    const cookieValue = req.cookies.get(cookieName)?.value;
    if (cookieValue) {
      lng = acceptLanguage.get(cookieValue);
    }
  }

  if (!lng) {
    lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  }

  if (!lng) {
    lng = fallbackLng;
  }

  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.pathname.includes('/auth')) {
    const nextSessionCookie = req.cookies.get(sessionCookie)?.value;

    if (nextSessionCookie) {
      const response = NextResponse.redirect(new URL('/', req.url));
      return response;
    }
  }

  if (req.nextUrl.locale === 'default') {
    return NextResponse.redirect(
      new URL(`/en${req.nextUrl.pathname}`, req.url),
    );
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    const redirectUrl = new URL(`/${lng}${req.nextUrl.pathname}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer')!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
