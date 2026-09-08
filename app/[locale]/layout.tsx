import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import '../globals.css';
import { i18n } from '@/i18n/config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = locale as keyof typeof i18n.localeNames;
  
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://fts77.ru' 
    : 'http://localhost:3000';

  // Путь без локали (из middleware) для hreflang alternates
  const h = await headers();
  const pathWithoutLocale = h.get('x-pathname') || '/';
  const pathNorm = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;

  const translations = await import(`@/i18n/locales/${locale}.json`);
  const t = translations as {
    common: { meta: { title: string; description?: string } };
    pageMeta?: Record<string, { title: string; description: string }>;
  };

  // Маппинг пути на ключ pageMeta для уникальных title/description
  const pathToMetaKey: Record<string, string> = {
    '': 'home',
    '/': 'home',
    '/about': 'about',
    '/contacts': 'contacts',
    '/news': 'news',
    '/reviews': 'reviews',
    '/services': 'services',
    '/services/web-development': 'webDevelopment',
    '/services/mobile-development': 'mobileDevelopment',
    '/services/it-consulting': 'itConsulting',
    '/services/cybersecurity': 'cybersecurity',
    '/services/cloud-solutions': 'cloudSolutions',
    '/services/industrial-automation': 'industrialAutomation',
    '/services/cryptography': 'cryptography',
    '/services/support': 'support',
  };
  let metaKey = pathToMetaKey[pathNorm === '/' ? '' : pathNorm];
  if (!metaKey && pathNorm.startsWith('/news/') && pathNorm !== '/news') metaKey = 'news';
  const pageMeta = t.pageMeta?.[metaKey || ''];
  const siteName = t.common.meta.title;
  const localeName = i18n.localeNames[localeKey];
  const pageTitle = pageMeta ? `${pageMeta.title} | ${siteName} - ${localeName}` : `${siteName} - ${localeName}`;
  const pageDescription = pageMeta?.description ?? t.common?.meta?.description ?? '';

  const languages: Record<string, string> = {};
  for (const loc of i18n.locales) {
    languages[loc] = `${baseUrl}/${loc}${pathNorm === '/' ? '' : pathNorm}`;
  }
  languages['x-default'] = `${baseUrl}/ru${pathNorm === '/' ? '' : pathNorm}`;
  
  return {
    metadataBase: new URL(baseUrl),
    title: pageTitle,
    description: pageDescription,
    keywords: translations.common.meta.keywords,
    authors: [{ name: translations.common.meta.title }],
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${pathNorm === '/' ? '' : pathNorm}`,
      languages,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${baseUrl}/${locale}${pathNorm === '/' ? '' : pathNorm}`,
      siteName: translations.common.meta.title,
      images: [
        {
          url: "/images/logo.svg",
          width: 216,
          height: 261,
          alt: "Future Tech Corp Logo",
        },
      ],
      locale: locale === 'ru' ? 'ru_RU' : locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/images/logo.svg"],
    },
    manifest: "/site.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // google: "google-verification-code", // Добавить код после получения
    },
    other: {
      "msapplication-TileColor": "#d4af37",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <Script id="iubenda-cs-config" strategy="beforeInteractive">
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {"siteId":4426740,"cookiePolicyId":87477821,"lang":"${locale}","storage":{"useSiteId":true}};
        `}
      </Script>
      <Script src="https://cs.iubenda.com/autoblocking/4426740.js" strategy="beforeInteractive" />
      <Script src="https://cdn.iubenda.com/cs/gpp/stub.js" strategy="beforeInteractive" />
      <Script src="https://cdn.iubenda.com/cs/iubenda_cs.js" strategy="beforeInteractive" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MGLV6VBY8F" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MGLV6VBY8F');
        `}
      </Script>
      <Script id="ymetrika" strategy="afterInteractive">
        {`
          try {
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103995756', 'ym');

            if (typeof ym === 'function') {
              ym(103995756, 'init', { ssr: true, webvisor: true, clickmap: true, ecommerce: 'dataLayer', accurateTrackBounce: true, trackLinks: true });
            }
          } catch (e) {
            console.warn('Yandex.Metrika failed to load:', e);
          }
        `}
      </Script>
      <Script id="ymab" strategy="afterInteractive">
        {`
          try {
            (function(e, x, pe, r, i, me, nt){
              e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
              me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),nt.parentNode.insertBefore(me,nt)})
            (window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
            
            setTimeout(function() {
              if (typeof ymab === 'function') {
                ymab('metrika.103995756', 'init');
              }
            }, 100);
          } catch (e) {
            console.warn('Varioqub failed to load:', e);
          }
        `}
      </Script>
      {children}
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://mc.yandex.ru/watch/103995756" style={{ position: 'absolute', left: -9999 }} alt="" />
        </div>
      </noscript>
    </>
  );
}
