'use client';
import Img from '@/utils/BackgroundImageRatio';
import { FC } from 'react';
import RegisterForm from '@/components/auth/register/form';
import LoginForm from '@/components/auth/login/Form';
import Animation from './animation';

const AuthPage: FC<IAuthPageProps> = ({ title, type }) => {
  return (
    <section className="section-b-space dark-cls animated-section">
      <Img
        src="/assets/images/cab/grey-bg.jpg"
        alt=""
        className="img-fluid bg-img"
      />
      <Animation />
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6 offset-sm-2 col-sm-8 col-12">
            <div className="account-sign-in">
              <div className="title">
                <h3>{title}</h3>
              </div>
              {/* <SocialContent title={title} /> */}
              {type === 'register' ? <RegisterForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
