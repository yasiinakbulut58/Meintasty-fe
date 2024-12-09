'use client';
import { FC } from 'react';
import Slider from 'react-slick';
import Img from '@/utils/BackgroundImageRatio';
import Link from 'next/link';

const TotalItemSlider: FC<ITotalSliderProps> = ({ slideData }) => {
  const count = slideData.length ?? 0;
  const slide6 = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: count >= 6 ? 6 : count,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: count >= 5 ? 5 : count,
          slidesToScroll: count >= 5 ? 5 : count,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: count >= 4 ? 4 : count,
          slidesToScroll: count >= 4 ? 4 : count,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: count >= 3 ? 3 : count,
          slidesToScroll: count >= 3 ? 3 : count,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: count >= 2 ? 2 : count,
          slidesToScroll: count >= 2 ? 2 : count,
        },
      },
    ],
  };

  return (
    <Slider {...slide6}>
      {slideData.map((item) => (
        <div className="category-block" key={item.id}>
          <a href="#" tabIndex={0}>
            <div className="category-image">
              <Img src={item.img} className="img-fluid bg-img" alt="" />
            </div>
          </a>
          <div className="category-details">
            <Link href="/about-us" tabIndex={0}>
              <h3>{item.name}</h3>
            </Link>
            <h6>{item.title}</h6>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TotalItemSlider;
