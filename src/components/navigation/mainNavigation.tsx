'use client';

import { Navigation } from './Navigation';
import { NavigationItem } from './NavigationItem';
import { usePathname } from 'next/navigation';

export function MainNavigation({ colorInvert }: { colorInvert?: boolean }) {
  const pathname = usePathname();
  return (
    <Navigation className={colorInvert ? 'text-white' : ''}>
        <NavigationItem href="/over-ons" active={pathname === '/over-ons'} >over ons</NavigationItem>
        <NavigationItem href="/platform" active={pathname === '/platform'} >het BeSmart learning platform</NavigationItem>
        <NavigationItem href="/team" active={pathname === '/team'} >team</NavigationItem>
        <NavigationItem href="/contact" active={pathname === '/contact'} >contact</NavigationItem>
    </Navigation>
  );
}
