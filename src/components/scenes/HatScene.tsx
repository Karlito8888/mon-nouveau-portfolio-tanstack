import { Environment, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useBreakpoints } from "../../hooks/useScreenSize";
import { HatModel } from "../models";

/**
 * Complete Hat 3D scene - lazy loaded for client-only rendering
 * Optimized for mobile with adaptive DPR and simplified lighting
 */
export default function HatScene() {
  const { isMobile } = useBreakpoints();
  const [dpr, setDpr] = useState(isMobile ? 1 : 1.5);

  return (
    <Canvas
      className="render-model-canvas"
      shadows={false}
      dpr={dpr}
      gl={{
        powerPreference: "high-performance",
        antialias: dpr > 1,
        stencil: false,
        depth: true,
      }}
    >
      <PerformanceMonitor
        onIncline={() =>
          setDpr((prev) => Math.min(prev + 0.25, isMobile ? 1.5 : 2))
        }
        onDecline={() => setDpr((prev) => Math.max(prev - 0.25, 0.75))}
        flipflops={3}
        onFallback={() => setDpr(0.75)}
      >
        <Suspense fallback={null}>
          <HatModel />
        </Suspense>
        {isMobile ? (
          <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
          </>
        ) : (
          <Environment preset="dawn" />
        )}
      </PerformanceMonitor>
    </Canvas>
  );
}
