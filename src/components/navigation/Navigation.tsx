
import { twMerge } from 'tailwind-merge';

export function Navigation({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <nav className="flex-1 flex items-center justify-end pr-8">
        <ul className={twMerge("list-none flex items-center font-cocogoose text-lichtblauw", className)}>
            {children}
        </ul>
    </nav>
  );
}