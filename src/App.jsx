import { Suspense, lazy } from "react";
// 1. Import useLocation
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
// 2. Import Framer Motion for the page transitions
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";

// Lazy load the heavy lifting components
const About = lazy(() => import("./components/About"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const CommandPalette = lazy(() => import("./components/CommandPalette"));
const BreachOverlay = lazy(() => import("./components/BreachOverlay"));
const Timeline = lazy(() => import("./components/Blog/Timeline"));

// The Neo-Brutalist Loading Fallback
const CanvasLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#fafafa]">
    <div className="text-slate-900 font-black uppercase tracking-widest text-xl animate-pulse">
      Loading System...
    </div>
  </div>
);

// 3. NEW: The Page Transition Wrapper
// This adds a fast, deliberate "system refresh" effect when switching pages
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      // Entry: Delayed slightly to let the previous page exit
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 0.1, ease: "linear" },
      }}
      // Exit: Fast and immediate
      exit={{
        opacity: 0,
        transition: { duration: 0.2, ease: "linear" },
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

// 4. NEW: Extracted Route logic to track URL changes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" ensures the current page fully disappears BEFORE the new one loads
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* BLOG ROUTE */}
        <Route
          path="/blogs"
          element={
            <PageTransition>
              {/* Added Suspense here since Timeline is lazy loaded */}
              <Suspense fallback={<CanvasLoader />}>
                <Timeline />
              </Suspense>
            </PageTransition>
          }
        />

        {/* MAIN SPA ROUTE */}
        <Route
          index
          element={
            <PageTransition>
              <main className="relative z-0">
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
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Karan Maurya - Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Karan Maurya, a Backend & Full-Stack Engineer building fast, concurrent systems and modern web applications with Go, Java, React, and AWS."
        />
        <meta
          name="keywords"
          content="Karan Maurya, Software Engineer, Backend, Go, Golang, Python, Linux, Structural Log Parsing, Systems Engineering, Portfolio, Karan, Maurya, full-stack, developer"
        />
        <meta name="author" content="Karan Maurya" />
        <meta
          property="og:description"
          content="Portfolio of Karan Maurya, a software engineer specializing in high-performance backend systems and anomaly detection architectures."
        />
        <meta property="og:url" content="https://mauryakaran.com" />
        <meta property="og:type" content="website" />
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

      {/* 5. Cleaned up main App return */}
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AnimatedRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
