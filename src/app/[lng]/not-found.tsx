import { FC } from 'react';
// import "@/public/assets/scss/color1.scss";
import CustomLayout from '@/layouts/layout';
import Error404Content from '@/components/others/404/page';

const Error404 = () => {
  return (
    <CustomLayout title="overlay-black" userBgClass="user user-light">
      <Error404Content />
    </CustomLayout>
  );
};

export default Error404;
