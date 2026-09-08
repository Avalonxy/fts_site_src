'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/i18n/hooks/useTranslation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as string || 'ru';

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

   useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-dusty-black shadow-lg border-b border-dusty-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={getLocalizedPath('')} className="flex items-center">
              <div className="w-10 h-10 mr-3">
                <Image
                  src="/images/logo.svg"
                  alt="Future Tech Corp Logo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-bold text-dusty-yellow">Future Tech Corp</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 whitespace-nowrap">
            <Link href={getLocalizedPath('')} className="text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
              {String(t('common.header.home'))}
            </Link>
            <Link href={getLocalizedPath('/services')} className="text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
              {String(t('common.header.services'))}
            </Link>
            <Link href={getLocalizedPath('/about')} className="text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
              {String(t('common.header.about'))}
            </Link>
            <Link href={getLocalizedPath('/news')} className="text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
              {String(t('common.header.news'))}
            </Link>
            <Link href={getLocalizedPath('/reviews')} className="text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
              {String(t('common.header.reviews'))}
            </Link>
            <Link href={getLocalizedPath('/contacts')} className="text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
              {String(t('common.header.contacts'))}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block mr-4 shrink-0">
            <LanguageSwitcher />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block shrink-0">
            <Link
              href={getLocalizedPath('/contacts')}
              className="bg-dusty-yellow text-dusty-black px-4 py-2 rounded-lg hover:bg-dusty-yellow-light transition-colors text-sm font-medium whitespace-nowrap"
            >
              {String(t('common.header.contact'))}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dusty-gray hover:text-dusty-yellow p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dusty-black border-t border-dusty-gray absolute left-0 right-0 top-16 shadow-lg">
            <div className="px-3 pt-3 pb-4 space-y-1">
              <Link
                href={getLocalizedPath('')}
                className="block text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {String(t('common.header.home'))}
              </Link>
              <Link
                href={getLocalizedPath('/services')}
                className="block text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {String(t('common.header.services'))}
              </Link>
              <Link
                href={getLocalizedPath('/about')}
                className="block text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {String(t('common.header.about'))}
              </Link>
              <Link
                href={getLocalizedPath('/news')}
                className="block text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {String(t('common.header.news'))}
              </Link>
              <Link
                href={getLocalizedPath('/reviews')}
                className="block text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {String(t('common.header.reviews'))}
              </Link>
              <Link
                href={getLocalizedPath('/contacts')}
                className="block text-dusty-gray hover:text-dusty-yellow px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {String(t('common.header.contacts'))}
              </Link>
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <div className="px-3 pt-2">
                <Link href={getLocalizedPath('/contacts')} className="btn btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  {String(t('common.header.contact'))}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
