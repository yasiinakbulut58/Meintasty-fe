import { IFacilityProps } from '@/components/hotels/filters/filter';
import { categoryData } from '@/data/inner-page/page-data';
import { FC, useState } from 'react';

interface ICategoryPageProps {
  value: IRestaurantProps[] | undefined;
  getCategories: Function;
}
const CategoryPage: FC<ICategoryPageProps> = ({ value, getCategories }) => {
  const [category, setCategory] = useState('all');
  const filterClick = (type: string) => {
    setCategory(type);
    if (type === 'all') {
      getCategories(value);
    } else {
      const filtered: IRestaurantProps[] = (value as IRestaurantProps[]).filter(
        (item: IRestaurantProps) => item.category === type,
      );
      getCategories(filtered);
    }
  };

  return (
    <ul>
      {categoryData.map((item: IFacilityProps, index) => (
        <li
          key={index}
          onClick={() => filterClick(item.type)}
          className={category === item.type ? 'active' : ''}
        >
          {item.type}
        </li>
      ))}
    </ul>
  );
};

export default CategoryPage;
