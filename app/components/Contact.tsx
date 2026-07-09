"use client";

import TextReveal from "./TextReveal";
import { useFadeInUp } from "../hooks/useFadeInUp";

export default function Contact() {
    const ctaRef = useFadeInUp<HTMLDivElement>();

    return (
        <div id="contact" className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
            <div className="tt-section-inner tt-wrap">
                <div className="tt-row margin-bottom-40">
                    <div className="tt-col-xl-8">
                        <div className="tt-heading tt-heading-xxxlg no-margin">
                            <TextReveal as="h3" className="tt-heading-subtitle">Contact</TextReveal>
                            <TextReveal as="h2" className="tt-heading-title">Let&apos;s Work<br /> Together</TextReveal>
                        </div>
                    </div>

                    <div className="tt-col-xl-4 tt-align-self-end tt-xl-column-reverse margin-top-40">
                        <TextReveal className="max-width-600 margin-bottom-10 tt-text-uppercase text-pretty">
                            Have a project in mind or just want to talk shop? Write me<br /> and let&apos;s talk about it!
                        </TextReveal>

                        <div ref={ctaRef} className="tt-big-round-ptn margin-top-30 margin-bottom-xlg-80 tt-anim-fadeinup">
                            <a href="mailto:arunlalpp.softius@gmail.com" className="tt-big-round-ptn-holder tt-magnetic-item">
                                <div className="tt-big-round-ptn-inner">Let&apos;s<br /> Connect!</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
