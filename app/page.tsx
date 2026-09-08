import { redirect } from 'next/navigation';
import { detectPreferredLocale } from '@/i18n/detectLocale';

export default async function RootPage() {
  const locale = await detectPreferredLocale();
  redirect(`/${locale}`);
}