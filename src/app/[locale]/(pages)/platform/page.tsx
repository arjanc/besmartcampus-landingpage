import Image from 'next/image';
import CustomButton from '@/components/ui/custom-button';
import { Videoplayer } from "@/components/videoplayer";
import { useTranslations, useLocale } from 'next-intl';

export default function PlatformPage() {
    const t = useTranslations('platform');
    const locale = useLocale();
    return (
        <>
            <div className="relative">
            <Image src="/images/logo-elm-4.svg" className="absolute bottom-0 z-1 left-0 -translate-x-2/3 translate-y-[10%] w-[367px] h-auto" alt="BSC logo element" width={109} height={54} sizes="109px" />
                <div className="relative base-container pt-8 pb-24">
                    <Videoplayer
                        className="relative z-1"
                        sources={
                            locale === 'nl' ? [
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/productvideo_sd_.mp4", media:"(max-width: 600px)"},
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/productvideo_hd_.mp4", media:"(max-width: 1200px)"},
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/productvideo_fullhd_.mp4"}
                            ] : [
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/en/productvideo_480p.mp4", media:"(max-width: 600px)"},
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/en/productvideo_720p.mp4", media:"(max-width: 1200px)"},
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/en/productvideo_1080p.mp4"}
                            ]
                        }
                        thumbnailUrl="/images/video-thumbnail-over.png"
                        showPlayButton={true}
                    />
                </div>
            </div>
            <div className="relative">
                <Image src="/images/logo-elm-2.svg" className="absolute bottom-0 z-1 right-0 translate-x-1/2 w-[270px] h-auto -translate-y-[10%]" alt="BSC logo element" width={141} height={74} sizes="141px" />
                <div className="base-container text-center pb-24">
                    <h3 className="text-lichtblauw mb-8">{t('title')}</h3>
                    <p className="font-bold font-[18px] px-18 py-24">{t('description')}</p>
                    <ul className="flex flex-wrap justify-center gap-18 w-full list-none text-[18px]">
                        <li className="w-[306px]">
                            <Image src="/images/logo-elm-1.svg" alt="Team" className="rounded-xl overflow-hidden w-full max-h-[173px] mb-8 p-8" width={139} height={74} sizes="139px" />
                            <span className="block px-8" dangerouslySetInnerHTML={{__html: t.raw('usp.1')}} />
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/logo-elm-2.svg" alt="Team" className="rounded-xl overflow-hidden w-full max-h-[173px] mb-8 p-8" width={141} height={74} sizes="141px" />
                            <span className="block px-8" dangerouslySetInnerHTML={{__html: t.raw('usp.2')}} />
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/logo-elm-3.svg" alt="Team" className="rounded-xl overflow-hidden w-full max-h-[173px] mb-8 p-8" width={81} height={73} sizes="81px" />
                            <span className="block px-8" dangerouslySetInnerHTML={{__html: t.raw('usp.3')}} />
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/logo-elm-4.svg" alt="Team" className="rounded-xl overflow-hidden w-full max-h-[173px] mb-8 p-8" width={109} height={54} sizes="109px" />
                            <span className="block px-8" dangerouslySetInnerHTML={{__html: t.raw('usp.4')}} />
                        </li>
                        <li className="w-[306px]">
                            <Image src="/images/logo-elm-5.svg" alt="Team" className="rounded-xl overflow-hidden w-full max-h-[173px] mb-8 p-8" width={74} height={59} sizes="74px" />
                            <span className="block px-8" dangerouslySetInnerHTML={{__html: t.raw('usp.5')}} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-lichtblauw/11">
                <div className="base-container md:grid md:grid-cols-2 gap-18 py-24">
                    <div>
                        <h3 className="mb-8">{t('section.column-1.title')}</h3>
                        <p><strong>{t('section.column-1.description')}</strong></p>
                    </div>
                    <div>
                        <h3 className="mb-8">{t('section.column-2.title')}</h3>
                        <ul className="list-disc">
                            <li dangerouslySetInnerHTML={{__html: t.raw('section.column-2.list.item-1')}}/>
                            <li dangerouslySetInnerHTML={{__html: t.raw('section.column-2.list.item-2')}}/>
                            <li dangerouslySetInnerHTML={{__html: t.raw('section.column-2.list.item-3')}}/>
                            <li dangerouslySetInnerHTML={{__html: t.raw('section.column-2.list.item-4')}}/>
                            <li dangerouslySetInnerHTML={{__html: t.raw('section.column-2.list.item-5')}}/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative bg-[url('/images/logo-elm-6.svg')] bg-no-repeat" style={{ backgroundPosition: 'right -650px bottom 40px' }}>
                <div className="base-container lg:grid lg:grid-cols-2 gap-18">
                    <div className="p-12 mt-24 bg-[url('/images/element-labeling.png')] bg-no-repeat bg-contain aspect-[533/665] max-w-[480px] lg:max-w-none mx-auto lg:mb-18">
                        <h3 className="mb-8">{t('demo.title')}</h3>
                        <p className="font-bold">{t('demo.description')}</p>
                        <CustomButton className="mx-auto" href="/contact" variant="primary">{t('demo.button')}</CustomButton>
                    </div>
                    <div className="relative -mt-48 flex">
                        <Image src="/images/girl.png" alt="Girl with books" className="w-full max-w-[320px] lg:max-w-[570px]" width={570} height={1066} sizes="570px" />
                    </div>
                </div>
            </div>
        </>
    );
}
