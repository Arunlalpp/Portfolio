"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import TextReveal from "./TextReveal";
import TestimonialForm from "./TestimonialForm";
import type { Testimonial } from "../lib/testimonials";

function getStickyOffset(fallback: number) {
    const header = document.getElementById("tt-header");
    const isScrollHeader = header?.classList.contains("tt-header-fixed") || header?.classList.contains("tt-header-scroll");
    if (isScrollHeader) {
        const headerInner = document.querySelector<HTMLElement>(".tt-header-inner");
        return (headerInner?.offsetHeight ?? 0) + 30;
    }
    return fallback;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
    const stickerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sticker = stickerRef.current;
        if (!sticker) return;

        const cards = Array.from(sticker.querySelectorAll<HTMLElement>(".tt-stte-card"));
        if (cards.length === 0) return;

        function setEqualCardHeight() {
            cards.forEach((card) => { card.style.height = "auto"; });
            const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));
            cards.forEach((card) => { card.style.height = `${maxHeight}px`; });
        }
        setEqualCardHeight();

        // Throttle to one measure/write pass per frame, since resize fires
        // repeatedly (e.g. on mobile as the browser chrome shows/hides while
        // scrolling), and each pass forces a synchronous layout.
        let resizeTicking = false;
        function onResize() {
            if (resizeTicking) return;
            resizeTicking = true;
            requestAnimationFrame(() => {
                setEqualCardHeight();
                resizeTicking = false;
            });
        }
        window.addEventListener("resize", onResize);

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
            window.removeEventListener("resize", onResize);
            mm.revert();
        };
    }, { dependencies: [testimonials.length] });

    return (
        <div id="testimonials" className="tt-section tt-sbg-on border-b border-tt-border">
            <div className="tt-section-inner tt-wrap">
                <div className="tt-sticker" ref={stickerRef}>
                    <div className="grid grid-cols-12 gap-x-[30px]">
                        <div className="col-span-12 lg:col-span-4 mb-10">
                            <div className="tt-sticker-sticky tt-sticky-element">
                                <div className="tt-heading tt-heading-xxlg">
                                    <TextReveal as="h3" className="tt-heading-subtitle">Testimonials</TextReveal>
                                    <TextReveal as="h2" className="tt-heading-title">What<br /> They Say</TextReveal>
                                    <TextReveal as="p" className="max-w-[500px] uppercase leading-[1.2]">
                                        {testimonials.length > 0
                                            ? "Words from people I\u2019ve worked with"
                                            : "Worked with me? I\u2019d love to hear from you"}
                                    </TextReveal>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-8">
                            <div className="tt-sticker-scroller">
                                <div className="tt-sticky-testimonials tt-stte-reversed-colors">
                                    {testimonials.map((testimonial) => (
                                        <div className="tt-stte-item" key={testimonial.id}>
                                            <div className="tt-stte-card cursor-alter">
                                                <div className="tt-stte-card-counter" />
                                                <div className="tt-stte-card-caption">
                                                    <div className="tt-stte-text">&ldquo;{testimonial.quote}&rdquo;</div>
                                                    <div className="tt-stte-subtext">{testimonial.name} — {testimonial.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-x-[30px] pb-[80px]">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                        <TestimonialForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
