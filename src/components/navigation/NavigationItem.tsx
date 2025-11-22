import Link from '@/components/link';
import { twMerge } from 'tailwind-merge';

interface NavigationItemProps {
  children: React.ReactNode;
  active: boolean;
  activeClass?: string | null;
  href: string;
  className?: string;
}

export function NavigationItem({ children, active, activeClass, href, className }: NavigationItemProps) {
  return (
    <li className={twMerge(
      "nav-item w-full text-3xl py-4",
      "lg:w-auto lg:text-base lg:py-0 ml-1 first:ml-0 lg:before:content-['•'] lg:before:mr-1 lg:first:before:hidden",
      className
    )}>
        <Link href={href} className={twMerge(
          'hover:text-donkerblauw',
          active ? activeClass ? activeClass: 'text-donkerblauw' : ''
        )}
        >
            {children}
        </Link>
    </li>
  );
}