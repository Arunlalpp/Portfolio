import ArrowIcon from "./ArrowIcon";
import { services } from "../data/content";

export default function Services() {
    return (
        <>
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
                                <ArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tt-section">
                <div className="tt-section-inner">
                    <div className="tt-horizontal-accordion tt-hac-alter-hover tt-anim-fadeinup">
                        {services.map((service) => (
                            <div className="tt-hac-item cursor-alter" key={service.titleLines.join(" ")}>
                                <div className="tt-hac-item-count" />
                                <div className="tt-hac-item-inner">
                                    <div className="tt-hac-item-content">
                                        <div className="tt-haci-content-top">
                                            <h2 className="tt-haci-title">
                                                {service.titleLines[0]}<br /> {service.titleLines[1]}
                                            </h2>
                                            <div className="tt-haci-description">{service.description}</div>
                                        </div>
                                        <div className="tt-haci-content-bottom">
                                            <a href="#contact" className="tt-btn tt-btn-outline tt-magnetic-item">
                                                <span data-hover="Get In Touch">Get In Touch</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
