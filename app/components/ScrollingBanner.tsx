"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import ArrowIcon from "./ArrowIcon";

interface Band {
    text: string;
    className: string;
    opposite: boolean;
}

const bands: Band[] = [
    { text: "Building reliable software", className: "tt-scrolling-text scrt-dyn-separator scrt-color-reverse", opposite: true },
    { text: "Building reliable software", className: "tt-scrolling-text scrt-dyn-separator", opposite: false },
];

const CLONE_COUNT = 6;
const SCROLL_SPEED = 7;

function ScrollingTextBand({ band }: { band: Band }) {
    const bandRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = bandRef.current;
        if (!el) return;

        const inner = el.querySelector(".tt-scrt-inner");
        const contents = el.querySelectorAll(".tt-scrt-content");
        gsap.set(inner, { xPercent: -50 });

        const tween = gsap.to(contents, {
            duration: SCROLL_SPEED,
            xPercent: band.opposite ? 100 : -100,
            repeat: -1,
            ease: "linear",
        });
        tween.totalProgress(0.5);

        let lastScroll = window.pageYOffset;
        const onScroll = () => {
            const scrollingDown = window.pageYOffset > lastScroll;
            el.classList.toggle("scrolled-up", !scrollingDown);
            gsap.to(tween, { timeScale: scrollingDown ? 1 : -1 });
            lastScroll = window.pageYOffset;
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [band.opposite]);

    return (
        <div ref={bandRef} className={band.className} data-opposite-direction={band.opposite || undefined}>
            <div className="tt-scrt-inner">
                {Array.from({ length: CLONE_COUNT }).map((_, index) => (
                    <div className="tt-scrt-content" aria-hidden={index > 0 || undefined} key={index}>
                        {band.text}
                        <span className="tt-scrt-separator">
                            <ArrowIcon />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ScrollingBanner() {
    return (
        <div className="tt-section no-padding padding-top-xlg-40 padding-bottom-xlg-40">
            <div className="tt-section-inner">
                <div className="tt-scrolling-text-crossed">
                    <div className="tt-scrolling-text-crossed-inner">
                        {bands.map((band, index) => (
                            <ScrollingTextBand band={band} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
