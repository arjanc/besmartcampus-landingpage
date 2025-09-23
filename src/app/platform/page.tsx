import Image from 'next/image';
import CustomButton from '@/components/ui/custom-button';
import { Videoplayer } from "@/components/videoplayer";

export default function PlatformPage() {
    return (
        <>
            <div className="relative">
            <Image src="/images/logo-elm-4.svg" className="absolute bottom-0 z-1 left-0 -translate-x-2/3 translate-y-[10%] w-[367px] h-auto" alt="BSC logo element" width={109} height={54} sizes="109px" />
                <div className="relative base-container pt-8 pb-24">
                    <Videoplayer
                        className="relative z-1"
                        sources={[
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-480p.mp4", media:"(max-width: 600px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-720p.mp4", media:"(max-width: 1200px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-1080p.mp4"}
                            ]}
                        thumbnailUrl="/images/video-thumbnail-over.png"
                        showPlayButton={true}
                    />
                </div>
            </div>
            <div className="relative">
                <Image src="/images/logo-elm-2.svg" className="absolute bottom-0 z-1 right-0 translate-x-1/2 w-[270px] h-auto -translate-y-[10%]" alt="BSC logo element" width={141} height={74} sizes="141px" />
                <div className="base-container text-center pb-24">
                    <h3 className="text-lichtblauw mb-8">Het BeSmart Learning Platform</h3>
                    <p className="font-bold font-[18px] px-18 py-24">Het BeSmart Learning Platform is een digitale leeromgeving waarin leerlingen zelfstandig kunnen leren met hulp van AI. Ze krijgen toegang tot uitlegvideo’s, opgaven en directe ondersteuning – precies wanneer ze het nodig hebben.</p>
                    <ul className="flex flex-wrap justify-center gap-18 w-full list-none text-[18px]">
                        <li className="w-[306px]">
                            <Image src="/images/team.png" alt="Team" className="rounded-xl overflow-hidden w-full mb-8" width={475} height={331} sizes="475px" />
                            <span className="block px-8">Een <strong>persoonlijke AI-tutor</strong> die 24/7 klaar staat in een veilige, afgeschermde leeromgeving</span>
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/team.png" alt="Team" className="rounded-xl overflow-hidden w-full mb-8" width={475} height={331} sizes="475px" />
                            <span className="block px-8">Unieke <strong>Tiny Talks&trade;</strong>: duizenden korte, krachtige uitlegvideo’s per onderwerp</span>
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/team.png" alt="Team" className="rounded-xl overflow-hidden w-full mb-8" width={475} height={331} sizes="475px" />
                            <span className="block px-8">Meer dan <strong>100.000 oefenopgaven</strong> met realtime feedback</span>
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/team.png" alt="Team" className="rounded-xl overflow-hidden w-full mb-8" width={475} height={331} sizes="475px" />
                            <span className="block px-8"><strong>Hoogwaardige content</strong>, ontwikkeld samen met scholen en docenten</span>
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/team.png" alt="Team" className="rounded-xl overflow-hidden w-full mb-8" width={475} height={331} sizes="475px" />
                            <span className="block px-8">Volledige <strong>aansluiting op schoolmethodes</strong> en de centrale exameneisen</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-lichtblauw/11">
                <div className="base-container md:grid md:grid-cols-2 gap-18 py-24">
                    <div>
                        <h3 className="mb-8">voor wie is het bedoeld?</h3>
                        <p><strong>Voor havo- en vwo-leerlingen in de bovenbouw die willen oefenen, begrijpen én groeien. Voor scholen die leerlingen maatwerk willen bieden, toetsvoorbereiding willen versterken of kort verzuim makkelijk willen opvangen - zonder extra werkdruk.</strong></p>
                    </div>
                    <div>
                        <h3 className="mb-8">wat maakt het uniek?</h3>
                        <ul className="list-disc">
                            <li><strong>Persoonlijke AI-tutor</strong> - 24/7 beschikbaar in een veilige, afgeschermde omgeving, zonder afleiding of ruis.</li>
                            <li><strong>Tiny Talks&trade; uitlegvideo’s</strong> - zodat leerlingen snel en helder de kern van een onderwerp begrijpen.</li>
                            <li><strong>Realtime feedback op 100.000+ opgaven</strong> - directe oefening versterkt het begrip.</li>
                            <li><strong>Gemaakt mét scholen en docenten</strong> - de inhoud sluit naadloos aan op het curriculum én de lespraktijk.</li>
                            <li><strong>Geen commerciële bijles</strong> - maar een oplossing die via school voor álle leerlingen beschikbaar is.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative bg-[url('/images/logo-elm-6.svg')] bg-no-repeat" style={{ backgroundPosition: 'right -650px bottom 40px' }}>
                <div className="base-container lg:grid lg:grid-cols-2 gap-18">
                    <div className="p-12 mt-24 bg-[url('/images/element-labeling.png')] bg-no-repeat bg-contain aspect-[533/665] max-w-[480px] lg:max-w-none mx-auto lg:mb-18">
                        <h3 className="mb-8">Zien hoe het werkt?</h3>
                        <p className="font-bold">Vraag nu een demo aan en ontdek binnen 10 minuten hoe BeSmart jouw school of klas vooruithelpt – met AI die werkt, omdat het gebouwd is mét docenten. Al meer dan honderden leerlingen gebruiken het. En we staan pas aan het begin.</p>
                        <CustomButton className="mx-auto" href="/contact" variant="primary">Vraag een demo aan</CustomButton>
                    </div>
                    <div className="relative -mt-48 flex">
                        <Image src="/images/girl.png" alt="Girl with books" className="w-full max-w-[320px] lg:max-w-[570px]" width={570} height={1066} sizes="570px" />
                    </div>
                </div>
            </div>
        </>
    );
}