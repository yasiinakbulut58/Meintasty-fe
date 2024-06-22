import { configureStore } from '@reduxjs/toolkit';
import { gridReducer } from './reducers/grid-reducer';
import langReducer from './reducers/language';
import { restaurantFilerReducer } from './reducers/restaurant.filter';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import currencyReducer from './reducers/currency';
import restaurantReducer from './restaurant-api';

export const store = configureStore({
  reducer: {
    gridReducer,
    restaurantFilerReducer,
    currency: currencyReducer,
    language: langReducer,
    restaurant: restaurantReducer,
  },
  devTools: true,
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
