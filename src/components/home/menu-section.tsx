import SliderSix from '@/components/common/slider-components/slide6';
import TitleComponent from '@/components/common/title/title';
import { Menu } from '@/constant/constant';

const MenuSection = ({
  lunchMenus,
}: {
  lunchMenus?: ISlideSixProps['slideData'] | undefined;
}) => {
  return (
    <section className="menu-section section-b-space default-layout-slider">
      <div className="container">
        <TitleComponent
          titleClass="title-3 rounded"
          title={Menu}
          subTitle="what hot today"
          span="what hot"
        />
        <div className="row">
          <div className="col">
            <SliderSix slideData={lunchMenus} rating={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
