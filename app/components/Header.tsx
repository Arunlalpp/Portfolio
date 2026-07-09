"use client";

import { MouseEvent, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { navLinks } from "../data/content";
import { useTheme } from "./ThemeProvider";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";
import { useHeaderScroll } from "../hooks/useHeaderScroll";

const logoStyle = { fontFamily: "var(--tt-alter-font)", fontSize: 22, fontWeight: 700 };

function isMenuCloseExcluded(link: HTMLAnchorElement) {
    return (
        link.target === "_blank" ||
        link.getAttribute("href") === "#" ||
        link.href.startsWith("mailto:") ||
        link.href.startsWith("tel:")
    );
}

export default function Header() {
    const headerRef = useHeaderScroll<HTMLElement>();
    const { isLightMode, toggleTheme } = useTheme();
    const scrollToAnchor = useScrollToAnchor();
    const { contextSafe } = useGSAP();

    useEffect(() => {
        function updateBreakpoint() {
            document.body.classList.toggle("tt-m-menu-on", window.matchMedia("(max-width: 1024px)").matches);
        }
        updateBreakpoint();
        window.addEventListener("resize", updateBreakpoint);
        return () => window.removeEventListener("resize", updateBreakpoint);
    }, []);

    const toggleMobileMenu = contextSafe(() => {
        const body = document.body;
        const menuItems = document.querySelectorAll(".tt-main-menu-content > ul > li");

        document.documentElement.classList.toggle("tt-no-scroll");
        body.classList.toggle("tt-m-menu-open");
        body.classList.add("tt-m-menu-active");

        body.classList.add("tt-m-menu-toggle-no-click");

        if (body.classList.contains("tt-m-menu-open")) {
            const timeline = gsap.timeline({
                onComplete: () => body.classList.remove("tt-m-menu-toggle-no-click"),
            });
            timeline.to(".tt-main-menu", { duration: 0.4, autoAlpha: 1 });
            timeline.from(menuItems, { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: "power2.out", clearProps: "all" });
        } else {
            const timeline = gsap.timeline({
                onComplete: () => body.classList.remove("tt-m-menu-toggle-no-click", "tt-m-menu-active"),
            });
            timeline.to(menuItems, { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: "power2.in" });
            timeline.to(".tt-main-menu", { duration: 0.4, autoAlpha: 0, clearProps: "all" }, "+=0.2");
            timeline.set(menuItems, { clearProps: "all" });
        }
    });

    const closeMobileMenu = contextSafe(() => {
        document.documentElement.classList.remove("tt-no-scroll");
        document.body.classList.remove("tt-m-menu-open");
        gsap.set([".tt-main-menu", ".tt-main-menu-content > ul > li"], { clearProps: "all" });
    });

    useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(min-width: 1025px)").matches) {
                closeMobileMenu();
            }
        }
        window.addEventListener("orientationchange", closeMobileMenu);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("orientationchange", closeMobileMenu);
            window.removeEventListener("resize", handleResize);
        };
    }, [closeMobileMenu]);

    const handleNavLinkClick = contextSafe((event: MouseEvent<HTMLAnchorElement>) => {
        scrollToAnchor(event);
        const link = event.currentTarget;
        if (!isMenuCloseExcluded(link) && document.body.classList.contains("tt-m-menu-open")) {
            toggleMobileMenu();
        }
    });

    return (
        <header id="tt-header" ref={headerRef} className="tt-header-alter tt-header-scroll tt-header-filled">
            <div className="tt-header-inner tt-noise">
                <div className="tt-header-col tt-header-col-left">
                    <div className="tt-logo">
                        <a href="#" className="tt-magnetic-item" onClick={handleNavLinkClick}>
                            <span className="tt-logo-light" style={logoStyle}>Arun Lal</span>
                            <span className="tt-logo-dark" style={logoStyle}>Arun Lal</span>
                        </a>
                    </div>
                </div>

                <div className="tt-header-col tt-header-col-center">
                    <nav className="tt-main-menu tt-m-menu-center">
                        <div className="tt-main-menu-holder">
                            <div className="tt-main-menu-inner">
                                <div className="tt-main-menu-content">
                                    <ul className="tt-main-menu-list">
                                        {navLinks.map((link, index) => (
                                            <li key={link.href} className={index === 0 ? "active" : undefined}>
                                                <a href={link.href} onClick={handleNavLinkClick}>{link.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="tt-header-col tt-header-col-right">
                    <div id="tt-m-menu-toggle-btn-wrap" onClick={toggleMobileMenu}>
                        <div className="tt-m-menu-toggle-btn-text">
                            <span className="tt-m-menu-text-menu">Menu</span>
                            <span className="tt-m-menu-text-close">Close</span>
                        </div>
                        <div className="tt-m-menu-toggle-btn-holder">
                            <a href="#" className="tt-m-menu-toggle-btn" onClick={(e) => e.preventDefault()}><span /></a>
                        </div>
                    </div>

                    <a href="#contact" className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item" onClick={scrollToAnchor}>
                        <span className="tt-btn-inner"><span data-hover="Contact">Contact</span></span>
                    </a>

                    <div className="tt-style-switch" onClick={toggleTheme} role="button" aria-pressed={isLightMode} aria-label="Toggle light/dark theme">
                        <div className="tt-style-switch-inner tt-magnetic-item">
                            <div className="tt-stsw-light"><i className="fas fa-sun" /></div>
                            <div className="tt-stsw-dark"><i className="fas fa-moon" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
