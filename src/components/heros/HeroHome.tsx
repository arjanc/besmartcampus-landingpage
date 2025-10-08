
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import heroImg from '../../../public/images/leren-is-leuk-als-je-het-snapt.png';

export function HeroHome({ className }: { className?: string }) {
    return (
        <div className="relative">
            <div className={twMerge("base-container mb-24", className)}>
                <Image src="/images/logo-element-2.svg" className="hidden md:block absolute -bottom-[80px] right-1/3" alt="BSC logo element" width={374} height={179} />
                <Image src="/images/logo-element-1.svg" className="scale-[0.5] origin-top-left lg:scale-[1] absolute top-[140px] left-0" alt="BSC logo element" width={144} height={177} />
                <div className="relative z-0 lg:-mt-[30px]">
                    <div className="z-2 aspect-[22/9]">
                             <Image 
                                src={heroImg}
                                alt="Woman with books"
                                width={1112}
                                height={498}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 60vw, 50vw"
                                className="object-contain"
                                priority
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}