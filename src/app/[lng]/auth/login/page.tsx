import React from 'react';
import { useTranslation } from '@/app/i18n';
import AuthPage from '@/components/auth/page';
import Breadcrumb from '@/components/common/breadcrumb/page';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const [pageDetails] = [
    { title: 'Login', description: 'Login', keyWords: 'Login' },
  ];

  return {
    title: `${pageDetails.title} - MeinTasty`,
    description: `${pageDetails.description}`,
    keywords: pageDetails.keyWords,
    openGraph: {
      title: `${pageDetails.title}`,
      description: `${pageDetails.title}`,
      // images: product.thumbnail ? [product.thumbnail] : [],
    },
  };
}

const Login = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <Breadcrumb title={t('home')} subTitle={t('Auth.login')} />
      <AuthPage title={t('Auth.login')} type="login" />
    </>
  );
};

export default Login;
