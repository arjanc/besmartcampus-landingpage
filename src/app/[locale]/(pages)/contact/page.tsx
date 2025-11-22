import Image from 'next/image';
import { Faq, FaqItem } from "@/components/faq";
import { ContactBlock } from "@/components/blocks/contactBlock";
import { useTranslations } from 'next-intl';

export default function ContactPage() {
    const t = useTranslations('contact');
    return (
        <>
        <div className="relative">
            <div className="base-container lg:grid lg:grid-cols-2 lg:gap-18 pt-24">
                <div className="pb-24">
                    <h3 className="text-lichtblauw mb-8">{t('title')}</h3>
                    <Faq>
                        <FaqItem question={t('faq.question1')} answer={t('faq.anwer1')} />
                        <FaqItem question={t('faq.question2')} answer={t('faq.anwer2')} />
                        <FaqItem question={t('faq.question3')} answer={t('faq.anwer3')} />
                        <FaqItem question={t('faq.question4')} answer={t('faq.anwer4')} />
                        <FaqItem question={t('faq.question5')} answer={t('faq.anwer5')} />
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
                    <strong>{t('adress.companyName')}</strong><br/>
                    {t('adress.chamberOfCommerce')}<br/>
                    <strong><a href={`mailto:${t('adress.email')}`}>{t('adress.email')}</a><br/></strong>
                    <a href={`tel:${t('adress.phone')}`}>{t('adress.phone')}</a>
                </p>
            </div>
        </div>
        </>
    );
}
