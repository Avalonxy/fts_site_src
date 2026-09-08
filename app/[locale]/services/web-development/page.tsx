'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { WebDevIcon } from '@/components/icons/ServiceIcons';

export default function WebDevelopmentPage() {
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
            src="/images/services/webDevelopment.jpg"
            alt={String(t('webDevelopment.hero.title'))}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('webDevelopment.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('webDevelopment.hero.subtitle'))}
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
                {String(t('webDevelopment.features.title'))}
              </h2>
              <p className="text-lg text-dusty-gray mb-6 leading-relaxed">
                {String(t('webDevelopment.features.description'))}
              </p>
              <div className="space-y-4">
                {(t('webDevelopment.features.items') as string[]).map((feature: string, index: number) => (
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
                src="/images/services/webDevelopment.jpg"
                alt={String(t('webDevelopment.hero.title'))}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-dusty-black mb-8">
              {String(t('webDevelopment.technologies.title'))}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'React' },
                { name: 'Node.js' },
                { name: 'Python' },
                { name: 'Vue.js' },
                { name: 'TypeScript' },
                { name: 'PostgreSQL' },
                { name: 'Docker' },
                { name: 'AWS/Azure' }
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-dusty-yellow rounded-md flex items-center justify-center mx-auto mb-2 text-dusty-black">
                    <WebDevIcon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-medium text-dusty-black">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-dusty-black mb-8">
              {String(t('webDevelopment.process.title'))}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {(t('webDevelopment.process.steps') as string[]).map((step: string, index: number) => {
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
            {String(t('webDevelopment.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-gray mb-8 max-w-2xl mx-auto">
            {String(t('webDevelopment.cta.subtitle'))}
          </p>
          <Link 
            href={getLocalizedPath('/contacts')}
            className="btn btn-primary"
          >
            {String(t('webDevelopment.cta.button'))}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
