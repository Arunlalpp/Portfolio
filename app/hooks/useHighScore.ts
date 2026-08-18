"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function notify() {
    for (const listener of listeners) listener();
}

function readBest(storageKey: string) {
    const stored = window.localStorage.getItem(storageKey);
    return stored ? Number(stored) : null;
}

function getServerSnapshot() {
    return null;
}

export function useHighScore(key: string) {
    const storageKey = `tt-playground-${key}-best`;
    const best = useSyncExternalStore(subscribe, () => readBest(storageKey), getServerSnapshot);

    function reportScore(score: number, lowerIsBetter = false) {
        const current = readBest(storageKey);
        const isBetter = current === null || (lowerIsBetter ? score < current : score > current);
        if (!isBetter) return;
        window.localStorage.setItem(storageKey, String(score));
        notify();
    }

    return { best, reportScore };
}
