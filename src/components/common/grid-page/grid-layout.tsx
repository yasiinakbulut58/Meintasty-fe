import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListPage from '../elements/product-box/list-product-box';
import Pagination from './pagination/page-layout';
import RestaurantProducts from '../elements/product-box-6/restaurant-product';
import useFilterRestaurant from '@/utils/filters/useFilterRestaurant';
import { IGridLayoutProps } from './grid-page.d';

const GridLayout: FC<IGridLayoutProps> = ({
  value,
  grid,
  type,
  view,
  trip,
}) => {
  const cardToShow = 8;
  const dispatch = useDispatch();

  const showProduct = useFilterRestaurant({ value });
  const totalPages = Math.ceil(showProduct?.length / cardToShow);

  useEffect(() => {
    dispatch({ type: 'productCount', payload: showProduct?.length });
  }, [dispatch, showProduct]);

  return (
    <>
      <div
        className={`product-wrapper-grid special-section grid-box ${grid.gridStyle === 'list-view' ? 'container' : ''}`}
      >
        <div
          className={`row content grid ${grid.gridStyle === 'list-view' ? 'list-view' : ''}`}
        >
          {type === 'restaurant' &&
            showProduct
              ?.slice(
                cardToShow * grid.toPage - cardToShow,
                cardToShow * grid.toPage,
              )
              .map((dataItems, i) => {
                if (grid.gridStyle === 'list-view') {
                  return (
                    type === dataItems.type && (
                      <ListPage data={dataItems} view={view} key={i} />
                    )
                  );
                } else {
                  return (
                    <div
                      className={`${grid.gridSize === 3 && 'col-xl-4'} ${grid.gridSize === 4 && 'col-xl-3 col-lg-4'} col-sm-6 popular grid-item wow fadeInUp`}
                      key={i}
                    >
                      <RestaurantProducts
                        data={dataItems}
                        view={view}
                        key={dataItems.id}
                      />
                    </div>
                  );
                }
              })}
        </div>
      </div>

      <Pagination totalPages1={totalPages} />
    </>
  );
};

export default GridLayout;
