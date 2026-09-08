'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { usePathname, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  featured: boolean;
}

export default function NewsArticlePage() {
  const pathname = usePathname();
  const params = useParams();
  const locale = (pathname.split('/')[1] as string) || 'ru';
  const { t } = useTranslation();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  const newsId = parseInt(params.id as string);

  useEffect(() => {
    const newsData = t('news.items') as NewsItem[];
    const item = newsData.find(news => news.id === newsId);
    setNewsItem(item || null);
    setLoading(false);
  }, [newsId, t]);

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-xl">{String(t('common.loading'))}</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-dusty-black mb-4">
              {String(t('news.notFound.title'))}
            </h1>
            <p className="text-gray-600 mb-6">
              {String(t('news.notFound.subtitle'))}
            </p>
            <Link
              href={getLocalizedPath('/news')}
              className="bg-dusty-yellow text-dusty-black px-6 py-3 rounded-lg hover:bg-dusty-yellow-light transition-colors font-medium"
            >
              {String(t('news.backToNews'))}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-dusty-black via-dusty-black-light to-dusty-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-dusty-yellow text-dusty-black px-4 py-2 rounded-full text-sm font-medium">
                {String(t(`news.categories.${newsItem.category}`))}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {newsItem.title}
            </h1>
            <div className="flex items-center justify-center text-dusty-gray">
              <span>{formatDate(newsItem.date)}</span>
              {newsItem.featured && (
                <>
                  <span className="mx-3">•</span>
                  <span className="bg-dusty-yellow text-dusty-black px-3 py-1 rounded-full text-sm font-medium">
                    {String(t('news.featured.featured'))}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="text-xl text-gray-600 mb-8 leading-relaxed">
              {newsItem.excerpt}
            </div>

            <div className="text-gray-800 leading-relaxed whitespace-pre-line">
              {newsItem.content}
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Link
                href={getLocalizedPath('/news')}
                className="inline-flex items-center text-dusty-yellow hover:text-dusty-yellow-light font-medium mb-4 sm:mb-0"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {String(t('news.backToNews'))}
              </Link>
              
              <div className="flex space-x-4">
                <Link
                  href={getLocalizedPath('/services')}
                  className="bg-dusty-yellow text-dusty-black px-6 py-3 rounded-lg hover:bg-dusty-yellow-light transition-colors font-medium"
                >
                  {String(t('news.viewServices'))}
                </Link>
                <Link
                  href={getLocalizedPath('/contacts')}
                  className="border-2 border-dusty-black text-dusty-black px-6 py-3 rounded-lg hover:bg-dusty-black hover:text-white transition-colors font-medium"
                >
                  {String(t('news.contactUs'))}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dusty-black mb-4">
              {String(t('news.related.title'))}
            </h2>
            <p className="text-lg text-dusty-gray">
              {String(t('news.related.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Позже добавить логику для показа связанных новостей */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 text-center">
                <p className="text-gray-600">
                  {String(t('news.related.comingSoon'))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
