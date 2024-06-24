'use client';
import { useBaseTranslation } from '@/lib/hooks';
import { CantonModel } from '@/lib/data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const schema = z.object({
  cantonId: z.string().min(1, 'Please select canton'),
  cityId: z.string().min(1, 'Please select city'),
});

type FormData = z.infer<typeof schema>;

const BannerSearch = ({
  cantonAndCities,
}: {
  cantonAndCities: CantonModel[] | null;
}) => {
  const [selectedCantonId, setSelectedCantonId] = useState('');
  const { push } = useRouter();
  const { t } = useBaseTranslation();
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    push(`/delivery/${data.cityId}`);
  };

  const filteredOptions = useMemo(
    () =>
      cantonAndCities
        ?.find((item) => item.id === Number(selectedCantonId))
        ?.cities?.map((item) => ({
          label: item.cityName,
          value: item.cityCode.toString(),
        })) || [],
    [cantonAndCities, selectedCantonId],
  );

  return (
    <div className="book-table section-b-space single-table p-0">
      <div className="table-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="needs-validation"
          noValidate
        >
          <div className="row w-100">
            <div className="col-md-6">
              <select
                className={`form-control border p-3 ${errors.cantonId ? 'is-invalid' : ''}`}
                defaultValue=""
                {...register('cantonId', {
                  deps: ['cityId', 'cantonId'],
                })}
                onChange={(e) => {
                  setSelectedCantonId(e.target.value);

                  setValue('cityId', '', {
                    shouldValidate: true,
                  });
                }}
              >
                <option value="" disabled>
                  Select Canton
                </option>
                {cantonAndCities?.map((item) => (
                  <option key={item.cantonName} value={item.id.toString()}>
                    {item.cantonName}
                  </option>
                ))}
              </select>
              {errors.cantonId && (
                <div className="invalid-feedback">Please select canton</div>
              )}
            </div>
            <div className="col-md-6">
              <select
                {...register('cityId', {
                  deps: ['cityId', 'cantonId'],
                })}
                className={`form-control border p-3 ${errors.cityId ? 'is-invalid' : ''}`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select City
                </option>
                {filteredOptions?.map((item) => (
                  <option key={item.label} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>

              {errors.cityId && (
                <div className="invalid-feedback">Please select a city</div>
              )}
            </div>
            <div className="col-md-12 mt-2">
              <button
                type="submit"
                className={`w-100 btn btn-rounded color1 m-0 ${isSubmitting ? 'pe-none opacity-50' : ''}`}
                disabled={isSubmitting}
              >
                {t('search')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerSearch;
