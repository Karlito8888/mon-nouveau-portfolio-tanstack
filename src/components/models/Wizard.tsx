import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import { MathUtils, type Group } from "three";

interface WizardProps {
  position?: [number, number, number];
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
}

/**
 * Wizard 3D model component for the home page
 * Features a floating animation and smooth scale-in entrance
 */
export const Wizard = memo(function Wizard({
  position = [0, -1.5, 0],
  scale = 0.06,
  rotation = [0.25, 0, 0],
}: WizardProps) {
  const { scene } = useGLTF("/models/wizard-transformed.glb");
  const modelRef = useRef<Group>(null);
  const currentScaleRef = useRef(0.001); // Start nearly invisible

  // Clone the scene to avoid shared state issues on remount
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Target scale (normalize to number)
  const targetScale = typeof scale === "number" ? scale : scale[0];

  // Floating animation + rotation + progressive scale-in
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Floating animation
      modelRef.current.position.y =
        -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;

      // Continuous 360° rotation (same speed as Hat and Staff)
      modelRef.current.rotation.y += 0.007;

      // Progressive scale animation with smooth lerp
      // Speed factor: lower = slower entrance (0.8 gives ~2-3 second entrance)
      currentScaleRef.current = MathUtils.lerp(
        currentScaleRef.current,
        targetScale,
        delta * 0.8,
      );

      const s = currentScaleRef.current;
      modelRef.current.scale.set(s, s, s);
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      position={position}
      scale={0.001} // Initial scale, will be animated
      rotation={rotation}
      dispose={null}
    />
  );
});

// Preload the model for better performance
useGLTF.preload("/models/wizard-transformed.glb");
