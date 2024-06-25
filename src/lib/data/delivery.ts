import { BaseResponse, RestaurantDetailModel, RestaurantModel } from './types';
import { baseApi } from '../http-common';

export function getRestaurantsByCityId(cityCode: number) {
  return baseApi.post<BaseResponse<RestaurantModel[]>>(
    '/Restaurant/getRestaurantsByCityId',
    { cityCode },
  );
}

export function getRestaurantDetailById(restaurantId: number) {
  return baseApi.post<BaseResponse<RestaurantDetailModel>>(
    '/Restaurant/getRestaurantDetailById',
    { restaurantId },
  );
}
