import Image from 'next/image';
import { Faq, FaqItem } from "@/components/faq";
import { ContactBlock } from "@/components/blocks/contactBlock";

export default function ContactPage() {
    return (
        <>
        <div className="relative">
            <div className="base-container lg:grid lg:grid-cols-2 lg:gap-18 pt-24">
                <div className="pb-24">
                    <h3 className="text-lichtblauw mb-8">Veelgestelde vragen</h3>
                    <Faq>
                        <FaqItem question="Is het veilig?" answer="Ja. Het BeSmart Learning Platform draait in een beveiligde, afgeschermde omgeving. Geen advertenties, geen afleiding." />
                        <FaqItem question="Is het gratis?" answer="Scholen betalen een licentie. Voor leerlingen is het gebruik volledig gratis." />
                        <FaqItem question="Hoe werkt het?" answer="Leerlingen gaan naar het platform, krijgen uitleg, oefenen en krijgen realtime hulp van de AI. En via het dashboard heb je als leerling altijd het overzicht en houdt de docent de regie." />
                        <FaqItem question="Hoe integreert het met bijvoorbeeld Magister?" answer="Via een directe koppeling." />
                        <FaqItem question="Hoeveel tijd kost het?" answer="Het platform sluit aan op bestaande lesprogramma’s en examendomeinen. Geen extra werkdruk voor docenten." />
                    </Faq>
                </div>
                <div className="flex justify-end">
                    <Image src="/images/faq.png" alt="FAQ" className="-mr-8 lg:mr-0 lg:absolute lg:right-0" width={475} height={331} sizes="475px" />
                </div>
            </div>
        </div>
        <ContactBlock />
        <div className="bg-lichtblauw/34">
            <div className="base-container py-24">
                <p className="p-0 max-w-[200px] mx-auto lg:mx-0">
                    <strong>BeSmart Campus B.V.</strong><br/>
                    KvK: 12345678<br/>
                    <strong><a href="mailto:info@besmartcampus.nl">info@besmartcampus.nl</a><br/></strong>
                    <a href="tel:+31205616008">+31 20 561 6008</a>
                </p>
            </div>
        </div>
        </>
    );
}