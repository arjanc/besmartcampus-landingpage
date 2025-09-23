interface EmailTemplateProps {
    name: string;
    organization: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({ name, organization, email, message }: EmailTemplateProps) => {
    return (
        <div>
            <h1>Contact formulier ingevuld</h1>
            <p>Naam: {name}</p>
            <p>School/organisatie: {organization}</p>
            <p>E-mailadres: {email}</p>
            <p>Bericht: {message}</p>
        </div>
    );
};