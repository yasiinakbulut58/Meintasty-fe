'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import GridList from '@/components/common/grid-page/grid-list';
import GridLayout from '@/components/common/grid-page/grid-layout';
import Filters from '../../../hotels/filters/page';
import { useDispatch, useSelector } from 'react-redux';
import CategoryPage from '@/components/common/filters/category';
import { RootState } from '@/redux-toolkit/store';
import { IGridReducerProps } from '../grid-page.d';

const GridView: FC<IGridViewProps> = ({
  gridSelect,
  topFilter,
  size,
  trip,
  gridType,
  side,
  value,
  children,
  type,
  view,
}) => {
  const dispatch = useDispatch();
  const grid = useSelector((state: RootState) => state.gridReducer);
  const [showSidebar, setShowSidebar] = useState(false);
  const [filteredMenu, setFilteredMenu] = useState<
    IRestaurantProps[] | undefined
  >(value);

  const getCategories = useCallback((data: []) => {
    setFilteredMenu(data);
  }, []);

  useEffect(() => {
    setFilteredMenu(value);
  }, [value]);

  useEffect(() => {
    dispatch({ type: 'gridSize', payload: size });
    dispatch({ type: 'gridStyle', payload: gridType });
  }, []);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <section className="xs-section bg-inner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter-panel">
              <div className="left-filter">
                <div className="respon-filter-btn">
                  <h6 onClick={() => setShowDropDown(!showDropDown)}>
                    filter <i className="fas fa-sort-down"></i>
                  </h6>
                  <span className="according-menu"></span>
                </div>
                <div
                  className={`filters respon-filter-content filter-button-group ${showDropDown ? 'show' : ''} `}
                >
                  <CategoryPage value={value} getCategories={getCategories} />
                </div>
              </div>
              <GridList
                gridSelect={gridSelect}
                view={view}
                grid={grid as unknown as IGridReducerProps}
                gridStyle={gridType}
                topFilter={topFilter}
                value={value}
                side={side}
                type={type}
              />
            </div>
          </div>

          {children}
          {!topFilter && side !== 'no' && (
            <div className={`col-lg-3 ${side === 'right' ? 'order-1' : ''}`}>
              <Filters
                value={value}
                type={type}
                setShowFilter={setShowSidebar}
                showFilter={showSidebar}
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
              <h5>latest filter</h5>
              <img
                src="/assets/images/icon/adjust.png"
                className="img-fluid blur-up lazyloaded"
                alt=""
              />
            </a>
            <GridLayout
              grid={grid}
              value={filteredMenu}
              type={type}
              view={view}
              trip={trip}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridView;
