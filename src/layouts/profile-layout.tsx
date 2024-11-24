'use client';
import React, { ReactNode } from 'react';
import Breadcrumb from '@/components/common/breadcrumb/page';
import DashboardSidebar from '@/components/user-dashboard/sidebar/dashboard-sidebar';
import { useBaseTranslation } from '@/lib/hooks';

interface ProfileLayoutProps {
  children: ReactNode;
  subTitle: string;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  children,
  subTitle,
}) => {
  const { t } = useBaseTranslation();
  return (
    <>
      <Breadcrumb title={t('Common.user')} subTitle={subTitle} />
      <section
        className="small-section dashboard-section bg-inner"
        data-sticky_parent
      >
        <div className="container">
          <div className="row">
            <DashboardSidebar />
            <div className="col-lg-9">
              <div className="product_img_scroll" data-sticky_column>
                <div className="faq-content tab-content" id="top-tabContent">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileLayout;
