import React, { FC } from 'react';
import Profile from '@/components/user-dashboard/profile/page';
import ProfileLayout from '@/layouts/profile-layout';

export const metadata = {
  title: 'Profile - Meintasty',
  description: 'meintasty.com',
};

const Page: FC = () => {
  return (
    <ProfileLayout subTitle="profile">
      <Profile />
    </ProfileLayout>
  );
};

export default Page;
