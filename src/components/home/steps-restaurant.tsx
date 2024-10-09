import { FC } from 'react';
import Steps from '@/components/common/steps';
import TitleThree from '@/components/common/title/title-three';
import { Lorem, SuperEasyBooking } from '@/constant/constant';
import { stepsData } from '@/data/home/restaurant/resatuarant-data';
import Img from '@/utils/BackgroundImageRatio';

const StepsRestaurant: FC = () => {
  return (
    <section className="section-b-space process-steps parallax-img mt-5">
      <div className="container">
        <TitleThree
          classTitle={'title-1 detail-title'}
          subTitle={SuperEasyBooking}
          pClass="font-design"
          h2Class="pt-0"
          desc={Lorem}
        />
        <Steps stepsData={stepsData} titleClass="invert-lines" />
      </div>
    </section>
  );
};

export default StepsRestaurant;
