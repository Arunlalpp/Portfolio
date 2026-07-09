"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import TextReveal from "./TextReveal";
import ProjectListItem from "./ProjectListItem";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { projects } from "../data/content";

const PREVIEW_FOLLOW_BREAKPOINT = 768;

export default function Projects() {
    const githubBtnRef = useFadeInUp<HTMLDivElement>();
    const previewListRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const previews = previewListRef.current?.querySelectorAll<HTMLElement>(".tt-ppli-preview");
        if (!previews?.length) return;

        const xTo = gsap.quickTo(previews, "x", { duration: 1, ease: "power3.out" });
        const yTo = gsap.quickTo(previews, "y", { duration: 1, ease: "power3.out" });

        function onMouseMove(event: MouseEvent) {
            xTo(event.clientX);
            yTo(event.clientY);
        }

        function updateFollowState() {
            if (window.innerWidth >= PREVIEW_FOLLOW_BREAKPOINT) {
                gsap.set(previews!, { xPercent: -50, yPercent: -50 });
                window.addEventListener("mousemove", onMouseMove);
            } else {
                window.removeEventListener("mousemove", onMouseMove);
                gsap.set(previews!, { clearProps: "all" });
            }
        }

        updateFollowState();
        window.addEventListener("resize", updateFollowState);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", updateFollowState);
        };
    }, []);

    return (
        <>
            <div id="projects" className="tt-section padding-top-xlg-140 border-top">
                <div className="tt-section-inner tt-wrap">
                    <div className="tt-row">
                        <div className="tt-col-xl-8">
                            <div className="tt-heading tt-heading-xxxlg">
                                <TextReveal as="h3" className="tt-heading-subtitle">Featured Work</TextReveal>
                                <TextReveal as="h2" className="tt-heading-title">Projects</TextReveal>
                            </div>
                            <TextReveal className="tt-text-uppercase max-width-400 margin-left-xlg-10-p text-pretty">
                                Please explore my selected projects below.
                            </TextReveal>
                        </div>

                        <div className="tt-col-xl-4 tt-align-self-end margin-top-30">
                            <div ref={githubBtnRef} className="tt-big-round-ptn tt-anim-fadeinup">
                                <a href="https://github.com/" target="_blank" rel="noopener" className="tt-big-round-ptn-holder tt-magnetic-item">
                                    <div className="tt-big-round-ptn-inner">View<br /> GitHub</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tt-section no-padding-top padding-top-xlg-80 padding-bottom-20 padding-bottom-xlg-80">
                <div className="tt-section-inner">
                    <div ref={previewListRef} className="tt-portfolio-preview-list tt-ppli-portrait tt-ppli-hover">
                        <div className="tt-ppl-items-list">
                            {projects.map((project) => (
                                <ProjectListItem project={project} key={project.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
