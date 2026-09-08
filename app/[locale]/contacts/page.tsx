'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/i18n/hooks/useTranslation';
import { useMemo } from 'react';

type Office = { city: string; lines: string[]; phone?: string };

const isMoscowOffice = (o: Office) => {
  const c = (o.city || '').toLowerCase();
  return c.includes('москв') || c.includes('moscow');
};
const isIrkutskOffice = (o: Office) => {
  const c = (o.city || '').toLowerCase();
  return c.includes('иркутск') || c.includes('irkutsk');
};
const isHkOffice = (o: Office) => {
  const c = (o.city || '').toLowerCase();
  return c.includes('hong') || c.includes('гонконг') || c.includes('香港');
};

/** Порядок офисов по локали: ru — российские первые, zh/en/de/es — Гонконг первым для гео APEC */
function orderOfficesByLocale(offices: Office[], locale: string): Office[] {
  if (!Array.isArray(offices) || offices.length < 2) return offices;
  const moscow = offices.find(isMoscowOffice) ?? null;
  const irkutsk = offices.find(isIrkutskOffice) ?? null;
  const hk = offices.find(isHkOffice) ?? null;

  if (locale === 'ru') {
    return [moscow, irkutsk, hk].filter(Boolean) as Office[];
  }
  return [hk, moscow, irkutsk].filter(Boolean) as Office[];
}

