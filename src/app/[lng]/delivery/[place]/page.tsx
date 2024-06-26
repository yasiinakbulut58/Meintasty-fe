import HomeBanner from '@/components/restaurant/listing/restaurant-banner';
import GridView from '@/components/common/grid-page/grid/grid-view';
import { getRestaurantsByCityId } from '@/lib/data/delivery';

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
  const { place } = params;

  const { data } = await getPageDetails({ place });

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
