import {
  BaseResponse,
  RestaurantDetailModel,
  RestaurantModel,
  RestaurantRequestModel,
  RestaurantResponseModel,
} from './types';
import { baseApi } from '../http-common';

export function getRestaurantsByCityId(request: RestaurantRequestModel) {
  return baseApi.post<BaseResponse<RestaurantResponseModel>>(
    '/Restaurant/getRestaurantsByCityId',
    request,
  );
}

export function getRestaurantDetailById(restaurantId: number) {
  return baseApi.post<BaseResponse<RestaurantDetailModel>>(
    '/Restaurant/getRestaurantDetailById',
    { restaurantId },
  );
}
