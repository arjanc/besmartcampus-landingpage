'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomButton from '@/components/ui/custom-button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { MainNavigation } from '@/components/navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <header className="base-container flex w-full mt-16">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="BSC logo"
          width={210}
          height={79}
          className="logo-image"
        />
      </Link>

      <MainNavigation />

      <div className="flex items-center">
        <CustomButton
          href="/login"
          variant="primary"
          icon={faArrowRight}
          iconPosition="right"
          className="w-[118px] h-[48px]"
        >
          login
        </CustomButton>
      </div>
    </header>
  );
}
