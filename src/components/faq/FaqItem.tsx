import { twMerge } from "tailwind-merge";

interface IFaqItem {
    className?: string;
    question: string;
    answer: string;
}

export const FaqItem = ({ className, question, answer }: IFaqItem) => {
    return (
        <div className={twMerge("bg-geel/12 p-4 rounded-xl", className)}>
            <h4>{question}</h4>
            <p className="p-0">{answer}</p>
        </div>
    );
}