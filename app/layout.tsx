import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || (process.env.NODE_ENV === 'production' ? 'https://fts77.ru' : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Future Tech Corp - Разработка ПО и ИТ-консалтинг",
  description: "Future Tech Corp - ваш надежный партнер в области разработки программного обеспечения, ИТ-консалтинга и кибербезопасности. Мы создаем инновационные решения для бизнеса по всему Азиатско-Тихоокеанскому региону (APEC).",
  keywords: "разработка ПО, ИТ-консалтинг, кибербезопасность, программное обеспечение, Future Tech Corp, Азиатско-Тихоокеанский регион, APEC, отечественные решения, промышленная автоматизация, криптография, ЭЦП",
  authors: [{ name: "Future Tech Corp" }],
      openGraph: {
      title: "Future Tech Corp - Разработка ПО и ИТ-консалтинг",
      description: "Ваш надежный партнер в области разработки программного обеспечения, ИТ-консалтинга и кибербезопасности по всему Азиатско-Тихоокеанскому региону (APEC)",
    url: "https://fts77.ru",
    siteName: "Future Tech Corp",
    images: [
      {
        url: "/images/logo.svg",
        width: 216,
        height: 261,
        alt: "Future Tech Corp Logo",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Tech Corp - Разработка ПО и ИТ-консалтинг",
    description: "Ваш надежный партнер в области разработки программного обеспечения, ИТ-консалтинга и кибербезопасности",
    images: ["/images/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    // Baidu: добавить в other через meta tag когда нибудь
  },
  other: {
    "msapplication-TileColor": "#d4af37",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d4af37',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="theme-color" content="#d4af37" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
