"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export function useFadeInUp<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useGSAP(() => {
        const el = ref.current;
        if (!el) return;

        el.style.willChange = "transform";

        const isTransitionPage = document.body.classList.contains("tt-transition");
        const startsInViewport = ScrollTrigger.isInViewport(el, 0.2);
        const delay = isTransitionPage && startsInViewport ? 1.2 : 0.3;

        const timeline = gsap.timeline({
            scrollTrigger: { trigger: el, start: "top bottom" },
        });
        timeline.from(el, { duration: 2, autoAlpha: 0, y: 50, ease: "expo.out", clearProps: "all" }, `+=${delay}`);
    }, []);

    return ref;
}
