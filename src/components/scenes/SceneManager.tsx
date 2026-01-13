import { Environment, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLocation } from "@tanstack/react-router";
import { Suspense, useState } from "react";
import { useBreakpoints } from "../../hooks/useScreenSize";
import { HatModel } from "../models/HatModel";
import { Staff } from "../models/Staff";
import { Wizard } from "../models/Wizard";

/**
 * Persistent SceneManager component that keeps a single Canvas mounted
 * across all routes, preventing 3D models from being destroyed on navigation.
 *
 * The appropriate model is rendered based on the current route:
 * - "/" (home): Wizard model
 * - "/about": Hat model
 * - "/projects": Staff model
 * - Other routes: No model shown
 */
export function SceneManager() {
  const { isMobile } = useBreakpoints();
  const [dpr, setDpr] = useState(isMobile ? 1 : 1.5);
  const location = useLocation();
  const pathname = location.pathname;

  // Determine which model to show based on route
  const showWizard = pathname === "/";
  const showHat = pathname === "/about";
  const showStaff = pathname === "/projects";
  const hasModel = showWizard || showHat || showStaff;

  // Determine container class based on current route
  const getContainerClass = () => {
    if (showWizard) return "scene-container scene-container--home";
    if (showHat) return "scene-container scene-container--about";
    if (showStaff) return "scene-container scene-container--projects";
    return "scene-container scene-container--hidden";
  };

  return (
    <div className={getContainerClass()}>
      <Canvas
        className="render-model-canvas"
        shadows={false}
        dpr={dpr}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(Math.min(2, dpr + 0.25))}
          onDecline={() => setDpr(Math.max(0.75, dpr - 0.25))}
        >
          <Suspense fallback={null}>
            {/* Render all models but control visibility via conditional rendering */}
            {showWizard && <Wizard />}
            {showHat && <HatModel />}
            {showStaff && <Staff />}
          </Suspense>

          {/* Lighting - consistent across all models */}
          {hasModel && (
            <>
              {isMobile ? (
                <>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                </>
              ) : (
                <Environment preset="dawn" />
              )}
            </>
          )}
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
}
