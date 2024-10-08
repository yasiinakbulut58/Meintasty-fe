'use client';
import BackgroundDiv from '@/utils/HOC/background-div';
import SmokeEffect from './smoke-effect';
import { useBaseTranslation } from '@/lib/hooks';
import { CantonModel } from '@/lib/data';
import dynamic from 'next/dynamic';

const BannerSearch = dynamic(() => import('./banner-search'), { ssr: false });

const HomeBanner = ({
  cantonAndCities,
}: {
  cantonAndCities: CantonModel[] | null;
}) => {
  const { t } = useBaseTranslation();
  return (
    <section className="home_section restaurant-home-section p-0">
      <BackgroundDiv
        img={'/assets/images/restaurant-bg.png'}
        divImg="/assets/images/restaurant-bg.png"
        titleClass="home"
        displayClass="none"
        imgWidth={1920}
        imgHeight={1074}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="smoke-effect">
                <SmokeEffect />
                {/* <canvas id="canvas"></canvas> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-content food_content">
                <div className="w-100 shadow-none">
                  <h4>{t('Home.bannerTitle')}</h4>
                  <h1>{t('Home.bannerDesc')}</h1>
                  <BannerSearch cantonAndCities={cantonAndCities} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundDiv>
    </section>
  );
};

export default HomeBanner;
