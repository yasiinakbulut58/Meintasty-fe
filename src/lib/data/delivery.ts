import {
  BaseResponse,
  RestaurantDetailModel,
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

export function getRestaurantDetailByInfo(url: string) {
  return baseApi.post<BaseResponse<RestaurantDetailModel>>(
    '/Restaurant/getRestaurantDetailByInfo',
    { url },
  );
}
