import { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Squares from "./Squares";

const App = () => {
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
        <Home />
        <Projects />
        <Skills />
        <Contact />
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

export default App;
