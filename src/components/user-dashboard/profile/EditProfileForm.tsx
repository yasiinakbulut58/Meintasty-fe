'use client';

import React, { useState } from 'react';
import { ModalBody } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import DatePickerComponent from '@/components/common/date-picker';
import { useBaseTranslation } from '@/lib/hooks';

// Define form schema using Zod
const schema = z.object({
  fullname: z.string().min(1, 'Full name is required.'),
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
};

const EditProfileForm = ({ onToggle }: Props) => {
  const { t } = useBaseTranslation();
  const [start, setStart] = useState<Date | null>(null); // state for birthday date (initially null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue, // Added to programmatically set form values
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      birthday: start, // initialize the birthday field
    },
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission logic here
    toast.success('Profile updated successfully');
  };
  console.log(errors);
  const handleDateChange = (date: Date | null) => {
    setStart(date);
    // Update form value when date is selected
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
