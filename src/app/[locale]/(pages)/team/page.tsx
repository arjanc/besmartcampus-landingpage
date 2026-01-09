import Image from 'next/image';
import { TeamMember } from '@/components/team';
import { useTranslations } from 'next-intl';

export default function TeamPage() {
    const t = useTranslations('team');
    return (
        <>
            <div className="relative">
                <Image src="/images/logo-elm-2.svg" className="absolute top-0 z-0 left-0 -translate-x-1/2 w-[270px] h-auto translate-y-[70%]" alt="BSC logo element" width={141} height={74} sizes="141px" />
                <div className="relative base-container pt-8 pb-24 text-center">
                    <h1 className="text-3xl font-bold text-lichtblauw mb-6">{t("title")}</h1>
                    <p className="font-bold lg:max-w-md mx-auto">
                        {t("description")}
                    </p>
                    <div className="px-10 sm:px-20 md:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-18 mb-8">
                        <TeamMember name={t("members.dennis-rot.name")} title={t("members.dennis-rot.title")} image="/images/team/dennis-rot-oprichter-besmart-campus.jpg" />
                        <TeamMember name={t("members.paul.name")} title={t("members.paul.title")} image="/images/team/paul.jpg" />
                        <TeamMember name={t("members.lysander.name")} title={t("members.lysander.title")} image="/images/team/lysander.jpg" />
                        <TeamMember name={t("members.stijn.name")} title={t("members.stijn.title")} image="/images/team/stijn.jpg" />
                        <TeamMember name={t("members.stefan.name")} title={t("members.stefan.title")} image="/images/team/stefan.png" />
                        <TeamMember name={t("members.jacobine.name")} title={t("members.jacobine.title")} image="/images/team/jacobine.jpg" />
                        <TeamMember name={t("members.nadine.name")} title={t("members.nadine.title")} image="/images/team/nadine.jpg" />
                        <TeamMember name={t("members.michel.name")} title={t("members.michel.title")} image="/images/team/michel.jpg" />
                        <TeamMember name={t("members.roelof.name")} title={t("members.roelof.title")} image="/images/team/roelof.jpg" />
                    </div>
                    <div className="px-10 sm:px-20 md:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-18">
                        <div className="md:col-span-2 lg:col-span-3">
                            <h3 className="text-2xl font-bold">{t("title-docenten")}</h3>
                        </div>
                        <TeamMember name={t("members.jasper-heesbeen.name")} title={t("members.jasper-heesbeen.title")} image="/images/team/jasper-heesbeen-docent-wiskunde.jpg" />
                        <TeamMember name={t("members.juliette-alders.name")} title={t("members.juliette-alders.title")} image="/images/team/juliette-alders-docente-wiskunde.jpg" />
                        <TeamMember name={t("members.christiaan-mensink.name")} title={t("members.christiaan-mensink.title")} image="/images/team/christiaan-mensink-docent-economie-en-bedrijfseconomie.jpg" />
                        <TeamMember name={t("members.marloes-willemse.name")} title={t("members.marloes-willemse.title")} image="/images/team/marloes-willemse-docente-aardrijkskunde.jpg" />
                        <TeamMember name={t("members.martin-de-veen.name")} title={t("members.martin-de-veen.title")} image="/images/team/martin-de-veen-docent-geschiedenis.jpg" />
                        <TeamMember name={t("members.bas-van-hassel.name")} title={t("members.bas-van-hassel.title")} image="/images/team/bas-van-hassel-docent-natuurkunde.png" />
                        <TeamMember name={t("members.sander-broekman.name")} title={t("members.sander-broekman.title")} image="/images/team/sander-broekman-docent-scheikunde.jpg" />
                        <TeamMember name={t("members.judith-luiken.name")} title={t("members.judith-luiken.title")} image="/images/team/judith.jpg" />
                    </div>
                </div>
            </div>
            <div className="relative bg-lichtblauw/11 py-24 overflow-hidden">
                <svg className="absolute -bottom-[160px] left-1/2 z-0" width="505" height="269" viewBox="0 0 139 74" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M44.7851 1.42243C40.988 -0.474142 36.5468 -0.474142 32.7498 1.42243C25.0878 5.24943 12.0354 12.0229 2.98341 16.5611C1.15268 17.4755 0 19.3382 0 21.3703C0 23.4023 1.15268 25.265 2.98341 26.1794C24.7488 37.0508 76.4161 63.7043 94.2149 72.5776C98.012 74.4741 102.453 74.4741 106.25 72.5776C113.912 68.7506 126.931 61.9771 136.017 57.4389C137.847 56.5245 139 54.6618 139 52.6297C139 50.5977 137.847 48.735 136.017 47.8206C114.251 36.9492 62.5839 10.2957 44.7851 1.42243Z" fill="#FBBF10" />
                </svg>
                <div className="base-container text-center">
                    <h2 className="text-3xl font-bold text-lichtblauw mb-6">{t("partner")}</h2>
                    <a href="https://www.google.com" className="inline-flex py-24" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/logo-google.png" alt="Google" width={273} height={92} sizes="273px" />
                    </a>
                </div>
            </div>
        </>
    );
}
