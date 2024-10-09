import React from 'react';
import HomeBanner from '@/components/home/home-banner';
import { getCantonsAndCities } from '@/lib/data';
import { Metadata } from 'next';
import TopMenu from '@/components/home/top-menu';
import StepsRestaurant from '@/components/home/steps-restaurant';

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
  const response = await getCantonsAndCities();

  return {
    cantonAndCities: response.data?.value || null,
  };
}

const Home = async () => {
  const { cantonAndCities } = await getHomeDetails();

  return (
    <>
      <HomeBanner cantonAndCities={cantonAndCities} />
      <TopMenu />
      <StepsRestaurant />
    </>
  );
};

export default Home;
