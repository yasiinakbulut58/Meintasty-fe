import { AuthModel, BaseResponse, RegisterRequestModel } from './types';
import { baseApi } from '../http-common';

export function login(email: string, password: string) {
  return baseApi.post<BaseResponse<AuthModel>>('/Login/generateToken', {
    email,
    password,
  });
}

export function createUser({
  email,
  fullName,
  password,
}: RegisterRequestModel) {
  return baseApi.post<BaseResponse<any>>('/Register/signup', {
    email,
    fullName,
    password,
    rePassword: password,
  });
}
