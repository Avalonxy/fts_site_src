'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { useParams } from 'next/navigation';

export default function ReviewsPage() {
  const params = useParams();
  const locale = params?.locale as string || 'ru';
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      name: String(t('home.reviews.items.0.name')),
      company: String(t('home.reviews.items.0.company')),
      logo: '/images/companies/fpk-rzd-logo.png',
      text: String(t('home.reviews.items.0.text')),
      rating: Number(t('home.reviews.items.0.rating')),
      photo: '/images/reviews/review-man-04.jpg'
    },
    {
      id: 2,
      name: String(t('home.reviews.items.1.name')),
      company: String(t('home.reviews.items.1.company')),
      logo: '/images/companies/ko-bit-logo.svg',
      text: String(t('home.reviews.items.1.text')),
      rating: Number(t('home.reviews.items.1.rating')),
      photo: '/images/reviews/review-woman-01.jpg'
    },
    {
      id: 3,
      name: String(t('home.reviews.items.2.name')),
      company: String(t('home.reviews.items.2.company')),
      logo: '/images/companies/adrenaline-logo.png',
      text: String(t('home.reviews.items.2.text')),
      rating: Number(t('home.reviews.items.2.rating')),
      photo: '/images/reviews/review-man-06.jpg'
    },
    {
      id: 4,
      name: String(t('home.reviews.items.3.name')),
      company: String(t('home.reviews.items.3.company')),
      logo: '/images/companies/knut-industries-logo.png',
      text: String(t('home.reviews.items.3.text')),
      rating: Number(t('home.reviews.items.3.rating')),
      photo: '/images/reviews/review-man-08.jpg'
    },
    {
      id: 5,
      name: String(t('home.reviews.items.4.name')),
      company: String(t('home.reviews.items.4.company')),
      logo: '/images/companies/utair-logo.png',
      text: String(t('home.reviews.items.4.text')),
      rating: Number(t('home.reviews.items.4.rating')),
      photo: '/images/reviews/review-woman-02.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dusty-black via-dusty-black-light to-dusty-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Future Tech Corp Reviews"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('reviews.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('reviews.hero.subtitle'))}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('reviews.stats.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('reviews.stats.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-dusty-yellow mb-2">98%</div>
              <div className="text-dusty-gray">{String(t('reviews.stats.satisfaction'))}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-dusty-yellow mb-2">50+</div>
              <div className="text-dusty-gray">{String(t('reviews.stats.projects'))}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-dusty-yellow mb-2">25+</div>
              <div className="text-dusty-gray">{String(t('reviews.stats.clients'))}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-dusty-yellow mb-2">4.9</div>
              <div className="text-dusty-gray">{String(t('reviews.stats.rating'))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('reviews.section.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('reviews.section.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.photo}
                      alt={review.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dusty-black mb-1">
                      {review.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-2">
                        <Image
                          src={review.logo}
                          alt={review.company}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-dusty-gray">{review.company}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-dusty-yellow">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-dusty-gray">{String(t('reviews.verified'))}</span>
                </div>
                
                <p className="text-dusty-gray leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dusty-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {String(t('reviews.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-gray mb-8 max-w-2xl mx-auto">
            {String(t('reviews.cta.subtitle'))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`/${locale}/contacts`}
              className="btn btn-primary"
            >
              {String(t('reviews.cta.contact'))}
            </a>
            <a 
              href={`/${locale}/services`}
              className="btn btn-secondary"
            >
              {String(t('reviews.cta.services'))}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
