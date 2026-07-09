"use client";

import { MouseEvent, useCallback } from "react";
import { useLenis } from "lenis/react";
import { useIsTouchDevice } from "./useIsTouchDevice";
import { smoothScrollTo } from "../lib/scrollTo";

export function useScrollToAnchor() {
    const lenis = useLenis();
    const isTouchDevice = useIsTouchDevice();

    return useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            const link = event.currentTarget;
            const hash = link.hash;
            if (!hash || hash === "#" || hash === "#0") return;

            const target = document.querySelector(hash);
            if (!target) return;

            const header = document.getElementById("tt-header");
            const offsetAttr = link.dataset.offset;
            const offset = offsetAttr !== undefined
                ? Number(offsetAttr)
                : header?.classList.contains("tt-header-fixed")
                    ? header.offsetHeight
                    : 0;

            const targetY = target.getBoundingClientRect().top + window.scrollY - offset;
            smoothScrollTo(lenis, isTouchDevice, targetY);

            if (link.classList.contains("tt-scroll-down-inner")) {
                event.preventDefault();
            }
        },
        [lenis, isTouchDevice]
    );
}
