import { FC } from 'react';
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from '@/components/common/breadcrumb/page';
import BodyContent from '@/components/user-dashboard/page';

const Page: FC = () => {
  return (
    <>
      <Breadcrumb title={'user'} subTitle={'dashboard'} />
      <BodyContent />
    </>
  );
};

export default Page;
