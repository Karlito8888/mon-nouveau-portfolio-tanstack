/**
 * Example: Three.js Model Component Pattern
 *
 * This pattern demonstrates how to create 3D model components
 * following the source project conventions.
 *
 * Source: /home/charles/Bureau/Next.js-Creative-Portfolio-Website-main/src/components/models/
 */

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import type { Group } from 'three'

interface ModelProps {
  scale?: [number, number, number]
  position?: [number, number, number]
  rotation?: [number, number, number]
}

/**
 * Floating animation model (like Wizard on home page)
 * Uses sine wave for vertical oscillation
 */
export const FloatingModel = memo(function FloatingModel({
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...props
}: ModelProps) {
  const { scene } = useGLTF('/models/example.glb')
  const ref = useRef<Group>(null)

  useFrame((state) => {
    if (ref.current) {
      // Floating animation: vertical oscillation using sine wave
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.15
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
      {...props}
    />
  )
})

// Preload for better performance
useGLTF.preload('/models/example.glb')

/**
 * Rotating model (like Hat and Staff on sub-pages)
 * Continuous Y-axis rotation
 */
export const RotatingModel = memo(function RotatingModel({
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...props
}: ModelProps) {
  const { scene } = useGLTF('/models/example.glb')
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      // Continuous rotation on Y axis
      ref.current.rotation.y += 0.007
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
      {...props}
    />
  )
})
