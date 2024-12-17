'use client';

import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useBaseTranslation } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { updateUserEmailAction } from './action';

interface MultipleModalInterFace {
  open: boolean;
  toggle: (id: string) => void;
  currentEmail: string; // Kullanıcının mevcut emaili
}

// Zod şeması: yeni email validasyonu
const schema = z.object({
  newEmail: z
    .string()
    .email('Please enter a valid email address.')
    .refine((value) => value.length > 0, { message: 'Email is required.' }),
});

interface FormData {
  newEmail: string;
}

const EmailModalShow: FC<MultipleModalInterFace> = ({
  open,
  toggle,
  currentEmail,
}) => {
  const { t } = useBaseTranslation();
  const { refresh } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      newEmail: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    const response = await updateUserEmailAction({
      email: data.newEmail,
    });
    if (response?.isSuccess) {
      toggle('#edit-address');
      refresh();
    }
  };

  return (
    <Modal centered isOpen={open} toggle={() => toggle('#edit-address')}>
      <ModalHeader toggle={() => toggle('#edit-address')}>
        <h5 className="modal-title">{t('Profile.changeEmail')}</h5>
      </ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ModalBody>
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="old">{t('Profile.oldEmail')}</label>
              <input
                type="email"
                className="form-control"
                id="old"
                value={currentEmail}
                disabled
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="new">{t('Profile.newEmail')}</label>
              <input
                type="email"
                className={`form-control ${errors.newEmail ? 'is-invalid' : ''}`}
                id="new"
                placeholder={t('Profile.newEmail')}
                {...register('newEmail')}
              />
              {errors.newEmail && (
                <div className="invalid-feedback">
                  {errors.newEmail.message}
                </div>
              )}
            </div>
          </div>
        </ModalBody>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => toggle('#edit-address')}
          >
            {t('Common.close')}
          </button>
          <button
            className={`btn btn-solid ${isSubmitting ? 'pe-none opacity-50' : ''}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('Common.pleaseWait') : t('Common.saveChanges')}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EmailModalShow;
