import ArrowIcon from "./ArrowIcon";

const bands = [
    { text: "Building reliable software", className: "tt-scrolling-text scrt-dyn-separator scrt-color-reverse", opposite: true },
    { text: "Building reliable software", className: "tt-scrolling-text scrt-dyn-separator", opposite: false },
];

export default function ScrollingBanner() {
    return (
        <div className="tt-section no-padding padding-top-xlg-40 padding-bottom-xlg-40">
            <div className="tt-section-inner">
                <div className="tt-scrolling-text-crossed">
                    <div className="tt-scrolling-text-crossed-inner">
                        {bands.map((band) => (
                            <div
                                key={band.className}
                                className={band.className}
                                data-scroll-speed="7"
                                data-change-direction="true"
                                data-opposite-direction={band.opposite || undefined}
                            >
                                <div className="tt-scrt-inner">
                                    <div className="tt-scrt-content">
                                        {band.text}
                                        <span className="tt-scrt-separator">
                                            <ArrowIcon />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
