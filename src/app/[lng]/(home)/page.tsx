import HomeBanner from '@/components/home/home-banner';
import MenuSection from '@/components/home/menu-section';
import { getCantonsAndCities } from '@/lib/data';
import React from 'react';
import { Metadata } from 'next';
import data from '../../api/what-hot-today/db.json';
import TopMenu from '@/components/home/top-menu';

export async function generateMetadata(): Promise<Metadata> {
  const [pageDetails] = [
    { title: 'Home', description: 'Home', keyWords: 'Food' },
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

async function getHomeDetails() {
  const response1 = data;

  const response = await getCantonsAndCities();

  return {
    cantonAndCities: response.data?.value || null,
    lunchMenus: response1 as ISlideSixProps['slideData'],
  };
}

const Home = async () => {
  const { cantonAndCities, lunchMenus } = await getHomeDetails();

  return (
    <>
      <HomeBanner cantonAndCities={cantonAndCities} />
      <TopMenu />
      <MenuSection lunchMenus={lunchMenus} />
    </>
  );
};

export default Home;
