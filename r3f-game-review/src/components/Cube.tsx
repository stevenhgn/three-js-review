import { Vector3 } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

type CubeProps = {
  position: Vector3;
  size:
    | [
        width?: number | undefined,
        height?: number | undefined,
        depth?: number | undefined,
        widthSegments?: number | undefined,
        heightSegments?: number | undefined,
        depthSegments?: number | undefined
      ]
    | undefined;
  color: string;
  shouldAnimate?: boolean;
};

const Cube = ({ position, size, color, shouldAnimate = false }: CubeProps) => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!shouldAnimate) {
      return;
    }
    if (!ref || !ref.current) {
      return;
    }
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
export default Cube;
