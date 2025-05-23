'use client';

import { FC, useCallback, useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import Tabs from '@/utils/HOC/tabs/page';
import OrderOnline from '../common/order-online/page';
import Overview from '../common/overview/page';

/* import Review from '../common/review';
import Gallery from '../common/gallery';
import { bannerImageData } from '@/data/restaurant/single-page'; */

const TabDescription: FC<ITabDescriptionProps> = ({
  tabsData,
  data,
  class1,
}) => {
  const [activeTab, setActiveTab] = useState('1');
  const callback = useCallback(
    (tab: string) => {
      setActiveTab(tab);
    },
    [activeTab],
  );

  return (
    <>
      <div className={class1} id="searchBar">
        <div className="container px-0">
          <Tabs callbackActive={callback} data={tabsData} />
        </div>
      </div>
      <div className="description-details">
        <TabContent
          activeTab={activeTab}
          className="tab-content"
          id="pills-tabContent"
        >
          <TabPane tabId="1">
            <OrderOnline data={data} />
          </TabPane>
          <TabPane tabId="2">
            <Overview data={data} />
          </TabPane>
          {/* <TabPane tabId="3">
            <Gallery galleryData={bannerImageData} />
          </TabPane>
          <TabPane tabId="6">
            <Review />
          </TabPane> */}
        </TabContent>
      </div>
    </>
  );
};

export default TabDescription;
