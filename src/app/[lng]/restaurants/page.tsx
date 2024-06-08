// import "@/public/assets/scss/color1.scss";
import CustomLayout from '@/layouts/layout';
import HomeBanner from '@/components/common/banner/restaurant-banner';
import GridView from '@/components/common/grid-page/grid/grid-view';

async function getData() {
  // Verileri bir API veya başka bir kaynaktan çekin
  const response = await fetch('http://localhost:3000/api/restaurant').then(
    (res) => res.json(),
  );

  return {
    data: response as IRestaurantProps[],
  };
}

const Page = async () => {
  const { data } = await getData();

  return (
    <>
      <HomeBanner />
      <GridView
        size={2}
        value={data}
        type={'restaurant'}
        gridType="grid-view"
        gridOption={true}
      />
    </>
  );
};

export default Page;
