import { FC } from 'react';
// import "@/public/assets/scss/color1.scss";
import FaqContent from '@/components/pages/other-pages/faq/page';
import Breadcrumb from '@/components/common/breadcrumb/page';

const Faq: FC = () => {
  return (
    <>
      <Breadcrumb
        title={'home'}
        subTitle={'faq'}
        bannerImg={'/assets/images/inner-bg.jpg'}
      />
      <FaqContent />
    </>
  );
};

export default Faq;
