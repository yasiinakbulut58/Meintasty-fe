'use client';

import React, { useState } from 'react';
import { ModalBody } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import DatePickerComponent from '@/components/common/date-picker';
import { useBaseTranslation } from '@/lib/hooks';
import { IUser } from '@/lib/data';
import { updateUserAction } from './action';
import { useRouter } from 'next/navigation';

// Define form schema using Zod
const schema = z.object({
  fullname: z
    .string()
    .min(1, 'Full name is required.')
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/,
      'Full name must include first name and last name, separated by a space.',
    )
    .refine((val) => val.split(' ').length >= 2, {
      message: 'Full name must contain at least first and last name.',
    }),
  gender: z.string().min(1, 'Gender is required.'),
  birthday: z.union([z.date(), z.null()]).refine((value) => value !== null, {
    message: 'Birthday is required.',
  }),
});

interface FormData {
  fullname: string;
  gender: string;
  birthday: Date | null;
}

type Props = {
  onToggle: () => void;
  user: IUser;
};

const EditProfileForm = ({ onToggle, user }: Props) => {
  const { t } = useBaseTranslation();
  const { refresh } = useRouter();
  const [start, setStart] = useState<Date | null>(null); // state for birthday date (initially null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue, // Added to programmatically set form values
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullname: user.fullName ?? '',
      gender: user.gender ?? '',
      birthday: user.birthDate ? new Date(user.birthDate) : start, // initialize the birthday field
    },
  });

  const onSubmit = async (data: FormData) => {
    const response = await updateUserAction({
      birthDate: data.birthday?.toLocaleDateString(),
      gender: data.gender,
      fullName: data.fullname,
    });
    if (response?.isSuccess) {
      onToggle();
      refresh();
    }
  };

  const handleDateChange = (date: Date | null) => {
    setStart(date);
    setValue('birthday', date ?? null);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <ModalBody>
        <div className="row">
          <div className="form-group">
            <label htmlFor="first">{t('Profile.fullName')}</label>
            <input
              type="text"
              className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
              id="first"
              placeholder={t('Profile.fullName')}
              {...register('fullname')}
            />
            {errors.fullname && (
              <div className="invalid-feedback">{errors.fullname.message}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="gender">{t('Profile.gender')}</label>
            <select
              id="gender"
              className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
              {...register('gender')}
            >
              <option value="">{t('Common.choose')}</option>
              <option value="1">{t('Profile.female')}</option>
              <option value="2">{t('Profile.male')}</option>
            </select>
            {errors.gender && (
              <div className="invalid-feedback">{errors.gender.message}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="birthday">{t('Profile.birthday')}</label>
            <div className="datepicker-wrapper w-100">
              <DatePickerComponent
                setStart={handleDateChange} // Pass date handler
                className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                wrapperClassName="w-100"
                placeholderText={t('Profile.birthday')}
                start={start} // Default to current date if null
              />
              {errors.birthday && (
                <div className="invalid-feedback" style={{ display: 'block' }}>
                  {errors.birthday.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </ModalBody>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={onToggle}>
          {t('Common.close')}
        </button>
        <button
          className={`btn btn-solid ${isSubmitting ? 'pe-none opacity-50' : ''}`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('Common.pleaseWait') : t('Common.saveChanges')}
        </button>
      </div>{' '}
    </form>
  );
};

export default EditProfileForm;
