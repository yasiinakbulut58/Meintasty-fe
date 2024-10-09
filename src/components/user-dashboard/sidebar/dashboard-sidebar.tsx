'use client';

import { userTabs } from '@/data/pages/all-page';
import UserDetail from './user-detail';
import { usePathname } from 'next/navigation';

const DashboardSidebar = () => {
  const pathname = usePathname();
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
                    href={`/user/${tab.id}`}
                    className={`nav-link ${pathname.includes(tab.id) ? 'active' : ''}`}
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
