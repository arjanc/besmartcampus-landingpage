'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useLocale } from 'next-intl';
import { routing, type Locale } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';

interface LinkProps extends Omit<NextLinkProps, 'href'> {
    children: React.ReactNode;
    className?: string;
    href: string;
    locale?: string; // Optional to override locale if needed
}

export default function Link({ href, locale, children, ...props }: LinkProps) {
  const currentLocale = useLocale();
  const localeToUse = (locale as Locale) || (currentLocale as Locale);
  const { defaultLocale } = routing;

  // Use getPathname to resolve the correct localized path
  // This will use the pathnames configuration from routing.ts
  const localizedHref = getPathname({ href, locale: localeToUse });

  // Remove the default locale prefix if present
  const finalHref = localeToUse === defaultLocale && localizedHref.startsWith(`/${defaultLocale}`)
    ? localizedHref.substring(`/${defaultLocale}`.length)
    : localizedHref;

  return <NextLink href={finalHref} {...props} >{children}</NextLink>;
}
