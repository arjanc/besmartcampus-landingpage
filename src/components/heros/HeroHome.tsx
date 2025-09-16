
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export function HeroHome({ className }: { className?: string }) {
    return (
        <div className="relative">
            <div className={twMerge("base-container", className)}>
            <Image src="/images/logo-element-2.svg" className="absolute -bottom-[80px] right-1/3" alt="BSC logo element" width={374} height={179} />
                <Image src="/images/logo-element-1.svg" className="absolute top-[140px] z-1 left-0" alt="BSC logo element" width={144} height={177} />
                <div className="relative z-0 mt-[40px]">
                    <div className="absolute z-2 w-full h-[calc(100%+120px)] -top-[120px] overflow-hidden">
                        <Image src="/images/woman-with-books.png" width={1056} height={992} alt="Woman with books" className="object-contain scale-110 translate-x-[70px] translate-y-[50px]" />
                    </div>
                    <div className="relative z-1 aspect-[22/9] mb-[90px] rounded-xl overflow-hidden bg-[linear-gradient(to_right,_transparent,_#53769b),radial-gradient(circle,_#bdcddb,_#80a0be)]">
                        <Image src="/images/logo-element-3.svg" className="absolute top-[20px] -right-[30px]" alt="BSC logo element" width={167} height={89} />
                    </div>
                </div>
            </div>
        </div>
    );
}