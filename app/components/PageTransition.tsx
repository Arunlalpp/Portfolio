"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const DURATION = 0.7;

export default function PageTransition() {
    useGSAP(() => {
        const pageTransition = document.getElementById("tt-page-transition");
        const contentWrap = document.getElementById("tt-content-wrap");
        if (!pageTransition || !contentWrap) return;

        const timeline = gsap.timeline({ defaults: { duration: DURATION, ease: "expo.inOut" } });

        timeline.to(".tt-ptr-preloader", { autoAlpha: 0 });
        timeline.to(".tt-ptr-overlay-top", { scaleX: 0, transformOrigin: "center left" }, 0.5);
        timeline.to(".tt-ptr-overlay-bottom", { scaleX: 0, transformOrigin: "center right" }, 0.5);
        timeline.from(contentWrap, { autoAlpha: 0, clearProps: "all" }, 0.7);

        if (document.querySelector(".ph-caption-title")) {
            timeline.from(".ph-caption-title .tt-cap-word", { yPercent: 101, ease: "power2.out", clearProps: "yPercent" }, 1.3);
        }
        if (document.querySelector(".ph-caption-description")) {
            timeline.from(".ph-caption-description .tt-cap-word", { yPercent: 101, ease: "power2.out", clearProps: "yPercent" }, 2.1);
        }
        if (document.querySelector(".ph-image img, .ph-video video")) {
            timeline.from(".ph-image img, .ph-video video", { duration: 1.2, scale: 1.2, autoAlpha: 0, ease: "power2.out", clearProps: "all" }, 1);
        }
        if (document.querySelector(".ph-social")) {
            timeline.from(".ph-social > ul > li", { y: 40, autoAlpha: 0, stagger: 0.1, ease: "power2.out", clearProps: "all" }, 1.7);
        }
        if (document.querySelector(".tt-scroll-down")) {
            timeline.from(".tt-scroll-down-inner", { y: 80, autoAlpha: 0, ease: "power2.out", clearProps: "all" }, 1.7);
        }
    }, []);

    return null;
}
