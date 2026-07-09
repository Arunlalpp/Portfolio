"use client";

import { createElement, ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

interface TextRevealProps {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children: ReactNode;
}

export default function TextReveal({ as = "div", className, children }: TextRevealProps) {
    const spanRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const span = spanRef.current;
        if (!span) return;

        const tween = gsap.timeline({
            scrollTrigger: {
                trigger: span,
                start: "top 87%",
                end: () => `+=${span.offsetHeight * 2}`,
                scrub: 1,
            },
        });
        tween.to(span, { duration: 1, backgroundSize: "200% 100%", ease: "none" });
    }, []);

    const classNames = ["tt-text-reveal", className].filter(Boolean).join(" ");

    return createElement(as, { className: classNames }, <span ref={spanRef}>{children}</span>);
}
