'use client';

import TotalItemSlider from '@/components/common/slider-components/total-item-slider';
import { ICategory } from '@/lib/data';
import { useBaseTranslation } from '@/lib/hooks';

const TopMenu = ({ categories }: { categories: ICategory[] | null }) => {
  const { t } = useBaseTranslation();
  const slideData =
    categories?.map((item) => ({
      id: item.id,
      name: item.categoryName,
      img: '/assets/images/restaurant/dishes/14.jpg',
      title: `${item.restaurantCount} ${t('restaurant')}`,
    })) ?? [];
  return (
    <div className="container">
      <section className="category-part radius-category small-section ratio_square pb-0">
        <div className="row">
          <div className="col">
            <TotalItemSlider slideData={slideData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopMenu;
