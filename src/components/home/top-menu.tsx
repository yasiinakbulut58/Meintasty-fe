import { FC } from 'react';
import TotalItemSlider from '@/components/common/slider-components/total-item-slider';
import { topMenuData } from '@/data/home/restaurant/resatuarant-data';

const TopMenu: FC = () => {
  return (
    <div className="container">
      <section className="category-part radius-category small-section ratio_square pb-0">
        <div className="row">
          <div className="col">
            <TotalItemSlider slideData={topMenuData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopMenu;
