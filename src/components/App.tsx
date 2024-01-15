import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Squares from "./Squares";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
      </main>
      <Squares />
    </>
  );
};

export default App;
