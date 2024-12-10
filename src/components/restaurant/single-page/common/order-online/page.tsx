'use client';
import { useState, useEffect, useRef } from 'react';
import NavSection from './nav-section';
import ListOfItemsPage from './list-items';
import Bites from './bites';
import Deserts from './desert';
import {
  BestSellerItems,
  comboItem,
  pizzaItem,
  sandwichItem,
} from '@/data/restaurant/single-page';
import { RestaurantDetailModel } from '@/lib/data';

interface GroupedCategory {
  categoryId: number;
  categoryName: string;
  items: IClassicMenuProps[];
}

type Props = {
  data: RestaurantDetailModel;
};

const OrderOnline = ({ data }: Props) => {
  const [scroll, setScroll] = useState(false);
  const [noScroll, setNoScroll] = useState(true);

  const stickyDivRef = useRef<HTMLDivElement | null>(null);
  const [divHeight, setDivHeight] = useState<number>(0);

  // Get the height of the div on mount
  useEffect(() => {
    if (stickyDivRef.current) {
      setDivHeight(stickyDivRef.current.offsetHeight);
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 757) {
        setNoScroll(true);
      } else if (window.scrollY > 757 && window.scrollY <= divHeight) {
        setScroll(true);
        setNoScroll(false);
      } else {
        setScroll(false);
        setNoScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [divHeight]);

  const orderLinks = Array.from(
    new Map(
      data?.menuList.map((item) => [
        item.categoryId,
        { href: `#${item.categoryId}`, label: item.categoryName },
      ]),
    ).values(),
  );

  const groupedCategories = Object.values(
    data?.menuList.reduce<Record<number, GroupedCategory>>((acc, item) => {
      if (!acc[item.categoryId]) {
        acc[item.categoryId] = {
          categoryId: item.categoryId,
          categoryName: item.categoryName,
          items: [],
        };
      }
      acc[item.categoryId].items.push({
        name: item.menuName,
        label: item.categoryName.toLowerCase(),
        description: item.menuContent,
        price: parseFloat(item.menuPrice.replace(',', '.')),
        customized: false,
      });
      return acc;
    }, {}),
  );

  return (
    <div className="menu-part tab-pane p-0" id="order">
      <div className="">
        <div className="container p-0" data-sticky_parent>
          <div className="row m-0">
            <div className="col-xl-3 col-lg-4 d-lg-block d-none p-0">
              <div
                className={`product_img_scroll w-auto ${noScroll ? '' : scroll ? 'is_stuck' : 'is_not_stuck'}`}
              >
                <NavSection links={orderLinks} />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 p-0">
              <div
                className="pro_sticky_info"
                ref={stickyDivRef}
                data-sticky_column
              >
                <div data-spy="scroll" data-bs-target="#order-menu">
                  <div className="order-menu-section">
                    {groupedCategories?.map((item) => (
                      <ListOfItemsPage
                        key={item.categoryId}
                        items={item.items}
                        navId={item.categoryId?.toString()}
                        title={item.categoryName}
                      />
                    ))}
                    {/* <ListOfItemsPage
                      items={BestSellerItems}
                      navId="bestseller"
                      title="bestseller"
                    />
                    <Bites />
                    <ListOfItemsPage
                      items={sandwichItem}
                      navId="sandwich"
                      title="sandwich"
                    />
                    <ListOfItemsPage
                      items={pizzaItem}
                      navId="pizza"
                      title="pizza"
                    />
                    <ListOfItemsPage
                      items={comboItem}
                      navId="combo"
                      title="combo"
                    /> */}
                    {/* <Deserts /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
