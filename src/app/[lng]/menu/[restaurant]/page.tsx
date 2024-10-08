import Banner from '@/components/restaurant/single-page/classic/banner';
import MainSinglePage from '@/components/restaurant/single-page/classic/single-page';
import { getRestaurantDetailById } from '@/lib/data/delivery';
import React from 'react';

async function getPageDetails({ restaurant }: PageParams) {
  const response = await getRestaurantDetailById(+restaurant);

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
