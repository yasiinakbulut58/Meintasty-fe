import { FC } from 'react';
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from '@/components/common/breadcrumb/page';
import OurTeamContent from '@/components/pages/other-pages/about-us/our-team';
import AboutUsContent from '@/components/pages/other-pages/about-us/page';
import FactsContent from '@/components/pages/other-pages/about-us/fact';
import Blog from '@/components/pages/other-pages/about-us/blog';

const AboutUs: FC = () => {
  return (
    <>
      <Breadcrumb
        title={'home'}
        subTitle={'about us'}
        bannerImg={'/assets/images/inner-bg.jpg'}
      />
      <AboutUsContent side="left" />
      <OurTeamContent />
      <FactsContent />
      <Blog />
    </>
  );
};

export default AboutUs;
