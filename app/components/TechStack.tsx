import { techStack } from "../data/content";

export default function TechStack() {
    return (
        <>
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
                        {techStack.map((item) => (
                            <div className="tt-avlist-item cursor-alter tt-anim-fadeinup" key={item.name}>
                                <div className="tt-avlist-item-inner">
                                    <div className="tt-avlist-col tt-avlist-col-count"><div className="tt-avlist-count" /></div>
                                    <div className="tt-avlist-col tt-avlist-col-title"><h4 className="tt-avlist-title">{item.name}</h4></div>
                                    <div className="tt-avlist-col tt-avlist-col-description"><div className="tt-avlist-description">{item.category}</div></div>
                                    <div className="tt-avlist-col tt-avlist-col-info"><div className="tt-avlist-info">{item.experience}</div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
