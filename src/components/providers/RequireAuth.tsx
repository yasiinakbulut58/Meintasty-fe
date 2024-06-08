'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push('/auth/login');
    }
  }, [session, router]);

  return <>{children}</>;
};

export default RequireAuth;
