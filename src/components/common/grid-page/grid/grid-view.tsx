'use client';
import { FC, useEffect, useState } from 'react';
import GridLayout from '@/components/common/grid-page/grid-layout';
import Filters from '../../../hotels/filters/page';
import { useDispatch, useSelector } from 'react-redux';
/* import CategoryPage from '@/components/common/filters/category'; */
import { RootState } from '@/redux-toolkit/store';
import { IGridViewProps } from './listing';
import { useBaseTranslation } from '@/lib/hooks';

const GridView: FC<IGridViewProps> = ({
  topFilter,
  size,
  trip,
  gridType,
  side,
  value,
  children,
  type,
  view,
  pagination,
  categories,
}) => {
  const { t } = useBaseTranslation();
  const dispatch = useDispatch();
  const grid = useSelector((state: RootState) => state.gridReducer);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    dispatch({ type: 'gridSize', payload: size });
    dispatch({ type: 'gridStyle', payload: gridType });
  }, []);
  /* const [showDropDown, setShowDropDown] = useState(false); */
  return (
    <section className="xs-section bg-inner">
      <div className="container">
        <div className="row">
          {children}
          {!topFilter && side !== 'no' && (
            <div className={`col-lg-3 ${side === 'right' ? 'order-1' : ''}`}>
              <Filters
                type={type}
                setShowFilter={setShowSidebar}
                showFilter={showSidebar}
                categories={categories}
              />
            </div>
          )}
          <div
            className={`${topFilter ? 'col-lg-12' : side === 'no' ? 'col-lg-12' : 'col-lg-9'} ratio3_2`}
          >
            <a
              href="#javascript"
              className="mobile-filter border-top-0"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <h5>{t('Restaurants.Filter.latestFilter')}</h5>
              <img
                src="/assets/images/icon/adjust.png"
                className="img-fluid blur-up lazyloaded"
                alt=""
              />
            </a>
            <GridLayout
              grid={grid}
              value={value}
              type={type}
              view={view}
              trip={trip}
              pagination={pagination}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridView;
