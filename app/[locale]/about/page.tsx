'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { usePathname } from 'next/navigation';


export default function AboutPage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as string) || 'ru';
  const { t } = useTranslation();

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  const clientLogoMatchers: Array<{ match: RegExp; src: string }> = [
    { match: /fpk|rzd|фпк|ржд/i, src: '/images/companies/fpk-rzd-logo.png' },
    { match: /ko[- ]?bit|ко[- ]?бит/i, src: '/images/companies/ko-bit-logo.svg' },
    { match: /adrenaline|adrenalin|адреналин/i, src: '/images/companies/adrenaline-logo.png' },
    { match: /knut/i, src: '/images/companies/knut-industries-logo.png' },
    { match: /utair|ют[еэ]йр/i, src: '/images/companies/utair-logo.png' },
  ];

  const getClientLogo = (name: string): string | null => {
    for (const { match, src } of clientLogoMatchers) {
      if (match.test(name)) return src;
    }
    return null;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dusty-black via-dusty-black-light to-dusty-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="About Future Tech Corp"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {String(t('about.hero.title'))}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {String(t('about.hero.subtitle'))}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-8">
                {String(t('about.story.title'))}
              </h2>
              <div className="space-y-6 text-lg text-dusty-gray leading-relaxed">
                <p>{String(t('about.story.text1'))}</p>
                <p>{String(t('about.story.text2'))}</p>
                <p>{String(t('about.story.text3'))}</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-dusty-yellow p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-dusty-black mb-4">
                  {String(t('about.story.highlight.title'))}
                </h3>
                <p className="text-dusty-black text-lg leading-relaxed">
                  {String(t('about.story.highlight.text'))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('about.stats.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('about.stats.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-dusty-yellow mb-2">50+</div>
              <div className="text-dusty-gray font-medium">{String(t('about.stats.projects'))}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-dusty-yellow mb-2">6</div>
              <div className="text-dusty-gray font-medium">{String(t('about.stats.experience'))}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-dusty-yellow mb-2">30+</div>
              <div className="text-dusty-gray font-medium">{String(t('about.stats.clients'))}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-dusty-yellow mb-2">24/7</div>
              <div className="text-dusty-gray font-medium">{String(t('about.stats.support'))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('about.values.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('about.values.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dusty-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dusty-black mb-3">
                {String(t('about.values.quality.title'))}
              </h3>
              <p className="text-dusty-gray leading-relaxed">
                {String(t('about.values.quality.description'))}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-dusty-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dusty-black mb-3">
                {String(t('about.values.reliability.title'))}
              </h3>
              <p className="text-dusty-gray leading-relaxed">
                {String(t('about.values.reliability.description'))}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-dusty-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dusty-black mb-3">
                {String(t('about.values.innovation.title'))}
              </h3>
              <p className="text-dusty-gray leading-relaxed">
                {String(t('about.values.innovation.description'))}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-dusty-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dusty-black mb-3">
                {String(t('about.values.result.title'))}
              </h3>
              <p className="text-dusty-gray leading-relaxed">
                {String(t('about.values.result.description'))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('about.team.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('about.team.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('about.team.members') as Array<{name: string, position: string, description: string, photo?: string}>).map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src={member.photo || `/images/team/team-${index + 1}.jpg`}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-dusty-black mb-2">{member.name}</h3>
                <div className="text-dusty-yellow font-medium mb-4">{member.position}</div>
                <p className="text-dusty-gray leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dusty-black mb-4">
              {String(t('about.clients.title'))}
            </h2>
            <p className="text-xl text-dusty-gray max-w-2xl mx-auto">
              {String(t('about.clients.subtitle'))}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('about.clients.items') as Array<{name: string, description: string}>).map((client, index) => {
              const logo = getClientLogo(client.name);
              const isUtairLogo = logo?.includes('utair-logo');
              return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 overflow-hidden ${isUtairLogo ? 'bg-dusty-black' : 'bg-white'}`}>
                  {logo ? (
                    <Image
                      src={logo}
                      alt={client.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-dusty-gray">{client.name.charAt(0)}</div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-dusty-black mb-3">{client.name}</h3>
                <p className="text-dusty-gray leading-relaxed">{client.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dusty-yellow text-dusty-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {String(t('about.cta.title'))}
          </h2>
          <p className="text-xl text-dusty-black mb-8 max-w-2xl mx-auto opacity-80">
            {String(t('about.cta.subtitle'))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={getLocalizedPath('/contacts')} 
              className="btn btn-dark btn-equal"
            >
              {String(t('about.cta.contact'))}
            </Link>
            <Link 
              href={getLocalizedPath('/services')} 
              className="btn btn-outline-dark btn-equal"
            >
              {String(t('about.cta.services'))}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
