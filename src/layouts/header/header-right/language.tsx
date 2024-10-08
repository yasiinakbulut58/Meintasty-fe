'use client';
import { useTranslation } from '@/app/i18n/client';
import { fallbackLng, languages } from '@/app/i18n/settings';
import { useLang } from '@/components/providers/LangProvider';
import { setLanguage } from '@/redux-toolkit/reducers/language';
import { RootState } from '@/redux-toolkit/store';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Language: React.FC<ILanguageProps> = ({ value }) => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const { i18n } = useTranslation(i18LangStatus);
  const { lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const changeLng = (lng: string) => {
    dispatch(setLanguage(lng));
    const languageCodeRegex = /^\/[a-z]{2}(\/|$)/;
    const updatedPath = pathname.replace(languageCodeRegex, `/${lng}$1`);
    const newPath =
      lng !== fallbackLng && updatedPath.includes(lng)
        ? updatedPath
        : `/${lng}${updatedPath}`;

    router.push(newPath);
  };

  return (
    <li className="front-setting">
      <select
        value={lang}
        onChange={(e) => {
          changeLng(e.target.value);
          i18n.changeLanguage(e.target.value);
        }}
      >
        {value?.option?.map((elem, index) => {
          return (
            <option key={index} value={elem.lang}>
              {elem.language}
            </option>
          );
        })}
      </select>
    </li>
  );
};

export default Language;
