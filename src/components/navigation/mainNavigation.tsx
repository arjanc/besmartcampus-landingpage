'use client';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from './Navigation';
import { NavigationItem } from './NavigationItem';
import { usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

interface MainNavigationProps {
  colorInvert?: boolean;
  open?: boolean;
  onClose?: () => void;
}

export function MainNavigation({ colorInvert, open = false, onClose }: MainNavigationProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('common');

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className={twMerge(
      "fixed top-0 left-0 flex items-center justify-center bg-white/90 w-screen h-screen p-8 text-center lg:relative lg:w-auto lg:h-auto lg:flex-1 lg:bg-transparent",
      isOpen ? 'flex' : 'hidden lg:flex'
    )}>
      <div className="lg:hidden" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} size="xl" className="absolute top-8 right-8" />
      </div>
      <Navigation className={twMerge(
        colorInvert ? 'text-white' : ''
      )}>
        <NavigationItem href="/" active={pathname === '/'}>{t('nav.home')}</NavigationItem>
        <NavigationItem href="/about" active={pathname === '/about'}>{t('nav.about')}</NavigationItem>
        <NavigationItem href="/platform" active={pathname === '/platform'}>{t('nav.platform')}</NavigationItem>
        <NavigationItem href="/team" active={pathname === '/team'}>{t('nav.team')}</NavigationItem>
        {locale === 'nl' && <NavigationItem href="/vacatures" active={pathname === '/vacatures'}>{t('nav.vacatures')}</NavigationItem>}
        <NavigationItem href="/contact" active={pathname === '/contact'}>{t('nav.contact')}</NavigationItem>
      </Navigation>
    </div>
  );
}
