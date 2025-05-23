/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/index.scss';

import { ToastContainer } from 'react-toastify';
import { languages } from '../i18n/settings';
import SProvider from '../../components/providers/SProvider';
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';
import { Providers } from '@/redux-toolkit/provider';
import CustomLayout from '@/layouts/layout';
import { PropsWithChildren } from 'react';
import { LangProvider } from '@/components/providers/LangProvider';

export const metadata = {
  title: 'Meintasty',
  description: 'themes.pixelstrap.com',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
const RootLayout = async ({
  children,
  params: { lng },
}: {
  params: { lng: string };
} & PropsWithChildren) => {
  const session = await getServerSession(options);

  return (
    <html lang={lng}>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Vampiro+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;0,900;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bangers&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Providers>
          <LangProvider initialLang={lng}>
            <SProvider session={session}>
              <CustomLayout
                title="overlay-black"
                loader="food"
                userBgClass="user user-light bg-danger"
              >
                {children}
              </CustomLayout>
              <ToastContainer
                position="bottom-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </SProvider>
          </LangProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
