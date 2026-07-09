"use client";

import { RefObject, useEffect } from "react";

export function useDeferredVideoSrc(ref: RefObject<HTMLVideoElement | null>) {
    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        const sources = video.querySelectorAll("source[data-src]");
        if (!sources.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                sources.forEach((source) => {
                    const dataSrc = source.getAttribute("data-src");
                    if (!dataSrc) return;
                    source.setAttribute("src", dataSrc);
                    source.removeAttribute("data-src");
                });

                video.load();
                observer.unobserve(video);
            });
        });

        observer.observe(video);
        return () => observer.disconnect();
    }, [ref]);
}
