"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";
import { smoothScrollTo } from "../lib/scrollTo";

const SHOW_THRESHOLD = 150;

export default function ScrollToTopButton() {
    const [isActive, setIsActive] = useState(false);
    const pathRef = useRef<SVGPathElement>(null);
    const pathLengthRef = useRef(0);
    const lenis = useLenis();
    const isTouchDevice = useIsTouchDevice();

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength();
        pathLengthRef.current = pathLength;
        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;
        path.style.transition = "stroke-dashoffset 10ms linear";

        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scrollTop * pathLength) / scrollableHeight;
            path.style.strokeDashoffset = `${progress}`;
            setIsActive(scrollTop > SHOW_THRESHOLD);
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <a
            href="#"
            className="tt-scroll-to-top"
            data-active={isActive || undefined}
            onClick={(event) => {
                event.preventDefault();
                smoothScrollTo(lenis, isTouchDevice, 0);
            }}
        >
            <div className="tt-stt-progress tt-magnetic-item">
                <svg className="tt-stt-progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </a>
    );
}
