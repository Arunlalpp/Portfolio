"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { socialLinks } from "../data/content";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";
import { useDeferredVideoSrc } from "../hooks/useDeferredVideoSrc";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";
import WordReveal from "./WordReveal";

export default function Hero() {
    const scrollToAnchor = useScrollToAnchor();
    const videoRef = useRef<HTMLVideoElement>(null);
    useDeferredVideoSrc(videoRef);

    const pageHeaderRef = useRef<HTMLDivElement>(null);
    const isTouchDevice = useIsTouchDevice();

    useGSAP(() => {
        const pageHeader = pageHeaderRef.current;
        if (!pageHeader) return;

        ScrollTrigger.create({
            trigger: pageHeader,
            start: "top bottom",
            end: "bottom top",
            toggleClass: { targets: document.body, className: "tt-ph-visible" },
        });

        gsap.to(pageHeader.querySelector(".ph-video-inner"), {
            yPercent: 30,
            ease: "none",
            scrollTrigger: { trigger: pageHeader, start: "top top", end: "bottom top", scrub: true },
        });

        gsap.to(pageHeader.querySelectorAll(".ph-caption-inner"), {
            scale: 0.85,
            ease: "none",
            scrollTrigger: { trigger: pageHeader, start: "top top", end: "bottom top", scrub: true },
        });

        const scrollSocialItems = pageHeader.querySelectorAll(".tt-scroll-down, .ph-social");
        if (pageHeader.offsetHeight > window.innerHeight) {
            document.body.classList.add("ph-oversized-on");
            gsap.set(scrollSocialItems, { position: "fixed" });

            ScrollTrigger.create({
                trigger: pageHeader,
                start: "top bottom",
                end: "bottom bottom",
                onEnter: () => gsap.set(scrollSocialItems, { position: "fixed" }),
                onLeave: () => gsap.set(scrollSocialItems, { position: "absolute" }),
                onEnterBack: () => gsap.set(scrollSocialItems, { position: "fixed" }),
                onLeaveBack: () => gsap.set(scrollSocialItems, { position: "absolute" }),
            });
        } else {
            gsap.to(scrollSocialItems, {
                scale: 0.8,
                autoAlpha: 0,
                ease: "none",
                scrollTrigger: { trigger: pageHeader, start: "50% top", end: "70% top", scrub: true },
            });
        }

        if (isTouchDevice) return;

        const mask = pageHeader.querySelector<HTMLElement>(".ph-mask");
        if (!mask) return;

        let cursorX = 0;
        let cursorY = 0;

        function updateMaskPosition() {
            const rect = mask!.getBoundingClientRect();
            gsap.to(mask, {
                "--x": `${((cursorX - rect.left) / rect.width) * 100}%`,
                "--y": `${((cursorY - rect.top) / rect.height) * 100}%`,
                duration: 0.3,
                ease: "sine.out",
            });
        }

        function onMouseMove(event: MouseEvent) {
            cursorX = event.pageX;
            cursorY = event.pageY - window.scrollY;
            updateMaskPosition();
        }
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("scroll", updateMaskPosition);
        window.addEventListener("resize", updateMaskPosition);

        const baseCaption = pageHeader.querySelector(".page-header-inner:not(.ph-mask) .ph-caption");
        const showMask = () => document.body.classList.add("ph-mask-active");
        const hideMask = () => document.body.classList.remove("ph-mask-active");
        baseCaption?.addEventListener("mouseover", showMask);
        baseCaption?.addEventListener("mouseleave", hideMask);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", updateMaskPosition);
            window.removeEventListener("resize", updateMaskPosition);
            baseCaption?.removeEventListener("mouseover", showMask);
            baseCaption?.removeEventListener("mouseleave", hideMask);
        };
    }, [isTouchDevice]);

    return (
        <div
            id="page-header"
            ref={pageHeaderRef}
            className="ph-full ph-full-m ph-center ph-cap-xxxxlg ph-image-parallax ph-caption-parallax"
        >
            <div className="ph-video ph-video-grayscale ph-video-cover-1">
                <div className="ph-video-inner">
                    <video ref={videoRef} loop muted autoPlay playsInline preload="metadata" poster="/assets/vids/1920/video-1-1920.jpg">
                        <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/1920/video-1-1920.mp4" type="video/mp4" />
                        <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/1920/video-1-1920.webm" type="video/webm" />
                    </video>
                </div>
            </div>

            <div className="page-header-inner tt-wrap">
                <div className="ph-caption">
                    <div className="ph-caption-inner">
                        <WordReveal as="h1" className="ph-caption-title">Arun<br /> Lal</WordReveal>
                        <WordReveal className="ph-caption-description max-width-700">
                            Software engineer building reliable,<br /> thoughtful products
                        </WordReveal>
                    </div>
                </div>
            </div>

            <div className="page-header-inner ph-mask">
                <div className="ph-mask-inner tt-wrap">
                    <div className="ph-caption">
                        <div className="ph-caption-inner">
                            <WordReveal as="h1" className="ph-caption-title">Software<br /> Engineer</WordReveal>
                            <WordReveal className="ph-caption-description max-width-700">
                                Software engineer building reliable,<br /> thoughtful products
                            </WordReveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ph-social">
                <ul>
                    {socialLinks.map((social) => (
                        <li key={social.href}>
                            <a
                                href={social.href}
                                className="tt-magnetic-item"
                                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={social.href.startsWith("mailto:") ? undefined : "noopener"}
                            >
                                <i className={social.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="tt-scroll-down">
                <a href="#tt-page-content" className="tt-scroll-down-inner tt-magnetic-item" data-offset="0" onClick={scrollToAnchor}>
                    <div className="tt-scrd-icon" />
                    <svg viewBox="0 0 500 500">
                        <defs>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" />
                        </defs>
                        <text dy="30">
                            <textPath xlinkHref="#textcircle">Scroll to Explore - Scroll to Explore -</textPath>
                        </text>
                    </svg>
                </a>
            </div>
        </div>
    );
}
