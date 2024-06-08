import Banner from '@/components/restaurant/single-page/classic/banner';
// import "@/public/assets/scss/color1.scss";
import MainSinglePage from '@/components/restaurant/single-page/classic/single-page';
import { NextPage } from 'next';

interface PageParams {
  restaurant: string;
}

const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  const { restaurant } = params;

  return (
    <>
      <Banner />
      {restaurant}
      <MainSinglePage side={'right'} />
    </>
  );
};

export default Page;
