// import "@/public/assets/scss/color1.scss";
import HomeBanner from '@/components/home/restaurant/classic/home-banner';
import TopCategory from '@/components/home/restaurant/classic/top-category';
import MenuSection from '@/components/home/restaurant/classic/menu-section';

async function getData() {
  // Verileri bir API veya başka bir kaynaktan çekin
  const response = await fetch('http://localhost:3000/api/what-hot-today').then(
    (res) => res.json(),
  );

  return {
    lunchMenus: response as ISlideSixProps['slideData'],
  };
}

const Home = async () => {
  const data = await getData();

  return (
    <>
      <HomeBanner />
      <TopCategory />
      <MenuSection lunchMenus={data.lunchMenus} />
    </>
  );
};

export default Home;
