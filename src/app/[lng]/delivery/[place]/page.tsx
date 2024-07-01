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

async function getPageDetails({ place }: PageParams) {
  const response = await getRestaurantsByCityId(+place);

  return {
    data:
      response.data?.value?.map((item, index) => ({
        id: item.id,
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

interface PageParams {
  place: string;
}

const Page = async ({ params }: { params: PageParams }) => {
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

  const { data } = await getPageDetails({
    place: cookieLocation.city.id.toString(),
  });

  return (
    <>
      <HomeBanner />
      <GridView
        size={3}
        value={data}
        type={'restaurant'}
        gridType="grid-view"
      />
    </>
  );
};

export default Page;
