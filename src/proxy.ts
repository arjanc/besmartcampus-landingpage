import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Create the next-intl middleware instance
const intlMiddleware = createIntlMiddleware({
  ...routing,
  localePrefix: 'as-needed',
  // Disable locale detection - always use default locale unless explicitly specified
  localeDetection: false
});

// Our custom middleware wrapper
export default async function proxy(request: NextRequest) {

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|.*\\.[\\w]+$|api).*)']
};
