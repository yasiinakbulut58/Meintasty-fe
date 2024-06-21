'use client';
import Button from '../../common/btn';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { paths } from '@/constant/menu';

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
  const router = useRouter();
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
      router.push(paths.home);
      return;
    }
    toast.error(res?.error ?? 'Beklenmedik bir hata oluştu');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="needs-validation"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          id="exampleInputEmail1"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email', { required: 'E-posta zorunlu' })}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          placeholder="Password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          id="exampleInputPassword1"
          {...register('password', {
            required: 'Pasword is required',
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
          remember me
        </label>
      </div>
      <div className="button-bottom">
        <button
          className={`w-100 btn btn-solid btn-outline color1 ${isSubmitting ? 'pe-none opacity-50' : ''}`}
          type="submit"
          disabled={isSubmitting}
          name="log-in"
        >
          {isSubmitting ? 'Please wait...' : 'Giriş Yap'}
        </button>
        <div className="divider">
          <h6>or</h6>
        </div>
        <Link
          href="/auth/register"
          aria-disabled={isSubmitting}
          className={`${isSubmitting ? 'pe-none opacity-50' : ''}`}
        >
          <Button
            btnClass={`w-100 btn btn-solid ${isSubmitting ? 'pe-none opacity-50' : ''}`}
            name="create account"
          />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
