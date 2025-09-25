import CustomButton from '@/components/ui/custom-button';
import { Videoplayer } from '@/components/videoplayer';

export function IntroBlock() {
    return (
        <div className="relative z-1">
        <div className="relative z-1 base-container pb-24">
            <div className="flex flex-col md:flex-row flex-wrap gap-18">
                <div className="flex-1 w-full md:w-1/2 text-donkerblauw">
                    <h3 className="mb-4">AI + onderwijs. Eén platform. Voor alle leerlingen.</h3>
                    <p className="font-bold">
                    Het Nederlandse onderwijs staat onder druk. Steeds meer leerlingen lopen vast, de kansenongelijkheid groeit, en docenten raken overbelast. Tegelijkertijd biedt technologie ongekende kansen – als we het slim én veilig inzetten.
                    </p>
                    <p>BeSmart Campus luidt een nieuwe fase in waarin AI en docenten zij aan zij werken. Onze slimme, veilige AI-technologie helpt leerlingen leren op hun eigen niveau – met persoonlijke uitleg, oefening en ondersteuning. Docenten houden de regie, leerlingen krijgen grip. Zo bouwen we aan eerlijker, persoonlijker en effectiever onderwijs.</p>
                    <p>Geen vervanging van het onderwijs, maar een krachtige aanvulling. Geen dure bijles voor de happy few, maar ondersteuning voor ieder kind – via school. Onze missie is helder: het reduceren van leerachterstanden en het bevorderen van kansengelijkheid in én met het voortgezet onderwijs.</p>
                    <CustomButton href="/over-ons" variant="primary">Lees meer over Besmart campus</CustomButton>
                </div>
                <div className="flex flex-1 w-full items-center md:w-1/2">
                    <Videoplayer
                        sources={[
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-480p.mp4", media:"(max-width: 600px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-720p.mp4", media:"(max-width: 1200px)"},
                            {"src": "https://storage.googleapis.com/gcs-pj-ai-mvp-tmp-prod-videos/aftermovie-besmart-campus-leerfestival-1080p.mp4"}
                          ]}
                        thumbnailUrl="/images/video-thumbnail-1.png"
                        caption="Bekijk de video hierboven om het in actie te zien."
                    />
                </div>
            </div>
        </div>
        <svg className="absolute -bottom-[100px] -right-[330px]" width="560" height="268" viewBox="0 0 560 268" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M180.429 5.15149C165.132 -1.71716 147.239 -1.71716 131.941 5.15149C101.073 19.0114 48.4878 43.5423 12.0195 59.978C4.6439 63.2897 0 70.0357 0 77.395C0 84.7542 4.6439 91.5002 12.0195 94.8119C99.7073 134.184 307.863 230.713 379.571 262.849C394.868 269.717 412.761 269.717 428.059 262.849C458.927 248.989 511.376 224.458 547.98 208.022C555.356 204.71 560 197.964 560 190.605C560 183.246 555.356 176.5 547.98 173.188C460.293 133.816 252.137 37.287 180.429 5.15149Z" fill="#8FB1DD"/>
        </svg>
        </div>
    );
}