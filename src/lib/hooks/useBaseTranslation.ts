import { useSelector } from 'react-redux';
import { useTranslation } from '@/app/i18n/client';
import { RootState } from '@/redux-toolkit/store';

export const useBaseTranslation = () => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const t = useTranslation(i18LangStatus, 'translation');
  return t;
};
