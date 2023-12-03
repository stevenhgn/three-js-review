import { Vector3 } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
type TorusProps = {
  position: Vector3;
  args:
    | [
        radius?: number | undefined,
        tube?: number | undefined,
        radialSegments?: number | undefined,
        tubularSegments?: number | undefined,
        arc?: number | undefined
      ]
    | undefined;
  color: string;
  shouldAnimate?: boolean;
};
const Torus = ({
  position,
  args,
  color,
  shouldAnimate = false,
}: TorusProps) => {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!shouldAnimate) {
      return;
    }
    if (!ref || !ref.current) {
      return;
    }
    // // ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
