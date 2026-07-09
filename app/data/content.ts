export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export interface SocialLink {
    icon: string;
    href: string;
    label: string;
}

export const socialLinks: SocialLink[] = [
    { icon: "fa-brands fa-github", href: "https://github.com/", label: "GitHub" },
    { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: "fa-solid fa-envelope", href: "mailto:arunlalpp.softius@gmail.com", label: "Email" },
];

export const footerSocialLinks: SocialLink[] = [
    { icon: "fa-brands fa-github", href: "https://github.com/", label: "GitHub" },
    { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: "fa-brands fa-x-twitter", href: "https://x.com/", label: "X" },
];

export type ProjectMedia =
    | { type: "image"; src: string }
    | { type: "video"; poster: string; mp4: string; webm: string };

export interface Project {
    title: string;
    categories: string[];
    info: string;
    media: ProjectMedia;
}

export const projects: Project[] = [
    {
        title: "Order Platform",
        categories: ["Backend", "Fintech"],
        info: "Node.js / PostgreSQL / AWS",
        media: { type: "image", src: "/assets/img/portfolio/800/portfolio-1.jpg" },
    },
    {
        title: "Realtime Dashboard",
        categories: ["Frontend"],
        info: "React / TypeScript / WebSockets",
        media: { type: "image", src: "/assets/img/portfolio/800/portfolio-2.jpg" },
    },
    {
        title: "Storefront Redesign",
        categories: ["Full Stack"],
        info: "Next.js / Tailwind / Stripe",
        media: {
            type: "video",
            poster: "/assets/vids/800/video-4-800.jpg",
            mp4: "/assets/vids/800/video-4-800.mp4",
            webm: "/assets/vids/800/video-4-800.webm",
        },
    },
    {
        title: "Internal Tooling",
        categories: ["DevOps"],
        info: "Docker / CI-CD / Terraform",
        media: { type: "image", src: "/assets/img/portfolio/800/portfolio-3.jpg" },
    },
    {
        title: "Mobile Companion App",
        categories: ["Mobile"],
        info: "React Native / GraphQL",
        media: { type: "image", src: "/assets/img/portfolio/800/portfolio-4.jpg" },
    },
];

export interface Service {
    titleLines: [string, string];
    description: string;
}

export const services: Service[] = [
    {
        titleLines: ["Backend", "Development"],
        description:
            "Designing reliable APIs and services with a focus on data integrity, performance, and clean architecture that scales with the product.",
    },
    {
        titleLines: ["Frontend", "Engineering"],
        description:
            "Building fast, accessible interfaces with React and TypeScript, translating design intent into interactions that feel effortless.",
    },
    {
        titleLines: ["Cloud &", "DevOps"],
        description:
            "Setting up CI/CD pipelines, containerized deployments, and monitoring so teams can ship confidently and often.",
    },
    {
        titleLines: ["API", "Design"],
        description:
            "Modeling clear, versioned contracts between services, prioritizing consistency and developer experience for every consumer.",
    },
    {
        titleLines: ["Product", "Engineering"],
        description:
            "Partnering closely with product and design to turn ambiguous problems into shipped features that actually solve them.",
    },
];

export interface Testimonial {
    quote: string;
    author: string;
}

export const testimonials: Testimonial[] = [
    {
        quote:
            "Arun consistently turns vague requirements into clean, well-tested systems. He communicates trade-offs clearly and ships on time.",
        author: "Placeholder — Engineering Manager",
    },
    {
        quote:
            "One of the most reliable engineers I've worked with — thorough code reviews, sensible architecture calls, and no drama.",
        author: "Placeholder — Product Lead",
    },
    {
        quote:
            "Great at picking up ambiguous problems and driving them to a working solution without losing sight of maintainability.",
        author: "Placeholder — Colleague",
    },
];

export interface TechStackItem {
    name: string;
    category: string;
    experience: string;
}

export const techStack: TechStackItem[] = [
    { name: "TypeScript", category: "Languages", experience: "5+ years" },
    { name: "React / Next.js", category: "Frontend", experience: "5+ years" },
    { name: "Node.js", category: "Backend", experience: "5+ years" },
    { name: "PostgreSQL", category: "Databases", experience: "4+ years" },
    { name: "AWS", category: "Cloud", experience: "3+ years" },
    { name: "Docker", category: "DevOps", experience: "3+ years" },
];
