import type { Metadata } from "next";
import { twMerge } from 'tailwind-merge';
import { CocoGooseFont } from '@/utils/fonts';
import { Funnel_Sans } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

config.autoAddCss = false


const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeSmart Campus",
  description: "Be Smart Campus",
  icons: {
    // Favicons and app icons
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
    // You can also specify shortcut icon if needed
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json'
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const fontClasses = [CocoGooseFont.variable].join(' ');

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // const locale = await getLocale();
  // const messages = await getMessages();

  return (
    <html lang={locale}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={twMerge('h-full', fontClasses, `${funnelSans.variable} antialiased`)}
      >
        <NextIntlClientProvider locale={locale}>
          <GoogleAnalytics gaId="G-F8YQ7RZ8WR" />
          <GoogleTagManager gtmId="GT-W6N652R" />
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
