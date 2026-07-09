"use client";

import { RefObject, useEffect } from "react";

// Tracks the in-flight play() promise so pause() only fires once it settles,
// preventing "AbortError: play() request was interrupted by pause()".
export function useHoverVideoPlayback(ref: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const container = ref.current;
        const video = container?.querySelector("video");
        if (!container || !video) return;

        let playPromise: Promise<void> | undefined;

        function play() {
            playPromise = video!.play();
            playPromise?.catch(() => {});
        }

        function pause() {
            if (playPromise) {
                playPromise.then(() => video!.pause()).catch(() => {});
            } else {
                video!.pause();
            }
        }

        container.addEventListener("mouseenter", play);
        container.addEventListener("touchstart", play);
        container.addEventListener("mouseleave", pause);
        container.addEventListener("touchend", pause);

        return () => {
            container.removeEventListener("mouseenter", play);
            container.removeEventListener("touchstart", play);
            container.removeEventListener("mouseleave", pause);
            container.removeEventListener("touchend", pause);
        };
    }, [ref]);
}
