'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n, Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // Определяем текущий locale из пути или используем fallback
  const pathSegments = pathname.split('/');
  const firstSegment = pathSegments[1];
  const currentLocale = i18n.locales.includes(firstSegment as Locale) 
    ? (firstSegment as Locale) 
    : 'ru';

  const getLocalizedPath = (locale: Locale) => {
    // Чекаем, есть ли уже locale в пути
    const pathSegments = pathname.split('/');
    const firstSegment = pathSegments[1];
    
    // Если первый сегмент - это locale, сносим
    if (i18n.locales.includes(firstSegment as Locale)) {
      pathSegments.splice(1, 1);
    }
    
    // Собираем путь без locale
    const pathWithoutLocale = pathSegments.length > 1 ? pathSegments.join('/') : '/';
    
    // Обрабатываем случай корневой страницы
    if (pathWithoutLocale === '/') {
      return `/${locale}`;
    }
    
    // Добавляем новый locale
    return `/${locale}${pathWithoutLocale}`;
  };

  // Отладка
  console.log('LanguageSwitcher Debug:', {
    pathname,
    currentLocale,
    pathSegments: pathname.split('/'),
    paths: i18n.locales.map(locale => ({
      locale,
      path: getLocalizedPath(locale)
    }))
  });



  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-dusty-gray hover:text-dusty-yellow transition-colors"
      >
        <span className="text-sm font-medium">
          {i18n.localeNames[currentLocale]}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={getLocalizedPath(locale)}
              className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === currentLocale
                  ? 'text-dusty-yellow bg-gray-50'
                  : 'text-dusty-gray'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {i18n.localeNames[locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
