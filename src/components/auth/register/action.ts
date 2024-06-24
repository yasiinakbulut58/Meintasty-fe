'use server';

import {
  BaseResponse,
  createUser as register,
  RegisterRequestModel,
} from '@/lib/data';
import { AxiosError } from 'axios';

export async function createUser(data: RegisterRequestModel) {
  try {
    const response = await register(data);
    if (response.data.success) {
      return { isSuccess: true };
    }
    return { isSuccess: false, message: response.data.errorMessage };
  } catch (error) {
    const err = error as AxiosError<BaseResponse<any>>;
    return { isSuccess: false, message: err?.response?.data?.errorMessage };
  }
}
