import Image from 'next/image';

import { Videoplayer } from "@/components/videoplayer";
import { IntroOverOnsBlock } from "@/components/blocks/introOverOnsBlock";

export default function OverOnsPage() {
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
                    <h3 className="mb-8">Wie zijn wij?</h3>
                    <p>BeSmart Campus is ontstaan uit de overtuiging dat elk kind de kans verdient om te leren en te begrijpen. Wat begon met een andere uitleg in een wiskundeles, groeide in 2022 uit tot de eerste BeSmart Leerfestivals: fysieke bijeenkomsten waar leerlingen samen met BeSmart experts op een speelse en motiverende manier aan hun kennis werkten. </p>
                    <p>Vanuit die inzichten ontwikkelden we in 2025 het BeSmart Learning Platform: een veilige AI-tutor die leerlingen helpt leren op hun eigen niveau. We werken samen met docenten, scholen en onderwijsprofessionals om technologie in te zetten als versterking – niet als vervanging – van de kracht van het onderwijs.</p>
                </div>
            </div>
            <div className="base-container text-center">
                <h3 className="mb-8">Onze missie</h3>
                <p>Onze missie: het reduceren van leerachterstanden en het bevorderen van kansengelijkheid in én met het onderwijs. Want iedere leerling verdient een eerlijke kans. Niet met dure bijles voor de happy few, maar met technologie die werkt voor iedereen. Door AI slim te combineren met de kracht van de docent, maken we onderwijs eerlijker, persoonlijker en effectiever. Geen kind blijft achter. Geen talent blijft onbenut.</p>
                <ul className="flex flex-wrap justify-center gap-18 w-full list-none mt-18">
                    <li>
                        <h4 className="text-3xl text-geel">inventief</h4>
                        <span className="block px-8 max-w-[200px]">We maken moeilijk makkelijk</span>
                    </li>
                    <li>
                        <h4 className="text-3xl text-oranje">fun</h4>
                        <span className="block px-8 max-w-[200px]">We maken leren leuk</span>
                    </li>
                    <li>
                        <h4 className="text-3xl text-rood">innovatief</h4>
                        <span className="block px-8 max-w-[200px]">We doen het echt anders</span>
                    </li>
                    <li>
                        <h4 className="text-3xl text-donkerblauw">toegankelijk</h4>
                        <span className="block px-8 max-w-[200px]">We zijn er voor iedereen</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="relative pb-28">
            <Image src="/images/logo-element-1.svg" className="absolute -top-[40px] z-1 right-0 rotate-180" alt="BSC logo element" width={144} height={177} />
            <div className="base-container py-24 text-center">
                <blockquote className="w-2/3 mx-auto mb-4">Van worstelende leerling naar bouwer van BeSmart Campus.</blockquote>
                <span className="block font-cocogoose text-3xl text-donkerblauw">drs. Dennis Rot</span>
                <span>Oprichter BeSmart Campus</span>
            </div>
            <div className="base-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-18">
                    <div>
                        <p>Tijdens mijn vwo-periode begreep ik niets van wiskunde. Totdat &eacute;&eacute;n docent het anders uitlegde - en alles op z&apos;n plek viel. Het werd het begin van een mooie reis met afgeronde studies bedrijfswiskunde, informatica, economie en econometrie. </p>
                        <p>Dat ene moment van begrip gun ik élk kind. Daarom ben ik BeSmart Campus begonnen: iedereen kan het snappen, als het goed wordt uitgelegd. Sinds 2021 ontwikkel ik samen met docenten unieke content die schoolstof begrijpelijker en leuker maken. Waar we begonnen op scholen met onze BeSmart Leerfestivals staat er inmiddels een uniek, op AI gebaseerd leerplatform: het BeSmart Learning Platform.<br/>Zo hoeft geen kind achter te blijven en blijft geen talent onbenut. Leren is pas leuk, als je het snapt!</p>
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