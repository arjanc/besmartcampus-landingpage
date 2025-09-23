import Image from 'next/image';

export function IntroOverOnsBlock() {
    return (
        <div className="relative">
            <div className="base-container lg:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
                    <div className="relative">
                        <h3 className="mb-4 text-lichtblauw">Over BeSmart Campus</h3>
                        <p className="font-bold">Het Nederlandse onderwijs staat onder druk. Steeds meer leerlingen lopen vast, de kansenongelijkheid groeit, en docenten raken overbelast. Tegelijkertijd biedt technologie ongekende kansen – als we het slim én veilig inzetten.</p>
                        <p>BeSmart Campus luidt een nieuwe fase in waarin AI en docenten zij aan zij werken. Onze slimme, veilige AI-technologie helpt leerlingen leren op hun eigen niveau – met persoonlijke uitleg, oefening en ondersteuning. Docenten houden de regie, leerlingen krijgen grip. Zo bouwen we aan eerlijker, persoonlijker en effectiever onderwijs.</p>
                        <p>Geen vervanging van het onderwijs, maar een krachtige aanvulling. Geen dure bijles voor de happy few, maar ondersteuning voor ieder kind – via school. Onze missie is helder: het reduceren van leerachterstanden en het bevorderen van kansengelijkheid in én met het voortgezet onderwijs.</p>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-end lg:absolute lg:top-0 lg:right-0 lg:w-[50vw] z-1">
                <Image src="/images/plattegrond-klein.png" alt="Plattegrond" className="w-full max-w-[600px]" width={640} height={707} sizes="139px" />
            </div>
            <svg className="absolute lg:-bottom-[100px] -bottom-[29px] -left-[250px] z-0" width="505" height="269" viewBox="0 0 139 74" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M44.7851 1.42243C40.988 -0.474142 36.5468 -0.474142 32.7498 1.42243C25.0878 5.24943 12.0354 12.0229 2.98341 16.5611C1.15268 17.4755 0 19.3382 0 21.3703C0 23.4023 1.15268 25.265 2.98341 26.1794C24.7488 37.0508 76.4161 63.7043 94.2149 72.5776C98.012 74.4741 102.453 74.4741 106.25 72.5776C113.912 68.7506 126.931 61.9771 136.017 57.4389C137.847 56.5245 139 54.6618 139 52.6297C139 50.5977 137.847 48.735 136.017 47.8206C114.251 36.9492 62.5839 10.2957 44.7851 1.42243Z" fill="#FBBF10"/>
            </svg>
        </div>
    );
}