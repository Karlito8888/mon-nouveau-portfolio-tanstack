import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Staff } from '../models'

/**
 * Complete Staff 3D scene - lazy loaded for client-only rendering
 */
export default function StaffScene() {
  return (
    <Canvas
      className="render-model-canvas"
      shadows={false}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Staff />
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  )
}
