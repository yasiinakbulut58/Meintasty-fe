import '@/public/assets/scss/globals.scss';
import CustomLayout from '@/layouts/layout';
import RequireAuth from '@/components/providers/RequireAuth';

export const metadata = {
  title: 'Meintasty - Dashboard',
  description: 'meintasty.com',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CustomLayout
      title="overlay-black"
      loader="food"
      userBgClass="user user-light"
    >
      <RequireAuth>{children}</RequireAuth>
    </CustomLayout>
  );
};

export default RootLayout;
