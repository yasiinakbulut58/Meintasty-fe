import { FC } from 'react';

const GoogleMapComponent: FC = () => {
  return (
    <iframe
      style={{ height: '100%', width: '100%' }}
      className="map"
      id="map"
      title="realestate location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.3023916650966!2d36.560163315364925!3d39.791979979434484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e4058cccb99f57%3A0xc29d6ec5c04b74da!2sSivas%20City%2C%20Sivas%2C%20Turkey!5e0!3m2!1sen!2sus!4v1624244377301!5m2!1sen!2sus"
      allowFullScreen
    ></iframe>
  );
};

export default GoogleMapComponent;
