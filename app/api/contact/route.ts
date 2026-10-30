import { supabase } from "../../lib/supabase";
import { sendNotification, EMAIL_PATTERN } from "../../lib/email";

interface ContactPayload {
    name: string;
    email: string;
    company: string | null;
    message: string;
}

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

function sendEmail(payload: ContactPayload) {
    return sendNotification({
        subject: `Portfolio message from ${payload.name}${payload.company ? ` (${payload.company})` : ""}`,
        replyTo: payload.email,
        text: [
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            `Company / Role: ${payload.company ?? "—"}`,
            "",
            payload.message,
        ].join("\n"),
    });
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
