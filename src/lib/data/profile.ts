import { IUser, BaseResponse, IUserRequest } from './types';
import { baseApi } from '../http-common';

export function getUserDetail(token: string) {
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return baseApi.post<BaseResponse<IUser>>('/User/getUser', {}, headers);
}

export function updateUser(token: string, body: Partial<IUserRequest>) {
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return baseApi.post<BaseResponse<IUser>>(
    '/User/updateUser',
    { ...body },
    headers,
  );
}
