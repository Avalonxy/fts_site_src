'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { MobileIcon } from '@/components/icons/ServiceIcons';

export default function MobileDevelopmentPage() {
  const params = useParams();
  const locale = params?.locale as string || 'ru';
  const { t } = useTranslation();

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dusty-black via-dusty-black-light to-dusty-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/services/mobileDevelopment.png"
            alt={String(t('mobileDevelopment.hero.title'))}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('mobileDevelopment.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('mobileDevelopment.hero.subtitle'))}
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-dusty-black mb-6">
                {String(t('mobileDevelopment.features.title'))}
              </h2>
              <p className="text-lg text-dusty-gray mb-6 leading-relaxed">
                {String(t('mobileDevelopment.features.description'))}
              </p>
              <div className="space-y-4">
                {(t('mobileDevelopment.features.items') as string[]).map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-dusty-yellow rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-dusty-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-dusty-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/mobileDevelopment.png"
                alt={String(t('mobileDevelopment.hero.title'))}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Platforms Grid */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-dusty-black mb-8">
              {String(t('mobileDevelopment.platforms.title'))}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(t('mobileDevelopment.platforms.items') as Array<{platform: string, features: string[], description: string}>).map((platform, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-dusty-yellow rounded-lg flex items-center justify-center mx-auto mb-4 text-dusty-black">
                    <MobileIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-dusty-black mb-3">{platform.platform}</h4>
                  <p className="text-dusty-gray mb-4">{platform.description}</p>
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-dusty-black bg-white px-3 py-1 rounded-full inline-block mr-2 mb-2">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-dusty-black mb-8">
              {String(t('mobileDevelopment.process.title'))}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {(t('mobileDevelopment.process.steps') as string[]).map((step: string, index: number) => {
                const stepData = step.split(' - ');
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-dusty-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-dusty-black">{index + 1}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-dusty-black mb-2">{stepData[0]}</h4>
                    <p className="text-dusty-gray text-sm">{stepData[1] || ''}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dusty-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {String(t('mobileDevelopment.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-gray mb-8 max-w-2xl mx-auto">
            {String(t('mobileDevelopment.cta.subtitle'))}
          </p>
          <Link 
            href={getLocalizedPath('/contacts')}
            className="btn btn-primary"
          >
            {String(t('mobileDevelopment.cta.button'))}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
