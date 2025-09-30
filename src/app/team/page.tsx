import Image from 'next/image';
import { TeamMember } from '@/components/team';

export default function TeamPage() {
    return (
        <>
            <div className="relative">
                <Image src="/images/logo-elm-2.svg" className="absolute top-0 z-0 left-0 -translate-x-1/2 w-[270px] h-auto translate-y-[70%]" alt="BSC logo element" width={141} height={74} sizes="141px" />
                <div className="relative base-container pt-8 pb-24 text-center">
                    <h1 className="text-3xl font-bold text-lichtblauw mb-6">Het team</h1>
                    <p className="font-bold lg:max-w-md mx-auto">
                    Onze docenten werken niet alleen aan nieuwe lesstof voor BeSmart Campus, maar staan ook iedere week nog als docent voor de klas. Dit garandeert dat onze lesstof écht goed aansluit bij de dagelijkse praktijk!
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-18">
                        <TeamMember name="Dennis Rot" title="Oprichter BeSmart Campus" image="/images/team/dennis-rot-oprichter-besmart-campus.jpg" />
                        <TeamMember name="Bas van Hassel" title="Docent natuurkunde" image="/images/team/bas-van-hassel-docent-natuurkunde.png" />
                        <TeamMember name="Christiaan Mensink" title="Docent economie en bedrijfseconomie " image="/images/team/christiaan-mensink-docent-economie-en-bedrijfseconomie.jpg" />
                        <TeamMember name="Jasper Heesbeen" title="Docent wiskunde" image="/images/team/jasper-heesbeen-docent-wiskunde.jpg" />
                        <TeamMember name="Juliette Alders" title="Docente wiskunde" image="/images/team/juliette-alders-docente-wiskunde.jpg" />
                        <TeamMember name="Marloes Willemse" title="Docente aardrijkskunde" image="/images/team/marloes-willemse-docente-aardrijkskunde.jpg" />
                        <TeamMember name="Martin de Veen" title="Docent geschiedenis" image="/images/team/martin-de-veen-docent-geschiedenis.jpg" />
                        <TeamMember name="Sander Broekman" title="Docent scheikunde" image="/images/team/sander-broekman-docent-scheikunde.jpg" />
                        <TeamMember name="Vanessa Moes" title="Docente bedrijfseconomie" image="/images/team/vanessa-moes-docente-bedrijfseconomie.jpg" />
                    </div>
                </div>
            </div>
            <div className="relative bg-lichtblauw/11 py-24 overflow-hidden">
                <svg className="absolute -bottom-[160px] left-1/2 z-0" width="505" height="269" viewBox="0 0 139 74" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M44.7851 1.42243C40.988 -0.474142 36.5468 -0.474142 32.7498 1.42243C25.0878 5.24943 12.0354 12.0229 2.98341 16.5611C1.15268 17.4755 0 19.3382 0 21.3703C0 23.4023 1.15268 25.265 2.98341 26.1794C24.7488 37.0508 76.4161 63.7043 94.2149 72.5776C98.012 74.4741 102.453 74.4741 106.25 72.5776C113.912 68.7506 126.931 61.9771 136.017 57.4389C137.847 56.5245 139 54.6618 139 52.6297C139 50.5977 137.847 48.735 136.017 47.8206C114.251 36.9492 62.5839 10.2957 44.7851 1.42243Z" fill="#FBBF10"/>
                </svg>
                <div className="base-container text-center">
                    <h2 className="text-3xl font-bold text-lichtblauw mb-6">Partner</h2>
                    <a href="https://www.google.com" className="inline-flex py-24" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/logo-google.png" alt="Google" width={273} height={92} sizes="273px" />
                    </a>
                </div>
            </div>
        </>
    );
}