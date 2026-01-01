import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Wizard } from "../models";

/**
 * Complete Wizard 3D scene - lazy loaded for client-only rendering
 * This module is never evaluated on the server
 */
export default function WizardScene() {
  return (
    <Canvas className="render-model-canvas" shadows={false} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <Wizard />
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
}
