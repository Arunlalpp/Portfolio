import { projects } from "../data/content";

export default function Projects() {
    return (
        <>
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
                            {projects.map((project) => (
                                <a href="#" key={project.title} className="tt-ppl-item">
                                    <div className="tt-ppli-preview">
                                        {project.media.type === "image" ? (
                                            <div className="tt-ppli-preview-image">
                                                <img src={project.media.src} alt={project.title} />
                                            </div>
                                        ) : (
                                            <div className="tt-ppli-preview-video">
                                                <video loop muted preload="metadata" poster={project.media.poster}>
                                                    <source src="/assets/vids/placeholder.mp4" data-src={project.media.mp4} type="video/mp4" />
                                                    <source src="/assets/vids/placeholder.webm" data-src={project.media.webm} type="video/webm" />
                                                </video>
                                            </div>
                                        )}
                                    </div>
                                    <div className="tt-ppl-item-inner">
                                        <div className="tt-ppl-item-holder">
                                            <div className="tt-ppli-col tt-ppli-col-count"><div className="tt-ppli-count" /></div>
                                            <div className="tt-ppli-col tt-ppli-col-caption">
                                                <div className="tt-ppli-caption">
                                                    <h2 className="tt-ppli-title">{project.title}</h2>
                                                    <div className="tt-ppli-categories">
                                                        {project.categories.map((category) => (
                                                            <div className="tt-ppli-category" key={category}>{category}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                                                <div className="tt-ppli-info">{project.info}</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
