'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { usePathname } from 'next/navigation';
import { WebDevIcon, MobileIcon, ConsultingIcon, SecurityIcon, CloudIcon, IndustrialIcon, CryptoIcon, SupportIcon } from '@/components/icons/ServiceIcons';
import { JSX } from 'react';

// Данные сервисов - можно вынести в отдельный конфиг файл или использовать из словарей
const serviceConfig = [
  { title: 'webDevelopment', icon: WebDevIcon, link: 'web-development', image: '/images/services/webDevelopment.jpg' },
  { title: 'mobileDevelopment', icon: MobileIcon, link: 'mobile-development', image: '/images/services/mobileDevelopment.png' },
  { title: 'itConsulting', icon: ConsultingIcon, link: 'it-consulting', image: '/images/services/itConsulting.jpg' },
  { title: 'cybersecurity', icon: SecurityIcon, link: 'cybersecurity', image: '/images/services/cybersecurity.jpg' },
  { title: 'cloudSolutions', icon: CloudIcon, link: 'cloud-solutions', image: '/images/services/cloudSolutions.jpg' },
  { title: 'industrialAutomation', icon: IndustrialIcon, link: 'industrial-automation', image: '/images/services/industrialAutomation.jpg' },
  { title: 'cryptography', icon: CryptoIcon, link: 'cryptography', image: '/images/services/cryptography.jpg' },
  { title: 'support', icon: SupportIcon, link: 'support', image: '/images/services/support.jpg' }
];

export default function ServicesPage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as string) || 'ru';
  const { t } = useTranslation();

  const getLocalizedPath = (path: string) => {
    // Убираем лишние слеши в начале пути
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${locale}/services/${cleanPath}`;
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
            alt="Future Tech Corp Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('mainServices.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('mainServices.hero.subtitle'))}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {serviceConfig.map((service, index) => (
               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <Link href={getLocalizedPath(service.link)} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={t(`home.services.items.${service.title}.title`) as string}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-dusty-yellow rounded-lg flex items-center justify-center mr-4 text-dusty-black">
                        {(() => {
                          const Icon = service.icon as (props: { className?: string }) => JSX.Element;
                          return <Icon className="w-7 h-7" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold text-dusty-black">
                        {t(`home.services.items.${service.title}.title`) as string}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {t(`home.services.items.${service.title}.description`) as string}
                    </p>
                    <div className="text-dusty-yellow font-semibold">
                      {t('common.buttons.learnMore') as string} →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dusty-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {String(t('mainServices.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-gray mb-8 max-w-2xl mx-auto">
            {String(t('mainServices.cta.subtitle'))}
          </p>
          <Link 
            href={`/${locale}/contacts`}
            className="btn btn-primary"
          >
            {String(t('mainServices.cta.button'))}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
