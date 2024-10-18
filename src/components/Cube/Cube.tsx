import { useState, useRef } from "react";
import { ThreeEvent, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, Vector2 } from "three";
import { Mesh } from "three";

const Cube = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState(new Vector2(0, 0));
  const [dragVelocity, setDragVelocity] = useState(new Vector2(0, 0));
  const meshRef = useRef<Mesh>(null);

  const texture_1 = useLoader(TextureLoader, "/assets/images/cube-1.jpg");
  const texture_2 = useLoader(TextureLoader, "/assets/images/cube-2.jpg");
  const texture_3 = useLoader(TextureLoader, "/assets/images/cube-3.jpg");
  const texture_4 = useLoader(TextureLoader, "/assets/images/cube-4.jpg");
  const texture_5 = useLoader(TextureLoader, "/assets/images/cube-5.jpg");
  const texture_6 = useLoader(TextureLoader, "/assets/images/cube-6.jpg");

  useFrame((_, delta) => {
    const ROTATION_SPEED = 0.05;
    const INERTIA_DECAY = 0.95;
    const THROW_MULTIPLIER = 15;
    const THRESHOLD = 0.001;

    if (meshRef.current && !isDragging) {
      meshRef.current.rotation.x += dragVelocity.y * delta * THROW_MULTIPLIER;
      meshRef.current.rotation.y += dragVelocity.x * delta * THROW_MULTIPLIER;

      setDragVelocity(v => v.multiplyScalar(INERTIA_DECAY));

      if (Math.abs(dragVelocity.length()) < THRESHOLD) {
        meshRef.current.rotation.x += delta * ROTATION_SPEED;
        meshRef.current.rotation.y += delta * (ROTATION_SPEED + 0.1);
        meshRef.current.rotation.z += delta * (ROTATION_SPEED + 0.05);
      }
    }
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
    setLastMousePosition(new Vector2(e.clientX, e.clientY));
    document.body.style.cursor = "grabbing";
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    const MOVE_SPEED = 0.01;

    if (!isDragging || !meshRef.current) return;

    const deltaX = e.clientX - lastMousePosition.x;
    const deltaY = e.clientY - lastMousePosition.y;

    meshRef.current.rotation.x += deltaY * MOVE_SPEED;
    meshRef.current.rotation.y += deltaX * MOVE_SPEED;

    setDragVelocity(new Vector2(deltaX * MOVE_SPEED, deltaY * MOVE_SPEED));
    setLastMousePosition(new Vector2(e.clientX, e.clientY));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "grab";
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "grab";
  };

  const handlePointerOut = () => {
    setIsDragging(false);
    document.body.style.cursor = "auto";
  };

  return (
    <mesh
      ref={meshRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
};

export default Cube;
