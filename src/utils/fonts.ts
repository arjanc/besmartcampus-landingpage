import localFont from 'next/font/local';

export const CocoGooseFont = localFont({
  src: [
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-cocogoose',
});
