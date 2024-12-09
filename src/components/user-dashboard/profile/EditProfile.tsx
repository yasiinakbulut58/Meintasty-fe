'use client';
import { FC } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import dynamic from 'next/dynamic';

const EditProfileForm = dynamic(() => import('./EditProfileForm'), {
  ssr: false,
});

const EditProfile: FC<EditProfileInterFace> = ({ open, toggle }) => {
  return (
    <Modal centered size="lg" isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h5 className="modal-title">Edit Profile</h5>
      </ModalHeader>
      <EditProfileForm onToggle={toggle} />
    </Modal>
  );
};

export default EditProfile;
