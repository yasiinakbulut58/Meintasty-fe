'use client';
import { ReactNode } from 'react';
import HeaderRight from './header/header-right/page';
import Logo from './header/logo/page';
import CoupenCode from './header/header-right/coupen-code';
import FooterMain from './footer/page';
import TapToTop from './tab-to-top/page';

interface CustomLayoutProps {
  children: ReactNode;
  title?: string;
  logo?: string;
  footerPlace?: boolean;
  userBgClass?: string;
  coupon?: boolean;
  hideFooter?: boolean;
  footerClass?: string;
  loader?: string;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({
  children,
  title,
  logo,
  footerPlace,
  userBgClass,
  coupon,
  hideFooter,
}) => {
  return (
    <>
      <header className={title}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="menu justify-content-between"
                style={{ height: 60 }}
              >
                <Logo logo={logo} />
                {coupon ? (
                  <CoupenCode />
                ) : (
                  <HeaderRight userBgClass={userBgClass} />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      {!hideFooter && <FooterMain footerPlaceCom={footerPlace} />}
      <TapToTop />
    </>
  );
};

export default CustomLayout;
