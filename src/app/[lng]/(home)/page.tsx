// import "@/public/assets/scss/color1.scss";
import HomeBanner from '@/components/home/home-banner';
import TopCategory from '@/components/home/top-category';
import MenuSection from '@/components/home/menu-section';
import { getCantonsAndCities } from '@/lib/data';
import data from '../../api/what-hot-today/db.json';

async function getHomeDetails() {
  const response1 = data;

  const response = await getCantonsAndCities();

  return {
    cantonAndCities: response.data?.value || null,
    lunchMenus: response1 as ISlideSixProps['slideData'],
  };
}

const Home = async () => {
  const { cantonAndCities, lunchMenus } = await getHomeDetails();

  return (
    <>
      <HomeBanner cantonAndCities={cantonAndCities} />
      <TopCategory />
      <MenuSection lunchMenus={lunchMenus} />
    </>
  );
};

export default Home;
