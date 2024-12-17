'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { BaseResponse, IUserRequest } from '@/lib/data';
import {
  getUserDetail as getUser,
  updateUser,
  updateUserEmail,
  updateUserPhone,
} from '@/lib/data/profile';
import { AxiosError } from 'axios';
import { getServerSession } from 'next-auth';

export async function getUserDetail() {
  const session = await getServerSession(options);
  try {
    const response = await getUser(session?.user.token ?? '');
    if (response.data.success) {
      return { isSuccess: true, value: response.data.value };
    }
    return { isSuccess: false, message: response.data.errorMessage };
  } catch (error) {
    const err = error as AxiosError<BaseResponse<any>>;
    return { isSuccess: false, message: err?.response?.data?.errorMessage };
  }
}

export async function updateUserAction(data: Partial<IUserRequest>) {
  const session = await getServerSession(options);

  try {
    const response = await updateUser(session?.user.token ?? '', data);
    if (response.data.success) {
      return { isSuccess: true };
    }
    return { isSuccess: false, message: response.data.errorMessage };
  } catch (error) {
    const err = error as AxiosError<BaseResponse<any>>;
    return { isSuccess: false, message: err?.response?.data?.errorMessage };
  }
}

export async function updateUserEmailAction(data: Partial<IUserRequest>) {
  const session = await getServerSession(options);

  try {
    const response = await updateUserEmail(session?.user.token ?? '', data);
    if (response.data.success) {
      return { isSuccess: true };
    }
    return { isSuccess: false, message: response.data.errorMessage };
  } catch (error) {
    const err = error as AxiosError<BaseResponse<any>>;
    return { isSuccess: false, message: err?.response?.data?.errorMessage };
  }
}

export async function updateUserPhoneAction(data: Partial<IUserRequest>) {
  const session = await getServerSession(options);

  try {
    const response = await updateUserPhone(session?.user.token ?? '', data);
    if (response.data.success) {
      return { isSuccess: true };
    }
    return { isSuccess: false, message: response.data.errorMessage };
  } catch (error) {
    const err = error as AxiosError<BaseResponse<any>>;
    return { isSuccess: false, message: err?.response?.data?.errorMessage };
  }
}
