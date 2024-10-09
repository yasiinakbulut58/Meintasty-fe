import { FC } from 'react';
import PaymentCard from '@/components/user-dashboard/payment/page';
import ProfileLayout from '@/layouts/profile-layout';

export const metadata = {
  title: 'Cards - Meintasty',
  description: 'meintasty.com',
};

const Page: FC = () => {
  return (
    <ProfileLayout subTitle="cards&payment">
      <PaymentCard />
    </ProfileLayout>
  );
};

export default Page;
