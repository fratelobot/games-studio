import { useRef } from 'react'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useKeyboard, useGameLoop } from '@games-studio/game-engine'
import { gameState, gameActions } from '@games-studio/game-engine'

export function GameScene() {
  return (
    <>
      <Floor />
      <Player />
      <Collectible position={[2, 1, 0]} />
      <Collectible position={[-2, 1, 2]} />
      <Collectible position={[0, 1, -2]} />
    </>
  )
}

function Floor() {
  return (
    <RigidBody type="fixed">
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
    </RigidBody>
  )
}

function Player() {
  const ref = useRef<Mesh>(null)
  const keys = useKeyboard()
  const speed = 5

  // Use useFrame for movement (imperative, no React re-renders)
  useFrame((_, delta) => {
    if (!ref.current || gameState.isPaused) return

    const k = keys.current
    let dx = 0, dz = 0

    if (k['KeyW'] || k['ArrowUp']) dz -= 1
    if (k['KeyS'] || k['ArrowDown']) dz += 1
    if (k['KeyA'] || k['ArrowLeft']) dx -= 1
    if (k['KeyD'] || k['ArrowRight']) dx += 1

    ref.current.position.x += dx * speed * delta
    ref.current.position.z += dz * speed * delta
  })

  return (
    <mesh ref={ref} position={[0, 0.5, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4361ee" />
    </mesh>
  )
}

interface CollectibleProps {
  position: [number, number, number]
}

function Collectible({ position }: CollectibleProps) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2
  })

  return (
    <mesh ref={ref} position={position} castShadow>
      <octahedronGeometry args={[0.3]} />
      <meshStandardMaterial color="#f72585" emissive="#f72585" emissiveIntensity={0.3} />
    </mesh>
  )
}
