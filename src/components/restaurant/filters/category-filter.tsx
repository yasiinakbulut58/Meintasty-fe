import { ICategory } from '@/lib/data';
import { useBaseTranslation } from '@/lib/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, ChangeEvent, memo } from 'react';

const CategoryFilter: React.FC<{ categories?: ICategory[] }> = ({
  categories,
}) => {
  const { t } = useBaseTranslation();
  const [show, setShow] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoriesFromParams = searchParams.get('categories')?.split(',') || [];

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    let updatedCategories = categoriesFromParams;

    if (isChecked) {
      updatedCategories = [...updatedCategories, value];
    } else {
      updatedCategories = updatedCategories.filter((item) => item !== value);
    }

    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.delete('page');
    if (updatedCategories.length > 0) {
      updatedSearchParams.set('categories', updatedCategories.join(','));
    } else {
      updatedSearchParams.delete('categories');
    }

    router.push(`?${updatedSearchParams.toString()}`);
  };

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className={`collection-collapse-block ${show ? 'open' : ''}`}>
        <h6 className="collapse-block-title">
          {t('Restaurants.Filter.categories')}
        </h6>
        <div
          className={`collection-collapse-block-content ${!show ? 'd-none' : ''}`}
        >
          <div className="collection-brand-filter">
            {categories?.map((data, index) => {
              return (
                <div
                  className="form-check collection-filter-checkbox"
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={data.id?.toString()}
                    value={data.id?.toString()}
                    checked={categoriesFromParams.includes(data.id?.toString())}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={data.id?.toString()}
                  >
                    {data.categoryName}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemorizedCategoryFilter = memo(CategoryFilter);
export default MemorizedCategoryFilter;
