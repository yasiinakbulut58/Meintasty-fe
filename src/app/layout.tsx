import { Providers } from '@/redux-toolkit/provider';
import '@/public/assets/scss/globals.scss';

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <>{children}</>
    </Providers>
  );
};

export default RootLayout;
