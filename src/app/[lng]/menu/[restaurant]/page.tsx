import React from 'react';
import Banner from '@/components/restaurant/single-page/classic/banner';
import MainSinglePage from '@/components/restaurant/single-page/classic/single-page';
import { getRestaurantDetailByInfo } from '@/lib/data/delivery';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const [pageDetails] = [
    { title: params.restaurant, description: 'Restaurant', keyWords: 'Food' },
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

async function getPageDetails({ restaurant }: PageParams) {
  const response = await getRestaurantDetailByInfo(restaurant);

  const item = response.data.value;
  return {
    data: item,
  };
}

interface PageParams {
  restaurant: string;
}

const Page = async ({ params }: { params: PageParams }) => {
  const { restaurant } = params;
  const { data } = await getPageDetails({ restaurant });

  return (
    <>
      <Banner data={data} />
      <MainSinglePage side={'right'} data={data} cartItem="empty" />
    </>
  );
};

export default Page;
