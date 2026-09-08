'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { usePathname } from 'next/navigation';
import { WebDevIcon, MobileIcon, ConsultingIcon, SecurityIcon, CloudIcon, IndustrialIcon, CryptoIcon, SupportIcon } from '@/components/icons/ServiceIcons';
import { JSX } from 'react';



// Конфигурация сервисов
const services = [
  { id: 1, title: 'webDevelopment', icon: WebDevIcon, link: 'services/web-development', image: '/images/services/webDevelopment.jpg' },
  { id: 2, title: 'mobileDevelopment', icon: MobileIcon, link: 'services/mobile-development', image: '/images/services/mobileDevelopment.png' },
  { id: 3, title: 'itConsulting', icon: ConsultingIcon, link: 'services/it-consulting', image: '/images/services/itConsulting.jpg' },
  { id: 4, title: 'cybersecurity', icon: SecurityIcon, link: 'services/cybersecurity', image: '/images/services/cybersecurity.jpg' },
  { id: 5, title: 'cloudSolutions', icon: CloudIcon, link: 'services/cloud-solutions', image: '/images/services/cloudSolutions.jpg' },
  { id: 6, title: 'industrialAutomation', icon: IndustrialIcon, link: 'services/industrial-automation', image: '/images/services/industrialAutomation.jpg' },
  { id: 7, title: 'cryptography', icon: CryptoIcon, link: 'services/cryptography', image: '/images/services/cryptography.jpg' },
  { id: 8, title: 'support', icon: SupportIcon, link: 'services/support', image: '/images/services/support.jpg' }
];

export default function HomePage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as string) || 'ru';
  const { t } = useTranslation();

  const getLocalizedPath = (path: string) => {
    // Если путь уже содержит /services, не добавляем его повторно
    if (path.startsWith('services/')) {
      return `/${locale}/${path}`;
    }
    return `/${locale}${path}`;
  };

  // Конфигурация отзывов
  const reviewConfig = [
    { id: 1, logo: '/images/companies/fpk-rzd-logo.png', photo: '/images/reviews/review-man-04.jpg' },
    { id: 2, logo: '/images/companies/ko-bit-logo.svg', photo: '/images/reviews/review-woman-01.jpg' },
    { id: 3, logo: '/images/companies/adrenaline-logo.png', photo: '/images/reviews/review-man-06.jpg' },
    { id: 4, logo: '/images/companies/knut-industries-logo.png', photo: '/images/reviews/review-woman-02.jpg' },
    { id: 5, logo: '/images/companies/utair-logo.png', photo: '/images/reviews/review-woman-03.jpg' }
  ];

  const reviews = reviewConfig.map((config, index) => ({
    ...config,
    name: String(t(`home.reviews.items.${index}.name`)),
    company: String(t(`home.reviews.items.${index}.company`)),
    text: String(t(`home.reviews.items.${index}.text`)),
    rating: Number(t(`home.reviews.items.${index}.rating`))
  }));

  // Показываем первые 3 отзыва
  const visibleReviews = reviews.slice(0, 3);

  // Показываем первые 4 услуги (без рандома для стабильности)
  const visibleServices = services.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dusty-black via-dusty-black-light to-dusty-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Future Tech Corp Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-dusty-yellow text-dusty-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {String(t('home.hero.tag'))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('home.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('home.hero.subtitle'))}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={getLocalizedPath('/contacts')} 
                className="btn btn-primary btn-equal"
              >
                {String(t('home.hero.ctaPrimary'))}
              </Link>
              <Link 
                href={getLocalizedPath('/services')} 
                className="btn btn-secondary btn-equal"
              >
                {String(t('home.hero.ctaSecondary'))}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('home.services.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('home.services.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleServices.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-36 w-full">
                    <Image
                    src={service.image as string}
                    alt={String(t(`home.services.items.${service.title}.title`))}
                      fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>
                <div className="p-8 text-center flex flex-col flex-1">
                  <div className="w-12 h-12 bg-dusty-yellow rounded-lg flex items-center justify-center mx-auto mb-4 text-dusty-black">
                  {(() => {
                    const Icon = service.icon as (props: { className?: string }) => JSX.Element;
                    return <Icon className="w-7 h-7" />;
                  })()}
                  </div>
                  <h3 className="text-xl font-semibold text-dusty-black mb-4">
                    {String(t(`home.services.items.${service.title}.title`))}
                  </h3>
                  <p className="text-dusty-gray mb-6 leading-relaxed flex-grow">
                    {String(t(`home.services.items.${service.title}.description`))}
                  </p>
                  <Link 
                    href={getLocalizedPath(service.link)}
                    className="inline-block bg-dusty-yellow text-dusty-black px-6 py-3 rounded-lg hover:bg-dusty-yellow-light transition-colors font-semibold mt-auto"
                  >
                    {String(t('common.buttons.learnMore'))}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              href={getLocalizedPath('/services')}
              className="btn btn-primary"
            >
              {String(t('common.buttons.allServices'))}
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('home.reviews.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('home.reviews.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {visibleReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-8 shadow-sm">
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
                </div>
                
                <p className="text-dusty-gray mb-6 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href={getLocalizedPath('/reviews')}
              className="btn btn-primary"
            >
              {String(t('home.reviews.viewAll'))}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dusty-yellow text-dusty-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {String(t('home.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-black mb-8 max-w-2xl mx-auto opacity-80">
            {String(t('home.cta.subtitle'))}
          </p>
          <Link 
            href={getLocalizedPath('/contacts')}
            className="btn btn-dark"
          >
            {String(t('home.cta.button'))}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
