import Image from 'next/image';
import { Videoplayer } from "@/components/videoplayer";
import { IntroOverOnsBlock } from "@/components/blocks/introOverOnsBlock";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('about');
    return (
        <>
        <div className="base-container pt-8 pb-24">
            <Videoplayer
                sources={[
                    {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/lancering_kort_sd_.mp4", media:"(max-width: 600px)"},
                    {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/lancering_kort_hd_.mp4", media:"(max-width: 1200px)"},
                    {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/lancering_kort_fullhd_.mp4"}
                ]}
                thumbnailUrl="/images/video-thumbnail-over.png"
                showPlayButton={true}
            />
        </div>
        <IntroOverOnsBlock />
        <div className="bg-lichtblauw/11 pb-28">
            <div className="base-container py-24 md:grid md:grid-cols-2 md:gap-18">
                <div className="mb-8 md:mb-0 md:mt-18">
                    <Image src="/images/team.png" alt="Team" className="w-full rounded-xl overflow-hidden" width={475} height={331} sizes="475px" />
                </div>
                <div>
                    <h3 className="mb-8">{t("wie-zijn-wij.title")}</h3>
                    <p>{t("wie-zijn-wij.paragraph1")}</p>
                    <p>{t("wie-zijn-wij.paragraph2")}</p>
                </div>
            </div>
            <div className="base-container text-center">
                <h3 className="mb-8">{t('onze-missie.title')}</h3>
                <p>{t('onze-missie.paragraph')}</p>
                <ul className="flex flex-wrap justify-center gap-18 w-full list-none mt-18">
                    <li>
                        <h4 className="text-3xl text-geel">{t('onze-missie.column-1.title')}</h4>
                        <span className="block px-8 max-w-[200px]">{t('onze-missie.column-1.paragraph')}</span>
                    </li>
                    <li>
                        <h4 className="text-3xl text-oranje">{t('onze-missie.column-2.title')}</h4>
                        <span className="block px-8 max-w-[200px]">{t('onze-missie.column-2.paragraph')}</span>
                    </li>
                    <li>
                        <h4 className="text-3xl text-rood">{t('onze-missie.column-3.title')}</h4>
                        <span className="block px-8 max-w-[200px]">{t('onze-missie.column-3.paragraph')}</span>
                    </li>
                    <li>
                        <h4 className="text-3xl text-donkerblauw">{t('onze-missie.column-4.title')}</h4>
                        <span className="block px-8 max-w-[200px]">{t('onze-missie.column-4.paragraph')}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="relative pb-28">
            <Image src="/images/logo-element-1.svg" className="absolute -top-[40px] z-1 right-0 rotate-180" alt="BSC logo element" width={144} height={177} />
            <div className="base-container py-24 text-center">
                <blockquote className="w-2/3 mx-auto mb-4">{t("quote.text")}</blockquote>
                <span className="block font-cocogoose text-3xl text-donkerblauw">{t("quote.name")}</span>
                <span>{t("quote.role")}</span>
            </div>
            <div className="base-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-18">
                    <div>
                        <p dangerouslySetInnerHTML={{__html: t.raw('endParagraph1')}}></p>
                        <p dangerouslySetInnerHTML={{__html: t.raw('endParagraph2')}}></p>
                    </div>
                    <div>
                        <Videoplayer
                            sources={[
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/leerfestival_sd_.mp4", media:"(max-width: 600px)"},
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/leerfestival_hd_.mp4", media:"(max-width: 1200px)"},
                                {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/leerfestival_fullhd_.mp4"}
                            ]}
                            thumbnailUrl="/images/video-thumbnail-platform.png"
                            showPlayButton={true}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
