'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ErrorPage from '@/components/ErrorPage';
import { useTranslation } from '@/i18n/hooks/useTranslation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const locale = (pathname?.split('/')[1]) || 'ru';
  const { t } = useTranslation();

  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <ErrorPage
      code="500"
      title={String(t('common.error500.title'))}
      description={String(t('common.error500.description'))}
      backHref={`/${locale}`}
      backLabel={String(t('common.error500.backHome'))}
      secondaryHref={`/${locale}/contacts`}
      secondaryLabel={String(t('common.error500.contactSupport'))}
      onRetry={reset}
      retryLabel={String(t('common.error500.tryAgain'))}
    />
  );
}
