'use client';

import React, { useState } from 'react';
import EditProfile from './EditProfile';
import { IUser } from '@/lib/data';
import { useBaseTranslation } from '@/lib/hooks';

type Props = {
  user: IUser | undefined;
};
const UserSection = ({ user }: Props) => {
  const { t } = useBaseTranslation();

  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);

  const details = [
    { label: t('Profile.name'), value: user?.fullName ?? '-' },
    { label: t('Profile.birthday'), value: user?.birthDate ?? '-' },
    { label: t('Profile.gender'), value: user?.gender ?? '-' },
  ];

  return (
    <>
      <div className="dashboard-box">
        <div className="dashboard-title">
          <h4>{t('Profile.title')}</h4>
          <span onClick={toggle}>{t('Common.edit')}</span>
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
                    <h6>{detail.value}</h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <EditProfile open={modalOpen} toggle={toggle} />
    </>
  );
};

export default UserSection;
