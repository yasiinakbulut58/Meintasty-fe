'use client';
import { FC, useEffect, useState } from 'react';
import { AppDispatch, RootState } from '@/redux-toolkit/store';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from '@/redux-toolkit/restaurant-api';
import CartItem from '../common/cart-item/page';
import { cartItemsData } from '@/data/restaurant/single-page';
import TabDescription from './tab-description';
import SpecialImage from '../common/special-image/page';
import CartEmpty from '../common/cart-empty/page';
import { useBaseTranslation } from '@/lib/hooks';

const MainSinglePage: FC<ISinglePageProps> = ({ side, data, cartItem }) => {
  const { t } = useBaseTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { data: restaurant } = useSelector(
    (state: RootState) => state.restaurant,
  );
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  const tabsTitleData = [
    {
      id: '1',
      title: t('RestaurantDetail.Tab.orderOnline'),
    },
    {
      id: '2',
      title: t('RestaurantDetail.Tab.overview'),
    },
    /* {
      id: '3',
      title: 'gallery',
    },
    {
      id: '6',
      title: 'reviews',
    }, */
  ];
  return (
    <>
      <section className="single-section small-section bg-inner">
        <div className="container">
          <div className="row">
            <div
              className={`col-xl-3 col-lg-4 ${side === 'right' ? 'order-1' : ''}`}
            >
              <div className="sticky-cls-top">
                {cartItem !== 'empty' ? (
                  <CartItem
                    items={cartItemsData}
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                  />
                ) : (
                  <CartEmpty showMenu={showMenu} setShowMenu={setShowMenu} />
                )}
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="description-section tab-section">
                <TabDescription
                  tabsData={tabsTitleData}
                  class1="menu-top"
                  data={data}
                />
              </div>
              <SpecialImage data={restaurant} />
            </div>
          </div>
        </div>
      </section>
      <div className="cart" onClick={() => setShowMenu(!showMenu)}>
        <a href="#javascript:void(0)">
          <i className="fas fa-shopping-cart" />
        </a>
      </div>
    </>
  );
};

export default MainSinglePage;
