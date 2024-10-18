import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import scss from "./Cube.module.scss";

const CubeWrapper = () => {
  return (
    <div className={scss.wrapper}>
      <Canvas className={scss.canvas}>
        <ambientLight intensity={3} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default CubeWrapper;
