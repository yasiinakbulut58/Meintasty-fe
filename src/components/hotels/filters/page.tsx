'use client';
import { FC, useState } from 'react';
import Img from '@/utils/BackgroundImageRatio';
import HelpInfo from '../help-info';
import { LatestFilter } from '@/constant/constant';
import PopularFoodFilter from '@/components/restaurant/filters/popular-filter';
import { renderFiltersByType } from '@/utils/HOC/renderFiltersByType';

const Filters: FC<IFiltersProps> = ({
  popular,
  type,
  setShowFilter,
  showFilter,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="left-sidebar" style={{ left: showFilter ? '-1px' : '' }}>
      <div
        className="back-btn"
        onClick={() => setShowFilter && setShowFilter(!showFilter)}
      >
        back
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here.." />
        <i className="fas fa-search"></i>
      </div>
      <div
        className={`middle-part collection-collapse-block ${show ? '' : 'open'}`}
      >
        {popular || type === 'restaurant' ? (
          <div className="middle-part collection-collapse-block open p-0">
            <div className="collection-collapse-block-content">
              <PopularFoodFilter />
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-between">
              <h5>{LatestFilter}</h5>
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
              {renderFiltersByType(type)}
            </div>
          </>
        )}
      </div>
      {!popular && <HelpInfo />}
    </div>
  );
};

export default Filters;
