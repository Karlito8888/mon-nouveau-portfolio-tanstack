/**
 * Example: RenderModel Component Pattern
 *
 * This is the Three.js Canvas wrapper used to render 3D models.
 *
 * Source: /home/charles/Bureau/Next.js-Creative-Portfolio-Website-main/src/components/RenderModel.jsx
 */

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense, type ReactNode } from 'react'

interface RenderModelProps {
  children: ReactNode
  className?: string
}

/**
 * Three.js Canvas wrapper with environment lighting
 *
 * Features:
 * - Suspense boundary for async model loading
 * - Environment preset for realistic lighting
 * - Device pixel ratio optimization
 * - Shadow rendering disabled for performance
 */
export function RenderModel({ children, className }: RenderModelProps) {
  return (
    <Canvas
      className={className}
      dpr={[1, 2]} // Device pixel ratio: min 1, max 2 for retina
      shadows={false} // Disable shadows for performance
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Suspense fallback={null}>
        <Environment preset="dawn" />
        {children}
      </Suspense>
    </Canvas>
  )
}

/**
 * Usage example:
 *
 * import { RenderModel } from '@/components/RenderModel'
 * import { Wizard } from '@/components/models/Wizard'
 *
 * export function HomePage() {
 *   return (
 *     <div className="relative h-screen">
 *       <RenderModel>
 *         <Wizard
 *           scale={[0.06, 0.06, 0.06]}
 *           position={[0, -1.5, 0]}
 *           rotation={[0.25, 0, 0]}
 *         />
 *       </RenderModel>
 *     </div>
 *   )
 * }
 */
