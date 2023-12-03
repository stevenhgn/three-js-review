import { Canvas } from "@react-three/fiber";

import "./App.css";
import Cube from "./components/Cube";
import Sphere from "./components/Sphere";
import Torus from "./components/Torus";
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

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 1]} intensity={2} />
      <ambientLight intensity={1} />
      <TopBar />
      <Sphere
        position={[0, 0, 0]}
        color="grey"
        args={[1, 30, 30]}
        shouldAnimate
      />
      <Torus
        position={[2, 0, 0]}
        color="lightblue"
        args={[0.5, 0.1, 30, 30]}
        shouldAnimate
      />
    </Canvas>
  );
};

export default App;
