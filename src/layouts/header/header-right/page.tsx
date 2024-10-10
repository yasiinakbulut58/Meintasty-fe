'use client';

import React from 'react';
import { RightNavMenuItem, languageDropDownData } from '@/constant/menu';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Language from './language';
import { IHeaderRightProps } from './header-right';
import { signOut, useSession } from 'next-auth/react';
import { useBaseTranslation } from '@/lib/hooks';
import { usePathname, useRouter } from 'next/navigation';

const HeaderRight: React.FC<IHeaderRightProps> = ({ userBgClass }) => {
  const { t } = useBaseTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [settingIcon, setSettingIcon] = useState(false);
  const { data: session } = useSession();

  const isUser = !!session?.user;
  return (
    <ul className="header-right">
      {!isUser && (
        <>
          <li className={`${userBgClass && userBgClass}`}>
            <Link href="/auth/login" className="fw-bolder text-white">
              {t('Auth.login')}
            </Link>
          </li>
          <li className={`${userBgClass && userBgClass}`}>
            <Link href="/auth/register" className="fw-bolder text-white">
              {t('Auth.signUp')}
            </Link>
          </li>
        </>
      )}
      {RightNavMenuItem.map((value, i) => (
        <Fragment key={i}>
          {value.title === 'language' && <Language value={value} />}
          {value.title === 'user' && isUser && (
            <>
              <li className={`${userBgClass && userBgClass}`}>
                <Link href="/user/profile">
                  <i className="fas fa-user"></i>
                </Link>
              </li>
              <li className={`${userBgClass && userBgClass} h-33 p-0`}>
                <button
                  type="button"
                  onClick={() => {
                    signOut({ redirect: false });
                    router.push(pathname);
                  }}
                  className="btn fw-bolder text-white"
                >
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </li>
            </>
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
