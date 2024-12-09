'use client';

import React, { useState } from 'react';
import { ModalBody } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import DatePickerComponent from '@/components/common/date-picker';

// Define form schema using Zod
const schema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  gender: z.string().min(1, 'Gender is required.'),
  birthday: z.union([z.date(), z.null()]).refine((value) => value !== null, {
    message: 'Birthday is required.',
  }),
});

interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: Date | null;
}

type Props = {
  onToggle: () => void;
};

const EditProfileForm = ({ onToggle }: Props) => {
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
          <div className="form-group col-md-6">
            <label htmlFor="first">First name</label>
            <input
              type="text"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              id="first"
              placeholder="First name"
              {...register('firstName')}
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName.message}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="last">Last name</label>
            <input
              type="text"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              id="last"
              placeholder="Last name"
              {...register('lastName')}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName.message}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
              {...register('gender')}
            >
              <option value="">Choose...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            {errors.gender && (
              <div className="invalid-feedback">{errors.gender.message}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="birthday">Birthday</label>
            <div className="datepicker-wrapper w-100">
              <DatePickerComponent
                setStart={handleDateChange} // Pass date handler
                className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                wrapperClassName="w-100"
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
          Close
        </button>
        <button
          className={`btn btn-solid ${isSubmitting ? 'pe-none opacity-50' : ''}`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Please wait...' : 'Save changes'}
        </button>
      </div>{' '}
    </form>
  );
};

export default EditProfileForm;
