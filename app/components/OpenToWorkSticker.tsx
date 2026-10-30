"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { availability } from "../data/content";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";

const RING_TEXT = `${availability.label} • Let's talk • `;

// Fixed corner sticker: pops in once the hero is scrolled past, spins faster
// with scroll velocity, and tucks away when the contact section is reached.
export default function OpenToWorkSticker() {
    const rootRef = useRef<HTMLAnchorElement>(null);
    const ringRef = useRef<SVGSVGElement>(null);
    const spinRef = useRef<gsap.core.Tween | null>(null);
    const scrollToAnchor = useScrollToAnchor();

    useGSAP(() => {
        const root = rootRef.current;
        const ring = ringRef.current;
        if (!root || !ring) return;

        gsap.set(root, { autoAlpha: 0, scale: 0, rotate: -120 });

        let isPastHero = false;
        let isAtContact = false;
        function updateVisibility() {
            if (isPastHero && !isAtContact) {
                gsap.to(root, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(1.8)", overwrite: true });
            } else {
                gsap.to(root, { autoAlpha: 0, scale: 0, rotate: -120, duration: 0.4, ease: "power2.in", overwrite: true });
            }
        }

        ScrollTrigger.create({
            trigger: "#page-header",
            start: "bottom 80%",
            onEnter: () => { isPastHero = true; updateVisibility(); },
            onLeaveBack: () => { isPastHero = false; updateVisibility(); },
        });
        ScrollTrigger.create({
            trigger: "#contact",
            start: "top 85%",
            onEnter: () => { isAtContact = true; updateVisibility(); },
            onLeaveBack: () => { isAtContact = false; updateVisibility(); },
        });

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const spin = gsap.to(ring, { rotate: 360, duration: 14, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
        spinRef.current = spin;

        ScrollTrigger.create({
            onUpdate: (self) => {
                const boost = Math.min(Math.abs(self.getVelocity()) / 250, 8);
                spin.timeScale(1 + boost);
                gsap.to(spin, { timeScale: 1, duration: 1.2, ease: "power2.out", overwrite: true });
            },
        });
    });

    function setSpinSpeed(timeScale: number) {
        if (spinRef.current) gsap.to(spinRef.current, { timeScale, duration: 0.5, overwrite: true });
    }

    if (!availability.open) return null;

    return (
        <a
            ref={rootRef}
            href="#contact"
            onClick={scrollToAnchor}
            onMouseEnter={() => setSpinSpeed(5)}
            onMouseLeave={() => setSpinSpeed(1)}
            aria-label={`${availability.label} — get in touch`}
            className="invisible fixed bottom-[15px] left-[15px] z-[998] block min-[1401px]:bottom-[30px] min-[1401px]:left-[30px]"
        >
            <span className="tt-magnetic-item relative block size-[84px] sm:size-[112px]">
                <span className="absolute inset-0 rounded-full bg-tt-main shadow-[0_10px_30px_rgb(0_0_0/0.35)]" />
                <svg ref={ringRef} viewBox="0 0 100 100" className="absolute inset-0 size-full text-white" aria-hidden="true">
                    <defs>
                        <path id="otw-ring-path" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                    </defs>
                    <text fill="currentColor" fontSize="10" fontWeight="600" letterSpacing="1.2" style={{ textTransform: "uppercase" }}>
                        <textPath href="#otw-ring-path" textLength="228" lengthAdjust="spacing">
                            {RING_TEXT}
                        </textPath>
                    </text>
                </svg>
                <span className="absolute inset-[28%] flex items-center justify-center rounded-full bg-[#0a0a0a] text-white">
                    <i className="fa-solid fa-briefcase text-[14px] sm:text-[18px]" />
                    <span className="absolute right-[6%] top-[6%] flex size-2.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                    </span>
                </span>
            </span>
        </a>
    );
}
