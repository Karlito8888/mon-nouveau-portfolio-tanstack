import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import type { Group } from 'three'

interface HatModelProps {
  position?: [number, number, number]
  scale?: number | [number, number, number]
  rotation?: [number, number, number]
}

/**
 * HatModel 3D model component for the about page
 * Features continuous Y-axis rotation animation
 */
export const HatModel = memo(function HatModel({
  position = [0, 0, 0],
  scale = 1.8,
  rotation = [0.4, -1, 0],
}: HatModelProps) {
  const { scene } = useGLTF('/models/hat-transformed.glb')
  const modelRef = useRef<Group>(null)

  // Continuous rotation animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
      dispose={null}
    />
  )
})

// Preload the model for better performance
useGLTF.preload('/models/hat-transformed.glb')
