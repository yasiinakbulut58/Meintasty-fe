import MemoizedStarCategoryFilter from '@/components/hotels/filters/star-category';
import MemorizedCuisinesFilter from '@/components/restaurant/filters/cuisines-filter';
import MemoizedDeliveryFilter from '@/components/restaurant/filters/deliver-filter';
import MemoizedPopularFoodFilter from '@/components/restaurant/filters/popular-filter';

export function renderFiltersByType(type: string | undefined) {
  switch (type) {
    case 'restaurant':
      return (
        <>
          <MemoizedPopularFoodFilter />
          <MemorizedCuisinesFilter />
          <MemoizedStarCategoryFilter />
          <MemoizedDeliveryFilter />
        </>
      );
    default:
      return null;
  }
}
