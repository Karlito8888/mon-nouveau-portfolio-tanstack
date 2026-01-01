import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ClientOnly } from "@tanstack/react-router";
import clsx from "clsx";
import { Suspense, type ReactNode } from "react";

interface RenderModelProps {
  children: ReactNode;
  className?: string;
}

/**
 * Inner Canvas component - only rendered on client
 */
function CanvasContent({ children, className }: RenderModelProps) {
  return (
    <Canvas
      className={clsx("render-model-canvas", className)}
      shadows={false}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
}

/**
 * Three.js Canvas wrapper component
 * Uses ClientOnly to prevent SSR issues with WebGL
 */
export function RenderModel({ children, className }: RenderModelProps) {
  return (
    <ClientOnly
      fallback={<div className={clsx("render-model-canvas", className)} />}
    >
      <CanvasContent className={className}>{children}</CanvasContent>
    </ClientOnly>
  );
}
