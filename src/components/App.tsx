import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Squares from "./Squares";

const App = () => {
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
