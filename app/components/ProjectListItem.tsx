"use client";

import { useRef } from "react";
import Image from "next/image";
import { useDeferredVideoSrc } from "../hooks/useDeferredVideoSrc";
import { useHoverVideoPlayback } from "../hooks/useHoverVideoPlayback";
import type { Project } from "../data/content";

export default function ProjectListItem({ project }: { project: Project }) {
    const itemRef = useRef<HTMLAnchorElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useHoverVideoPlayback(itemRef);
    useDeferredVideoSrc(videoRef);

    return (
        <a href={project.url} target="_blank" rel="noopener" ref={itemRef} className="tt-ppl-item">
            <div className="tt-ppli-preview">
                {project.media.type === "image" ? (
                    <div className="tt-ppli-preview-image">
                        <Image src={project.media.src} alt={project.title} fill sizes="(max-width: 767px) 100vw, 400px" />
                    </div>
                ) : (
                    <div className="tt-ppli-preview-video">
                        <video ref={videoRef} loop muted preload="metadata" poster={project.media.poster}>
                            <source src="/assets/vids/placeholder.mp4" data-src={project.media.mp4} type="video/mp4" />
                            <source src="/assets/vids/placeholder.webm" data-src={project.media.webm} type="video/webm" />
                        </video>
                    </div>
                )}
            </div>
            <div className="tt-ppl-item-inner">
                <div className="tt-ppl-item-holder">
                    <div className="tt-ppli-col tt-ppli-col-count"><div className="tt-ppli-count" /></div>
                    <div className="tt-ppli-col tt-ppli-col-caption">
                        <div className="tt-ppli-caption">
                            <h2 className="tt-ppli-title">{project.title}</h2>
                            <div className="tt-ppli-categories">
                                {project.categories.map((category) => (
                                    <div className="tt-ppli-category" key={category}>{category}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tt-ppli-col tt-ppli-col-info md:flex md:justify-end">
                        <div className="tt-ppli-info">{project.info}</div>
                    </div>
                </div>
            </div>
        </a>
    );
}
