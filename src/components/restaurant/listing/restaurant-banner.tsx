'use client';
import { FC } from 'react';
import Img from '@/utils/BackgroundImageRatio';
import Link from 'next/link';
import { useBaseTranslation } from '@/lib/hooks';

const HomeBanner: FC = () => {
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
                  <form>
                    <div className="row w-100">
                      <div className="form-group col-md-5">
                        <input
                          type="text"
                          placeholder="enter your location"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-5">
                        <input
                          type="text"
                          placeholder="what are you craving?"
                          className="form-control"
                        />
                      </div>
                      <div className="search col-md-2">
                        <Link
                          href="/restaurant/listing/grid-view/grid-2"
                          className="btn btn-rounded color1"
                        >
                          search
                        </Link>
                      </div>
                    </div>
                  </form>
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
