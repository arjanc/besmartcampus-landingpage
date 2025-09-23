import CustomButton from '@/components/ui/custom-button';
import { Videoplayer } from '@/components/videoplayer';
import Image from 'next/image';

const PlatformItem = ({ children }: { children: React.ReactNode }) => {
    return <div className="w-full md:w-1/2 lg:w-1/3 px-8 py-12 flex flex-col items-center gap-4">{children}</div>
}

export function Platformblock() {
    return (
        <div className="relative bg-lichtblauw/11 overflow-hidden">
            <div className="base-container py-26">
                <div className="grid lg:grid-cols-2 gap-18 pb-26">
                    <h3>Het BeSmart Learning Platform</h3>
                    <p className="p-0">Het BeSmart Learning Platform is een digitale leeromgeving waarin leerlingen zelfstandig kunnen leren met hulp van AI. Ze krijgen toegang tot uitlegvideo&apos;s, opgaven en directe ondersteuning - precies wanneer ze het nodig hebben.</p>
                </div>
                <Videoplayer
                    sources={[
                        {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-480p.mp4", media:"(max-width: 600px)"},
                        {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-720p.mp4", media:"(max-width: 1200px)"},
                        {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-1080p.mp4"}
                      ]}
                    thumbnailUrl="/images/video-thumbnail-platform.png"
                    showPlayButton={true}
                />
                <div className="flex flex-wrap justify-center text-center py-12">
                    <PlatformItem>
                        <Image src="/images/logo-elm-1.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={139} height={74} sizes="139px" />
                        <p className="p-0"><strong>persoonlijke AI-tutor</strong> die 24/7 klaar staat in een veilige, afgeschermde leeromgeving</p>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-2.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={141} height={74} sizes="141px" />
                        <p className="p-0">Unieke, <strong>Tiny Talks &trade;</strong>: duizenden korte, krachtige uitlegvideo&apos;s per onderwerp</p>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-3.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={81} height={73} sizes="81px" />
                        <p className="p-0">Meer dan <strong>100.000 oefenopgaven</strong> met realtime feedback</p>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-4.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={109} height={54} sizes="109px" />
                        <p className="p-0"><strong>Hoogwaardige content</strong>, ontwikkeld samen met scholen en docenten</p>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-5.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={74} height={59} sizes="74px" />
                        <p className="p-0">Volledige <strong>aansluiting op schoolmethodes</strong> en de centrale exameneisen</p>
                    </PlatformItem>
                </div>
                <div className="w-full flex items-center">
                    <CustomButton className="mx-auto" href="/over-ons" variant="primary">Lees meer over Besmart campus</CustomButton>
                </div>
            </div>
            <Image src="/images/logo-element-1.svg" className="absolute -bottom-[110px] z-1 left-0" alt="BSC logo element" width={144} height={177} sizes="144px"/>
        </div>
    );
}