import Link from '@/components/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { vacatures } from '../constants';

export default async function VacaturesPage({ params }: { params: Promise<{ vacature: string[] }> }) {
    const { vacature: vacatureSlug } = await params;
    const currentPath = `/vacatures/${vacatureSlug.join('/')}`;
    const vacature = vacatures.find((v) => v.href === currentPath);

    return (
        <>
            <div className="bg-lichtblauw/11">
                <div className="base-container md:grid md:grid-cols-3 gap-18 py-24">
                    <div>
                        <Link href="/vacatures" className="flex items-center gap-2 mb-4 hover:underline"><FontAwesomeIcon icon={faArrowLeft} /> Terug naar overzicht</Link>
                        <h3 className="mb-8 leading-10">{vacature?.title}</h3>
                    </div>
                    <div className="col-span-2">
                        <h4>Over BeSmart Campus</h4>
                        <p>
                            Het Nederlandse onderwijs staat onder druk. Leerlingen lopen vast, de kansenongelijkheid
                            groeit, docenten raken overbelast. Wij geloven dat AI dit kan veranderen, niet door docenten
                            te vervangen, maar door ze te versterken.
                        </p>
                        <p>
                            BeSmart Campus is een AI + onderwijs platform dat nu al draait bij scholen door heel
                            Nederland. Onze persoonlijke AI-tutor staat 24/7 klaar in een veilige, afgeschermde
                            leeromgeving. Met duizenden korte uitlegvideo’s (Tiny Talks™) en meer dan 100.000
                            oefenopgaven helpen we iedere leerling om te leren op het eigen niveau.
                        </p>
                        <p>
                            We zijn een scale-up met grote ambities. Klein team, directe impact, en de kans om mee te
                            bouwen aan iets dat echt het verschil maakt. Onze ambitie? Elke scholier in Nederland
                            toegang geven tot persoonlijk, op maat gemaakt leren. En dat is nog maar het begin.
                        </p>
                        {vacature?.content && <vacature.content />}
                    </div>
                </div>
            </div>
        </>
    );
}
