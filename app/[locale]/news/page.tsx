'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


export default function NewsPage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as string) || 'ru';
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleNews, setVisibleNews] = useState(6);

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

  const newsData = t('news.items') as Array<{
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    featured: boolean;
  }>;

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured).slice(0, visibleNews);

  const loadMore = () => {
    setVisibleNews(prev => prev + 6);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dusty-black via-dusty-black-light to-dusty-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt={String(t('news.hero.title'))}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('news.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('news.hero.subtitle'))}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(t('news.categories') as Record<string, string>).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === key
                    ? 'bg-dusty-yellow text-dusty-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {String(value)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dusty-black mb-4">
                {String(t('news.featured.title'))}
              </h2>
              <p className="text-lg text-dusty-gray">
                {String(t('news.featured.subtitle'))}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-dusty-yellow text-dusty-black px-3 py-1 rounded-full text-sm font-medium">
                        {String(t('news.featured.featured'))}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-dusty-gray mb-3">
                      <span>{formatDate(news.date)}</span>
                      <span className="mx-2">•</span>
                      <span className="capitalize">{String(t(`news.categories.${news.category}`))}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dusty-black mb-3">
                      {news.title}
                    </h3>
                    <p className="text-dusty-gray mb-4">
                      {news.excerpt}
                    </p>
                    <Link
                      href={`/${locale}/news/${news.id}`}
                      className="inline-flex items-center text-dusty-yellow hover:text-dusty-yellow-light font-medium"
                    >
                      {String(t('news.readMore'))}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-dusty-gray mb-3">
                    <span>{formatDate(news.date)}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{String(t(`news.categories.${news.category}`))}</span>
                  </div>
                  <h3 className="text-lg font-bold text-dusty-black mb-3">
                    {news.title}
                  </h3>
                  <p className="text-dusty-gray mb-4">
                    {news.excerpt}
                  </p>
                  <Link
                    href={`/${locale}/news/${news.id}`}
                    className="inline-flex items-center text-dusty-yellow hover:text-dusty-yellow-light font-medium"
                  >
                    {String(t('news.readMore'))}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {visibleNews < filteredNews.filter(news => !news.featured).length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="bg-dusty-yellow text-dusty-black px-8 py-3 rounded-lg hover:bg-dusty-yellow-light transition-colors font-medium"
              >
                {String(t('news.loadMore'))}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-dusty-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            {String(t('news.newsletter.title'))}
          </h2>
          <p className="text-xl text-dusty-gray mb-8">
            {String(t('news.newsletter.subtitle'))}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={String(t('news.newsletter.placeholder'))}
              className="flex-1 px-4 py-3 rounded-lg text-dusty-black focus:outline-none focus:ring-2 focus:ring-dusty-yellow"
            />
            <button
              type="submit"
              className="bg-dusty-yellow text-dusty-black px-6 py-3 rounded-lg hover:bg-dusty-yellow-light transition-colors font-medium"
            >
              {String(t('news.newsletter.subscribe'))}
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-6">
            {String(t('news.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-gray mb-8 max-w-2xl mx-auto">
            {String(t('news.cta.subtitle'))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalizedPath('/contacts')}
              className="bg-dusty-yellow text-dusty-black px-8 py-4 rounded-lg hover:bg-dusty-yellow-light transition-colors text-lg font-semibold"
            >
              {String(t('news.cta.contact'))}
            </Link>
            <Link
              href={getLocalizedPath('/services')}
              className="border-2 border-dusty-black text-dusty-black px-8 py-4 rounded-lg hover:bg-dusty-black hover:text-white transition-colors text-lg font-semibold"
            >
              {String(t('news.cta.services'))}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
