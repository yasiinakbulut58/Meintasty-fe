import React from 'react';
import HomeBanner from '@/components/home/home-banner';
import { getCantonsAndCities, getCategories } from '@/lib/data';
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
  const [locationResult, categoriesResult] = await Promise.allSettled([
    getCantonsAndCities(),
    getCategories(),
  ]);

  // Hataları güvenli bir şekilde yönetiyoruz
  const cantonAndCities =
    locationResult.status === 'fulfilled'
      ? locationResult.value.data?.value
      : null;
  const categories =
    categoriesResult.status === 'fulfilled'
      ? categoriesResult.value.data?.value
      : null;

  return {
    cantonAndCities,
    categories,
  };
}

const Home = async () => {
  const { cantonAndCities, categories } = await getHomeDetails();
  return (
    <>
      <HomeBanner cantonAndCities={cantonAndCities} />
      <TopMenu categories={categories} />
      <StepsRestaurant />
    </>
  );
};

export default Home;
