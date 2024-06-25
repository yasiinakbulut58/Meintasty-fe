import { RestaurantDetailModel } from '@/lib/data';
import { FC } from 'react';
type Props = {
  data: RestaurantDetailModel;
};
const Overview = ({ data }: Props) => {
  return (
    <div className="menu-part about tab-pane" id="overview">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="about-sec">
              <h6>Phone number: {data.phoneNumber}</h6>
            </div>
            <div className="about-sec">
              <h6>cuisine</h6>
              <ul>
                <li>Fast Food</li>
                <li>cafe</li>
                <li>italian</li>
              </ul>
            </div>
            <div className="about-sec">
              <h6>opening hours</h6>
              <ul>
                <li>
                  {data.workDayFrom} to {data.workDayTo}: {data.workHourFrom}{' '}
                  a.m. to {data.workHourTo} p.m.
                </li>
                <li>Saturday & Sunday: 10.00 a.m. to 12.00 p.m.</li>
              </ul>
            </div>
            <div className="about-sec">
              <h6>address</h6>
              <ul>
                {data?.addressList?.map((item) => (
                  <li key={item.addressId}>{item.addressText}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-sec mt-sm-0 mt-2">
              <h6>facility</h6>
              <ul>
                <li>card accepted</li>
                <li>parking availble</li>
                <li>banquet area</li>
                <li>home delivery</li>
                <li>table booking</li>
                <li>available for events</li>
                <li>game zone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
