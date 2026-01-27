import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'
import { GameScene } from './scenes/GameScene'
import { GameUI } from './components/GameUI'

export function App() {
  return (
    <div className="relative w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <OrbitControls />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={[2048, 2048]}
        />
        
        <Suspense fallback={null}>
          <Physics>
            <GameScene />
          </Physics>
        </Suspense>
      </Canvas>
      
      <GameUI />
    </div>
  )
}
