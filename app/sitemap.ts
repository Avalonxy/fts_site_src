import { MetadataRoute } from 'next';
import { i18n } from '@/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fts77.ru';

const staticPaths = [
  '',
  '/services',
  '/services/web-development',
  '/services/mobile-development',
  '/services/it-consulting',
  '/services/cybersecurity',
  '/services/cloud-solutions',
  '/services/industrial-automation',
  '/services/cryptography',
  '/services/support',
  '/about',
  '/news',
  '/reviews',
  '/contacts',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsIds = await getNewsIds();
  const newsPaths = newsIds.map((id) => `/news/${id}`);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of i18n.locales) {
    for (const path of staticPaths) {
      const url = `${baseUrl}/${locale}${path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === '' || path === '/news' ? 'daily' : 'weekly',
        priority: path === '' ? 1 : path === '/services' ? 0.9 : 0.8,
      });
    }
    for (const path of newsPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }

  return entries;
}

async function getNewsIds(): Promise<number[]> {
  try {
    const ru = await import('@/i18n/locales/ru.json');
    const items = (ru as { news?: { items?: { id: number }[] } }).news?.items ?? [];
    return items.map((n) => n.id);
  } catch {
    return [];
  }
}
