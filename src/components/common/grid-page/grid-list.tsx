import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IGridListProps } from './grid-page.d';
import LatestFilters from '@/components/hotels/filters/latest-filter';

const GridList: FC<IGridListProps> = ({
  topFilter,
  value,
  type,
  side,
  gridSelect,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="right-panel">
      {topFilter && side === 'no' && (
        <LatestFilters value={value} filterStyle="horizontal" type={type} />
      )}
      {!gridSelect && (
        <div className="collection-grid-view">
          <ul className="filter-select">
            <li onClick={() => dispatch({ type: 'gridSize', payload: 2 })}>
              <a href="#" className="product-4-layout-view">
                <ul className="filter-select">
                  <li></li>
                  <li></li>
                </ul>
              </a>
            </li>
            <li onClick={() => dispatch({ type: 'gridSize', payload: 3 })}>
              <a href="#" className="product-4-layout-view">
                <ul className="filter-select">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GridList;
