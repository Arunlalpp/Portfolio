import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ScrollingBanner from "./components/ScrollingBanner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
    return (
        <>
            <Header />

            <div id="tt-content-wrap">
                <Hero />

                <div id="tt-page-content">
                    <About />
                    <Projects />
                    <ScrollingBanner />
                    <Services />
                    <Testimonials />
                    <TechStack />
                    <Contact />
                </div>

                <Footer />
                <ScrollToTopButton />
            </div>
        </>
    );
}
