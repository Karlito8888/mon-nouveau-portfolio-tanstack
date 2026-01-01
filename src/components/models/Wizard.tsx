import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import type { Group } from 'three'

interface WizardProps {
  position?: [number, number, number]
  scale?: number | [number, number, number]
  rotation?: [number, number, number]
}

/**
 * Wizard 3D model component for the home page
 * Features a floating animation using useFrame
 */
export const Wizard = memo(function Wizard({
  position = [0, -1.5, 0],
  scale = 0.06,
  rotation = [0.25, 0, 0],
}: WizardProps) {
  const { scene } = useGLTF('/models/wizard-transformed.glb')
  const modelRef = useRef<Group>(null)

  // Floating animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15
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
useGLTF.preload('/models/wizard-transformed.glb')
