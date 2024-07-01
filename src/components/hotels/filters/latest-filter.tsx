'use client';
import Img from '@/utils/BackgroundImageRatio';
import StarCategoryFilter from './star-category';
import { FC, useState } from 'react';
import PriceFilter from './price-filter';

import PopularFoodFilter from '@/components/restaurant/filters/popular-filter';
import CuisinesFilter from '@/components/restaurant/filters/cuisines-filter';
import DeliveryFilter from '@/components/restaurant/filters/deliver-filter';

const LatestFilters: FC<IFiltersProps> = ({ filterStyle, value }) => {
  const [show, setShow] = useState(true);

  const applyFunc = () => {
    setShow(true);
  };
  return (
    <>
      <a
        href="#"
        className="filter_button filter-bottom-title"
        onClick={() => setShow(!show)}
      >
        <Img
          src="/assets/images/icon/adjust.png"
          className="img-fluid"
          alt=""
        />
        <h5>latest filter</h5>
      </a>
      <div
        className={`left-sidebar ${filterStyle !== 'horizontal' ? 'sidebar-popup' : 'filter-bottom-content'} ${show ? '' : 'open'}`}
      >
        <div
          className={`middle-part collection-collapse-block ${show ? '' : 'open'}`}
        >
          <div className="collection-collapse-block-content row">
            <>
              <PopularFoodFilter />
              <CuisinesFilter />
              <StarCategoryFilter />
              <PriceFilter />
              <DeliveryFilter />
            </>
            <div className="button_bottom text-end">
              <button
                onClick={applyFunc}
                className="btn btn-solid color1 mb-1 me-2"
              >
                apply
              </button>
              <button
                onClick={() => setShow(true)}
                className="btn btn-solid color1 close-filter-bottom mb-1"
              >
                close filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestFilters;
