"use client";

import TextReveal from "./TextReveal";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { experience, education, ExperienceItem } from "../data/content";

function ExperienceRow({ item }: { item: ExperienceItem }) {
    const ref = useFadeInUp<HTMLDivElement>();

    return (
        <div ref={ref} className="tt-anim-fadeinup border-b border-tt-border py-8 first:pt-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h4 className="text-[clamp(22px,2vw,30px)] font-semibold leading-[1.2]">{item.role}</h4>
                <span className="shrink-0 text-sm uppercase text-tt-text-muted">{item.period}</span>
            </div>
            <p className="mt-2 uppercase leading-[1.2] text-tt-text-muted">
                {item.company} · {item.location}
            </p>
            {item.highlights.length > 0 && (
                <ul className="mt-5 flex list-disc flex-col gap-2 pl-5 leading-[1.5]">
                    {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function Experience() {
    return (
        <div id="experience" className="tt-section xl:pt-[120px] xl:pb-[120px]">
            <div className="tt-section-inner tt-wrap">
                <div className="grid grid-cols-12 gap-x-[30px]">
                    <div className="col-span-12 lg:col-span-4 mb-10">
                        <div className="tt-heading tt-heading-xlg">
                            <TextReveal as="h3" className="tt-heading-subtitle">Career</TextReveal>
                            <TextReveal as="h2" className="tt-heading-title">Experience</TextReveal>
                        </div>
                        <TextReveal className="uppercase leading-[1.2] mt-7.5">
                            {education.degree}<br /> {education.school}<br /> {education.period}
                        </TextReveal>
                    </div>

                    <div className="col-span-12 lg:col-span-1" />

                    <div className="col-span-12 lg:col-span-7">
                        {experience.map((item) => (
                            <ExperienceRow item={item} key={`${item.company}-${item.period}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
