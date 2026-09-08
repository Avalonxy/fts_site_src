'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/hooks/useTranslation';

export default function Footer() {
  const params = useParams();
  const locale = params?.locale as string || 'ru';
  const { t } = useTranslation();

  // Генерим правильные ссылки для текущего языка
  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  // Контактная информация на разных языках
  const contactInfo = {
    ru: {
      phone: '+7 (904) 115-05-80',
      email: 'info@fts77.ru',
      address: 'Иркутск, ул. Ширямова, 2/13а',
      company: 'Future Tech Corporation',
      description: 'Ваш надежный партнер в области разработки программного обеспечения, ИТ-консалтинга и кибербезопасности. Создаем инновационные решения для бизнеса.',
      quickLinks: 'Быстрые ссылки',
      services: 'Услуги',
      about: 'О компании',
      news: 'Новости',
      reviews: 'Отзывы',
      contacts: 'Контакты',
      copyright: 'Все права защищены.'
    },
    en: {
      phone: '+7 (904) 115-05-80',
      email: 'info@fts77.ru',
      address: 'Irkutsk, Shiryamova St., 2/13a',
      company: 'Future Tech Corporation',
      description: 'Your reliable partner in software development, IT consulting and cybersecurity. We create innovative business solutions.',
      quickLinks: 'Quick Links',
      services: 'Services',
      about: 'About',
      news: 'News',
      reviews: 'Reviews',
      contacts: 'Contacts',
      copyright: 'All rights reserved.'
    },
    zh: {
      phone: '+7 (904) 115-05-80',
      email: 'info@fts77.ru',
      address: '伊尔库茨克，希里亚莫瓦街 2/13a',
      company: '未来科技系统',
      description: '您在软件开发、IT咨询和网络安全领域的可靠合作伙伴。我们为商业创造创新解决方案。',
      quickLinks: '快速链接',
      services: '服务',
      about: '关于我们',
      news: '新闻',
      reviews: '评论',
      contacts: '联系我们',
      copyright: '版权所有。'
    },
    de: {
      phone: '+7 (904) 115-05-80',
      email: 'info@fts77.ru',
      address: 'Irkutsk, Shiryamova Str., 2/13a',
      company: 'Future Tech Corporation',
      description: 'Ihr zuverlässiger Partner für Softwareentwicklung, IT-Beratung und Cybersicherheit. Wir erstellen innovative Geschäftslösungen.',
      quickLinks: 'Schnelllinks',
      services: 'Dienstleistungen',
      about: 'Über uns',
      news: 'Nachrichten',
      reviews: 'Bewertungen',
      contacts: 'Kontakt',
      copyright: 'Alle Rechte vorbehalten.'
    },
    es: {
      phone: '+7 (904) 115-05-80',
      email: 'info@fts77.ru',
      address: 'Irkutsk, Calle Shiryamova, 2/13a',
      company: 'Future Tech Corporation',
      description: 'Su socio confiable en desarrollo de software, consultoría IT y ciberseguridad. Creamos soluciones empresariales innovadoras.',
      quickLinks: 'Enlaces rápidos',
      services: 'Servicios',
      about: 'Acerca de',
      news: 'Noticias',
      reviews: 'Reseñas',
      contacts: 'Contactos',
      copyright: 'Todos los derechos reservados.'
    }
  };

  const currentInfo = contactInfo[locale as keyof typeof contactInfo] || contactInfo.en;

  return (
    <footer className="bg-dusty-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="md:col-span-1 footer-col">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 mr-3">
                <Image
                  src="/images/logo.svg"
                  alt="Future Tech Corp Logo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-bold text-dusty-yellow">{currentInfo.company}</span>
            </div>
            <p className="text-dusty-gray/80 mb-4 max-w-md text-sm leading-relaxed">
              {currentInfo.description}
            </p>
            <div className="flex justify-center md:justify-start space-x-3 mt-4">
              <a href="https://t.me/Uuff_112" target="_blank" rel="noopener noreferrer" className="text-dusty-gray hover:text-dusty-yellow transition-colors">
                <span className="sr-only">Telegram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.48.33-.913.49-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.149.158.193.369.207.517.025.293-.008.628-.099.924z"/>
                </svg>
              </a>
              <a href="https://wa.me/79643574596" target="_blank" rel="noopener noreferrer" className="text-dusty-gray hover:text-dusty-yellow transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col px-6 md:px-8">
            <h3 className="footer-title">{currentInfo.quickLinks}</h3>
            <ul className="footer-list">
              <li>
                <Link href={getLocalizedPath('/services')} className="text-dusty-gray hover:text-dusty-yellow transition-colors">
                  {currentInfo.services}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/about')} className="text-dusty-gray hover:text-dusty-yellow transition-colors">
                  {currentInfo.about}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/news')} className="text-dusty-gray hover:text-dusty-yellow transition-colors">
                  {currentInfo.news}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/reviews')} className="text-dusty-gray hover:text-dusty-yellow transition-colors">
                  {currentInfo.reviews}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/contacts')} className="text-dusty-gray hover:text-dusty-yellow transition-colors">
                  {currentInfo.contacts}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-title">{currentInfo.contacts}</h3>
            <div className="footer-stack-3 text-dusty-gray">
              <div className="footer-line">
                <svg className="w-5 h-5 text-dusty-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{currentInfo.phone}</span>
              </div>
              {(() => {
                const offices = (t('contacts.details.offices') as unknown as Array<{ city?: string; lines?: string[]; phone?: string }> ) || [];
                const hk = offices.find((o) => {
                  const city = (o.city || '').toLowerCase();
                  const lines = (Array.isArray(o.lines) ? o.lines.join(' ') : '').toLowerCase();
                  return (
                    city.includes('hong') ||
                    city.includes('гонконг') ||
                    city.includes('香港') ||
                    lines.includes('hong') ||
                    lines.includes('гонконг') ||
                    lines.includes('香港')
                  );
                });
                if (hk?.phone) {
                  return (
                    <div className="footer-line">
                      <svg className="w-5 h-5 text-dusty-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{hk.phone}</span>
                    </div>
                  );
                }
                return null;
              })()}
              <div className="footer-line">
                <svg className="w-5 h-5 text-dusty-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{currentInfo.email}</span>
              </div>
              {(() => {
                const offices = (t('contacts.details.offices') as unknown as Array<{ city?: string; lines?: string[]; phone?: string }>) || [];
                const hasOffices = Array.isArray(offices) && offices.length > 0;
                if (hasOffices) {
                  return (
                    <div className="footer-list mt-3">
                      {offices.slice(0, 2).map((office, idx) => (
                        <div key={idx} className="footer-line items-start">
                          <svg className="w-5 h-5 text-dusty-yellow mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div className="footer-stack-2 text-center md:text-left">
                            {office.city && <div className="font-medium text-white">{office.city}</div>}
                            {Array.isArray(office.lines) && office.lines.slice(0, 2).map((line, i) => (
                              <div key={i} className="footer-line-text">{line}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                      {offices.length > 2 && (
                        <div className="text-xs text-dusty-gray/70 ml-7">{offices.length - 2}+ {locale === 'ru' ? 'офис' : locale === 'de' ? 'Büro' : locale === 'es' ? 'oficina' : locale === 'zh' ? '个办公室' : 'more office'}</div>
                      )}
                    </div>
                  );
                }
                // Fallback к одиночному адресу из словаря контактов, если есть, иначе локальный currentInfo.address
                const addr1 = t('contacts.details.address1') as string;
                const addr2 = t('contacts.details.address2') as string;
                const fallbackAddress = addr1 || currentInfo.address;
                return (
                  <div className="flex items-center justify-center md:justify-start">
                    <svg className="w-5 h-5 text-dusty-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{fallbackAddress}{addr2 ? `, ${addr2}` : ''}</span>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dusty-gray-dark mt-10 pt-6">
          <div className="max-w-3xl mx-auto text-center text-dusty-gray text-sm">
            <p>&copy; 2018 - 2025 {currentInfo.company}. {currentInfo.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
