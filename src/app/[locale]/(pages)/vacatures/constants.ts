import RelatieManagerContent from "./content/relatiemanagerContent";
import OnboardingManagerContent from "./content/onboardingManagerContent";
import FoundingEngineerContent from "./content/foundingEngineerContent";
import BackendEngineerContent from "./content/backendEngineerContent";
import FrontendEngineerContent from "./content/frontendEngineerContent";
import MarkerterContent from "./content/markerterContent";

export type Vacature = {
    id: number;
    title: string;
    href: string;
    content: React.ComponentType;
}

export const vacatures: Vacature[] = [
    {
        id: 1,
        title: 'Relatiemanager',
        href: '/vacatures/relatiemanager',
        content: RelatieManagerContent
    },
    {
        id: 2,
        title: 'Onboarding manager',
        href: '/vacatures/onboarding-manager',
        content: OnboardingManagerContent
    },
    {
        id: 3,
        title: 'Founding engineer',
        href: '/vacatures/founding-engineer',
        content: FoundingEngineerContent
    },
    {
        id: 4,
        title: 'Backend engineer',
        href: '/vacatures/backend-engineer',
        content: BackendEngineerContent
    },
    {
        id: 5,
        title: 'Frontend engineer',
        href: '/vacatures/frontend-engineer',
        content: FrontendEngineerContent
    },
    {
        id: 6,
        title: 'Marketeer',
        href: '/vacatures/marketeer',
        content: MarkerterContent
    },
];