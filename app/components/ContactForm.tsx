"use client";

import { FormEvent, useState } from "react";
import { contactEmail } from "../data/content";

type Status = "idle" | "sending" | "sent" | "error";

const inputClassName =
    "w-full rounded-md border border-tt-border bg-transparent px-4 py-3 text-base text-tt-text placeholder:text-tt-text-muted focus:border-tt-main focus:outline-none";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "sending") return;

        const form = event.currentTarget;
        const data = new FormData(form);

        const message = String(data.get("message") ?? "").trim();
        if (message.length < 10) {
            setStatus("error");
            setErrorMessage("Please write at least a sentence so I know how I can help.");
            return;
        }

        setStatus("sending");
        const fallback = `Something went wrong sending your message. Please email me directly at ${contactEmail}.`;
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(data)),
            });
            if (!response.ok) {
                const result = await response.json().catch(() => null);
                setStatus("error");
                setErrorMessage(response.status === 400 && result?.error ? result.error : fallback);
                return;
            }
        } catch {
            setStatus("error");
            setErrorMessage(fallback);
            return;
        }

        setStatus("sent");
        form.reset();
    }

    if (status === "sent") {
        return (
            <div role="status" className="rounded-lg border border-tt-border p-8">
                <p className="text-[clamp(22px,2vw,32px)] font-medium leading-[1.2]">Thanks — your message is in.</p>
                <p className="mt-3 text-tt-text-muted">I usually reply within a day or two.</p>
                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="tt-magnetic-item mt-6 rounded-md border border-tt-border px-4 py-2 text-sm"
                >
                    Send another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate={false}>
            <label className="flex flex-col gap-2">
                <span className="text-sm uppercase text-tt-text-muted">Name *</span>
                <input name="name" required maxLength={120} autoComplete="name" className={inputClassName} />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm uppercase text-tt-text-muted">Email *</span>
                <input name="email" type="email" required maxLength={254} autoComplete="email" className={inputClassName} />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm uppercase text-tt-text-muted">Company / Role</span>
                <input name="company" maxLength={160} autoComplete="organization" className={inputClassName} />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm uppercase text-tt-text-muted">Message *</span>
                <textarea name="message" required minLength={10} maxLength={5000} rows={5} className={inputClassName} />
            </label>

            <label className="hidden" aria-hidden="true">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="tt-magnetic-item rounded-md bg-tt-main px-6 py-3 text-sm uppercase text-white disabled:opacity-50"
                >
                    {status === "sending" ? "Sending…" : "Send Message"}
                </button>
                {status === "error" && (
                    <p role="alert" className="text-sm text-tt-link-hover">{errorMessage}</p>
                )}
            </div>
        </form>
    );
}
