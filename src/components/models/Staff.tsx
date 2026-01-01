import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import type { Group } from 'three'

interface StaffProps {
  position?: [number, number, number]
  scale?: number | [number, number, number]
}

/**
 * Staff 3D model component for the projects page
 * Features continuous Y-axis rotation animation
 */
export const Staff = memo(function Staff({
  position = [0, -2, 0],
  scale = 3,
}: StaffProps) {
  const { scene } = useGLTF('/models/staff-transformed.glb')
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
      dispose={null}
    />
  )
})

// Preload the model for better performance
useGLTF.preload('/models/staff-transformed.glb')
