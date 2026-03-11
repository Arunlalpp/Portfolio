export interface Project {
    id: number
    year: string
    category: string
    title: string
    subtitle: string
    image: string
    color: string
}

export const projects: Project[] = [
    {
        id: 1,
        year: "2024",
        category: "Rebranding",
        title: "Sensaya",
        subtitle: "Memories in the making",
        image: "https://picsum.photos/1200/900?random=1",
        color: "#cfc9b9",
    },
    {
        id: 2,
        year: "2024",
        category: "Rebranding",
        title: "Ensa",
        subtitle: "Modern identity shift",
        image: "https://picsum.photos/1200/900?random=2",
        color: "#9b8df2",
    },
    {
        id: 3,
        year: "2023",
        category: "Visual Identity",
        title: "Monarc",
        subtitle: "Luxury refined",
        image: "https://picsum.photos/1200/900?random=3",
        color: "#f2b98d",
    },
]