'use client';
import Button from '../../common/btn';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { paths } from '@/constant/menu';
import { useBaseTranslation } from '@/lib/hooks';

const schema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(1, 'Pasword is required'),
  rememberMe: z.boolean().optional(),
});

interface FormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const LoginForm = () => {
  const { t } = useBaseTranslation();
  const router = useRouter();
  const params = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const options = {
      redirect: false,
      ...data,
    };
    const res = await signIn('credentials', options);
    if (res?.ok && res.status === 200) {
      const redirectUrl = params.get('redirectUrl');
      router.push(
        redirectUrl && redirectUrl.startsWith('/') ? redirectUrl : paths.home,
      );
      return;
    }
    toast.error(res?.error ?? 'An unexpected error occurred');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="needs-validation"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          {t('Auth.SignUp.emailAddress')}
        </label>
        <input
          type="email"
          id="exampleInputEmail1"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email', { required: t('Auth.SignUp.emailIsRequired') })}
          aria-describedby="emailHelp"
          placeholder={t('Auth.SignUp.enterEmail')}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
        <small id="emailHelp" className="form-text text-muted">
          {t('Auth.SignUp.wellNeverShareYourEmailWithAnyoneElse')}{' '}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          {t('Auth.SignUp.password')}
        </label>
        <input
          type="password"
          placeholder={t('Auth.SignUp.password')}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          id="exampleInputPassword1"
          {...register('password', {
            required: t('Auth.SignUp.passwordIsRequired'),
          })}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          {...register('rememberMe')}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          {t('Auth.SignUp.rememberMe')}
        </label>
      </div>
      <div className="button-bottom">
        <button
          className={`w-100 btn btn-solid btn-outline color1 ${isSubmitting ? 'pe-none opacity-50' : ''}`}
          type="submit"
          disabled={isSubmitting}
          name="log-in"
        >
          {isSubmitting ? t('Common.pleaseWait') : t('Auth.login')}
        </button>
        <div className="divider">
          <h6>{t('Common.or')}</h6>
        </div>
        <Link
          href="/auth/register"
          aria-disabled={isSubmitting}
          className={`${isSubmitting ? 'pe-none opacity-50' : ''}`}
        >
          <Button
            btnClass={`w-100 btn btn-solid ${isSubmitting ? 'pe-none opacity-50' : ''}`}
            name={t('Auth.SignUp.createAccount')}
          />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
