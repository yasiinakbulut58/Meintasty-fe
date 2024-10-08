'use client';

import { fallbackLng } from '@/app/i18n/settings';
import React, { createContext, useContext, PropsWithChildren } from 'react';

const LangContext = createContext({ lang: fallbackLng });

export const useLang = () => {
  return useContext(LangContext);
};

export const LangProvider = ({
  children,
  initialLang,
}: PropsWithChildren<{ initialLang: string }>) => {
  return (
    <LangContext.Provider value={{ lang: initialLang }}>
      {children}
    </LangContext.Provider>
  );
};
