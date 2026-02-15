import { defineRouting, Pathnames } from 'next-intl/routing';

export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'nl';

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/about': { nl: '/over-ons', en: '/about' },
  '/contact': '/contact',
  '/platform': '/platform',
  '/team': '/team',
  '/vacatures': '/vacatures'
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames
});
