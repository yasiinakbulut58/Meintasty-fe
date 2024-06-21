import { FC } from 'react';
import Breadcrumb from '@/components/common/breadcrumb/page';
import AuthPage from '@/components/auth/page';
import { useTranslation } from '@/app/i18n';

const Login: FC<{ params: { lng: string } }> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <Breadcrumb title={t('home')} subTitle={t('Auth.login')} />
      <AuthPage title={t('Auth.login')} type="login" />
    </>
  );
};

export default Login;
