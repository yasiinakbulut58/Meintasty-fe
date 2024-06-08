import '@/public/assets/scss/globals.scss';
import CustomLayout from '@/layouts/layout';

export const metadata = {
  title: 'Meintasty - Login',
  description: 'meintasty.com',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CustomLayout
      title="overlay-black"
      loader="food"
      userBgClass="user user-light"
    >
      <>{children}</>
    </CustomLayout>
  );
};

export default RootLayout;
