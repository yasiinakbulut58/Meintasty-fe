'use client';
import { RightNavMenuItem, languageDropDownData } from '@/constant/menu';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Language from './language';
import { IHeaderRightProps } from './header-right';

const HeaderRight: React.FC<IHeaderRightProps> = ({ userBgClass }) => {
  const [settingIcon, setSettingIcon] = useState(false);
  const isUser = false;
  return (
    <ul className="header-right">
      {!isUser && (
        <>
          <li className={`${userBgClass && userBgClass}`}>
            <Link href="/auth/login" className="fw-bolder text-white">
              Sign In
            </Link>
          </li>
          <li className={`${userBgClass && userBgClass}`}>
            <Link href="/auth/register" className="fw-bolder text-white">
              Sign Up
            </Link>
          </li>
        </>
      )}
      {RightNavMenuItem.map((value, i) => (
        <Fragment key={i}>
          {value.title === 'language' && <Language value={value} />}
          {value.title === 'user' && isUser && (
            <li className={`${userBgClass && userBgClass}`}>
              <Link href="/pages/other-pages/login">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          )}
          {value.title === 'setting' && (
            <li className="setting">
              <a href="#js" onClick={() => setSettingIcon(!settingIcon)}>
                <i className="fas fa-cog" />
              </a>
              <ul className={`setting-open ${settingIcon ? 'show' : ''} `}>
                <Language value={languageDropDownData} />
              </ul>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default HeaderRight;
