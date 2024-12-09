'use client';
import { FC } from 'react';
import Slider from 'react-slick';
import Img from '@/utils/BackgroundImageRatio';
import Link from 'next/link';

const slide6 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const InstaSlider: FC<IInstaSliderProps> = ({ instagramData }) => {
  return (
    <div className="slide-6 no-arrow">
      <Slider {...slide6}>
        {instagramData.map((image: any, index: number) => (
          <div key={index}>
            <Link href="/pages/portfolio/grid-2">
              <div className="instagram-box">
                <Img src={image.src} alt="" className="img-fluid bg-img" />
                <div className="overlay">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstaSlider;
