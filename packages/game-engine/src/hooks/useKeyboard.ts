import { useEffect, useRef } from 'react'

type KeyState = Record<string, boolean>

/**
 * Hook for tracking keyboard state without re-renders
 * Access via ref.current for use in useFrame
 */
export function useKeyboard() {
  const keys = useRef<KeyState>({})

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true
    }
    
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.code] = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return keys
}
