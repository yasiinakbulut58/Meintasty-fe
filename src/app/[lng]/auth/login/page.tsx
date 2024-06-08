import { FC } from 'react';
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from '@/components/common/breadcrumb/page';
import LoginPage from '@/components/pages/other-pages/login/page';

const Login: FC = () => {
  return (
    <>
      <Breadcrumb
        title={'home'}
        subTitle={'login'}
        bannerImg={'/assets/images/restaurant/background/1.jpg'}
      />
      <LoginPage title="login" />
    </>
  );
};

export default Login;
