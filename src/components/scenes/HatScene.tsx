import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { HatModel } from '../models'

/**
 * Complete Hat 3D scene - lazy loaded for client-only rendering
 */
export default function HatScene() {
  return (
    <Canvas
      className="render-model-canvas"
      shadows={false}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <HatModel />
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  )
}
