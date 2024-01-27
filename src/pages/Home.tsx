import { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
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

  useEffect(() => {
    if (!isMobileScreen) {
      enableBodyScroll(document.body);
    }
  }, [isMobileScreen]);

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
    disableBodyScroll(document.body);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    enableBodyScroll(document.body);
  };

  return (
    <>
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
    </>
  );
};

export default Home;