export default function ContactsPage() {
  const { t, locale } = useTranslation();
  const offices = useMemo(() => {
    const raw = (t('contacts.details.offices') as Office[]) || [];
    return orderOfficesByLocale(raw, locale);
  }, [t, locale]);
  const hkOffice = offices.find(isHkOffice);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dusty-black via-dusty-black-light to-dusty-black text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('contacts.hero.title') as string}
            </h1>
            <p className="text-xl md:text-2xl text-dusty-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('contacts.hero.subtitle') as string}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-dusty-black mb-8">{t('contacts.form.title') as string}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-dusty-gray mb-2">
                      {t('contacts.form.firstName') as string}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dusty-yellow focus:border-transparent"
                      placeholder={t('contacts.form.firstName') as string}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-dusty-gray mb-2">
                      {t('contacts.form.lastName') as string}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dusty-yellow focus:border-transparent"
                      placeholder={t('contacts.form.lastName') as string}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dusty-gray mb-2">
                    {t('contacts.form.email') as string}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dusty-yellow focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dusty-gray mb-2">
                    {t('contacts.form.company') as string}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dusty-yellow focus:border-transparent"
                    placeholder={t('contacts.form.company') as string}
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dusty-gray mb-2">
                    {t('contacts.form.service') as string}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dusty-yellow focus:border-transparent"
                  >
                    <option value="">{t('contacts.form.selectService') as string}</option>
                    <option value="web-development">{t('home.services.items.webDevelopment.title') as string}</option>
                    <option value="mobile-development">{t('home.services.items.mobileDevelopment.title') as string}</option>
                    <option value="it-consulting">{t('home.services.items.itConsulting.title') as string}</option>
                    <option value="cybersecurity">{t('home.services.items.cybersecurity.title') as string}</option>
                    <option value="cloud-solutions">{t('home.services.items.cloudSolutions.title') as string}</option>
                    <option value="industrial-automation">{t('home.services.items.industrialAutomation.title') as string}</option>
                    <option value="cryptography">{t('home.services.items.cryptography.title') as string}</option>
                    <option value="support">{t('home.services.items.support.title') as string}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dusty-gray mb-2">
                    {t('contacts.form.message') as string}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dusty-yellow focus:border-transparent"
                    placeholder={t('contacts.form.placeholderMessage') as string}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  {t('contacts.form.submit') as string}
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-dusty-black mb-8">{t('contacts.details.title') as string}</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dusty-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dusty-black mb-2">{t('contacts.details.phone') as string}</h3>
                    <p className="text-dusty-gray">+7 (904) 115-05-80</p>
                    {hkOffice?.phone ? <p className="text-dusty-gray">{hkOffice.phone}</p> : null}
                    <p className="text-sm text-dusty-gray">{t('contacts.details.hoursWeekdays') as string}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dusty-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dusty-black mb-2">{t('contacts.details.email') as string}</h3>
                    <p className="text-dusty-gray">info@fts77.ru</p>
                    <p className="text-sm text-dusty-gray">{t('contacts.details.note') as string}</p>
                  </div>
                </div>

                {/* Offices — порядок по локали: ru = RU первые, zh/en/de/es = HK первый */}
                {offices.length > 0 ? (
                  offices.map((office, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-dusty-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-dusty-black mb-2">{office.city}</h3>
                        {office.lines.map((line, i) => (
                          <p key={i} className={`text-dusty-gray ${i === 0 ? '' : 'text-sm'}`}>{line}</p>
                        ))}
                        {office.phone ? (
                          <p className="text-sm text-dusty-gray mt-1">{office.phone}</p>
                        ) : null}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dusty-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dusty-black mb-2">{t('contacts.details.office') as string}</h3>
                      <p className="text-dusty-gray">{t('contacts.details.address1') as string}</p>
                      <p className="text-sm text-dusty-gray">{t('contacts.details.address2') as string}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dusty-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-dusty-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dusty-black mb-2">{t('contacts.details.businessHours') as string}</h3>
                    <p className="text-dusty-gray">{t('contacts.details.hoursWeekdays') as string}</p>
                    <p className="text-sm text-dusty-gray">{t('contacts.details.hoursSaturday') as string}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-dusty-black mb-4">{t('contacts.social.title') as string}</h3>
                <div className="flex space-x-4">
                  <a href="https://t.me/Uuff_112" className="w-10 h-10 bg-dusty-yellow rounded-full flex items-center justify-center hover:bg-dusty-yellow-light transition-colors">
                    <svg className="w-5 h-5 text-dusty-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.48.33-.913.49-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.149.158.193.369.207.517.025.293-.008.628-.099.924z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/79643574596" className="w-10 h-10 bg-dusty-yellow rounded-full flex items-center justify-center hover:bg-dusty-yellow-light transition-colors">
                    <svg className="w-5 h-5 text-dusty-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.87 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dusty-black mb-4">{t('contacts.map.title') as string}</h2>
            <p className="text-lg text-dusty-gray max-w-2xl mx-auto">
              {t('contacts.map.subtitle') as string}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offices.length > 0 ? (
              offices.map((office, idx) => {
                // Координаты: Москва, Иркутск, Гонконг (индекс по city)
                const cityLower = (office.city || '').toLowerCase();
                const isMoscow = cityLower.includes('москв') || cityLower.includes('moscow');
                const isIrkutsk = cityLower.includes('иркутск') || cityLower.includes('irkutsk');
                const coordMap: Record<string, { lat: number; lng: number; bbox: string }> = {
                  moscow: { lat: 55.7558, lng: 37.6176, bbox: "37.6%2C55.7%2C37.7%2C55.8" },
                  irkutsk: { lat: 52.2871, lng: 104.3056, bbox: "104.2%2C52.2%2C104.4%2C52.4" },
                  hk: { lat: 22.3193, lng: 114.1694, bbox: "114.1%2C22.2%2C114.3%2C22.4" }
                };
                const coord = isMoscow ? coordMap.moscow : isIrkutsk ? coordMap.irkutsk : coordMap.hk;
                
                return (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-64 w-full">
                      <iframe
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${coord.bbox}&amp;layer=mapnik&amp;marker=${coord.lat}%2C${coord.lng}`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Офис в ${office.city}`}
                      ></iframe>
                    </div>
                    <div className="p-4 text-center">
                      <div className="w-4 h-4 bg-dusty-yellow rounded-full mx-auto mb-3"></div>
                      <h3 className="font-semibold text-dusty-black mb-2">{office.city}</h3>
                      {office.lines.map((line, i) => (
                        <p key={i} className={`text-sm text-dusty-gray ${i === 0 ? '' : 'text-xs'}`}>{line}</p>
                      ))}
                      {office.phone ? (
                        <p className="text-xs text-dusty-gray mt-1">{office.phone}</p>
                      ) : null}
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                {/* Fallback для случая, если переводы не загрузились */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 w-full">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=37.6%2C55.7%2C37.7%2C55.8&amp;layer=mapnik&amp;marker=55.7558%2C37.6176"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Офис в Москве"
                    ></iframe>
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-4 h-4 bg-dusty-yellow rounded-full mx-auto mb-3"></div>
                    <h3 className="font-semibold text-dusty-black mb-2">{t('contacts.map.moscow') as string}</h3>
                    <p className="text-sm text-dusty-gray">ул. Якиманка, 15<br/>Россия, 119180</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 w-full">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=104.2%2C52.2%2C104.4%2C52.4&amp;layer=mapnik&amp;marker=52.2871%2C104.3056"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Офис в Иркутске"
                    ></iframe>
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-4 h-4 bg-dusty-yellow rounded-full mx-auto mb-3"></div>
                    <h3 className="font-semibold text-dusty-black mb-2">{t('contacts.map.irkutsk') as string}</h3>
                    <p className="text-sm text-dusty-gray">ул. Ширямова, 2/13а<br/>Россия, 664003</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 w-full">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=114.1%2C22.2%2C114.3%2C22.4&amp;layer=mapnik&amp;marker=22.3193%2C114.1694"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Офис в Гонконге"
                    ></iframe>
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-4 h-4 bg-dusty-yellow rounded-full mx-auto mb-3"></div>
                    <h3 className="font-semibold text-dusty-black mb-2">{t('contacts.map.hongkong') as string}</h3>
                    <p className="text-sm text-dusty-gray">麼地道69, 尖沙咀東<br/>Hong Kong</p>
                    <p className="text-xs text-dusty-gray mt-1">+852-460-93-656</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
