import { Vector3 } from "@react-three/fiber";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
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
  const [isHovered, setIsHovered] = useState<boolean>(false);
  useFrame((state, delta) => {
    if (!shouldAnimate) {
      return;
    }
    if (!ref || !ref.current) {
      return;
    }
    const speed = isHovered ? 0.5 : 0.2;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.y += delta;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  const onPointerEnter = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      event.stopPropagation();
      setIsHovered(true);
    },
    [setIsHovered]
  );
  const onPointerLeave = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      event.stopPropagation();
      setIsHovered(false);
    },
    [setIsHovered]
  );

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "lightblue" : color} />
    </mesh>
  );
};

export default Cube;
