import { supabase } from "./supabase";

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    quote: string;
}

// Only approved rows are readable by the public key (enforced by RLS).
export async function getApprovedTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
        .from("testimonials")
        .select("id, name, role, quote")
        .order("created_at", { ascending: true });

    if (error) {
        console.error("[testimonials] Failed to load testimonials:", error.message);
        return [];
    }
    return data;
}
