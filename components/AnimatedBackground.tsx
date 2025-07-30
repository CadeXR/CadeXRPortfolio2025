'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Canvas = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20" />
})

function AnimatedStars() {
  const starsRef = useRef<THREE.Points>(null)
  const starsGeometry = useRef<THREE.BufferGeometry>(null)
  const starsMaterial = useRef<THREE.PointsMaterial>(null)

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005
      starsRef.current.rotation.x += 0.0002
    }
  })

  // Create stars manually
  const starsCount = 5000
  const positions = new Float32Array(starsCount * 3)
  const colors = new Float32Array(starsCount * 3)

  for (let i = 0; i < starsCount; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 200
    positions[i3 + 1] = (Math.random() - 0.5) * 200
    positions[i3 + 2] = (Math.random() - 0.5) * 200

    colors[i3] = 1
    colors[i3 + 1] = 1
    colors[i3 + 2] = 1
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry ref={starsGeometry}>
        <bufferAttribute
          attach="attributes-position"
          count={starsCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starsCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={starsMaterial}
        size={0.5}
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  )
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.rotation.y += 0.002
      orbsRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 20
      })
    }
  })

  return (
    <group ref={orbsRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[Math.cos(i * 1.2) * 50, 0, Math.sin(i * 1.2) * 50]}>
          <sphereGeometry args={[2, 16, 16]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? '#00d4ff' : '#8b5cf6'} 
            transparent 
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function AnimatedBackground() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <AnimatedStars />
        <FloatingOrbs />
      </Canvas>
    </div>
  )
} 