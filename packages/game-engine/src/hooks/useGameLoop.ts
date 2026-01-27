import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

interface GameLoopOptions {
  fixedTimeStep?: number
  maxSubSteps?: number
}

/**
 * Game loop hook with fixed timestep for physics
 * Use this instead of useFrame for consistent physics
 */
export function useGameLoop(
  callback: (delta: number, elapsed: number) => void,
  options: GameLoopOptions = {}
) {
  const { fixedTimeStep = 1 / 60, maxSubSteps = 3 } = options
  const accumulator = useRef(0)
  const elapsed = useRef(0)

  useFrame((_, delta) => {
    accumulator.current += Math.min(delta, 0.1) // Cap at 100ms
    
    let steps = 0
    while (accumulator.current >= fixedTimeStep && steps < maxSubSteps) {
      callback(fixedTimeStep, elapsed.current)
      accumulator.current -= fixedTimeStep
      elapsed.current += fixedTimeStep
      steps++
    }
  })
}
