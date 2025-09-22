import { twMerge } from "tailwind-merge";

export const Faq = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={twMerge("flex flex-col gap-4", className)}>
            {children}
        </div>
    );
}