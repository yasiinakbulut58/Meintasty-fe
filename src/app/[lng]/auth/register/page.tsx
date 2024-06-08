import { FC } from 'react';
// import "@/public/assets/scss/color1.scss";
import CustomLayout from '@/layouts/layout';

import Breadcrumb from '@/components/common/breadcrumb/page';
import LoginPage from '@/components/pages/other-pages/login/page';

const Register: FC = () => {
  return (
    <>
      <Breadcrumb title={'home'} subTitle={'sign up'} />
      <LoginPage title="sign up" />
    </>
  );
};

export default Register;
