import PriceRange from '@/components/hotels/filters/price-range';
import MemoizedStarCategoryFilter from '@/components/hotels/filters/star-category';
import MemorizedCuisinesFilter from '@/components/restaurant/filters/cuisines-filter';
import MemoizedDeliveryFilter from '@/components/restaurant/filters/deliver-filter';
import MemoizedPopularFoodFilter from '@/components/restaurant/filters/popular-filter';

export function renderFiltersByType(
  type: string | undefined,
  minPrice: IPriceProps | null,
  maxPrice: IPriceProps | null,
) {
  switch (type) {
    case 'restaurant':
      return (
        <>
          <MemoizedPopularFoodFilter />
          <MemorizedCuisinesFilter />
          <MemoizedStarCategoryFilter />
          <PriceRange min={minPrice?.price} max={maxPrice?.price} />
          <MemoizedDeliveryFilter />
        </>
      );
    default:
      return null;
  }
}
