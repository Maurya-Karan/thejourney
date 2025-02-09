import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Donate, Resume } from "./components";


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
        <meta property="og:url" content="https://karanmaurya.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>

      <BrowserRouter>

        <div className='relative z-0 bg-primary' >
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />

          <Tech />
          <Works />
          <Contact />
          {/* <Donate/> */}
          <Resume />

        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;