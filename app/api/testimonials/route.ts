import { supabase } from "../../lib/supabase";
import { sendNotification, EMAIL_PATTERN } from "../../lib/email";

interface TestimonialPayload {
    name: string;
    role: string;
    email: string;
    quote: string;
}

function parsePayload(body: unknown): TestimonialPayload | string {
    if (typeof body !== "object" || body === null) return "Invalid request.";
    const fields = body as Record<string, unknown>;
    const name = String(fields.name ?? "").trim();
    const role = String(fields.role ?? "").trim();
    const email = String(fields.email ?? "").trim();
    const quote = String(fields.quote ?? "").trim();

    // Mirrors the check constraints on the testimonials table.
    if (name.length < 1 || name.length > 120) return "Please enter your name.";
    if (role.length < 1 || role.length > 160) return "Please enter your role and company.";
    if (email.length > 254 || !EMAIL_PATTERN.test(email)) return "Please enter a valid email address.";
    if (quote.length < 20) return "Please write at least a couple of sentences.";
    if (quote.length > 600) return "Please keep it under 600 characters.";

    return { name, role, email, quote };
}

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: pretend success so bots don't retry.
    if ((body as Record<string, unknown> | null)?.website) {
        return Response.json({ ok: true });
    }

    const payload = parsePayload(body);
    if (typeof payload === "string") {
        return Response.json({ error: payload }, { status: 400 });
    }

    const { error } = await supabase.from("testimonials").insert(payload);
    if (error) {
        console.error("[testimonials] Failed to save testimonial:", error.message);
        return Response.json({ error: "Testimonial could not be saved." }, { status: 502 });
    }

    await sendNotification({
        subject: `New testimonial from ${payload.name} awaiting approval`,
        replyTo: payload.email,
        text: [
            `Name: ${payload.name}`,
            `Role: ${payload.role}`,
            `Email: ${payload.email}`,
            "",
            `"${payload.quote}"`,
            "",
            "To publish it, open the testimonials table in Supabase and set approved = true.",
        ].join("\n"),
    });

    return Response.json({ ok: true });
}
