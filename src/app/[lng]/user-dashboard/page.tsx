import React, { FC } from 'react';
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
