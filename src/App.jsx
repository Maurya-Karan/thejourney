import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { About, Contact, Hero, Navbar, Tech, Works, Timeline, Layout, HB, Letters } from "./components";
import { AuthProvider } from "./context/AuthContext";


const App = () => {


  return (
    <HelmetProvider>
      <Helmet>
        <title>Karan Maurya - Software Developer</title>
        <meta name="description" content="Karan Maurya - Software Developer skilled in Java, MERN stack, Full-Stack Development, and Cloud Computing. Explore my projects and skills." />
        <meta name="keywords" content="Karan Maurya, Software Developer, MERN, Java, React, Portfolio, Full-Stack, Web Developer" />
        <meta name="author" content="Karan Maurya" />
        <meta property="og:title" content="Karan Maurya - Software Developer/Web Developer" />
        <meta property="og:description" content="Portfolio and resume of Karan Maurya, a passionate software developer skilled in Java, React, and cloud computing." />
        <meta property="og:url" content="https://mauryakaran.com" />
        <meta property="og:type" content="website" />
        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; media-src 'self' https:; frame-src 'self'" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="X-Frame-Options" content="SAMEORIGIN" />
      </Helmet>

      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* <Route path="/" element={<Layout />} /> */}
            <Route index element={
              <div className="relative z-0 bg-primary">
                <Hero />
                <About />
                <Tech />
                <Works />
                <Contact />
              </div>
            } />
            <Route path="/letters" element={<Letters />} />
            <Route path="/hb" element={<HB />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;