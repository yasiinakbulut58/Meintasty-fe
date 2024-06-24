'use client';
import Link from 'next/link';
import { useBaseTranslation } from '@/lib/hooks';
import SelectLocation from '../common/select-location';
import { CantonModel } from '@/lib/data';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  ILocationDropdownRefProps,
  LocationDropdown,
} from '../common/select-location/location-dropdown';
import { createRef, useMemo } from 'react';

const schema = z.object({
  cantonId: z.number().int().min(1, 'Please select canton'),
  cityId: z.number().int().min(1, 'Please select city'),
  cityName: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const BannerSearch = ({
  cantonAndCities,
}: {
  cantonAndCities: CantonModel[] | null;
}) => {
  const { t } = useBaseTranslation();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Yönlendirme veya başka bir işlem
  };

  const selectedCanton = watch('cantonId');
  const selectedCity = watch('cityId');
  const cityName = watch('cityName');

  const rootRef = createRef<ILocationDropdownRefProps>(); // like this

  const handleCityNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('cityName', value, {
      shouldValidate: true,
    });
    setValue('cityId', 0, {
      shouldValidate: true,
    });
  };

  const filteredOptions = useMemo(() => {
    const lowerQuery = cityName?.toLowerCase();

    return (
      cantonAndCities
        ?.find((item) => item.id === Number(selectedCanton))
        ?.cities?.filter((item) =>
          item.cityName.toLowerCase().includes(lowerQuery ?? ''),
        )
        .map((item) => ({
          label: item.cityName,
          value: item.cityCode,
        })) || []
    );
  }, [cityName, cantonAndCities, selectedCanton]);

  return (
    <div className="book-table section-b-space single-table p-0">
      <div className="table-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="needs-validation"
          noValidate
        >
          <div className="row w-100">
            <div className="form-group col-md-6">
              <Controller
                name="cantonId"
                control={control}
                render={({ field }) => (
                  <div>
                    <SelectLocation
                      title="Cantons"
                      name="cantonId"
                      className={`${errors.cantonId ? 'is-invalid' : ''}`}
                      placeholder="Select Canton"
                      data={
                        cantonAndCities?.map((item) => ({
                          label: item.cantonName,
                          value: item.id,
                        })) || []
                      }
                      onChanged={(item) => {
                        field.onChange(item?.value);
                        setValue('cityId', 0, {
                          shouldValidate: true,
                        });
                        setValue('cityName', '', {
                          shouldValidate: true,
                        });
                      }}
                    />
                    {errors.cantonId && (
                      <div className="invalid-feedback">
                        Please select canton
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className={`form-control open-select ${errors.cityId ? 'is-invalid' : ''}`}
                autoComplete="off"
                name="cityName"
                value={cityName}
                placeholder="Select City"
                onChange={handleCityNameChange}
                onClick={() => rootRef?.current?.setIsComponentVisible(true)}
              />
              {errors.cityId && (
                <div className="invalid-feedback">Please select a city</div>
              )}
              <LocationDropdown
                ref={rootRef}
                options={filteredOptions || []}
                title="Cities"
                onSelected={(selected) => {
                  setValue('cityName', selected?.label, {
                    shouldValidate: true,
                  });
                  setValue('cityId', Number(selected?.value) ?? null, {
                    shouldValidate: true,
                  });
                  rootRef?.current?.setIsComponentVisible(false);
                }}
              />
            </div>
            <div className="col-md-12 mt-2">
              <button
                type="submit"
                className={`w-100 btn btn-rounded color1 ${isSubmitting ? 'pe-none opacity-50' : ''}`}
                disabled={isSubmitting}
              >
                {t('search')}
              </button>
              {/*  <Link
                href="/restaurants"
                className="btn btn-rounded color1 w-100 m-0"
              >
                {t('search')}
              </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerSearch;
