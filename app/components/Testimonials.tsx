import { testimonials } from "../data/content";

export default function Testimonials() {
    return (
        <div id="testimonials" className="tt-section tt-sbg-on border-bottom">
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
                                    {testimonials.map((testimonial) => (
                                        <div className="tt-stte-item" key={testimonial.author}>
                                            <div className="tt-stte-card cursor-alter">
                                                <div className="tt-stte-card-counter" />
                                                <div className="tt-stte-card-caption">
                                                    <div className="tt-stte-text">&ldquo;{testimonial.quote}&rdquo;</div>
                                                    <div className="tt-stte-subtext">{testimonial.author}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
