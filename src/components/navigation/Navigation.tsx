import { twMerge } from 'tailwind-merge';

export function Navigation({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <nav className={twMerge(
      "flex-1 flex items-center justify-end",
      className
    )}>
        <ul className={twMerge(
          "flex-wrap list-none flex items-center font-cocogoose text-lichtblauw",
          className
        )}>
            {children}
        </ul>
    </nav>
  );
}