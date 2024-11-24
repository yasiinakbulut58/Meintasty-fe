'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { BaseResponse } from '@/lib/data';
import { getUserDetail as getUser } from '@/lib/data/profile';
import { AxiosError } from 'axios';
import { getServerSession } from 'next-auth';

export async function getUserDetail(userId: number) {
  const session = await getServerSession(options);
  try {
    const response = await getUser(userId, session?.user.token ?? '');
    if (response.data.success) {
      return { isSuccess: true, value: response.data.value };
    }
    return { isSuccess: false, message: response.data.errorMessage };
  } catch (error) {
    const err = error as AxiosError<BaseResponse<any>>;
    return { isSuccess: false, message: err?.response?.data?.errorMessage };
  }
}
