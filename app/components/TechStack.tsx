"use client";

import TextReveal from "./TextReveal";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { techStack, TechStackItem as TechStackItemData } from "../data/content";

function TechStackRow({ item }: { item: TechStackItemData }) {
    const ref = useFadeInUp<HTMLDivElement>();

    return (
        <div ref={ref} className="tt-avlist-item cursor-alter tt-anim-fadeinup">
            <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count" /></div>
                <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">{item.name}</h4></div>
                <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">{item.category}</div></div>
                <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">{item.experience}</div></div>
            </div>
        </div>
    );
}

export default function TechStack() {
    return (
        <>
            <div className="tt-section padding-top-xlg-120 no-padding-bottom">
                <div className="tt-section-inner">
                    <div className="tt-heading tt-heading-xxxlg tt-heading-center">
                        <TextReveal as="h3" className="tt-heading-subtitle">Toolbox</TextReveal>
                        <TextReveal as="h2" className="tt-heading-title">Tech Stack</TextReveal>
                        <TextReveal as="p" className="max-width-500 tt-text-uppercase">
                            Languages and tools<br /> I reach for most often
                        </TextReveal>
                    </div>
                </div>
            </div>

            <div className="tt-section">
                <div className="tt-section-inner">
                    <div className="tt-avards-list">
                        {techStack.map((item) => (
                            <TechStackRow item={item} key={item.name} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
