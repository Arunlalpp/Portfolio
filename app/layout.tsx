import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import GlobalEffects from "./components/GlobalEffects";
import MagicCursor from "./components/MagicCursor";
import PageTransition from "./components/PageTransition";
import "./styles/globals.scss";
import "./styles/_legacy-helper.scss";
import "./styles/_legacy-theme.scss";
import "./styles/_legacy-theme-light.scss";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Arun Lal — Software Engineer",
    description:
        "Portfolio of Arun Lal, a software engineer building thoughtful, reliable digital products.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={poppins.variable} suppressHydrationWarning>
            <head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />

                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap"
                    rel="stylesheet"
                />

                <link rel="stylesheet" href="/assets/vendor/fontawesome/css/all.min.css" />
            </head>

            <body
                id="body"
                className="tt-transition tt-noise tt-magic-cursor tt-smooth-scroll tt-header-scroll-on page-header-on ph-full-on ph-full-m-on ph-center-on ph-video-on ph-mask-on"
                data-theme="dark"
                data-ph-visible=""
                suppressHydrationWarning
            >
                <main id="body-inner">
                    <div id="tt-page-transition">
                        <div className="tt-ptr-overlay-top tt-noise" />
                        <div className="tt-ptr-overlay-bottom tt-noise" />
                        <div className="tt-ptr-preloader">
                            <div className="tt-ptr-prel-content">PCP</div>
                        </div>
                    </div>

                    <div id="magic-cursor">
                        <div id="ball" />
                    </div>

                    <GlobalEffects />
                    <MagicCursor />
                    <PageTransition />
                    <ThemeProvider>
                        <SmoothScrollProvider>{children}</SmoothScrollProvider>
                    </ThemeProvider>
                </main>
            </body>
        </html>
    );
}
