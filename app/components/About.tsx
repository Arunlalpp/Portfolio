"use client";

import TextReveal from "./TextReveal";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";

export default function About() {
    const ctaRef = useFadeInUp<HTMLAnchorElement>();
    const scrollToAnchor = useScrollToAnchor();

    return (
        <div id="about" className="tt-section tt-sbg-on padding-top-xlg-140 padding-bottom-xlg-120">
            <div className="tt-section-inner tt-wrap">
                <div className="tt-row">
                    <div className="tt-col-lg-4">
                        <div className="tt-heading tt-heading-xlg">
                            <TextReveal as="h2" className="tt-heading-title">About Me</TextReveal>
                        </div>
                        <TextReveal className="tt-text-uppercase margin-top-30">
                            Software engineer<br /> based in India
                        </TextReveal>
                    </div>

                    <div className="tt-col-lg-1 padding-top-30" />

                    <div className="tt-col-lg-7 tt-align-self-center">
                        <TextReveal className="text-xxlg font-500">
                            I am dedicated to building reliable systems and thoughtful interfaces
                            that meet real user needs and hold up well after ship day.
                        </TextReveal>

                        <a ref={ctaRef} href="#contact" className="tt-btn tt-btn-outline margin-top-40 tt-magnetic-item tt-anim-fadeinup" onClick={scrollToAnchor}>
                            <span className="tt-btn-inner"><span data-hover="Get In Touch">Get In Touch</span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
