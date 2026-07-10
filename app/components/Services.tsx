"use client";

import { useEffect, useRef, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import TextReveal from "./TextReveal";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";
import { services } from "../data/content";

export default function Services() {
    const arrowRef = useFadeInUp<HTMLDivElement>();
    const accordionFadeRef = useFadeInUp<HTMLDivElement>();
    const accordionRef = useRef<HTMLDivElement>(null);
    const scrollToAnchor = useScrollToAnchor();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function setAccordionRefs(node: HTMLDivElement | null) {
        accordionFadeRef.current = node;
        accordionRef.current = node;
    }

    useEffect(() => {
        const container = accordionRef.current;
        const firstItemInner = container?.querySelector(".tt-hac-item:first-child .tt-hac-item-inner");
        if (!container || !firstItemInner) return;

        function updateTextWidth() {
            const width = firstItemInner!.getBoundingClientRect().width * 0.84;
            container!.querySelectorAll<HTMLElement>(".tt-haci-title, .tt-haci-description").forEach((el) => {
                el.style.width = `${width}px`;
            });
        }

        updateTextWidth();
        const observer = new ResizeObserver(updateTextWidth);
        observer.observe(firstItemInner);
        return () => observer.disconnect();
    }, []);

    const itemWidth = `${100 / services.length}%`;

    return (
        <>
            <div id="services" className="tt-section pb-0 xl:pb-[80px]">
                <div className="tt-section-inner tt-wrap">
                    <div className="grid grid-cols-12 gap-x-[30px]">
                        <div className="col-span-12 xl:col-span-8">
                            <div className="tt-heading tt-heading-xxxlg">
                                <TextReveal as="h3" className="tt-heading-subtitle">What I Do</TextReveal>
                                <TextReveal as="h2" className="tt-heading-title">Services</TextReveal>
                            </div>
                            <TextReveal className="uppercase leading-[1.2] max-w-[400px] xl:ml-[10%] text-pretty">
                                From pixel-perfect interfaces to full-stack apps, here&apos;s how I can help bring your product to life.
                            </TextReveal>
                        </div>

                        <div className="col-span-12 xl:col-span-4 self-end mt-10">
                            <div ref={arrowRef} className="tt-big-arrow tt-ba-angle-bottom-left tt-anim-fadeinup">
                                <ArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tt-section">
                <div className="tt-section-inner">
                    <div ref={setAccordionRefs} className="tt-horizontal-accordion tt-hac-alter-hover tt-anim-fadeinup">
                        {services.map((service, index) => (
                            <div
                                className="tt-hac-item cursor-alter"
                                data-state={
                                    index === 0 && activeIndex !== null
                                        ? "inactive"
                                        : index !== 0 && activeIndex === index
                                          ? "active"
                                          : undefined
                                }
                                style={{ width: itemWidth, zIndex: services.length - index }}
                                onMouseEnter={index !== 0 ? () => setActiveIndex(index) : undefined}
                                onMouseLeave={index !== 0 ? () => setActiveIndex(null) : undefined}
                                key={service.titleLines.join(" ")}
                            >
                                <div className="tt-hac-item-count" />
                                <div className="tt-hac-item-inner">
                                    <div className="tt-hac-item-content">
                                        <div className="tt-haci-content-top">
                                            <h2 className="tt-haci-title">
                                                {service.titleLines[0]}<br /> {service.titleLines[1]}
                                            </h2>
                                            <div className="tt-haci-description">{service.description}</div>
                                        </div>
                                        <div className="tt-haci-content-bottom">
                                            <a href="#contact" className="tt-btn tt-btn-outline tt-magnetic-item" onClick={scrollToAnchor}>
                                                <span className="tt-btn-inner"><span data-hover="Get In Touch">Get In Touch</span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
