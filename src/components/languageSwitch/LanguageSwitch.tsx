"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useLocale } from "next-intl";
import { locales } from "@/i18n/routing";

export default function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const languages = locales;

  // Remove the current locale from the pathname
  const localeRegex = new RegExp(`^/(${locales.join('|')})`);
  const pathnameWithoutLocale = pathname.replace(localeRegex, '') || '/';

  return (
    <nav className="flex items-center mb-1">
      {languages.map((lng, index) => (
        <React.Fragment key={lng}>
          <Link
            href={lng === 'nl' ? pathnameWithoutLocale : `/${lng}${pathnameWithoutLocale}`}
            className={
              locale === lng
                ? "font-bold underline"
                : "font-normal underline-transparent"
            }
            key={lng}
          >
            {lng.toUpperCase()}
          </Link>
          {index < languages.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
