'use client';
import { FC } from 'react';
import Img from '@/utils/BackgroundImageRatio';
import { useBaseTranslation } from '@/lib/hooks';
import { CantonModel } from '@/lib/data';
import dynamic from 'next/dynamic';

const SearchForm = dynamic(() => import('./location-search-form'), {
  ssr: false,
});

const HomeBanner: FC<{ cantonAndCities: CantonModel[] | null }> = ({
  cantonAndCities,
}) => {
  const { t } = useBaseTranslation();

  return (
    <section className="order-food-section pt-0">
      <Img
        src="/assets/images/restaurant/background/1.jpg"
        className="bg-img img-fluid"
        alt=""
      />
      <div className="order-food">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="book-table section-b-space single-table p-0">
                <h3>{t('Restaurants.bannerTitle')}</h3>
                <div className="table-form">
                  <SearchForm cantonAndCities={cantonAndCities} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
