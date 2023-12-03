import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { Canvas } from "@react-three/fiber";

import "./App.css";
const Box = () => {
  const meshRef = useRef<Mesh>(null!);

  useEffect(() => {
    console.log(Boolean(meshRef.current));
  }, []);

  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <mesh>
        <boxGeometry args={[3, 3, 4]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
};
const App = () => {
  return <Box />;
};

export default App;
