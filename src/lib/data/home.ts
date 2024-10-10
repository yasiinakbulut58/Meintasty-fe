import { BaseResponse, CantonModel, ICategory } from './types';
import { baseApi } from '../http-common';

export function getCantonsAndCities() {
  return baseApi.post<BaseResponse<CantonModel[]>>(
    '/Canton/getCantonsAndCities',
    {},
  );
}

export function getCategories() {
  return baseApi.post<BaseResponse<ICategory[]>>('/Category/getCategories', {});
}
