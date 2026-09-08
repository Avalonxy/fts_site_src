import { headers } from 'next/headers';
import { i18n, botToLocale } from '@/i18n/config';

function getBotLocaleFromUA(ua: string | null): string | null {
  if (!ua) return null;
  const lower = ua.toLowerCase();
  for (const [bot, locale] of Object.entries(botToLocale)) {
    if (lower.includes(bot) && (i18n.locales as unknown as string[]).includes(locale)) {
      return locale;
    }
  }
  return null;
}

function parseAcceptLanguage(acceptLanguage: string | null): string | null {
  if (!acceptLanguage) return null;
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, quality = '1'] = lang.trim().split(';q=');
      return { code: code.split('-')[0], quality: parseFloat(quality) };
    })
    .sort((a, b) => b.quality - a.quality);
  for (const lang of languages) {
    if ((i18n.locales as unknown as string[]).includes(lang.code)) {
      return lang.code;
    }
  }
  return null;
}

function getClientIPFromHeaders(h: Headers): string | null {
  const cfConnectingIP = h.get('cf-connecting-ip');
  const xForwardedFor = h.get('x-forwarded-for');
  const xRealIP = h.get('x-real-ip');
  const xForwarded = h.get('x-forwarded');
  if (cfConnectingIP) return cfConnectingIP;
  if (xForwardedFor) {
    const ips = xForwardedFor.split(',').map((ip) => ip.trim());
    return ips[0] || null;
  }
  if (xRealIP) return xRealIP;
  if (xForwarded) return xForwarded;
  return null;
}

async function fetchCountryByIP(ip: string, timeoutMs = 500): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, { signal: controller.signal, cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.country_code || null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function detectPreferredLocale(): Promise<string> {
  const h = await headers();
  // 0) Поисковые боты — предпочтительная локаль для индексации
  const botLocale = getBotLocaleFromUA(h.get('user-agent'));
  if (botLocale) return botLocale;

  // 1) Accept-Language
  const byAccept = parseAcceptLanguage(h.get('accept-language'));
  if (byAccept) return byAccept;

  // 2) IP geolocation (skip local/private)
  const ip = getClientIPFromHeaders(h);
  if (ip && !ip.startsWith('127.') && !ip.startsWith('192.168.') && !ip.startsWith('10.')) {
    const country = await fetchCountryByIP(ip);
    if (country && country in i18n.countryToLocale) {
      const map = i18n.countryToLocale as Record<string, string>;
      const locale = map[country];
      if ((i18n.locales as unknown as string[]).includes(locale)) {
        return locale;
      }
    }
  }

  // 3) Fallback
  return i18n.fallbackLocale;
}