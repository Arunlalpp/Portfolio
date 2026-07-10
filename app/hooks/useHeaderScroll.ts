"use client";

import { useEffect, useRef } from "react";

const DELTA = 120;

export function useHeaderScroll<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const header = ref.current;
        if (!header) return;

        let lastScrollTop = 0;
        let ticking = false;

        function update() {
            const scrollTop = window.scrollY;
            if (Math.abs(lastScrollTop - scrollTop) > DELTA) {
                const navbarHeight = header!.offsetHeight;

                if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
                    header!.setAttribute("data-fly-up", "");
                } else {
                    if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
                        header!.removeAttribute("data-fly-up");
                    }
                    if (header!.classList.contains("tt-header-filled")) {
                        header!.toggleAttribute("data-filled", scrollTop > DELTA);
                    }
                }
                lastScrollTop = scrollTop;
            }
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return ref;
}
