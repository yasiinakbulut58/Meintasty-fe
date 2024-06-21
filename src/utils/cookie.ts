export const sessionCookie = process.env.NEXT_PUBLIC_API_URL?.startsWith(
  'https://',
)
  ? '__Secure-next-auth.session-token'
  : 'next-auth.session-token';
