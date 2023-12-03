import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Sphere from "./components/Sphere";
import Torus from "./components/Torus";
// const TopBar = () => {
//   return (
//     <>
//       <group position={[-3, 3, 0]}>
//         <Cube position={[1, 0, 0]} color="green" size={[1, 1, 1]} />
//         <Cube position={[2, 0, 0]} color="hotpink" size={[1, 1, 1]} />
//       </group>
//       <group position={[-2, 3, 0]}>
//         <Cube position={[3, 0, 0]} color="blue" size={[1, 1, 1]} />
//         <Cube position={[4, 0, 0]} color="yellow" size={[1, 1, 1]} />
//       </group>
//     </>
//   );
// };

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      {/* <TopBar /> */}
      <Sphere
        position={[0, 0, 0]}
        args={[1, 30, 30]}
        color="hotpink"
        // shouldAnimate
      />
      <OrbitControls enableZoom />
    </Canvas>
  );
};

export default App;
