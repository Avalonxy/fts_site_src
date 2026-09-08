'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { HeadsetIcon, ChartMonitorIcon, WrenchIcon } from '@/components/icons/ServiceIcons';

export default function SupportPage() {
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
            src="/images/services/support.jpg"
            alt={String(t('support.hero.title'))}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('support.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('support.hero.subtitle'))}
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
                {String(t('support.features.title'))}
              </h2>
              <p className="text-lg text-dusty-gray mb-6 leading-relaxed">
                {String(t('support.features.description'))}
              </p>
              <div className="space-y-4">
                {(t('support.features.items') as string[]).map((feature: string, index: number) => (
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
                src="/images/services/support.jpg"
                alt={String(t('support.hero.title'))}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Support Services */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-dusty-black mb-8">
              {String(t('support.services.title'))}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {((t('support.services.items') as { service: string; description: string; features: string[] }[])).map((service, index) => {
                const Icon = [HeadsetIcon, ChartMonitorIcon, WrenchIcon][index] ?? HeadsetIcon;
                return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-dusty-yellow rounded-lg flex items-center justify-center mx-auto mb-4 text-dusty-black">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-dusty-black mb-3">{service.service}</h4>
                  <p className="text-dusty-gray mb-4">{service.description}</p>
                  <ul className="text-left space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-dusty-black flex items-start">
                        <span className="w-2 h-2 bg-dusty-yellow rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );})}
            </div>
          </div>

          {/* Support Levels */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-dusty-black mb-6">
              {String(t('support.levels.title'))}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {(t('support.levels.items') as Array<{level: string, response: string, description: string}>).map((level, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-lg font-semibold text-dusty-black mb-2">{level.level}</h4>
                  <p className="text-dusty-yellow font-bold mb-2">{level.response}</p>
                  <p className="text-dusty-gray text-sm">{level.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring Dashboard */}
          <div className="bg-dusty-black text-white rounded-xl p-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">
                {String(t('support.monitoring.title'))}
              </h3>
              <p className="text-lg text-dusty-gray mb-8 leading-relaxed">
                {String(t('support.monitoring.description'))}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {(t('support.monitoring.metrics') as Array<{metric: string, value: string}>).map((metric, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h4 className="text-lg font-semibold text-dusty-black mb-2">{metric.metric}</h4>
                    <p className="text-dusty-yellow font-bold text-2xl">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Support Process */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-dusty-black mb-8">
              {String(t('support.process.title'))}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {(t('support.process.steps') as string[]).map((step: string, index: number) => {
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
            {String(t('support.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-gray mb-8 max-w-2xl mx-auto">
            {String(t('support.cta.subtitle'))}
          </p>
          <Link 
            href={getLocalizedPath('/contacts')}
            className="btn btn-primary"
          >
            {String(t('support.cta.button'))}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
