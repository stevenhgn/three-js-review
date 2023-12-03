import { Canvas } from "@react-three/fiber";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { OrbitControls, useHelper } from "@react-three/drei";
import "./App.css";
import Sphere from "./components/Sphere";
import Cube from "./components/Cube";
import { useRef } from "react";
import { useControls } from "leva";
const TopBar = () => {
  return (
    <>
      <group position={[-3, 3, 0]}>
        <Cube position={[1, 0, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[2, 0, 0]} color="hotpink" size={[1, 1, 1]} />
      </group>
      <group position={[-2, 3, 0]}>
        <Cube position={[3, 0, 0]} color="blue" size={[1, 1, 1]} />
        <Cube position={[4, 0, 0]} color="yellow" size={[1, 1, 1]} />
      </group>
    </>
  );
};

const Scene = () => {
  const directionalLightRef = useRef(new DirectionalLight());

  const { lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: { value: 0.5, min: 0, max: 5 },
  });
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        position={[0, 2, 5]}
        intensity={lightIntensity}
        color={lightColor}
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.1} />

      <TopBar />
      <Cube
        position={[0, 0, 0]}
        size={[4, 0.5, 4]}
        color="lightgreen"
        // shouldAnimate
      />
      <Sphere
        position={[0, 1.5, 0]}
        args={[1, 30, 30]}
        color="hotpink"
        // shouldAnimate
      />
      <OrbitControls />
    </>
  );
};
const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
