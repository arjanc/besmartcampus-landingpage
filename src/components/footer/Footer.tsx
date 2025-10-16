import { Link } from '@/i18n/navigation';
import Image from 'next/image';

import { MainNavigation } from '@/components/navigation';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer() {
    return (
        <footer className="bg-donkerblauw-400 text-white">
            <div className="base-container flex w-full py-21">
                <Link href="/">
                    <Image
                        src="/images/logo-light.svg"
                        alt="BSC logo"
                        width={210}
                        height={79}
                        sizes="210px"
                        className="logo-image h-auto w-auto"
                        priority
                    />
                </Link>
                <MainNavigation colorInvert />
                <div className="flex items-center justify-center ml-4">
                    <a href="#"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
                </div>
            </div>
        </footer>
    );
}