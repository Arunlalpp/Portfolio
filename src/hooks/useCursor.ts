"use client";

import { useEffect } from "react";

export function useCursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        const heroHover = document.querySelectorAll(".cursor-expand");
        const socialHover = document.querySelectorAll(".cursor-social");

        heroHover.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                cursor?.classList.add("cursor-large");
            });

            el.addEventListener("mouseleave", () => {
                cursor?.classList.remove("cursor-large");
            });
        });

        socialHover.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                cursor?.classList.add("cursor-ring");
            });

            el.addEventListener("mouseleave", () => {
                cursor?.classList.remove("cursor-ring");
            });
        });
    }, []);
}