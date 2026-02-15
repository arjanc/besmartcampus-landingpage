import Image from 'next/image';
import Link from '@/components/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { vacatures } from './constants';

export default function VacaturesPage() {
    return (
        <>
            <div className="relative bg-[url('/images/logo-elm-6.svg')] bg-no-repeat" style={{ backgroundPosition: 'right -650px bottom 40px' }}>
                <div className="base-container lg:grid lg:grid-cols-2 gap-18">
                    <div className="p-12 mt-24 bg-[url('/images/element-labeling.png')] bg-no-repeat bg-contain aspect-[533/665] max-w-[480px] lg:max-w-none mx-auto lg:mb-18">
                        <h3 className="mb-8">Vacatures</h3>
                        <p className="font-bold">
                            Werken bij BeSmart Campus betekent werken bij een snel groeiend EdTech bedrijf dat scholen in het voortgezet onderwijs helpt om leerachterstanden te reduceren en kansengelijkheid te bevorderen. Docenten ontwikkelen de lesstof en ons slimme, veilige AI-Platform helpt iedere leerling om te leren op het eigen niveau - met duizenden uitlegvideo's, tienduizenden oefenopgaven en ondersteuning van een chatbot om antwoorden te vinden op iedere vraag.
                        </p>
                    </div>
                    <div className="relative -mt-32 flex">
                        <Image src="/images/girl.png" alt="Girl with books" className="w-full max-w-[320px] lg:max-w-[570px]" width={570} height={1066} sizes="570px" />
                    </div>
                </div>
            </div>
            <div className="bg-lichtblauw/11">
                <div className="base-container md:grid md:grid-cols-2 gap-18 py-24">
                    <div>
                        <h3 className="mb-8 leading-10">Kom je ons helpen het onderwijs in Nederland eerlijker, persoonlijker en effectiever te maken?</h3>
                    </div>
                    <div>
                        <h4 className="mb-8">We hebben op dit moment de volgende vacatures</h4>
                        <ul className="list-disc">
                            {vacatures.map((v) => (
                                <li key={v.id}><Link href={v.href} className="inline-flex items-center gap-2 hover:underline">{v.title} <FontAwesomeIcon icon={faArrowRight} /></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
