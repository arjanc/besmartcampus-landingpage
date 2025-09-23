'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from 'next/image';
import CustomButton from '@/components/ui/custom-button';

interface IContactBlock {
    className?: string;
}

export const ContactBlock = ({ className }: IContactBlock) => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const formValues = {
            name: formData.get('name'),
            organization: formData.get('organization'),
            email: formData.get('email'),
            message: formData.get('message')
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
                    <h2 className="text-3xl font-bold text-donkerblauw mb-4">Bedankt voor uw bericht!</h2>
                    <p>Uw bericht is succesvol verstuurd. We nemen zo snel mogelijk contact met u op.</p>
                </div>
            </div>
        );
    }
    return (
        <div className={twMerge("relative bg-lichtblauw/11 py-24", className)}>
            <Image src="/images/logo-elm-2.svg" className="absolute bottom-0 z-0 left-0 -translate-x-1/2 w-[270px] h-auto translate-y-[10%]" alt="BSC logo element" width={141} height={74} sizes="141px" />
            <div className="base-container relative z-1">
                <h2 className="text-3xl font-bold text-donkerblauw mb-4">Contact</h2>
                <p>Vraag nu een demo aan en ontdek binnen 10 minuten hoe BeSmart jouw school of klas vooruithelpt – met AI die werkt, omdat het gebouwd is mét docenten. Al meer dan honderden leerlingen gebruiken het. En we staan pas aan het begin.</p>
                <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-18">
                    <div className="lg:col-span-5">
                        <input 
                            name="name"
                            type="text" 
                            placeholder="naam" 
                            className="w-full font-bold placeholder-donkerblauw placeholder:font-bold border-donkerblauw border-b-1 pt-4 pb-2 mb-4 outline-none" 
                        />
                        <input 
                            name="organization"
                            type="text" 
                            placeholder="school/organisatie" 
                            className="w-full font-bold placeholder-donkerblauw placeholder:font-bold border-donkerblauw border-b-1 pt-4 pb-2 mb-4 outline-none" 
                        />
                        <input 
                            name="email"
                            type="email" 
                            placeholder="e-mailadres" 
                            className="w-full font-bold placeholder-donkerblauw placeholder:font-bold border-donkerblauw border-b-1 pt-4 pb-2 mb-4 outline-none" 
                        />
                    </div>
                    <div className="lg:col-span-7">
                        <textarea 
                            name="message"
                            className="bg-white w-full min-h-[200px] rounded-xl border-donkerblauw border-1 p-4 font-bold outline-none mb-12" 
                            placeholder="Uw bericht" 
                        />
                        <div>
                            <CustomButton type="submit">Verstuur</CustomButton>
                            {submitting && <span className="ml-4">Bezig met versturen...</span>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}