'use client';

import UserDetail from './user-detail';
import { usePathname } from 'next/navigation';
import { useBaseTranslation } from '@/lib/hooks';

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { t } = useBaseTranslation();
  const userTabs = [
    { path: '/profile', label: t('Profile.title') },
    { path: '/orders', label: t('Orders.title') },
    { path: '/cards', label: 'cards & payment' },
    { path: '/security', label: 'security' },
  ];
  return (
    <div className="col-lg-3">
      <div className="pro_sticky_info" data-sticky_column>
        <div className="dashboard-sidebar">
          <UserDetail />
          <div className="faq-tab">
            <ul className="nav nav-tabs" id="top-tab" role="tablist">
              {userTabs.map((tab, index) => (
                <li className="nav-item" key={index}>
                  <a
                    href={`/user${tab.path}`}
                    className={`nav-link ${pathname.includes(tab.path) ? 'active' : ''}`}
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
