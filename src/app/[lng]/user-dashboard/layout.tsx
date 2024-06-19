import '@/public/assets/scss/globals.scss';
import RequireAuth from '@/components/providers/RequireAuth';

export const metadata = {
  title: 'Meintasty - Dashboard',
  description: 'meintasty.com',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <RequireAuth>{children}</RequireAuth>;
};

export default RootLayout;
