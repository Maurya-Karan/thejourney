import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./components/Hero";
// import DOMScanner from './components/DOMScanner';

// 2. Lazy load the heavy lifting components
// const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works")); // Kept as 'Works' to match your JSX below
const Contact = lazy(() => import("./components/Contact"));
const CommandPalette = lazy(() => import("./components/CommandPalette"));
const BreachOverlay = lazy(() => import("./components/BreachOverlay"));
const Timeline = lazy(() => import("./components/Blog/Timeline"));

// 3. The Neo-Brutalist Loading Fallback
const CanvasLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#fafafa]">
    <div className="text-slate-900 font-black uppercase tracking-widest text-xl animate-pulse">
      Loading System...
    </div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Karan Maurya - Software Developer</title>

        {/* Updated SEO to reflect your actual systems-level expertise */}
        <meta
          name="description"
          content="Karan Maurya - Software Developer focused on backend systems, data processing, and anomaly detection. Core stack: Go, Python, Linux."
        />
        <meta
          name="keywords"
          content="Karan Maurya, Software Developer, Backend, Go, Golang, Python, Linux, Structural Log Parsing, Systems Engineering, Portfolio"
        />
        <meta name="author" content="Karan Maurya" />

        <meta
          property="og:description"
          content="Portfolio of Karan Maurya, a software developer specializing in high-performance backend systems and anomaly detection architectures."
        />
        <meta property="og:url" content="https://mauryakaran.com" />
        <meta property="og:type" content="website" />

        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; media-src 'self' https:; frame-src 'self'"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="X-Frame-Options" content="SAMEORIGIN" />
      </Helmet>

      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/blogs" element={<Timeline />} />
          <Route
            index
            element={
              // Ensuring the background color matches our light neo-brutalist theme
              <main className="relative z-0 ">
                {/* <DOMScanner /> */}
                {/* 4. The Suspense wrapper catches the lazy-loaded components and shows the CanvasLoader until they are ready */}
                <Suspense fallback={<CanvasLoader />}>
                  <CommandPalette />
                  <BreachOverlay />
                  <Hero />
                  <About />
                  <Tech />
                  <Works />
                  <Contact />
                </Suspense>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
