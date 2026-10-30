export const contactEmail = "arunlalpp@gmail.com";

// Flip `open` to false once you've accepted an offer to hide the "open to work" sticker.
export const availability = {
    open: true,
    label: "Open to new roles",
};

export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
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
    { icon: "fa-solid fa-envelope", href: `mailto:${contactEmail}`, label: "Email" },
];

export const footerSocialLinks: SocialLink[] = [
    { icon: "fa-brands fa-github", href: "https://github.com/Arunlalpp", label: "GitHub" },
    { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: "fa-brands fa-x-twitter", href: "https://x.com/", label: "X" },
];

export type ProjectMedia =
    | { type: "image"; src: string }
    // Tall full-page capture that pans top-to-bottom inside the hover preview.
    | { type: "scroll"; src: string; width: number; height: number }
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
        title: "Happenstance Store",
        categories: ["Frontend", "Live"],
        info: "E-commerce Store / Footwear Brand",
        url: "https://happenstance.com/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/happenstance-store-full.jpg", width: 860, height: 5064 },
    },
    {
        title: "Ikon Formulations",
        categories: ["Frontend", "Live"],
        info: "Marketing Website / Product Catalog",
        url: "https://ikonformulations.in/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/ikon-formulations-scroll.jpg", width: 600, height: 6280 },
    },
    {
        title: "Classic Group",
        categories: ["Frontend", "Live"],
        info: "Marketing Website / Corporate Site",
        url: "https://classicgroup.co.in/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/classic-group-scroll.jpg", width: 600, height: 6280 },
    },
    {
        title: "Maillard",
        categories: ["Frontend"],
        info: "Marketing Website / Scroll-Driven Video Landing Page",
        url: "https://maillard-web.vercel.app/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/maillard-web-scroll.jpg", width: 600, height: 6280 },
    },
    {
        title: "Carewell Dental Experts",
        categories: ["Frontend"],
        info: "Marketing Website / Clinic Booking Site",
        url: "https://dental-clinic-website-v7t7.vercel.app/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/carewell-dental-experts-scroll.jpg", width: 600, height: 6280 },
    },
    {
        title: "OGGI Fashion",
        categories: ["Frontend"],
        info: "Marketing Website / Menswear Brand",
        url: "https://oggi-fashion.vercel.app/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/oggi-fashion-scroll.jpg", width: 600, height: 6280 },
    },
    {
        title: "Happenstance Sandal",
        categories: ["Frontend"],
        info: "Product Landing Page / 3D Exploded View",
        url: "https://happenstance-sandal.vercel.app/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/happenstance-sandal-scroll.jpg", width: 600, height: 6280 },
    },
    {
        title: "Happenstance Sandal — Studio",
        categories: ["Frontend"],
        info: "Product Landing Page / Studio Photography",
        url: "https://happenstance-sandal-html.vercel.app/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/happenstance-sandal-html-scroll.jpg", width: 600, height: 6280 },
    },
    {
        title: "Emirates Car Care",
        categories: ["Full Stack"],
        info: "Web App / Booking & Auth",
        url: "https://emirates-car-care.vercel.app/login",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/emirates-car-care-app.jpg", width: 720, height: 3600 },
    },
    {
        title: "OGGI Store Manager",
        categories: ["Full Stack"],
        info: "Web App / Store Management",
        url: "https://employee-managment-swart.vercel.app/login",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/oggi-store-manager-app.jpg", width: 720, height: 5400 },
    },
    {
        title: "Carewell Dental — Clinic PWA",
        categories: ["Full Stack"],
        info: "PWA / Clinic Management",
        url: "https://github.com/Arunlalpp/dental-clinic-pwa",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/carewell-dental-pwa.jpg", width: 720, height: 3600 },
    },
    {
        title: "Kalyani Kalakriti Foundation",
        categories: ["Frontend"],
        info: "Marketing Website",
        url: "https://kalyani-kalakriti.vercel.app/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/kalyani-kalakriti-scroll.jpg", width: 600, height: 3000 },
    },
    {
        title: "Leggett Property Management",
        categories: ["Frontend"],
        info: "Marketing Website / Lead Generation",
        url: "https://leggett-website.vercel.app/",
        media: { type: "scroll", src: "/assets/img/portfolio/1920/leggett-property-scroll.jpg", width: 600, height: 6280 },
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
            "Building fast, responsive web apps with React, Next.js, Vue, and Nuxt, structured around reusable components that stay easy to maintain.",
    },
    {
        titleLines: ["Mobile", "Development"],
        description:
            "Developing cross-platform mobile apps with React Native, sharing logic and UI patterns with the web codebase wherever it makes sense.",
    },
    {
        titleLines: ["UI/UX", "Implementation"],
        description:
            "Turning designs into pixel-accurate, responsive interfaces with HTML, CSS, SCSS, and Tailwind CSS, layered with interactive, polished user experiences.",
    },
    {
        titleLines: ["APIs &", "Integration"],
        description:
            "Connecting frontends to backend services and building server-side features with PHP and Laravel, with clean, predictable data flow between the two.",
    },
    {
        titleLines: ["Debugging", "& Testing"],
        description:
            "Tracking down bugs, testing features end to end, and working closely with teammates to turn requirements into production-ready software.",
    },
];

export interface TechStackItem {
    name: string;
    category: string;
    experience: string;
}

export const techStack: TechStackItem[] = [
    { name: "JavaScript / TypeScript", category: "Languages", experience: "4+ years" },
    { name: "React JS / Next JS", category: "Frontend", experience: "Since 2022" },
    { name: "Vue JS / Nuxt JS", category: "Frontend", experience: "Since 2024" },
    { name: "React Native", category: "Mobile", experience: "Since 2022" },
    { name: "HTML / CSS / SCSS / Tailwind", category: "UI", experience: "4+ years" },
    { name: "PHP / Laravel", category: "Backend", experience: "Since 2019" },
];

export interface ExperienceItem {
    company: string;
    role: string;
    location: string;
    period: string;
    highlights: string[];
}

export const experience: ExperienceItem[] = [
    {
        company: "Softius Technologies",
        role: "Full Stack Developer",
        location: "Kochi, Kerala · On-site",
        period: "Jun 2024 — Aug 2026",
        highlights: [
            "Developed modern web applications with Nuxt JS, building responsive, reusable UI components.",
            "Integrated frontend interfaces with APIs and implemented interactive user experiences.",
            "Collaborated with developers to deliver maintainable, production-ready features from project requirements.",
        ],
    },
    {
        company: "Vonnue Innovations Pvt Ltd",
        role: "Software Developer",
        location: "Sulthan Bathery, Wayanad, Kerala",
        period: "Jan 2022 — Mar 2024",
        highlights: [
            "Built web and mobile applications with React JS and React Native, alongside HTML, JavaScript, and CSS.",
            "Developed efficient, tested software solutions across multiple projects.",
            "Worked with the team to identify and resolve bugs, and contributed to algorithm and flowchart design.",
        ],
    },
    {
        company: "Sisel Enterprises",
        role: "Junior Laravel Developer",
        location: "Coimbatore",
        period: "Mar 2021 — Jun 2021",
        highlights: [],
    },
    {
        company: "Learnovate Ecommerce",
        role: "Web Developer",
        location: "Pune",
        period: "Jan 2021 — Feb 2021",
        highlights: [],
    },
];

export const education = {
    school: "Rathinam Technical Campus, Coimbatore",
    degree: "B.E. Computer Science",
    period: "2016 — 2020",
};
