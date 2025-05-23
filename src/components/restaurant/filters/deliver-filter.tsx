import { deliverData } from '@/data/restaurant/filter';
import { RootState } from '@/redux-toolkit/store';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DeliveryFilter: React.FC = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const deliverTimeStatus = useSelector(
    (state: RootState) => state.restaurantFilerReducer.deliverTimeStatus,
  );

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({
        type: 'deliverTimeStatus',
        payload: [...deliverTimeStatus, value],
      });
    } else {
      dispatch({
        type: 'deliverTimeStatus',
        payload: deliverTimeStatus.filter(
          (selectedValue: string) => selectedValue !== value,
        ),
      });
    }
  };

  useEffect(() => {
    dispatch({ type: 'deliverTimeStatus', payload: deliverTimeStatus });
  }, [deliverTimeStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className={`collection-collapse-block ${show ? 'open' : ''}`}>
        <h6 className="collapse-block-title">Delivery Time</h6>
        <div
          className={`collection-collapse-block-content ${!show ? 'd-none' : ''}`}
        >
          <div className="collection-brand-filter">
            {deliverData.map((data, index) => {
              return (
                <div
                  className="form-check collection-filter-checkbox"
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={data.type}
                    value={data.type}
                    checked={deliverTimeStatus.includes(data.type)}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={data.type}>
                    {data.type}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoizedDeliveryFilter = React.memo(DeliveryFilter);
export default MemoizedDeliveryFilter;
