import { proxy, useSnapshot } from 'valtio'

/**
 * Valtio store for game state that changes frequently
 * Use snapshot for React components, direct access in useFrame
 */
export interface GameState {
  score: number
  lives: number
  isPaused: boolean
  isGameOver: boolean
}

export const gameState = proxy<GameState>({
  score: 0,
  lives: 3,
  isPaused: false,
  isGameOver: false,
})

// Actions
export const gameActions = {
  addScore: (points: number) => {
    gameState.score += points
  },
  loseLife: () => {
    gameState.lives--
    if (gameState.lives <= 0) {
      gameState.isGameOver = true
    }
  },
  togglePause: () => {
    gameState.isPaused = !gameState.isPaused
  },
  reset: () => {
    gameState.score = 0
    gameState.lives = 3
    gameState.isPaused = false
    gameState.isGameOver = false
  },
}

// Hook for React components
export function useGameState() {
  return useSnapshot(gameState)
}
