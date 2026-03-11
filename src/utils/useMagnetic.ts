"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/utils/gsap"

export function useMagnetic<T extends HTMLElement = HTMLElement>() {
    const ref = useRef<T>(null)  // ← was HTMLDivElement, now generic T

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const move = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            gsap.to(el, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
            })
        }

        const reset = () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.3 })
        }

        el.addEventListener("mousemove", move)
        el.addEventListener("mouseleave", reset)

        return () => {
            el.removeEventListener("mousemove", move)
            el.removeEventListener("mouseleave", reset)
        }
    }, [])

    return ref
}