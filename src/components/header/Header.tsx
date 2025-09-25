'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';
import CustomButton from '@/components/ui/custom-button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MainNavigation } from '@/components/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 152);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={twMerge(
      "relative z-11",
      isScrolled ? 'pt-38' : 'pt-12'
    )}>
      <div className={twMerge(
          "transition-all duration-300 ease-in-out mx-4",
          isScrolled ? 'fixed top-8 left-0 right-0' : ''
      )}>
        <div 
          className={twMerge(
            'base-container rounded-xl p-4 flex w-full transition-all duration-300 ease-in-out',
            isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
          )}
        >
        <div className="flex items-center pr-8 lg:hidden">
          <FontAwesomeIcon icon={faBars} className="md:hidden" size="xl" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <div className="flex flex-1 justify-center lg:flex-none lg:justify-start">
          <Link href="/">
            <div className={twMerge(
              "",
              isScrolled ? 'scale-80' : 'scale-100'
            )}>
              <Image
                src="/images/logo.svg"
                alt="BSC logo"
                width={210}
                height={79}
                sizes="210px"
                className="logo-image h-auto w-auto"
                priority
              />
            </div>
          </Link>
        </div>

        <MainNavigation open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="flex items-center">
          <CustomButton
            href="/smartlearningplatform"
            variant="primary"
            icon={faArrowRight}
            iconPosition="right"
            className="w-[118px] h-[48px]"
            isExternal
          >
            login
          </CustomButton>
        </div>
      </div>
      </div>
    </header>
  );
}
