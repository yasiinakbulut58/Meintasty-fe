import { ContactUs } from '@/constant/constant';
import Image from 'next/image';

const ContactUsComponent: React.FC = () => {
  return (
    <div className="col-xl-2 col-md-6 order-cls">
      <div className="footer-title mobile-title">
        <h5>{ContactUs}</h5>
      </div>
      <div className="footer-content">
        <div className="contact-detail">
          <div className="footer-logo">
            <a href="/">
              <Image
                src="/assets/images/icon/footer-logo.png"
                alt=""
                className="img-fluid"
                width={139}
                height={53}
              />
            </a>
          </div>
          <p>Marketing</p>
          <ul className="contact-list">
            <li>
              <i className="fas fa-phone-alt"></i> 076 - 323 - 3242
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> 076 - 588 - 3242
            </li>
            {/*  <li>
              <i className="fas fa-map-marker-alt"></i> 7000-Chur,
              Raschärenstrasse 3
            </li> */}
            <li className="text-lowercase">
              <i className="fas fa-envelope"></i> info@meintasty.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
