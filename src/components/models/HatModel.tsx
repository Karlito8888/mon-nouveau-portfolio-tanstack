import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { MathUtils, type Group } from 'three'

interface HatModelProps {
  position?: [number, number, number]
  scale?: number | [number, number, number]
  rotation?: [number, number, number]
}

/**
 * HatModel 3D model component for the about page
 * Features continuous Y-axis rotation and smooth scale-in entrance
 */
export const HatModel = memo(function HatModel({
  position = [0, 0, 0],
  scale = 1.8,
  rotation = [0.4, -1, 0],
}: HatModelProps) {
  const { scene } = useGLTF('/models/hat-transformed.glb')
  const modelRef = useRef<Group>(null)
  const currentScaleRef = useRef(0.01) // Start nearly invisible

  // Clone the scene to avoid shared state issues on remount
  const clonedScene = useMemo(() => scene.clone(), [scene])

  // Target scale (normalize to number)
  const targetScale = typeof scale === 'number' ? scale : scale[0]

  // Continuous rotation + progressive scale-in animation
  useFrame((_, delta) => {
    if (modelRef.current) {
      // Rotation animation
      modelRef.current.rotation.y += 0.007

      // Progressive scale animation with smooth lerp
      currentScaleRef.current = MathUtils.lerp(
        currentScaleRef.current,
        targetScale,
        delta * 0.8
      )

      const s = currentScaleRef.current
      modelRef.current.scale.set(s, s, s)
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      position={position}
      scale={0.01} // Initial scale, will be animated
      rotation={rotation}
      dispose={null}
    />
  )
})

// Preload the model for better performance
useGLTF.preload('/models/hat-transformed.glb')
