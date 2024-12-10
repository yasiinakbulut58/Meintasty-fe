'use client';
import { FC } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import dynamic from 'next/dynamic';
import { useBaseTranslation } from '@/lib/hooks';

const EditProfileForm = dynamic(() => import('./EditProfileForm'), {
  ssr: false,
});

const EditProfile: FC<EditProfileInterFace> = ({ open, toggle }) => {
  const { t } = useBaseTranslation();
  return (
    <Modal centered size="md" isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h5 className="modal-title">{t('Profile.editProfile')}</h5>
      </ModalHeader>
      <EditProfileForm onToggle={toggle} />
    </Modal>
  );
};

export default EditProfile;
