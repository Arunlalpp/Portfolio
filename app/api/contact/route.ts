import { supabase } from "../../lib/supabase";
import { contactEmail } from "../../data/content";

interface ContactPayload {
    name: string;
    email: string;
    company: string | null;
    message: string;
}

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function parsePayload(body: unknown): ContactPayload | string {
    if (typeof body !== "object" || body === null) return "Invalid request.";
    const fields = body as Record<string, unknown>;
    const name = String(fields.name ?? "").trim();
    const email = String(fields.email ?? "").trim();
    const company = String(fields.company ?? "").trim() || null;
    const message = String(fields.message ?? "").trim();

    // Mirrors the check constraints on the contact_messages table.
    if (name.length < 1 || name.length > 120) return "Please enter your name.";
    if (email.length > 254 || !EMAIL_PATTERN.test(email)) return "Please enter a valid email address.";
    if (company && company.length > 160) return "Company name is too long.";
    if (message.length < 10) return "Please write at least a sentence so I know how I can help.";
    if (message.length > 5000) return "Message is too long (5000 characters max).";

    return { name, email, company, message };
}

async function saveMessage(payload: ContactPayload) {
    const { error } = await supabase.from("contact_messages").insert(payload);
    if (error) console.error("[contact] Failed to save message:", error.message);
    return !error;
}

async function sendEmail(payload: ContactPayload) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.warn("[contact] RESEND_API_KEY is not set; skipping email notification.");
        return false;
    }

    let response: Response;
    try {
        response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
                to: [process.env.CONTACT_TO_EMAIL || contactEmail],
                reply_to: payload.email,
                subject: `Portfolio message from ${payload.name}${payload.company ? ` (${payload.company})` : ""}`,
                text: [
                    `Name: ${payload.name}`,
                    `Email: ${payload.email}`,
                    `Company / Role: ${payload.company ?? "—"}`,
                    "",
                    payload.message,
                ].join("\n"),
            }),
        });
    } catch (error) {
        console.error("[contact] Failed to reach email service:", error);
        return false;
    }

    if (!response.ok) console.error("[contact] Failed to send email:", response.status, await response.text());
    return response.ok;
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

    const [saved, emailed] = await Promise.all([saveMessage(payload), sendEmail(payload)]);
    if (!saved && !emailed) {
        return Response.json({ error: "Message could not be delivered." }, { status: 502 });
    }

    return Response.json({ ok: true });
}
