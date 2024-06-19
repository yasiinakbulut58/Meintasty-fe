'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export default function SProvider({
  children,
  session,
}: {
  session: any;
} & PropsWithChildren) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
