import { createReducer } from '@reduxjs/toolkit';

interface IRestaurantReducerProps {
  [key: string]: any;
  popularStatus: string[];
  cuisinesStatus: string[];
  deliverTimeStatus: string[];
  rateStatus: string[];
}
var initialState: IRestaurantReducerProps = {
  popularStatus: [],
  cuisinesStatus: [],
  deliverTimeStatus: [],
  rateStatus: [],
};

export const restaurantFilerReducer = createReducer(initialState, {
  popularStatus: (state, action) => {
    state.popularStatus = action.payload;
  },

  cuisinesStatus: (state, action) => {
    state.cuisinesStatus = action.payload;
  },
  rateStatus: (state, action) => {
    state.rateStatus = action.payload;
  },

  deliverTimeStatus: (state, action) => {
    state.deliverTimeStatus = action.payload;
  },
});
