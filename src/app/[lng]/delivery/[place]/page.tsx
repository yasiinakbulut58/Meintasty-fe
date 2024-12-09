import React from 'react';
import HomeBanner from '@/components/restaurant/listing/restaurant-banner';
import GridView from '@/components/common/grid-page/grid/grid-view';
import { getRestaurantsByCityId } from '@/lib/data/delivery';
import { cookies } from 'next/headers';
import { activeAddress } from '@/utils/cookie';
import { redirect } from 'next/navigation';
import { paths } from '@/constant/menu';
import { generateUrlPath } from '@/utils/generateUrlPath';
import {
  getCantonsAndCities,
  getCategories,
  IActiveLocation,
} from '@/lib/data';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const [pageDetails] = [
    { title: 'Restaurants', description: 'Restaurants', keyWords: 'Food' },
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

async function getPageDetails({
  place,
  page = '1',
  categoryIds,
}: {
  place: string;
  page?: string;
  categoryIds?: string;
}) {
  const [locationResult, categoriesResult, restaurantResult] =
    await Promise.allSettled([
      getCantonsAndCities(),
      getCategories(),
      getRestaurantsByCityId({
        cityCode: +place,
        categoryIdList: categoryIds?.split(',').map(Number) ?? [],
        pageNumber: Number(page ?? 1),
      }),
    ]);

  const cantonAndCities =
    locationResult.status === 'fulfilled'
      ? locationResult.value.data?.value
      : null;
  const categories =
    categoriesResult.status === 'fulfilled'
      ? categoriesResult.value.data?.value
      : undefined;

  const restaurants =
    restaurantResult.status === 'fulfilled'
      ? restaurantResult.value.data?.value
      : undefined;

  return {
    cantonAndCities,
    categories,
    totalPages: restaurants?.totalPages ?? 0,
    currentPage: restaurants?.currentPage ?? 1,
    nextPage: restaurants?.nextPage ?? null,
    prevPage: restaurants?.prevPage ?? null,
    totalCount: restaurants?.totalCount ?? 0,
    data:
      restaurants?.restaurants?.map((item) => ({
        id: item.id,
        url: item.url,
        img: '/assets/images/restaurant/dishes/7.jpg',
        /* sliderImg: [
          { img: '/assets/images/restaurant/dishes/7.jpg' },
          { img: '/assets/images/restaurant/dishes/8.jpg' },
        ], */
        name: item.restaurantName,
        /* place: 'fast food, cafe, italian', */
        time: `${item.workHourFrom?.trim()} - ${item.workHourTo?.trim()}(${item.workDayFrom} - ${item.workDayTo})`,
        /* cost: '25 for two', */
        /* label: index % 2 === 0 ? 'Recommended' : '',
        rate: getRandomNumber(1, 5).toString(), */
        /* category: 'popular', */
        /* popular: index % 2 === 0 ? 'non veg' : 'free delivery', */
        /* cuisines: 'italian',
        price: 450, */
        /* deliverTime: 'upto 45 minutes', */
      })) || undefined,
  };
}

type Props = {
  params: {
    place: string;
  };
  searchParams: {
    page?: string;
    categories?: string;
  };
};

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

  const {
    data,
    totalPages,
    currentPage,
    nextPage,
    prevPage,
    totalCount,
    categories,
    cantonAndCities,
  } = await getPageDetails({
    place: cookieLocation.city.id.toString(),
    page: searchParams?.page,
    categoryIds: searchParams?.categories,
  });

  return (
    <>
      <HomeBanner cantonAndCities={cantonAndCities} />
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
        categories={categories}
      />
    </>
  );
};

export default Page;
