"use client";

import { navLinks, footerSocialLinks } from "../data/content";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";

export default function Footer() {
    const scrollToAnchor = useScrollToAnchor();

    return (
        <footer id="tt-footer" className="border-top">
            <div className="tt-footer-inner tt-wrap">
                <div className="grid grid-cols-12 gap-x-[30px]">
                    <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                        <div className="tt-footer-widget">
                            <h5 className="tt-footer-widget-heading">Sitemap</h5>
                            <ul className="tt-footer-widget-list">
                                {navLinks.slice(1).map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className="tt-link" onClick={scrollToAnchor}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                        <div className="tt-footer-widget">
                            <h5 className="tt-footer-widget-heading">Contact</h5>
                            <ul className="tt-footer-widget-list">
                                <li><a href="mailto:arunlalpp@gmail.com" className="tt-link">arunlalpp@gmail.com</a></li>
                                <li>
                                    <div className="tt-social-buttons">
                                        <ul>
                                            {footerSocialLinks.map((social) => (
                                                <li key={social.href}>
                                                    <a href={social.href} className="tt-magnetic-item" target="_blank" rel="noopener">
                                                        <i className={social.icon} />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-6 xl:col-span-4 xl:flex xl:justify-end">
                        <div className="tt-footer-widget">
                            <ul className="tt-footer-widget-list">
                                <li>
                                    <div className="tt-footer-logo" style={{ fontFamily: "var(--tt-alter-font)", fontSize: 22, fontWeight: 700 }}>
                                        Arun Lal
                                    </div>
                                </li>
                                <li>
                                    <div className="tt-footer-copyright">
                                        © {new Date().getFullYear()} Arun Lal.<br />
                                        All Rights Reserved.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
