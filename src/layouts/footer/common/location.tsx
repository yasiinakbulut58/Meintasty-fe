import { OurLocation } from '@/constant/constant';

const Location: React.FC = () => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="footer-title">
        <h5>{OurLocation}</h5>
      </div>
      <div className="footer-content">
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5618.008609138327!2d9.505535743942925!3d46.84295542376855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784c711eb6e727f%3A0xa87049ac1fcf007f!2zUmFzY2jDpHJlbnN0cmFzc2UgMywgNzAwMCBDaHVyLCDEsHN2acOncmU!5e0!3m2!1str!2str!4v1733854317215!5m2!1str!2str"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
