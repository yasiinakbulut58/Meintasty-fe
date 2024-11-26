import React from 'react';
import HomeBanner from '@/components/restaurant/listing/restaurant-banner';
import GridView from '@/components/common/grid-page/grid/grid-view';
import { getRestaurantsByCityId } from '@/lib/data/delivery';
import { cookies } from 'next/headers';
import { activeAddress } from '@/utils/cookie';
import { redirect } from 'next/navigation';
import { paths } from '@/constant/menu';
import { generateUrlPath } from '@/utils/generateUrlPath';
import { IActiveLocation } from '@/lib/data';

function getRandomNumber(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber * 10) / 10;
}

async function getPageDetails({
  place,
  page = '1',
}: PageParams & { page: Props['searchParams']['page'] }) {
  const response = await getRestaurantsByCityId({
    cityCode: +place,
    categoryIdList: [],
    pageNumber: Number(page ?? 1),
  });

  return {
    totalPages: response.data?.value?.totalPages ?? 0,
    currentPage: response.data?.value?.currentPage ?? 1,
    nextPage: response.data?.value?.nextPage,
    prevPage: response.data?.value?.prevPage,
    totalCount: response.data?.value?.totalCount ?? 0,
    data:
      response.data?.value?.restaurants?.map((item, index) => ({
        id: item.id,
        url: item.url,
        img: '/assets/images/restaurant/dishes/7.jpg',
        sliderImg: [
          { img: '/assets/images/restaurant/dishes/7.jpg' },
          { img: '/assets/images/restaurant/dishes/8.jpg' },
        ],
        item: item.restaurantName,
        place: 'fast food, cafe, italian',
        time: `${item.workHourTo?.trim()} - ${item.workHourFrom?.trim()}`,
        cost: '25 for two',
        label: index % 2 === 0 ? 'Recommended' : '',
        rate: getRandomNumber(1, 5).toString(),
        category: 'popular',
        popular: index % 2 === 0 ? 'non veg' : 'free delivery',
        cuisines: 'italian',
        price: 450,
        deliverTime: 'upto 45 minutes',
      })) || null,
  };
}

type Props = {
  params: PageParams;
  searchParams: {
    page?: string;
  };
};
interface PageParams {
  place: string;
}

const Page = async ({ params, searchParams }: Props) => {
  const cookieStore = cookies();
  const activeLocation = cookieStore.get(activeAddress)?.value;

  if (!activeLocation) redirect(paths.home);
  const cookieLocation = JSON.parse(activeLocation) as IActiveLocation;
  if (
    params.place !==
    generateUrlPath(
      `${cookieLocation.canton.cantonName} ${cookieLocation.city.cityName}`,
    )
  )
    redirect(paths.home);

  const { data, totalPages, currentPage, nextPage, prevPage, totalCount } =
    await getPageDetails({
      place: cookieLocation.city.id.toString(),
      page: searchParams?.page,
    });

  return (
    <>
      <HomeBanner />
      <GridView
        size={3}
        value={data}
        pagination={{
          currentPage,
          nextPage,
          prevPage,
          totalCount,
          totalPages,
        }}
        type={'restaurant'}
        gridType="grid-view"
      />
    </>
  );
};

export default Page;
