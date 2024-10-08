import React, { FC } from 'react';
import Breadcrumb from '@/components/common/breadcrumb/page';
import OurTeamContent from '@/components/others/about-us/our-team';
import AboutUsContent from '@/components/others/about-us/page';
import FactsContent from '@/components/others/about-us/fact';
import Blog from '@/components/others/about-us/blog';

const AboutUs: FC = () => {
  return (
    <>
      <Breadcrumb title={'home'} subTitle={'about us'} />
      <AboutUsContent side="left" />
      <OurTeamContent />
      <FactsContent />
      <Blog />
    </>
  );
};

export default AboutUs;
