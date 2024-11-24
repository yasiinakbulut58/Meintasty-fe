import React, { FC } from 'react';
import Profile from '@/components/user-dashboard/profile/page';
import ProfileLayout from '@/layouts/profile-layout';
import { getUserDetail } from '@/components/user-dashboard/profile/action';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { useTranslation } from '@/app/i18n';

export const metadata = {
  title: 'Profile - Meintasty',
  description: 'meintasty.com',
};

const Page = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng);

  const session = await getServerSession(options);
  const response = await getUserDetail(Number(session?.user.id ?? -1));
  return (
    <ProfileLayout subTitle={t('Profile.title')}>
      <Profile user={response.value} />
    </ProfileLayout>
  );
};

export default Page;
