import { RestaurantDetailModel } from '@/lib/data';
import Img from '@/utils/BackgroundImageRatio';
import { FC } from 'react';

type Props = {
  data: RestaurantDetailModel;
};
const Banner = ({ data }: Props) => {
  return (
    <section className="breadcrumb-section order-food-section pt-0">
      <Img
        src="/assets/images/restaurant/breadcrumb.jpg"
        className="bg-img img-fluid"
        alt=""
      />
      <div className="breadcrumb-content restaurant-name">
        <div>
          <Img
            src="/assets/images/restaurant/logo.png"
            className="img-fluid"
            alt=""
          />
          <h3>{data.restaurantName}</h3>
          <h6>Fast Food, Cafe, Italian</h6>
          <ul>
            <li>4.5 Rating</li>
            <li>30 mins</li>
            <li>$25 for 2</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
