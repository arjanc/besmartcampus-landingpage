'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from 'next/image';
import CustomButton from '@/components/ui/custom-button';
import { useTranslations } from 'next-intl';
import { Turnstile } from '@marsidev/react-turnstile';

interface IContactBlock {
    className?: string;
}

export const ContactBlock = ({ className }: IContactBlock) => {
    const t = useTranslations('contact');
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!turnstileToken) {
            console.error('Turnstile token is required');
            return;
        }
        
        setSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const formValues = {
            name: formData.get('name'),
            organization: formData.get('organization'),
            email: formData.get('email'),
            message: formData.get('message'),
            turnstileToken
        };

        // sending to api
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuccess(true);
        } catch (error) {
            console.error('Error sending form:', error);
        } finally {
            setSubmitting(false);
        }
    }

    if (success) {
        return (
            <div className={twMerge("relative bg-lichtblauw/11 py-24", className)}>
                <div className="base-container relative z-1">
                    <h2 className="text-3xl font-bold text-donkerblauw mb-4">{t('contactblock.thanks.title')}</h2>
                    <p>{t('contactblock.thanks.description')}</p>
                </div>
            </div>
        );
    }
    return (
        <div className={twMerge("relative bg-lichtblauw/11 py-24", className)}>
            <Image src="/images/logo-elm-2.svg" className="absolute bottom-0 z-0 left-0 -translate-x-1/2 w-[270px] h-auto translate-y-[10%]" alt="BSC logo element" width={141} height={74} sizes="141px" />
            <div className="base-container relative z-1">
                <h2 className="text-3xl font-bold text-donkerblauw mb-4">{t('contactblock.title')}</h2>
                <p>{t('contactblock.description')}</p>
                <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-18">
                    <div className="lg:col-span-5">
                        <input 
                            name="name"
                            type="text" 
                            placeholder={t('contactblock.fields.name')}
                            className="w-full font-bold placeholder-donkerblauw placeholder:font-bold border-donkerblauw border-b-1 pt-4 pb-2 mb-4 outline-none" 
                        />
                        <input 
                            name="organization"
                            type="text" 
                            placeholder={t('contactblock.fields.organisation')}
                            className="w-full font-bold placeholder-donkerblauw placeholder:font-bold border-donkerblauw border-b-1 pt-4 pb-2 mb-4 outline-none" 
                        />
                        <input 
                            name="email"
                            type="email" 
                            placeholder={t('contactblock.fields.email')}
                            className="w-full font-bold placeholder-donkerblauw placeholder:font-bold border-donkerblauw border-b-1 pt-4 pb-2 mb-4 outline-none" 
                        />
                    </div>
                    <div className="lg:col-span-7">
                        <textarea 
                            name="message"
                            className="bg-white w-full min-h-[200px] rounded-xl border-donkerblauw border-1 p-4 font-bold outline-none mb-6" 
                            placeholder={t('contactblock.fields.message')} 
                        />
                        <div className="mb-6">
                            <Turnstile 
                                siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || ''}
                                onSuccess={(token) => setTurnstileToken(token)}
                                onExpire={() => setTurnstileToken(null)}
                                onError={() => setTurnstileToken(null)}
                                options={{
                                    action: 'submit-form',
                                    theme: 'light',
                                    size: 'flexible',
                                    language: 'nl',
                                }}
                            />
                        </div>
                        <div>
                            <CustomButton type="submit" disabled={!turnstileToken || submitting}>
                                {t('contactblock.btnSend')}
                            </CustomButton>
                            {submitting && <span className="ml-4">{t('contactblock.sending')}</span>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}