import TitleBox from "../TitleBox";
import CubeWrapper from "../Cube";
import scss from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={`container ${scss.wrapper}`} id="home">
      <TitleBox />
      <CubeWrapper />
    </div>
  );
};

export default Hero;
