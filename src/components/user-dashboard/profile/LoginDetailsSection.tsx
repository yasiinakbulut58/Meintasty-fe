'use client';

import React, { useState } from 'react';
import EmailModalShow from './EmailModalShow';
import PhoneModalShow from './PhoneModalShow';
import PasswordModalShow from './PasswordModalShow';
import { IUser } from '@/lib/data';
import { useBaseTranslation } from '@/lib/hooks';

type Props = {
  user: IUser | undefined;
};
const LoginDetailsSection = ({ user }: Props) => {
  const { t } = useBaseTranslation();

  const details = [
    {
      label: t('Profile.emailAddress'),
      value: user?.email ?? '-',
      editable: true,
      modalTarget: '#edit-address',
    },
    {
      label: t('Profile.phoneNo'),
      value: user?.phoneNumber ?? '-',
      editable: true,
      modalTarget: '#edit-phone',
    },
    {
      label: t('Profile.password'),
      value: '*********',
      editable: true,
      modalTarget: '#edit-password',
    },
  ];
  const [emailModal, setEmailModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const multipleToggleHandle = (name: string) => {
    name === 'email address'
      ? setEmailModal(!emailModal)
      : name == 'phone no'
        ? setPhoneModal(!phoneModal)
        : setPasswordModal(!passwordModal);
  };

  return (
    <>
      <div className="dashboard-box">
        <div className="dashboard-title">
          <h4>{t('Profile.loginDetails')}</h4>
        </div>
        <div className="dashboard-detail">
          <ul>
            {details.map((detail, i2) => (
              <li key={i2}>
                <div className="details">
                  <div className="left">
                    <h6>{detail.label}</h6>
                  </div>
                  <div className="right">
                    {detail.editable ? (
                      <>
                        <h6>{detail.value}</h6>
                        <span
                          onClick={() => multipleToggleHandle(detail.label)}
                        >
                          {t('Common.edit')}
                        </span>
                      </>
                    ) : (
                      <h6>{detail.value}</h6>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <EmailModalShow open={emailModal} toggle={multipleToggleHandle} />
      <PhoneModalShow open={phoneModal} toggle={multipleToggleHandle} />
      <PasswordModalShow open={passwordModal} toggle={multipleToggleHandle} />
    </>
  );
};

export default LoginDetailsSection;
