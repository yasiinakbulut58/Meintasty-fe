import { RestaurantDetailModel } from '@/lib/data';
import { useBaseTranslation } from '@/lib/hooks';

type Props = {
  data: RestaurantDetailModel;
};

const Overview = ({ data }: Props) => {
  const { t } = useBaseTranslation();

  return (
    <div className="menu-part about tab-pane" id="overview">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="about-sec">
              <h6>
                {t('RestaurantDetail.Overview.phoneNumber')}: {data.phoneNumber}
              </h6>
            </div>
            <div className="about-sec">
              <h6>{t('RestaurantDetail.Overview.cuisine')}</h6>
              <ul>
                <li>Fast Food</li>
                <li>cafe</li>
                <li>italian</li>
              </ul>
            </div>
            <div className="about-sec">
              <h6>{t('RestaurantDetail.Overview.openingHours')}</h6>
              <ul>
                <li>
                  {data.workDayFrom} - {data.workDayTo}: {data.workHourFrom} -{' '}
                  {data.workHourTo}
                </li>
              </ul>
            </div>
            <div className="about-sec">
              <h6>{t('RestaurantDetail.Overview.address')}</h6>
              <ul>
                {data?.addressList?.map((item) => (
                  <li key={item.addressId}>{item.addressText}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-sec mt-sm-0 mt-2">
              <h6>{t('RestaurantDetail.Overview.facility')}</h6>
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
