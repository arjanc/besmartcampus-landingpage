import Image from 'next/image';

interface TeamMemberProps {
    className?: string;
    name: string;
    title: string;
    image: string;
}

export const TeamMember = ({ className, name, title, image }: TeamMemberProps) => {
    return (
        <div className={className}>
            <div className="relative bg-gray-200 aspect-square rounded-full overflow-hidden mb-8">
                <Image
                    src={image}
                    alt="Team member"
                    fill
                    className="object-cover"
                    sizes="475px"
                />
            </div>
            <span className="block font-bold">{name}</span>
            <span>{title}</span>
        </div>
    );
}