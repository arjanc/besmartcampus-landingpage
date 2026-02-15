import localFont from 'next/font/local';

export const CocoGooseFont = localFont({
  src: [
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocogoose-Pro-Bold.otf',
      weight: '900',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-cocogoose',
});
