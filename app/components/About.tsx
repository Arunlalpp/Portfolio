export default function About() {
    return (
        <div id="about" className="tt-section tt-sbg-on padding-top-xlg-140 padding-bottom-xlg-120">
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

                    <div className="tt-col-lg-1 padding-top-30" />

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
    );
}
