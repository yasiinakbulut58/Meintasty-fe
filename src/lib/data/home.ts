import { BaseResponse, CantonModel } from './types';
import { baseApi } from '../http-common';

export function getCantonsAndCities() {
  return baseApi.post<BaseResponse<CantonModel[]>>(
    '/Canton/getCantonsAndCities',
    {},
  );
}
