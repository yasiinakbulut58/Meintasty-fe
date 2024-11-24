import { IUser, BaseResponse } from './types';
import { baseApi } from '../http-common';

export function getUserDetail(userId: number, token: string) {
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return baseApi.post<BaseResponse<IUser>>(
    '/User/getUser',
    {
      userId,
    },
    headers,
  );
}
