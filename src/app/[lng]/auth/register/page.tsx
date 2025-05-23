import Breadcrumb from '@/components/common/breadcrumb/page';
import AuthPage from '@/components/auth/page';
import { useTranslation } from '@/app/i18n';
import React from 'react';

const Register = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Breadcrumb title={t('home')} subTitle={t('Auth.signUp')} />
      <AuthPage title={t('Auth.signUp')} type="register" />
    </>
  );
};

export default Register;
