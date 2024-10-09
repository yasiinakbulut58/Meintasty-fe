'use client';
import { EmailAddress, FullName, Password } from '@/constant/constant';
import Button from '../../common/btn';
import Link from 'next/link';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { createUser } from './action';
import { paths } from '@/constant/menu';
import { useRouter } from 'next/navigation';
import { useBaseTranslation } from '@/lib/hooks';

// Define form schema using Zod
const schema = z.object({
  fullName: z.string().min(1, 'This field is required.'),
  email: z
    .string()
    .email('Enter a valid email address.')
    .min(1, 'This field is required.'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long.')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .regex(/[0-9]/, 'Password must contain at least one number.')
    .min(1, 'This field is required.'),
});

interface FormData {
  fullName: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const router = useRouter();
  const { t } = useBaseTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const response = await createUser(data);
    if (response?.isSuccess) {
      const options = {
        redirect: false,
        ...data,
        rePassword: data.password,
      };
      const res = await signIn('credentials', options);
      if (res?.ok && res.status === 200) {
        router.push(paths.home);
        return;
      }
    }
    toast.error(response?.message ?? t('Error.errorOccurred'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <label htmlFor="name">{FullName}</label>
        <input
          type="text"
          id="name"
          placeholder={t('Auth.SignUp.enterName')}
          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
          {...register('fullName')}
        />
        {errors.fullName && (
          <div className="invalid-feedback">{errors.fullName.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">{EmailAddress}</label>
        <input
          type="email"
          id="exampleInputEmail1"
          placeholder={t('Auth.SignUp.enterEmail')}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email')}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">{Password}</label>
        <input
          type="password"
          id="exampleInputPassword1"
          placeholder={t('Auth.SignUp.passwordPlaceholder')}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          {...register('password')}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>
      <div className="button-bottom">
        <button
          className={`w-100 btn btn-solid ${isSubmitting ? 'pe-none opacity-50' : ''}`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? t('Common.pleaseWait')
            : t('Auth.SignUp.createAccount')}
        </button>

        <div className="divider">
          <h6>{t('Common.or')}</h6>
        </div>
        <Link href="/auth/login">
          <Button
            btnClass="w-100 btn btn-solid btn-outline"
            name={t('Auth.login')}
          />
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
