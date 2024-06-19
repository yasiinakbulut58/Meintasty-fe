'use client';
import { ReactNode } from 'react';
import HeaderRight from './header/header-right/page';
import Logo from './header/logo/page';
import Sidebar from './header/menus/page';
import CoupenCode from './header/header-right/coupen-code';
import FooterMain from './footer/page';
import TapToTop from './tab-to-top/page';

interface CustomLayoutProps {
  children: ReactNode;
  title?: string;
  logo?: string;
  footerPlace?: boolean;
  userBgClass?: string;
  footer?: string;
  coupon?: boolean;
  hideFooter?: boolean;
  footerClass?: string;
  loader?: string;
}
const LOADER_TIMEOUT = 1000;
const CustomLayout: React.FC<CustomLayoutProps> = ({
  children,
  title,
  logo,
  footerPlace,
  userBgClass,
  footer,
  coupon,
  hideFooter,
}) => {
  return (
    <>
      <header className={title}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="menu">
                <Logo logo={logo} />
                <Sidebar />
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
      {!hideFooter && (
        <FooterMain footerType={footer} footerPlaceCom={footerPlace} />
      )}
      <TapToTop />
    </>
  );
};

export default CustomLayout;
