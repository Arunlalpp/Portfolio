"use client";

import { useEffect, useSyncExternalStore } from "react";

interface LegacyNavigator extends Navigator {
    msMaxTouchPoints?: number;
}

function detectTouchDevice(): boolean {
    if (typeof navigator === "undefined") return false;
    const nav = navigator as LegacyNavigator;

    if (typeof nav.maxTouchPoints === "number") {
        return nav.maxTouchPoints > 0;
    }
    if (typeof nav.msMaxTouchPoints === "number") {
        return nav.msMaxTouchPoints > 0;
    }

    const coarsePointerQuery = typeof matchMedia === "function" ? matchMedia("(pointer:coarse)") : undefined;
    if (coarsePointerQuery?.media === "(pointer:coarse)") {
        return coarsePointerQuery.matches;
    }
    if (typeof window !== "undefined" && "orientation" in window) {
        return true;
    }

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini|Tablet|Mobile/i.test(
        nav.userAgent
    );
}

function subscribe() {
    return () => {};
}

function getServerSnapshot() {
    return false;
}

export function useIsTouchDevice() {
    const isTouchDevice = useSyncExternalStore(subscribe, detectTouchDevice, getServerSnapshot);

    useEffect(() => {
        document.body.classList.toggle("is-mobile", isTouchDevice);
    }, [isTouchDevice]);

    return isTouchDevice;
}
