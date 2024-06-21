'use client';
import { FC } from 'react';
import BackgroundDiv from '@/utils/HOC/background-div';
import SmokeEffect from './smoke-effect';
import Link from 'next/link';
import AutocompleteDropdown from './autocomplete';
import { useBaseTranslation } from '@/lib/hooks';

const HomeBanner: FC = () => {
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
                <div className="shadow-none">
                  <h4>{t('Home.bannerTitle')}</h4>
                  <h1>{t('Home.bannerDesc')}</h1>
                  <div className="book-table section-b-space single-table p-0">
                    <div className="table-form">
                      <form>
                        <div className="row w-100">
                          <div className="form-group col-md-6">
                            <AutocompleteDropdown
                              options={[
                                'Apple',
                                'Banana',
                                'Cherry',
                                'Date',
                                'Elderberry',
                              ]}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <select className="form-control">
                              <option value="">Select...</option>
                              <option value="saab">Deluxe Room</option>
                              <option value="audi">Suite</option>
                              <option value="opel">Royal room</option>
                            </select>
                          </div>
                          <div className="col-md-12 mt-2">
                            <Link
                              href="/restaurants"
                              className="btn btn-rounded color1 w-100 m-0"
                            >
                              {t('search')}
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
        </div>
      </BackgroundDiv>
    </section>
  );
};

export default HomeBanner;
