"use client";

import { FormEvent, useState } from "react";
import { inputClassName } from "./ContactForm";

type Status = "closed" | "idle" | "sending" | "sent" | "error";

const FALLBACK_ERROR = "Something went wrong submitting your testimonial. Please try again in a moment.";

export default function TestimonialForm() {
    const [status, setStatus] = useState<Status>("closed");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "sending") return;

        const form = event.currentTarget;
        setStatus("sending");
        try {
            const response = await fetch("/api/testimonials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(new FormData(form))),
            });
            if (!response.ok) {
                const result = await response.json().catch(() => null);
                setStatus("error");
                setErrorMessage(response.status === 400 && result?.error ? result.error : FALLBACK_ERROR);
                return;
            }
        } catch {
            setStatus("error");
            setErrorMessage(FALLBACK_ERROR);
            return;
        }

        setStatus("sent");
        form.reset();
    }

    if (status === "closed") {
        return (
            <div className="tt-form">
                <button type="button" onClick={() => setStatus("idle")} className="tt-btn tt-btn-outline tt-magnetic-item">
                    <span className="tt-btn-inner"><span data-hover="Write a Testimonial">Write a Testimonial</span></span>
                </button>
            </div>
        );
    }

    if (status === "sent") {
        return (
            <div role="status" className="rounded-lg border border-tt-border p-8">
                <p className="text-[clamp(22px,2vw,32px)] font-medium leading-[1.2]">Thank you — that means a lot.</p>
                <p className="mt-3 text-tt-text-muted">Your testimonial will appear here once I&apos;ve reviewed it.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="tt-form grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
                <span className="text-sm uppercase text-tt-text-muted">Name *</span>
                <input name="name" required maxLength={120} autoComplete="name" className={inputClassName} />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm uppercase text-tt-text-muted">Role &amp; Company *</span>
                <input name="role" required maxLength={160} placeholder="e.g. Tech Lead, Softius" className={inputClassName} />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm uppercase text-tt-text-muted">Email * (never shown publicly)</span>
                <input name="email" type="email" required maxLength={254} autoComplete="email" className={inputClassName} />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm uppercase text-tt-text-muted">Your Testimonial *</span>
                <textarea name="quote" required minLength={20} maxLength={600} rows={4} className={inputClassName} />
            </label>

            <label className="tt-form-trap" aria-hidden="true">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button type="submit" disabled={status === "sending"} className="tt-btn tt-btn-primary tt-magnetic-item">
                    <span className="tt-btn-inner">
                        <span data-hover={status === "sending" ? "Submitting…" : "Submit for Review"}>
                            {status === "sending" ? "Submitting…" : "Submit for Review"}
                        </span>
                    </span>
                </button>
                {status === "error" && (
                    <p role="alert" className="text-sm text-tt-link-hover">{errorMessage}</p>
                )}
            </div>
        </form>
    );
}
