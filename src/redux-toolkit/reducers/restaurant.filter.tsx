import { createReducer } from '@reduxjs/toolkit';

interface IRestaurantReducerProps {
  [key: string]: any;
  popularStatus: string[];
  deliverTimeStatus: string[];
  rateStatus: string[];
}
var initialState: IRestaurantReducerProps = {
  popularStatus: [],
  deliverTimeStatus: [],
  rateStatus: [],
};

export const restaurantFilerReducer = createReducer(initialState, {
  popularStatus: (state, action) => {
    state.popularStatus = action.payload;
  },
  rateStatus: (state, action) => {
    state.rateStatus = action.payload;
  },

  deliverTimeStatus: (state, action) => {
    state.deliverTimeStatus = action.payload;
  },
});
