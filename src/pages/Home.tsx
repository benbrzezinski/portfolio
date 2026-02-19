import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, Slide } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import Squares from "../components/Squares";

const Home = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 900px)" });

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Benfolio</title>
      </Helmet>
      <Header openMobileNav={openMobileNav} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
      {isMobileScreen && (
        <MobileNav
          isMobileNavOpen={isMobileNavOpen}
          closeMobileNav={closeMobileNav}
        />
      )}
      <Squares />
      <ToastContainer
        bodyStyle={{ lineHeight: 1.4 }}
        draggablePercent={50}
        transition={Slide}
        closeOnClick
      />
    </>
  );
};

export default Home;
