"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import TextReveal from "./TextReveal";
import { testimonials } from "../data/content";

function getStickyOffset(fallback: number) {
    const header = document.getElementById("tt-header");
    const isScrollHeader = header?.classList.contains("tt-header-fixed") || header?.classList.contains("tt-header-scroll");
    if (isScrollHeader) {
        const headerInner = document.querySelector<HTMLElement>(".tt-header-inner");
        return (headerInner?.offsetHeight ?? 0) + 30;
    }
    return fallback;
}

export default function Testimonials() {
    const stickerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sticker = stickerRef.current;
        if (!sticker) return;

        const cards = Array.from(sticker.querySelectorAll<HTMLElement>(".tt-stte-card"));
        function setEqualCardHeight() {
            cards.forEach((card) => { card.style.height = "auto"; });
            const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));
            cards.forEach((card) => { card.style.height = `${maxHeight}px`; });
        }
        setEqualCardHeight();
        window.addEventListener("resize", setEqualCardHeight);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            const stickyElement = sticker.querySelector<HTMLElement>(".tt-sticky-element");
            const scroller = sticker.querySelector<HTMLElement>(".tt-sticker-scroller");
            if (!stickyElement || !scroller) return;

            ScrollTrigger.create({
                trigger: stickyElement,
                start: `top ${getStickyOffset(50)}`,
                end: `+=${scroller.offsetHeight - stickyElement.offsetHeight}`,
                pin: stickyElement,
            });
        });

        const items = sticker.querySelectorAll<HTMLElement>(".tt-stte-item");
        const stackOffset = getStickyOffset(60);
        items.forEach((item, index) => {
            if (index === items.length - 1) return;

            const timeline = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: item,
                    pin: true,
                    start: `top ${stackOffset}`,
                    end: `bottom ${stackOffset - 30}`,
                    pinSpacing: false,
                    scrub: true,
                },
            });
            timeline.to(item, { scale: 0.77, opacity: 0.88 });
            timeline.set(item, { autoAlpha: 0 });
        });

        return () => {
            window.removeEventListener("resize", setEqualCardHeight);
            mm.revert();
        };
    }, []);

    return (
        <div id="testimonials" className="tt-section tt-sbg-on border-bottom">
            <div className="tt-section-inner tt-wrap">
                <div className="tt-sticker" ref={stickerRef}>
                    <div className="tt-row">
                        <div className="tt-col-lg-4 margin-bottom-40">
                            <div className="tt-sticker-sticky tt-sticky-element">
                                <div className="tt-heading tt-heading-xxlg">
                                    <TextReveal as="h3" className="tt-heading-subtitle">Testimonials</TextReveal>
                                    <TextReveal as="h2" className="tt-heading-title">What<br /> They Say</TextReveal>
                                    <TextReveal as="p" className="max-width-500 tt-text-uppercase">
                                        Sample quotes — swap these for real feedback from people you&apos;ve worked with.
                                    </TextReveal>
                                </div>
                            </div>
                        </div>

                        <div className="tt-col-lg-8">
                            <div className="tt-sticker-scroller">
                                <div className="tt-sticky-testimonials tt-stte-reversed-colors">
                                    {testimonials.map((testimonial) => (
                                        <div className="tt-stte-item" key={testimonial.author}>
                                            <div className="tt-stte-card cursor-alter">
                                                <div className="tt-stte-card-counter" />
                                                <div className="tt-stte-card-caption">
                                                    <div className="tt-stte-text">&ldquo;{testimonial.quote}&rdquo;</div>
                                                    <div className="tt-stte-subtext">{testimonial.author}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
