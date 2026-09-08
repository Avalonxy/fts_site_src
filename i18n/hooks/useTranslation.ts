'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Locale } from '../config';

import ru from '../locales/ru.json';
import en from '../locales/en.json';
import zh from '../locales/zh.json';
import de from '../locales/de.json';
import es from '../locales/es.json';

const translations = {
  ru,
  en,
  zh,
  de,
  es
};

export function useTranslation() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as Locale) || 'ru';

  const t = useMemo(() => {
    return (key: string, params?: Record<string, string | number>) => {
      const keys = key.split('.');
            
      let value: unknown = translations[locale];
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          value = undefined;
          break;
        }
      }
          
      if (value === undefined && locale !== 'en') {
        value = translations.en;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = (value as Record<string, unknown>)[k];
          } else {
            value = undefined;
            break;
          }
        }
      }
            
      if (value === undefined) {
        return key;
      }
     
      if (typeof value === 'string' && params) {
        return Object.entries(params).reduce((str, [key, val]) => {
          return str.replace(new RegExp(`{${key}}`, 'g'), String(val));
        }, value);
      }

      return value;
    };
  }, [locale]);

  return {
    t,
    locale,
    locales: ['ru', 'en', 'zh', 'de', 'es'] as const
  };
}
