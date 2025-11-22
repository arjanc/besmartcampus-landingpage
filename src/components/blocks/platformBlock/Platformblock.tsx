import CustomButton from '@/components/ui/custom-button';
import { Videoplayer } from '@/components/videoplayer';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { PlatformItem } from './PlatformItem';

export function Platformblock() {
    const t = useTranslations('home.platform');
    const locale = useLocale();
    return (
        <div className="relative bg-lichtblauw/11 overflow-hidden">
            <div className="base-container py-26">
                <div className="grid lg:grid-cols-2 gap-18 pb-26">
                    <h3>{t('title')}</h3>
                    <p className="p-0">{t('description')}</p>
                </div>
                <Videoplayer
                    sources={
                        locale === 'nl' ? [
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/productvideo_sd_.mp4", media:"(max-width: 600px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/productvideo_hd_.mp4", media:"(max-width: 1200px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/productvideo_fullhd_.mp4"}
                        ] : [
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/en/productvideo_480p.mp4", media:"(max-width: 600px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/en/productvideo_720p.mp4", media:"(max-width: 1200px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/en/productvideo_1080p.mp4"}
                        ]}
                    thumbnailUrl="/images/video-thumbnail-platform.png"
                    showPlayButton={true}
                />
                <div className="flex flex-wrap justify-center text-center py-12">
                    <PlatformItem>
                        <Image src="/images/logo-elm-1.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={139} height={74} sizes="139px" />
                        <p className="p-0" dangerouslySetInnerHTML={{__html: t.raw('platformItem1')}}/>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-2.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={141} height={74} sizes="141px" />
                        <p className="p-0" dangerouslySetInnerHTML={{__html: t.raw('platformItem2')}}/>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-3.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={81} height={73} sizes="81px" />
                        <p className="p-0" dangerouslySetInnerHTML={{__html: t.raw('platformItem3')}}/>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-4.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={109} height={54} sizes="109px" />
                        <p className="p-0" dangerouslySetInnerHTML={{__html: t.raw('platformItem4')}}/>
                    </PlatformItem>
                    <PlatformItem>
                        <Image src="/images/logo-elm-5.svg" alt="BeSmart Campus" className="w-full max-h-[74px]" width={74} height={59} sizes="74px" />
                        <p className="p-0" dangerouslySetInnerHTML={{__html: t.raw('platformItem5')}}/>
                    </PlatformItem>
                </div>
                <div className="w-full flex items-center">
                    <CustomButton className="mx-auto" href="/about" variant="primary">{t('buttonCTA')}</CustomButton>
                </div>
            </div>
            <Image src="/images/logo-element-1.svg" className="absolute -bottom-[110px] z-1 left-0" alt="BSC logo element" width={144} height={177} sizes="144px"/>
        </div>
    );
}