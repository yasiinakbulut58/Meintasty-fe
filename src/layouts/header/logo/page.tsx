import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC<ILogoProps> = ({ logo }) => {
  return (
    <div className="brand-logo">
      <Link href={`/`}>
        <Image
          src={'/assets/images/icon/footer-logo.png'}
          alt="Meintasty Logo"
          className={`img-fluid ${logo !== 'dark' ? 'ed' : ''}`}
          width={100}
          height={140}
        />
      </Link>
    </div>
  );
};

export default Logo;
