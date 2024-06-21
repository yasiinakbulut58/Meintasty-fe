'use client';
import { FC } from 'react';
import Breadcrumb from '@/components/common/breadcrumb/page';
import ContactContent from '@/components/others/contact-us/contact-us-2';

const Contact2: FC = () => {
  return (
    <>
      <Breadcrumb title={'home'} subTitle={'about us'} />
      <ContactContent />
    </>
  );
};

export default Contact2;
