import { contactEmail } from "../data/content";

interface Notification {
    subject: string;
    text: string;
    replyTo?: string;
}

// Emails the site owner via Resend. Returns false (and logs) instead of
// throwing, so callers can still succeed when the message was saved elsewhere.
export async function sendNotification({ subject, text, replyTo }: Notification) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.warn("[email] RESEND_API_KEY is not set; skipping email notification.");
        return false;
    }

    let response: Response;
    try {
        response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
                to: [process.env.CONTACT_TO_EMAIL || contactEmail],
                reply_to: replyTo,
                subject,
                text,
            }),
        });
    } catch (error) {
        console.error("[email] Failed to reach email service:", error);
        return false;
    }

    if (!response.ok) console.error("[email] Failed to send email:", response.status, await response.text());
    return response.ok;
}

export const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
