import '@/public/assets/scss/globals.scss';
import RequireAuth from '@/components/providers/RequireAuth';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <RequireAuth>{children}</RequireAuth>;
};

export default RootLayout;
