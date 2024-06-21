import { FC } from 'react';
import FaqContent from '@/components/others/faq/page';
import Breadcrumb from '@/components/common/breadcrumb/page';

const Faq: FC = () => {
  return (
    <>
      <Breadcrumb title={'home'} subTitle={'faq'} />
      <FaqContent />
    </>
  );
};

export default Faq;
