import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { Suspense, type ReactNode } from 'react'

interface RenderModelProps {
  children: ReactNode
  className?: string
}

/**
 * Three.js Canvas wrapper component
 * Provides consistent 3D rendering environment for all models
 */
export function RenderModel({ children, className }: RenderModelProps) {
  return (
    <Canvas
      className={clsx('render-model-canvas', className)}
      shadows={false}
      dpr={[1, 2]} // Device pixel ratio for retina displays
    >
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  )
}
