'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ErrorPage from '@/components/ErrorPage';
import { i18n } from '@/i18n/config';
import ru from '@/i18n/locales/ru.json';
import en from '@/i18n/locales/en.json';
import zh from '@/i18n/locales/zh.json';
import de from '@/i18n/locales/de.json';
import es from '@/i18n/locales/es.json';
import './globals.css';

const localeStrings: Record<string, { common: { error500: { title: string; description: string; tryAgain: string; backHome: string; contactSupport: string } } }> = {
  ru, en, zh, de, es,
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const segment = pathname?.split('/')[1] || '';
  const locale = i18n.locales.includes(segment as (typeof i18n.locales)[number]) ? segment : 'ru';
  const s = localeStrings[locale]?.common?.error500 ?? (ru as typeof localeStrings.ru).common.error500;

  useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <ErrorPage
          code="500"
          title={s.title}
          description={s.description}
          backHref={`/${locale}`}
          backLabel={s.backHome}
          secondaryHref={`/${locale}/contacts`}
          secondaryLabel={s.contactSupport}
          onRetry={reset}
          retryLabel={s.tryAgain}
        />
      </body>
    </html>
  );
}
