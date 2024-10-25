import { Suspense, lazy } from "react";
import TitleBox from "../TitleBox";
import useIcons from "../../hooks/useIcons";
import scss from "./Hero.module.scss";

const CubeWrapper = lazy(() => import("../Cube"));

const Hero = () => {
  const { Loader } = useIcons();

  return (
    <div className={`container ${scss.wrapper}`} id="home">
      <TitleBox />
      <Suspense
        fallback={
          <div className={scss.fallbackWrapper}>
            <Loader className={scss.loader} />
          </div>
        }
      >
        <CubeWrapper />
      </Suspense>
    </div>
  );
};

export default Hero;
