"use client";

import TextReveal from "./TextReveal";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";

export default function About() {
    const ctaRef = useFadeInUp<HTMLAnchorElement>();
    const scrollToAnchor = useScrollToAnchor();

    return (
        <div id="about" className="tt-section tt-sbg-on xl:pt-[140px] xl:pb-[120px]">
            <div className="tt-section-inner tt-wrap">
                <div className="grid grid-cols-12 gap-x-[30px]">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="tt-heading tt-heading-xlg">
                            <TextReveal as="h2" className="tt-heading-title">About Me</TextReveal>
                        </div>
                        <TextReveal className="uppercase leading-[1.2] mt-7.5">
                            Software engineer<br /> based in India
                        </TextReveal>
                    </div>

                    <div className="col-span-12 lg:col-span-1 pt-7.5" />

                    <div className="col-span-12 lg:col-span-7 self-center">
                        <TextReveal className="text-[clamp(28px,3vw,48px)] leading-[1.2] font-medium">
                            I am dedicated to building reliable systems and thoughtful interfaces
                            that meet real user needs and hold up well after ship day.
                        </TextReveal>

                        <a ref={ctaRef} href="#contact" className="tt-btn tt-btn-outline mt-10 tt-magnetic-item tt-anim-fadeinup" onClick={scrollToAnchor}>
                            <span className="tt-btn-inner"><span data-hover="Get In Touch">Get In Touch</span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
