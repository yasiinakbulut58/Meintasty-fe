'use client';
import { FC } from 'react';
import { useBaseTranslation } from '@/lib/hooks';
import { CantonModel, IActiveLocation } from '@/lib/data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';
import { activeAddress } from '@/utils/cookie';
import { generateUrlPath } from '@/utils/generateUrlPath';

const schema = z.object({
  cantonId: z.string().min(1, 'Please select canton'),
  cityId: z.string().min(1, 'Please select city'),
});

type FormData = z.infer<typeof schema>;

const SearchForm: FC<{ cantonAndCities: CantonModel[] | null }> = ({
  cantonAndCities,
}) => {
  const { t } = useBaseTranslation();
  const activeLocation = getCookie(activeAddress);

  const cookieLocation = activeLocation
    ? (JSON.parse(activeLocation) as IActiveLocation)
    : null;

  const [selectedCantonId, setSelectedCantonId] = useState(
    cookieLocation?.canton?.id ?? '',
  );
  const { push } = useRouter();
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      cantonId: cookieLocation?.canton?.id?.toString() ?? '',
      cityId: cookieLocation?.city?.id?.toString() ?? '',
    },
  });

  const onSubmit = (data: FormData) => {
    const selectedCanton = cantonAndCities?.find(
      (item) => item.id === Number(selectedCantonId),
    );
    const selectedCity = selectedCanton?.cities?.find(
      (item) => item.id === Number(data.cityId),
    );

    if (!selectedCanton && !selectedCity) return;

    setCookie(
      activeAddress,
      { canton: selectedCanton, city: selectedCity },
      { maxAge: 60 * 6 * 24 },
    );

    push(
      `/delivery/${generateUrlPath(`${selectedCanton?.cantonName} ${selectedCity?.cityName}`)}`,
    );
  };

  const filteredOptions = useMemo(
    () =>
      cantonAndCities
        ?.find((item) => item.id === Number(selectedCantonId))
        ?.cities?.map((item) => ({
          label: item.cityName,
          value: item.id.toString(),
        })) || [],
    [cantonAndCities, selectedCantonId],
  );
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="needs-validation"
      noValidate
    >
      <div className="row w-100">
        <div className="form-group col-md-5">
          <select
            style={{ height: 42 }}
            className={`form-control rounded p-0 px-3 ${errors.cantonId ? 'is-invalid' : ''}`}
            defaultValue=""
            {...register('cantonId', {
              deps: ['cityId', 'cantonId'],
            })}
            onChange={(e) => {
              setSelectedCantonId(e.target.value);
              setValue('cityId', '');
            }}
          >
            <option value="" disabled>
              {t('Home.selectCantonOption')}
            </option>
            {cantonAndCities?.map((item) => (
              <option key={item.cantonName} value={item.id.toString()}>
                {item.cantonName}
              </option>
            ))}
          </select>
          {errors.cantonId && (
            <div className="invalid-feedback">{t('Home.selectCanton')}</div>
          )}
        </div>
        <div className="form-group col-md-5">
          <select
            {...register('cityId', {
              deps: ['cityId', 'cantonId'],
            })}
            style={{ height: 42 }}
            className={`form-control rounded p-0 px-3 ${errors.cityId ? 'is-invalid' : ''}`}
            defaultValue=""
          >
            <option value="" disabled>
              {t('Home.selectCityOption')}
            </option>
            {filteredOptions?.map((item) => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          {errors.cityId && (
            <div className="invalid-feedback">{t('Home.selectCity')}</div>
          )}
        </div>
        <div className="search col-md-2">
          <button
            type="submit"
            style={{ height: 42 }}
            className={`w-100 btn btn-rounded color1 m-0 ${isSubmitting ? 'pe-none opacity-50' : ''}`}
            disabled={isSubmitting}
          >
            {t('search')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
