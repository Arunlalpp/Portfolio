"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";

function LenisTickerBridge({ children }: { children: ReactNode }) {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        lenis.on("scroll", ScrollTrigger.update);

        const update = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => gsap.ticker.remove(update);
    }, [lenis]);

    return <>{children}</>;
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const isTouchDevice = useIsTouchDevice();

    if (isTouchDevice) {
        return <>{children}</>;
    }

    return (
        <ReactLenis root options={{ duration: 1.5, autoRaf: false }}>
            <LenisTickerBridge>{children}</LenisTickerBridge>
        </ReactLenis>
    );
}
