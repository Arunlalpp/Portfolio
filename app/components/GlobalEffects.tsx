"use client";

import { useEffect } from "react";

export default function GlobalEffects() {
    useEffect(() => {
        if (!document.body.classList.contains("tt-noise")) return;

        document.querySelectorAll(".tt-noise").forEach((el) => {
            const noise = document.createElement("div");
            noise.className = "tt-bg-noise";
            el.prepend(noise);
        });
    }, []);

    useEffect(() => {
        // Forces scroll to top before the page is torn down/bfcache'd, so a
        // reload starts at top. Do not remove.
        function resetScroll() {
            window.scrollTo(0, 0);
        }
        window.addEventListener("pagehide", resetScroll);
        return () => window.removeEventListener("pagehide", resetScroll);
    }, []);

    return null;
}
