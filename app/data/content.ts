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
    { icon: "fa-brands fa-github", href: "https://github.com/Arunlalpp", label: "GitHub" },
    { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: "fa-solid fa-envelope", href: "mailto:arunlalpp@gmail.com", label: "Email" },
];

export const footerSocialLinks: SocialLink[] = [
    { icon: "fa-brands fa-github", href: "https://github.com/Arunlalpp", label: "GitHub" },
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
    url: string;
    media: ProjectMedia;
}

export const projects: Project[] = [
    {
        title: "Emirates Car Care",
        categories: ["Full Stack"],
        info: "Web App / Booking & Auth",
        url: "https://emirates-car-care.vercel.app/login",
        media: { type: "image", src: "/assets/img/portfolio/1920/emirates-car-care.jpg" },
    },
    {
        title: "OGGI Store Manager",
        categories: ["Full Stack"],
        info: "Web App / Store Management",
        url: "https://employee-managment-swart.vercel.app/login",
        media: { type: "image", src: "/assets/img/portfolio/1920/oggi-store-manager.jpg" },
    },
    {
        title: "Kalyani Kalakriti Foundation",
        categories: ["Frontend"],
        info: "Marketing Website",
        url: "https://kalyani-kalakriti.vercel.app/",
        media: { type: "image", src: "/assets/img/portfolio/1920/kalyani-kalakriti.jpg" },
    },
    {
        title: "Ikon Formulations",
        categories: ["Frontend"],
        info: "Marketing Website / Product Catalog",
        url: "https://ikon-website-delta.vercel.app/",
        media: { type: "image", src: "/assets/img/portfolio/1920/ikon-formulations.jpg" },
    },
    {
        title: "Leggett Property Management",
        categories: ["Frontend"],
        info: "Marketing Website / Lead Generation",
        url: "https://leggett-website.vercel.app/",
        media: { type: "image", src: "/assets/img/portfolio/1920/leggett-property.jpg" },
    },
    {
        title: "Classic Group",
        categories: ["Frontend"],
        info: "Marketing Website / Corporate Site",
        url: "https://classicgroup.co.in/",
        media: { type: "image", src: "/assets/img/portfolio/1920/classic-group.jpg" },
    },
];

export interface Service {
    titleLines: [string, string];
    description: string;
}

export const services: Service[] = [
    {
        titleLines: ["Frontend", "Engineering"],
        description:
            "Building fast, accessible interfaces with React, Next.js, and Nuxt.js, translating design intent into interactions that feel effortless.",
    },
    {
        titleLines: ["Mobile", "Development"],
        description:
            "Crafting cross-platform mobile apps with React Native, sharing logic and UI patterns with the web codebase wherever it makes sense.",
    },
    {
        titleLines: ["UI/UX", "Implementation"],
        description:
            "Turning designs into responsive, maintainable UIs with Tailwind CSS and SCSS, layering in animation and micro-interactions that feel polished.",
    },
    {
        titleLines: ["Backend", "& APIs"],
        description:
            "Building REST APIs and services with Node.js, Express, and MongoDB, focused on clean data models and predictable contracts.",
    },
    {
        titleLines: ["Cloud &", "Deployment"],
        description:
            "Deploying and managing applications on Oracle Cloud VMs, handling server setup, environment configuration, and reliable release workflows.",
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
