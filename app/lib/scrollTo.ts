import type Lenis from "lenis";

export function quarticInOut(x: number) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

export function smoothScrollTo(lenis: Lenis | undefined, isTouchDevice: boolean, targetY: number) {
    if (lenis && !isTouchDevice) {
        lenis.scrollTo(targetY, { duration: 1, easing: quarticInOut });
    } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
    }
}
