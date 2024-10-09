import { FC } from 'react';
import Bookings from '@/components/user-dashboard/bookings/bookings';
import ProfileLayout from '@/layouts/profile-layout';

export const metadata = {
  title: 'Bookings - Meintasty',
  description: 'meintasty.com',
};

const Page: FC = () => {
  return (
    <ProfileLayout subTitle="bookings">
      <Bookings />
    </ProfileLayout>
  );
};

export default Page;
