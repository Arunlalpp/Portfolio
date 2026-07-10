"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";

const BALL_SIZE = { width: 36, height: 36, opacity: 1, borderWidth: 2 };
const MAGNETIC_SIZE = { width: 70, height: 70 };
const ALTER_SIZE = { width: 100, height: 100 };
const FOLLOW_RATIO = 0.15; // delay following the cursor
const MAGNETIC_BALL_ATTRACTION = 2; // lower = ball pulled in more
const MAGNETIC_ITEM_ATTRACTION = 25; // higher = item pulled in more

const CURSOR_ALTER_SELECTOR = ".cursor-alter, .tt-main-menu-list > li > a";
const HIDE_CURSOR_SELECTOR =
    "a:not(.not-hide-cursor):not(.cursor-alter):not(.ph-social > ul > li a):not(.ph-share-buttons > ul > li a):not(.tt-social-buttons > ul > li a):not(.tt-main-menu-list > li > a)";
const HIDE_ON_CLICK_SELECTOR =
    'a:not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="tel"]):not(.tt-btn-disabled)';

export default function MagicCursor() {
    const isTouchDevice = useIsTouchDevice();

    useGSAP(() => {
        if (isTouchDevice || window.innerWidth <= 1024) return;

        const magicCursor = document.getElementById("magic-cursor");
        const ball = document.getElementById("ball");
        if (!magicCursor || !ball) return;

        gsap.set(ball, { xPercent: -50, yPercent: -50, ...BALL_SIZE });

        const mouse = { x: 0, y: 0 };
        const pos = { x: 0, y: 0 };
        let magneticActive = false;

        function onMouseMove(event: MouseEvent) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            gsap.to(magicCursor, { duration: 0.3, autoAlpha: 1 });
        }
        document.addEventListener("mousemove", onMouseMove);

        function updatePosition() {
            if (magneticActive) return;
            pos.x += (mouse.x - pos.x) * FOLLOW_RATIO;
            pos.y += (mouse.y - pos.y) * FOLLOW_RATIO;
            gsap.set(ball, { x: pos.x, y: pos.y });
        }
        gsap.ticker.add(updatePosition);

        const cleanupFns: Array<() => void> = [
            () => document.removeEventListener("mousemove", onMouseMove),
            () => gsap.ticker.remove(updatePosition),
        ];

        function bind(target: EventTarget, type: string, handler: EventListener) {
            target.addEventListener(type, handler);
            cleanupFns.push(() => target.removeEventListener(type, handler));
        }

        // Magnetic pull on hover.
        document.querySelectorAll(".tt-magnetic-item").forEach((item) => {
            const onEnter = () => {
                ball.setAttribute("data-magnetic", "");
                gsap.to(ball, { duration: 0.3, ...MAGNETIC_SIZE, opacity: 1 });
                magneticActive = true;
            };
            const onLeave = () => {
                ball.removeAttribute("data-magnetic");
                gsap.to(ball, { duration: 0.3, ...BALL_SIZE });
                gsap.to(item, { duration: 0.3, x: 0, y: 0, clearProps: "all" });
                magneticActive = false;
            };
            const onMove = (event: Event) => {
                const rect = item.getBoundingClientRect();
                const relX = (event as MouseEvent).clientX - rect.left;
                const relY = (event as MouseEvent).clientY - rect.top;

                pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / MAGNETIC_BALL_ATTRACTION;
                pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / MAGNETIC_BALL_ATTRACTION;
                gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });

                gsap.to(item, {
                    duration: 0.3,
                    x: ((relX - rect.width / 2) / rect.width) * MAGNETIC_ITEM_ATTRACTION,
                    y: ((relY - rect.height / 2) / rect.height) * MAGNETIC_ITEM_ATTRACTION,
                    ease: "power2.out",
                });
            };

            bind(item, "mouseenter", onEnter);
            bind(item, "mouseleave", onLeave);
            bind(item, "mousemove", onMove);
        });

        // Alternative cursor style on hover.
        document.querySelectorAll(CURSOR_ALTER_SELECTOR).forEach((item) => {
            if (item.closest(".tt-magnetic-item")) return;

            const onEnter = () => {
                gsap.to(ball, { duration: 0.3, borderWidth: 0, opacity: 0.2, backgroundColor: "#999", ...ALTER_SIZE });
            };
            const onLeave = () => {
                gsap.to(ball, {
                    duration: 0.3,
                    borderWidth: BALL_SIZE.borderWidth,
                    opacity: BALL_SIZE.opacity,
                    backgroundColor: "transparent",
                    width: BALL_SIZE.width,
                    height: BALL_SIZE.height,
                    clearProps: "backgroundColor",
                });
            };

            bind(item, "mouseenter", onEnter);
            bind(item, "mouseleave", onLeave);
        });

        // Hide ball on hover of regular links.
        document.querySelectorAll(HIDE_CURSOR_SELECTOR).forEach((item) => {
            const onEnter = () => gsap.to(ball, { duration: 0.3, scale: 0, opacity: 0 });
            const onLeave = () => gsap.to(ball, { duration: 0.3, scale: 1, opacity: BALL_SIZE.opacity });

            bind(item, "mouseenter", onEnter);
            bind(item, "mouseleave", onLeave);
        });

        // Hide ball on click (page-navigation links only).
        document.querySelectorAll(HIDE_ON_CLICK_SELECTOR).forEach((item) => {
            bind(item, "click", () => gsap.to(ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 }));
        });

        // Show/hide on document leave/enter.
        bind(document, "mouseleave", () => gsap.to(magicCursor, { duration: 0.3, autoAlpha: 0 }));
        bind(document, "mouseenter", () => gsap.to(magicCursor, { duration: 0.3, autoAlpha: 1 }));

        return () => cleanupFns.forEach((cleanup) => cleanup());
    }, [isTouchDevice]);

    return null;
}
