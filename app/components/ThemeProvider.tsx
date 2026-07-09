"use client";

import { createContext, ReactNode, useContext, useEffect, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "tt-lightmode-on";

interface ThemeContextValue {
    isLightMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribe() {
    return () => {};
}

function getSnapshot(): boolean {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "enabled") return true;
    if (saved === "disabled") return false;
    return document.body.classList.contains("tt-lightmode-default");
}

function getServerSnapshot() {
    return false;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const persistedIsLightMode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const [override, setOverride] = useState<boolean | null>(null);
    const isLightMode = override ?? persistedIsLightMode;

    useEffect(() => {
        document.body.classList.toggle("tt-lightmode-on", isLightMode);
    }, [isLightMode]);

    const toggleTheme = () => {
        const next = !isLightMode;
        window.localStorage.setItem(STORAGE_KEY, next ? "enabled" : "disabled");
        setOverride(next);
    };

    return <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
