'use client';

import { usePathname } from 'next/navigation';
import ErrorPage from '@/components/ErrorPage';
import { useTranslation } from '@/i18n/hooks/useTranslation';

export default function NotFound() {
  const pathname = usePathname();
  const locale = (pathname?.split('/')[1]) || 'ru';
  const { t } = useTranslation();

  return (
    <ErrorPage
      code="404"
      title={String(t('common.notFound.title'))}
      description={String(t('common.notFound.description'))}
      backHref={`/${locale}`}
      backLabel={String(t('common.notFound.backHome'))}
      secondaryHref={`/${locale}/contacts`}
      secondaryLabel={String(t('common.notFound.contactSupport'))}
    />
  );
}
