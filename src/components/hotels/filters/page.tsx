'use client';
import React, { FC, useState } from 'react';
import Img from '@/utils/BackgroundImageRatio';
/* import MemoizedStarCategoryFilter from '@/components/hotels/filters/star-category';
 */ import MemorizedCategoryFilter from '@/components/restaurant/filters/category-filter';
/* import MemoizedDeliveryFilter from '@/components/restaurant/filters/deliver-filter';*/
import { IFiltersProps } from './filter';
import { useBaseTranslation } from '@/lib/hooks';

const Filters: FC<IFiltersProps> = ({
  popular,
  setShowFilter,
  showFilter,
  categories,
}) => {
  const { t } = useBaseTranslation();
  const [show, setShow] = useState(false);

  return (
    <div className="left-sidebar" style={{ left: showFilter ? '-1px' : '' }}>
      <div
        className="back-btn"
        onClick={() => setShowFilter && setShowFilter(!showFilter)}
      >
        {t('Common.back')}
      </div>
      {/* <div className="search-bar">
        <input type="text" placeholder="Search here.." />
        <i className="fas fa-search"></i>
      </div> */}
      <div
        className={`middle-part collection-collapse-block ${show ? '' : 'open'}`}
      >
        <div className="d-flex align-items-center justify-content-between">
          <h5>{t('Restaurants.Filter.latestFilter')}</h5>
          <Img
            src="/assets/images/icon/adjust.png"
            className="img-fluid"
            alt=""
            onClick={() => setShow(!show)}
          />
        </div>
        <div
          className={`collection-collapse-block-content ${show ? 'hide-content' : ''}`}
        >
          <MemorizedCategoryFilter categories={categories} />
          {/*  <MemoizedStarCategoryFilter />
          <MemoizedDeliveryFilter /> */}
        </div>
      </div>
    </div>
  );
};

export default Filters;
