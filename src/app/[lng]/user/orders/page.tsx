import { FC } from 'react';
import { Orders } from '@/components/user-dashboard/orders';
import ProfileLayout from '@/layouts/profile-layout';

export const metadata = {
  title: 'Orders - Meintasty',
  description: 'meintasty.com',
};

const Page: FC = () => {
  return (
    <ProfileLayout subTitle="orders">
      <Orders />
    </ProfileLayout>
  );
};

export default Page;
