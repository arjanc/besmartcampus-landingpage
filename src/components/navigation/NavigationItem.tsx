import Link from 'next/link';
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
    <li className={twMerge("nav-item ml-1 first:ml-0 before:content-['•'] before:mr-1 first:before:hidden", className)}>
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