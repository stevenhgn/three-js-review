import { Vector3 } from "@react-three/fiber";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import { Mesh } from "three";

type SphereProps = {
  position: Vector3;
  args:
    | [
        radius?: number | undefined,
        widthSegments?: number | undefined,
        heightSegments?: number | undefined,
        phiStart?: number | undefined,
        phiLength?: number | undefined,
        thetaStart?: number | undefined,
        thetaLength?: number | undefined
      ]
    | undefined;
  color: string;
  shouldAnimate?: boolean;
};
const Sphere = ({
  position,
  args,
  color,
  shouldAnimate = false,
}: SphereProps) => {
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
      <sphereGeometry args={args} />
      <meshStandardMaterial color={isHovered ? "red" : color} />
    </mesh>
  );
};

export default Sphere;
