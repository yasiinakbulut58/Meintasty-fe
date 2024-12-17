'use client';

import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useBaseTranslation } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { updateUserPhoneAction } from './action';

interface MultipleModalInterFace {
  open: boolean;
  toggle: (id: string) => void;
  currentPhone: string; // Kullanıcının mevcut telefon numarası
}

// Zod şeması: yeni telefon numarası validasyonu
const schema = z.object({
  newPhone: z
    .string()
    .min(10, 'Please enter a valid phone number.')
    .max(11, 'Phone number cannot exceed 11 digits.')
    .refine((value) => /^\+?[0-9]*$/.test(value), {
      message: 'Phone number must contain only numbers or a leading +.',
    }),
});

interface FormData {
  newPhone: string;
}

const PhoneModalShow: FC<MultipleModalInterFace> = ({
  open,
  toggle,
  currentPhone,
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
      newPhone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    const response = await updateUserPhoneAction({
      phoneNumber: data.newPhone,
    });

    if (response?.isSuccess) {
      toggle('#edit-phone');
      refresh();
    }
  };

  return (
    <Modal centered isOpen={open} toggle={() => toggle('#edit-phone')}>
      <ModalHeader toggle={() => toggle('#edit-phone')}>
        <h5 className="modal-title">{t('Profile.changePhone')}</h5>
      </ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ModalBody>
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="ph-o">{t('Profile.oldPhone')}</label>
              <input
                type="text"
                className="form-control"
                id="ph-o"
                value={currentPhone}
                disabled
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="ph-n">{t('Profile.newPhone')}</label>
              <input
                type="text"
                className={`form-control ${errors.newPhone ? 'is-invalid' : ''}`}
                id="ph-n"
                placeholder={t('Profile.enterNewPhone')}
                {...register('newPhone')}
              />
              {errors.newPhone && (
                <div className="invalid-feedback">
                  {errors.newPhone.message}
                </div>
              )}
            </div>
          </div>
        </ModalBody>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => toggle('#edit-phone')}
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

export default PhoneModalShow;
