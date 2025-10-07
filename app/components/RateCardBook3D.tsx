"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useTexture } from "@react-three/drei"
import { useRef, useEffect } from "react"
import type * as THREE from "three"

function RateCardBook() {
  console.log("[v0] RateCardBook component rendering")

  const bookRef = useRef<THREE.Group>(null)

  const rateCardTexture = useTexture("/master-rate-card-cover.jpg")

  useEffect(() => {
    console.log("[v0] Setting up book animation")

    if (bookRef.current) {
      const animate = () => {
        if (bookRef.current) {
          bookRef.current.rotation.y += 0.005
        }
        requestAnimationFrame(animate)
      }
      animate()
    }
  }, [])

  return (
    <group ref={bookRef}>
      {/* Front cover */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[2, 2.8, 0.05]} />
        <meshStandardMaterial map={rateCardTexture} />
      </mesh>

      {/* Back cover */}
      <mesh position={[0, 0, -0.1]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[2, 2.8, 0.05]} />
        <meshStandardMaterial map={rateCardTexture} />
      </mesh>

      {/* Book spine - smaller and black */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.95, 2.75, 0.15]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  )
}

export default function RateCardBook3D() {
  console.log("[v0] RateCardBook3D wrapper rendering")

  return (
    <div className="w-full h-full bg-gray-100 rounded-lg">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RateCardBook />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
