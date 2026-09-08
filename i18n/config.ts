/** Маппинг User-Agent поисковых ботов на предпочтительную локаль для индексации */
export const botToLocale: Record<string, string> = {
  'yandex': 'ru',      // YandexBot, Yandex
  'baidu': 'zh',       // Baiduspider
  'sogou': 'zh',       // Sogou
  'soso': 'zh',        // Sosospider
  '360spider': 'zh',   // 360Spider
  'googlebot': 'en',   // Google (глобальный)
  'bingbot': 'en',
  'slurp': 'en',       // Yahoo
  'duckduckbot': 'en',
  'applebot': 'en',
};

export const i18n = {
  locales: ['ru', 'en', 'zh', 'de', 'es'] as const,
  localeNames: {
    ru: 'Русский',
    en: 'English',
    zh: '中文',
    de: 'Deutsch',
    es: 'Español'
  },
  /** Для .ru домена и русской аудитории — русский по умолчанию */
  fallbackLocale: 'ru' as const,
  // Маппинг стран к языкам для будущего использования
  countryToLocale: {
    'RU': 'ru',
    'CN': 'zh',
    'DE': 'de',
    'ES': 'es',
    'US': 'en',
    'GB': 'en',
    'CA': 'en',
    'AU': 'en',
    'HK': 'zh', // Гонконг
    'SG': 'en', // Сингапур
    'JP': 'en', // Япония
    'KR': 'en', // Корея
    'IN': 'en', // Индия
    'BR': 'es', // Бразилия
    'MX': 'es', // Мексика
    'AR': 'es', // Аргентина
    'AT': 'de', // Австрия
    'CH': 'de', // Швейцария
    'NL': 'en', // Нидерланды
    'FR': 'en', // Франция
    'IT': 'en', // Италия
    'PL': 'en', // Польша
    'UA': 'en', // Украина
    'KZ': 'ru', // Казахстан
    'BY': 'ru', // Беларусь
    'AM': 'en', // Армения
    'GE': 'en', // Грузия
    'AZ': 'en', // Азербайджан
  } as const
} as const;

export type Locale = (typeof i18n)['locales'][number];
export type CountryCode = keyof typeof i18n.countryToLocale;
