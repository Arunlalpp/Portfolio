import { navLinks } from "../data/content";

const logoStyle = { fontFamily: "var(--tt-alter-font)", fontSize: 22, fontWeight: 700 };

export default function Header() {
    return (
        <header id="tt-header" className="tt-header-alter tt-header-scroll tt-header-filled">
            <div className="tt-header-inner tt-noise">
                <div className="tt-header-col tt-header-col-left">
                    <div className="tt-logo">
                        <a href="#" className="tt-magnetic-item">
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
                                                <a href={link.href}>{link.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="tt-header-col tt-header-col-right">
                    <div id="tt-m-menu-toggle-btn-wrap">
                        <div className="tt-m-menu-toggle-btn-text">
                            <span className="tt-m-menu-text-menu">Menu</span>
                            <span className="tt-m-menu-text-close">Close</span>
                        </div>
                        <div className="tt-m-menu-toggle-btn-holder">
                            <a href="#" className="tt-m-menu-toggle-btn"><span /></a>
                        </div>
                    </div>

                    <a href="#contact" className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item">
                        <span data-hover="Contact">Contact</span>
                    </a>

                    <div className="tt-style-switch">
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
