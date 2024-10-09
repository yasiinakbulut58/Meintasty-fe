'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!session?.user) {
      router.push(`/auth/login?redirectUrl=${pathname}`);
    }
  }, [session, router]);

  return <>{children}</>;
};

export default RequireAuth;
