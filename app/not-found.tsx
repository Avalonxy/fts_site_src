'use client';

import { usePathname } from 'next/navigation';
import ErrorPage from '@/components/ErrorPage';
import { i18n } from '@/i18n/config';
import ru from '@/i18n/locales/ru.json';
import en from '@/i18n/locales/en.json';
import zh from '@/i18n/locales/zh.json';
import de from '@/i18n/locales/de.json';
import es from '@/i18n/locales/es.json';

const localeStrings: Record<string, { common: { notFound: { title: string; description: string; backHome: string; contactSupport: string } } }> = {
  ru, en, zh, de, es,
};

export default function GlobalNotFound() {
  const pathname = usePathname();
  const segment = pathname?.split('/')[1] || '';
  const locale = i18n.locales.includes(segment as typeof i18n.locales[number]) ? segment : 'ru';
  const s = localeStrings[locale]?.common?.notFound ?? (ru as typeof localeStrings.ru).common.notFound;

  return (
    <ErrorPage
      code="404"
      title={s.title}
      description={s.description}
      backHref={`/${locale}`}
      backLabel={s.backHome}
      secondaryHref={`/${locale}/contacts`}
      secondaryLabel={s.contactSupport}
    />
  );
}
