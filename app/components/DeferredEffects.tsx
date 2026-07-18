"use client";

import dynamic from "next/dynamic";

const GlobalEffects = dynamic(() => import("./GlobalEffects"), { ssr: false });
const MagicCursor = dynamic(() => import("./MagicCursor"), { ssr: false });
const PageTransition = dynamic(() => import("./PageTransition"), { ssr: false });

export default function DeferredEffects() {
    return (
        <>
            <GlobalEffects />
            <MagicCursor />
            <PageTransition />
        </>
    );
}
