import Link from 'next/link';
import { useBaseTranslation } from '@/lib/hooks';

const AboutComponent: React.FC = () => {
  const { t } = useBaseTranslation();
  return (
    <div className="col-xl-2 col-md-3">
      <div className="footer-space">
        <div className="footer-title">
          <h5>{t('Footer.about')}</h5>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li>
                <Link href="/about-us">{t('Footer.aboutUs')}</Link>
              </li>
              <li>
                <Link href="/faq">{t('Footer.faq')}</Link>
              </li>
              <li>
                <Link href="/auth/login">{t('Auth.login')}</Link>
              </li>
              <li>
                <Link href="/auth/register">{t('Auth.signUp')}</Link>
              </li>
              {/* <li>
                <Link href="/user-dashboard">terms & co.</Link>
              </li>
              <li>
                <Link href="/user-dashboard">privacy</Link>
              </li> */}
              {/* <li>
                <Link href="https://support.pixelstrap.com/">support</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
