import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { About, Contact,  Hero, Navbar, Tech, Works, Timeline, Layout } from "./components";


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
      </Helmet>

      <BrowserRouter>
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
          <Route path="/blogs" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;