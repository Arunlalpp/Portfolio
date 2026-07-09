import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Arun Lal — Software Engineer",
    description:
        "Portfolio of Arun Lal, a software engineer building thoughtful, reliable digital products.",
};

const vendorScripts = [
    "/assets/vendor/jquery/jquery.min.js",
    "/assets/vendor/gsap/gsap.min.js",
    "/assets/vendor/gsap/ScrollToPlugin.min.js",
    "/assets/vendor/gsap/ScrollTrigger.min.js",
    "/assets/vendor/lenis.min.js",
    "/assets/vendor/isotope/imagesloaded.pkgd.min.js",
    "/assets/vendor/isotope/isotope.pkgd.min.js",
    "/assets/vendor/isotope/packery-mode.pkgd.min.js",
    "/assets/vendor/fancybox/js/fancybox.umd.js",
    "/assets/vendor/swiper/js/swiper-bundle.min.js",
    "/assets/js/theme.js",
];

const vendorScriptLoader = `
(function () {
    var sources = ${JSON.stringify(vendorScripts)};
    function loadInOrder() {
        sources.forEach(function (src) {
            var el = document.createElement("script");
            el.src = src;
            el.async = false;
            document.body.appendChild(el);
        });
    }
    if (document.readyState === "complete") {
        loadInOrder();
    } else {
        window.addEventListener("load", loadInOrder);
    }
})();
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />

                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap"
                    rel="stylesheet"
                />

                <link rel="stylesheet" href="/assets/vendor/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="/assets/vendor/fancybox/css/fancybox.css" />
                <link rel="stylesheet" href="/assets/vendor/swiper/css/swiper-bundle.min.css" />

                <link rel="stylesheet" href="/assets/css/helper.css" />
                <link rel="stylesheet" href="/assets/css/theme.css" />
                <link rel="stylesheet" href="/assets/css/theme-light.css" />
            </head>

            <body id="body" className="tt-transition tt-noise tt-magic-cursor tt-smooth-scroll" suppressHydrationWarning>
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

                    {children}
                </main>

                <Script
                    id="vendor-scripts"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: vendorScriptLoader }}
                />
            </body>
        </html>
    );
}
