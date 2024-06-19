import { AuthModel, BaseResponse } from './types';
import { baseApi } from '../http-common';

export function login(email: string, password: string) {
  return baseApi.post<BaseResponse<AuthModel>>('/Login/generateToken', {
    email,
    password,
  });
}

export function createUser({ email, name, surname, password }: any) {
  return baseApi.post<BaseResponse<any>>('/users', {
    email,
    name,
    surname,
    password,
  });
}
