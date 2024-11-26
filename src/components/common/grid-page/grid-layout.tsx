import React, { FC } from 'react';
import ListPage from '../elements/product-box/list-product-box';
import Pagination from './pagination/page-layout';
import RestaurantProducts from '../elements/product-box-6/restaurant-product';
import { IGridLayoutProps } from './grid-page.d';

const GridLayout: FC<IGridLayoutProps> = ({
  value,
  grid,
  type,
  view,
  pagination,
}) => {
  /* const showProduct = useFilterRestaurant({ value }); */

  return (
    <>
      <div
        className={`product-wrapper-grid special-section grid-box ${grid.gridStyle === 'list-view' ? 'container' : ''}`}
      >
        <div
          className={`row content grid ${grid.gridStyle === 'list-view' ? 'list-view' : ''}`}
        >
          {value?.map((dataItems: IBaseProps, i: number) => {
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

      {pagination && <Pagination {...pagination} />}
    </>
  );
};

export default GridLayout;
