import type { Metadata } from "next";

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
    <html lang="en">
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

      <body id="body" className="tt-transition tt-noise tt-magic-cursor tt-smooth-scroll">
        <main id="body-inner">
          <div id="tt-page-transition">
            <div className="tt-ptr-overlay-top tt-noise"></div>
            <div className="tt-ptr-overlay-bottom tt-noise"></div>
            <div className="tt-ptr-preloader">
              <div className="tt-ptr-prel-content">
                <img src="/assets/img/logo-light.png" className="tt-ptr-prel-image" alt="Logo" />
              </div>
            </div>
          </div>

          <div id="magic-cursor">
            <div id="ball"></div>
          </div>

          {children}
        </main>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var sources = [
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
                  "/assets/js/theme.js"
                ];
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
            `,
          }}
        />
      </body>
    </html>
  );
}
