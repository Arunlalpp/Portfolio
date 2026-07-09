export default function Home() {
    return (
        <>
            <header id="tt-header" className="tt-header-alter tt-header-scroll tt-header-filled">
                <div className="tt-header-inner tt-noise">
                    <div className="tt-header-col tt-header-col-left">
                        <div className="tt-logo">
                            <a href="#" className="tt-magnetic-item">
                                <span className="tt-logo-light" style={{ fontFamily: "var(--tt-alter-font)", fontSize: 22, fontWeight: 700 }}>
                                    Arun Lal
                                </span>
                                <span className="tt-logo-dark" style={{ fontFamily: "var(--tt-alter-font)", fontSize: 22, fontWeight: 700 }}>
                                    Arun Lal
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="tt-header-col tt-header-col-center">
                        <nav className="tt-main-menu tt-m-menu-center">
                            <div className="tt-main-menu-holder">
                                <div className="tt-main-menu-inner">
                                    <div className="tt-main-menu-content">
                                        <ul className="tt-main-menu-list">
                                            <li className="active"><a href="#">Home</a></li>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#projects">Projects</a></li>
                                            <li><a href="#services">Services</a></li>
                                            <li><a href="#testimonials">Testimonials</a></li>
                                            <li><a href="#contact">Contact</a></li>
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
                                <a href="#" className="tt-m-menu-toggle-btn"><span></span></a>
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

            <div id="tt-content-wrap">
                <div id="page-header" className="ph-full ph-full-m ph-center ph-cap-xxxxlg ph-image-parallax ph-caption-parallax">
                    <div className="ph-video ph-video-grayscale ph-video-cover-1">
                        <div className="ph-video-inner">
                            <video loop muted autoPlay playsInline preload="metadata" poster="/assets/vids/1920/video-1-1920.jpg">
                                <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/1920/video-1-1920.mp4" type="video/mp4" />
                                <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/1920/video-1-1920.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>

                    <div className="page-header-inner tt-wrap">
                        <div className="ph-caption">
                            <div className="ph-caption-inner">
                                <h1 className="ph-caption-title">Arun<br /> Lal</h1>
                                <div className="ph-caption-description max-width-700">
                                    Software engineer building reliable,<br /> thoughtful products
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-header-inner ph-mask">
                        <div className="ph-mask-inner tt-wrap">
                            <div className="ph-caption">
                                <div className="ph-caption-inner">
                                    <h1 className="ph-caption-title">Software<br /> Engineer</h1>
                                    <div className="ph-caption-description max-width-700">
                                        Software engineer building reliable,<br /> thoughtful products
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ph-social">
                        <ul>
                            <li><a href="https://github.com/" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-github" /></a></li>
                            <li><a href="https://linkedin.com/" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in" /></a></li>
                            <li><a href="mailto:arunlalpp.softius@gmail.com" className="tt-magnetic-item"><i className="fa-solid fa-envelope" /></a></li>
                        </ul>
                    </div>

                    <div className="tt-scroll-down">
                        <a href="#tt-page-content" className="tt-scroll-down-inner tt-magnetic-item" data-offset="0">
                            <div className="tt-scrd-icon"></div>
                            <svg viewBox="0 0 500 500">
                                <defs>
                                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
                                </defs>
                                <text dy="30">
                                    <textPath xlinkHref="#textcircle">Scroll to Explore - Scroll to Explore -</textPath>
                                </text>
                            </svg>
                        </a>
                    </div>
                </div>

                <div id="tt-page-content">
                    <div id="about" className="tt-section padding-top-xlg-140 padding-bottom-xlg-120">
                        <div className="tt-section-inner tt-wrap">
                            <div className="tt-row">
                                <div className="tt-col-lg-4">
                                    <div className="tt-heading tt-heading-xlg">
                                        <h2 className="tt-heading-title tt-text-reveal">About Me</h2>
                                    </div>
                                    <div className="tt-text-uppercase margin-top-30 tt-text-reveal">
                                        Software engineer<br /> based in India
                                    </div>
                                </div>

                                <div className="tt-col-lg-1 padding-top-30"></div>

                                <div className="tt-col-lg-7 tt-align-self-center">
                                    <div className="text-xxlg font-500 tt-text-reveal">
                                        I am dedicated to building reliable systems and thoughtful interfaces
                                        that meet real user needs and hold up well after ship day.
                                    </div>

                                    <a href="#contact" className="tt-btn tt-btn-outline margin-top-40 tt-magnetic-item tt-anim-fadeinup">
                                        <span data-hover="Get In Touch">Get In Touch</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="projects" className="tt-section padding-top-xlg-140 border-top">
                        <div className="tt-section-inner tt-wrap">
                            <div className="tt-row">
                                <div className="tt-col-xl-8">
                                    <div className="tt-heading tt-heading-xxxlg">
                                        <h3 className="tt-heading-subtitle tt-text-reveal">Featured Work</h3>
                                        <h2 className="tt-heading-title tt-text-reveal">Projects</h2>
                                    </div>
                                    <div className="tt-text-uppercase max-width-400 margin-left-xlg-10-p text-pretty tt-text-reveal">
                                        Please explore my selected projects below.
                                    </div>
                                </div>

                                <div className="tt-col-xl-4 tt-align-self-end margin-top-30">
                                    <div className="tt-big-round-ptn tt-anim-fadeinup">
                                        <a href="https://github.com/" target="_blank" rel="noopener" className="tt-big-round-ptn-holder tt-magnetic-item">
                                            <div className="tt-big-round-ptn-inner">View<br /> GitHub</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tt-section no-padding-top padding-top-xlg-80 padding-bottom-20 padding-bottom-xlg-80">
                        <div className="tt-section-inner">
                            <div className="tt-portfolio-preview-list tt-ppli-portrait tt-ppli-hover">
                                <div className="tt-ppl-items-list">
                                    <a href="#" className="tt-ppl-item">
                                        <div className="tt-ppli-preview">
                                            <div className="tt-ppli-preview-image">
                                                <img src="/assets/img/portfolio/800/portfolio-1.jpg" alt="Order Platform" />
                                            </div>
                                        </div>
                                        <div className="tt-ppl-item-inner">
                                            <div className="tt-ppl-item-holder">
                                                <div className="tt-ppli-col tt-ppli-col-count"><div className="tt-ppli-count"></div></div>
                                                <div className="tt-ppli-col tt-ppli-col-caption">
                                                    <div className="tt-ppli-caption">
                                                        <h2 className="tt-ppli-title">Order Platform</h2>
                                                        <div className="tt-ppli-categories">
                                                            <div className="tt-ppli-category">Backend</div>
                                                            <div className="tt-ppli-category">Fintech</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                                                    <div className="tt-ppli-info">Node.js / PostgreSQL / AWS</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="tt-ppl-item">
                                        <div className="tt-ppli-preview">
                                            <div className="tt-ppli-preview-image">
                                                <img src="/assets/img/portfolio/800/portfolio-2.jpg" alt="Realtime Dashboard" />
                                            </div>
                                        </div>
                                        <div className="tt-ppl-item-inner">
                                            <div className="tt-ppl-item-holder">
                                                <div className="tt-ppli-col tt-ppli-col-count"><div className="tt-ppli-count"></div></div>
                                                <div className="tt-ppli-col tt-ppli-col-caption">
                                                    <div className="tt-ppli-caption">
                                                        <h2 className="tt-ppli-title">Realtime Dashboard</h2>
                                                        <div className="tt-ppli-categories">
                                                            <div className="tt-ppli-category">Frontend</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                                                    <div className="tt-ppli-info">React / TypeScript / WebSockets</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="tt-ppl-item">
                                        <div className="tt-ppli-preview">
                                            <div className="tt-ppli-preview-video">
                                                <video loop muted preload="metadata" poster="/assets/vids/800/video-4-800.jpg">
                                                    <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/800/video-4-800.mp4" type="video/mp4" />
                                                    <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/800/video-4-800.webm" type="video/webm" />
                                                </video>
                                            </div>
                                        </div>
                                        <div className="tt-ppl-item-inner">
                                            <div className="tt-ppl-item-holder">
                                                <div className="tt-ppli-col tt-ppli-col-count"><div className="tt-ppli-count"></div></div>
                                                <div className="tt-ppli-col tt-ppli-col-caption">
                                                    <div className="tt-ppli-caption">
                                                        <h2 className="tt-ppli-title">Storefront Redesign</h2>
                                                        <div className="tt-ppli-categories">
                                                            <div className="tt-ppli-category">Full Stack</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                                                    <div className="tt-ppli-info">Next.js / Tailwind / Stripe</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="tt-ppl-item">
                                        <div className="tt-ppli-preview">
                                            <div className="tt-ppli-preview-image">
                                                <img src="/assets/img/portfolio/800/portfolio-3.jpg" alt="Internal Tooling" />
                                            </div>
                                        </div>
                                        <div className="tt-ppl-item-inner">
                                            <div className="tt-ppl-item-holder">
                                                <div className="tt-ppli-col tt-ppli-col-count"><div className="tt-ppli-count"></div></div>
                                                <div className="tt-ppli-col tt-ppli-col-caption">
                                                    <div className="tt-ppli-caption">
                                                        <h2 className="tt-ppli-title">Internal Tooling</h2>
                                                        <div className="tt-ppli-categories">
                                                            <div className="tt-ppli-category">DevOps</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                                                    <div className="tt-ppli-info">Docker / CI-CD / Terraform</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="tt-ppl-item">
                                        <div className="tt-ppli-preview">
                                            <div className="tt-ppli-preview-image">
                                                <img src="/assets/img/portfolio/800/portfolio-4.jpg" alt="Mobile Companion App" />
                                            </div>
                                        </div>
                                        <div className="tt-ppl-item-inner">
                                            <div className="tt-ppl-item-holder">
                                                <div className="tt-ppli-col tt-ppli-col-count"><div className="tt-ppli-count"></div></div>
                                                <div className="tt-ppli-col tt-ppli-col-caption">
                                                    <div className="tt-ppli-caption">
                                                        <h2 className="tt-ppli-title">Mobile Companion App</h2>
                                                        <div className="tt-ppli-categories">
                                                            <div className="tt-ppli-category">Mobile</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                                                    <div className="tt-ppli-info">React Native / GraphQL</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tt-section no-padding padding-top-xlg-40 padding-bottom-xlg-40">
                        <div className="tt-section-inner">
                            <div className="tt-scrolling-text-crossed">
                                <div className="tt-scrolling-text-crossed-inner">
                                    <div className="tt-scrolling-text scrt-dyn-separator scrt-color-reverse" data-scroll-speed="7" data-change-direction="true" data-opposite-direction="true">
                                        <div className="tt-scrt-inner">
                                            <div className="tt-scrt-content">
                                                Building reliable software
                                                <span className="tt-scrt-separator">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tt-scrolling-text scrt-dyn-separator" data-scroll-speed="7" data-change-direction="true">
                                        <div className="tt-scrt-inner">
                                            <div className="tt-scrt-content">
                                                Building reliable software
                                                <span className="tt-scrt-separator">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="services" className="tt-section no-padding-bottom padding-bottom-xlg-80">
                        <div className="tt-section-inner tt-wrap">
                            <div className="tt-row">
                                <div className="tt-col-xl-8">
                                    <div className="tt-heading tt-heading-xxxlg">
                                        <h3 className="tt-heading-subtitle tt-text-reveal">What I Do</h3>
                                        <h2 className="tt-heading-title tt-text-reveal">Services</h2>
                                    </div>
                                    <div className="tt-text-uppercase max-width-400 margin-left-xlg-10-p text-pretty tt-text-reveal">
                                        Comprehensive engineering services to help ship reliable products.
                                    </div>
                                </div>

                                <div className="tt-col-xl-4 tt-align-self-end margin-top-40">
                                    <div className="tt-big-arrow tt-ba-angle-bottom-left tt-anim-fadeinup">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tt-section">
                        <div className="tt-section-inner">
                            <div className="tt-horizontal-accordion tt-hac-alter-hover tt-anim-fadeinup">
                                <div className="tt-hac-item cursor-alter">
                                    <div className="tt-hac-item-count"></div>
                                    <div className="tt-hac-item-inner">
                                        <div className="tt-hac-item-content">
                                            <div className="tt-haci-content-top">
                                                <h2 className="tt-haci-title">Backend<br /> Development</h2>
                                                <div className="tt-haci-description">
                                                    Designing reliable APIs and services with a focus on data integrity,
                                                    performance, and clean architecture that scales with the product.
                                                </div>
                                            </div>
                                            <div className="tt-haci-content-bottom">
                                                <a href="#contact" className="tt-btn tt-btn-outline tt-magnetic-item">
                                                    <span data-hover="Get In Touch">Get In Touch</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tt-hac-item cursor-alter">
                                    <div className="tt-hac-item-count"></div>
                                    <div className="tt-hac-item-inner">
                                        <div className="tt-hac-item-content">
                                            <div className="tt-haci-content-top">
                                                <h2 className="tt-haci-title">Frontend<br /> Engineering</h2>
                                                <div className="tt-haci-description">
                                                    Building fast, accessible interfaces with React and TypeScript,
                                                    translating design intent into interactions that feel effortless.
                                                </div>
                                            </div>
                                            <div className="tt-haci-content-bottom">
                                                <a href="#contact" className="tt-btn tt-btn-outline tt-magnetic-item">
                                                    <span data-hover="Get In Touch">Get In Touch</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tt-hac-item cursor-alter">
                                    <div className="tt-hac-item-count"></div>
                                    <div className="tt-hac-item-inner">
                                        <div className="tt-hac-item-content">
                                            <div className="tt-haci-content-top">
                                                <h2 className="tt-haci-title">Cloud &amp;<br /> DevOps</h2>
                                                <div className="tt-haci-description">
                                                    Setting up CI/CD pipelines, containerized deployments, and monitoring
                                                    so teams can ship confidently and often.
                                                </div>
                                            </div>
                                            <div className="tt-haci-content-bottom">
                                                <a href="#contact" className="tt-btn tt-btn-outline tt-magnetic-item">
                                                    <span data-hover="Get In Touch">Get In Touch</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tt-hac-item cursor-alter">
                                    <div className="tt-hac-item-count"></div>
                                    <div className="tt-hac-item-inner">
                                        <div className="tt-hac-item-content">
                                            <div className="tt-haci-content-top">
                                                <h2 className="tt-haci-title">API<br /> Design</h2>
                                                <div className="tt-haci-description">
                                                    Modeling clear, versioned contracts between services, prioritizing
                                                    consistency and developer experience for every consumer.
                                                </div>
                                            </div>
                                            <div className="tt-haci-content-bottom">
                                                <a href="#contact" className="tt-btn tt-btn-outline tt-magnetic-item">
                                                    <span data-hover="Get In Touch">Get In Touch</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tt-hac-item cursor-alter">
                                    <div className="tt-hac-item-count"></div>
                                    <div className="tt-hac-item-inner">
                                        <div className="tt-hac-item-content">
                                            <div className="tt-haci-content-top">
                                                <h2 className="tt-haci-title">Product<br /> Engineering</h2>
                                                <div className="tt-haci-description">
                                                    Partnering closely with product and design to turn ambiguous problems
                                                    into shipped features that actually solve them.
                                                </div>
                                            </div>
                                            <div className="tt-haci-content-bottom">
                                                <a href="#contact" className="tt-btn tt-btn-outline tt-magnetic-item">
                                                    <span data-hover="Get In Touch">Get In Touch</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="testimonials" className="tt-section border-bottom">
                        <div className="tt-section-inner tt-wrap">
                            <div className="tt-sticker">
                                <div className="tt-row">
                                    <div className="tt-col-lg-4 margin-bottom-40">
                                        <div className="tt-sticker-sticky tt-sticky-element">
                                            <div className="tt-heading tt-heading-xxlg">
                                                <h3 className="tt-heading-subtitle tt-text-reveal">Testimonials</h3>
                                                <h2 className="tt-heading-title tt-text-reveal">What<br /> They Say</h2>
                                                <p className="max-width-500 tt-text-uppercase tt-text-reveal">
                                                    Sample quotes — swap these for real feedback from people you&apos;ve worked with.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tt-col-lg-8">
                                        <div className="tt-sticker-scroller">
                                            <div className="tt-sticky-testimonials tt-stte-reversed-colors">
                                                <div className="tt-stte-item">
                                                    <div className="tt-stte-card cursor-alter">
                                                        <div className="tt-stte-card-counter"></div>
                                                        <div className="tt-stte-card-caption">
                                                            <div className="tt-stte-text">
                                                                &ldquo;Arun consistently turns vague requirements into clean, well-tested
                                                                systems. He communicates trade-offs clearly and ships on time.&rdquo;
                                                            </div>
                                                            <div className="tt-stte-subtext">Placeholder — Engineering Manager</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tt-stte-item">
                                                    <div className="tt-stte-card cursor-alter">
                                                        <div className="tt-stte-card-counter"></div>
                                                        <div className="tt-stte-card-caption">
                                                            <div className="tt-stte-text">
                                                                &ldquo;One of the most reliable engineers I&apos;ve worked with — thorough code
                                                                reviews, sensible architecture calls, and no drama.&rdquo;
                                                            </div>
                                                            <div className="tt-stte-subtext">Placeholder — Product Lead</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tt-stte-item">
                                                    <div className="tt-stte-card cursor-alter">
                                                        <div className="tt-stte-card-counter"></div>
                                                        <div className="tt-stte-card-caption">
                                                            <div className="tt-stte-text">
                                                                &ldquo;Great at picking up ambiguous problems and driving them to a working
                                                                solution without losing sight of maintainability.&rdquo;
                                                            </div>
                                                            <div className="tt-stte-subtext">Placeholder — Colleague</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tt-section padding-top-xlg-120 no-padding-bottom">
                        <div className="tt-section-inner">
                            <div className="tt-heading tt-heading-xxxlg tt-heading-center">
                                <h3 className="tt-heading-subtitle tt-text-reveal">Toolbox</h3>
                                <h2 className="tt-heading-title tt-text-reveal">Tech Stack</h2>
                                <p className="max-width-500 tt-text-uppercase tt-text-reveal">
                                    Languages and tools<br /> I reach for most often
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="tt-section">
                        <div className="tt-section-inner">
                            <div className="tt-avards-list">
                                <div className="tt-avlist-item cursor-alter tt-anim-fadeinup">
                                    <div className="tt-avlist-item-inner">
                                        <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count"></div></div>
                                        <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">TypeScript</h4></div>
                                        <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">Languages</div></div>
                                        <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">5+ years</div></div>
                                    </div>
                                </div>

                                <div className="tt-avlist-item cursor-alter tt-anim-fadeinup">
                                    <div className="tt-avlist-item-inner">
                                        <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count"></div></div>
                                        <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">React / Next.js</h4></div>
                                        <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">Frontend</div></div>
                                        <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">5+ years</div></div>
                                    </div>
                                </div>

                                <div className="tt-avlist-item cursor-alter tt-anim-fadeinup">
                                    <div className="tt-avlist-item-inner">
                                        <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count"></div></div>
                                        <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">Node.js</h4></div>
                                        <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">Backend</div></div>
                                        <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">5+ years</div></div>
                                    </div>
                                </div>

                                <div className="tt-avlist-item cursor-alter tt-anim-fadeinup">
                                    <div className="tt-avlist-item-inner">
                                        <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count"></div></div>
                                        <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">PostgreSQL</h4></div>
                                        <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">Databases</div></div>
                                        <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">4+ years</div></div>
                                    </div>
                                </div>

                                <div className="tt-avlist-item cursor-alter tt-anim-fadeinup">
                                    <div className="tt-avlist-item-inner">
                                        <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count"></div></div>
                                        <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">AWS</h4></div>
                                        <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">Cloud</div></div>
                                        <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">3+ years</div></div>
                                    </div>
                                </div>

                                <div className="tt-avlist-item cursor-alter tt-anim-fadeinup">
                                    <div className="tt-avlist-item-inner">
                                        <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count"></div></div>
                                        <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">Docker</h4></div>
                                        <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">DevOps</div></div>
                                        <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">3+ years</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="contact" className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
                        <div className="tt-section-inner tt-wrap">
                            <div className="tt-row margin-bottom-40">
                                <div className="tt-col-xl-8">
                                    <div className="tt-heading tt-heading-xxxlg no-margin">
                                        <h3 className="tt-heading-subtitle tt-text-reveal">Contact</h3>
                                        <h2 className="tt-heading-title tt-text-reveal">Let&apos;s Work<br /> Together</h2>
                                    </div>
                                </div>

                                <div className="tt-col-xl-4 tt-align-self-end tt-xl-column-reverse margin-top-40">
                                    <div className="max-width-600 margin-bottom-10 tt-text-uppercase text-pretty tt-text-reveal">
                                        Have a project in mind or just want to talk shop? Write me<br /> and let&apos;s talk about it!
                                    </div>

                                    <div className="tt-big-round-ptn margin-top-30 margin-bottom-xlg-80 tt-anim-fadeinup">
                                        <a href="mailto:arunlalpp.softius@gmail.com" className="tt-big-round-ptn-holder tt-magnetic-item">
                                            <div className="tt-big-round-ptn-inner">Let&apos;s<br /> Connect!</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer id="tt-footer" className="border-top">
                    <div className="tt-footer-inner tt-wrap">
                        <div className="tt-row">
                            <div className="tt-col-xl-4 tt-col-sm-6">
                                <div className="tt-footer-widget">
                                    <h5 className="tt-footer-widget-heading">Sitemap</h5>
                                    <ul className="tt-footer-widget-list">
                                        <li><a href="#about" className="tt-link">About</a></li>
                                        <li><a href="#projects" className="tt-link">Projects</a></li>
                                        <li><a href="#services" className="tt-link">Services</a></li>
                                        <li><a href="#testimonials" className="tt-link">Testimonials</a></li>
                                        <li><a href="#contact" className="tt-link">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tt-col-xl-4 tt-col-sm-6">
                                <div className="tt-footer-widget">
                                    <h5 className="tt-footer-widget-heading">Contact</h5>
                                    <ul className="tt-footer-widget-list">
                                        <li><a href="mailto:arunlalpp.softius@gmail.com" className="tt-link">arunlalpp.softius@gmail.com</a></li>
                                        <li>
                                            <div className="tt-social-buttons">
                                                <ul>
                                                    <li><a href="https://github.com/" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-github" /></a></li>
                                                    <li><a href="https://linkedin.com/" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in" /></a></li>
                                                    <li><a href="https://x.com/" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-x-twitter" /></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tt-col-xl-4 tt-col-sm-6 tt-justify-content-xl-end">
                                <div className="tt-footer-widget">
                                    <ul className="tt-footer-widget-list">
                                        <li>
                                            <div className="tt-footer-logo" style={{ fontFamily: "var(--tt-alter-font)", fontSize: 22, fontWeight: 700 }}>
                                                Arun Lal
                                            </div>
                                        </li>
                                        <li>
                                            <div className="tt-footer-copyright">
                                                © <span className="tt-copyright-year"></span> Arun Lal.<br />
                                                All Rights Reserved.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <a href="#" className="tt-scroll-to-top">
                    <div className="tt-stt-progress tt-magnetic-item">
                        <svg className="tt-stt-progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
                            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
                        </svg>
                    </div>
                </a>
            </div>
        </>
    );
}
