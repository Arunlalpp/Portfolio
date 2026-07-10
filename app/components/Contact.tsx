"use client";

import TextReveal from "./TextReveal";
import { useFadeInUp } from "../hooks/useFadeInUp";

export default function Contact() {
    const ctaRef = useFadeInUp<HTMLDivElement>();

    return (
        <div id="contact" className="tt-section xl:pt-[120px] xl:pb-[120px]">
            <div className="tt-section-inner tt-wrap">
                <div className="grid grid-cols-12 gap-x-[30px] mb-10">
                    <div className="col-span-12 xl:col-span-8">
                        <div className="tt-heading tt-heading-xxxlg m-0">
                            <TextReveal as="h3" className="tt-heading-subtitle">Contact</TextReveal>
                            <TextReveal as="h2" className="tt-heading-title">Let&apos;s Work<br /> Together</TextReveal>
                        </div>
                    </div>

                    <div className="col-span-12 xl:col-span-4 self-end xl:flex xl:flex-col-reverse mt-10">
                        <TextReveal className="max-w-[600px] mb-2.5 uppercase leading-[1.2] text-pretty">
                            Have a project in mind or just want to talk shop? Write me<br /> and let&apos;s talk about it!
                        </TextReveal>

                        <div ref={ctaRef} className="tt-big-round-ptn mt-7.5 xl:mb-[80px] tt-anim-fadeinup">
                            <a href="mailto:arunlalpp@gmail.com" className="tt-big-round-ptn-holder tt-magnetic-item">
                                <div className="tt-big-round-ptn-inner">Let&apos;s<br /> Connect!</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
