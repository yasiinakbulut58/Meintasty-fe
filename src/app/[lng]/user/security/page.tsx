import React, { FC } from 'react';
import Security from '@/components/user-dashboard/security/page';
import ProfileLayout from '@/layouts/profile-layout';

export const metadata = {
  title: 'Security - Meintasty',
  description: 'meintasty.com',
};

const Page: FC = () => {
  return (
    <ProfileLayout subTitle="security">
      <Security />
    </ProfileLayout>
  );
};

export default Page;
