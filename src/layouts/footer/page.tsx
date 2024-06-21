import { FC } from 'react';
import FooterContent from './common/footer-content';
import CopyRightFooter from './common/copyright-footer';

interface IFooterMainProps {
  footerPlaceCom?: boolean;
}
const FooterMain: FC<IFooterMainProps> = ({ footerPlaceCom }) => {
  return (
    <footer>
      <FooterContent place={footerPlaceCom} />
      <CopyRightFooter />
    </footer>
  );
};

export default FooterMain;
