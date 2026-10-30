import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ScrollingBanner from "./components/ScrollingBanner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import SketchPlayground from "./components/SketchPlayground";
import PlaygroundGames from "./components/PlaygroundGames";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import OpenToWorkSticker from "./components/OpenToWorkSticker";
import { getApprovedTestimonials } from "./lib/testimonials";

// Re-render at most once a minute so newly approved testimonials show up.
export const revalidate = 60;

export default async function Home() {
    const testimonials = await getApprovedTestimonials();

    return (
        <>
            <Header />

            <div id="tt-content-wrap">
                <Hero />

                <div id="tt-page-content">
                    <About />
                    <Experience />
                    <Projects />
                    <ScrollingBanner />
                    <Services />
                    <Testimonials testimonials={testimonials} />
                    <TechStack />
                    <SketchPlayground />
                    <PlaygroundGames />
                    <Contact />
                </div>

                <Footer />
                <ScrollToTopButton />
                <OpenToWorkSticker />
            </div>
        </>
    );
}
