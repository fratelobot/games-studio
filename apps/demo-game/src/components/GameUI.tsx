import { useGameState, gameActions } from '@games-studio/game-engine'
import { Button } from '@games-studio/ui'

export function GameUI() {
  const { score, lives, isPaused, isGameOver } = useGameState()

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* HUD */}
      <div className="absolute top-4 left-4 text-white">
        <p className="text-2xl font-bold">Score: {score}</p>
        <p className="text-xl">Lives: {'❤️'.repeat(lives)}</p>
      </div>

      {/* Pause button */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <Button onClick={gameActions.togglePause} variant="secondary">
          {isPaused ? 'Resume' : 'Pause'}
        </Button>
      </div>

      {/* Pause overlay */}
      {isPaused && !isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Paused</h2>
            <Button onClick={gameActions.togglePause} className="pointer-events-auto">
              Resume
            </Button>
          </div>
        </div>
      )}

      {/* Game over overlay */}
      {isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Game Over</h2>
            <p className="text-2xl mb-4">Final Score: {score}</p>
            <Button onClick={gameActions.reset} className="pointer-events-auto">
              Play Again
            </Button>
          </div>
        </div>
      )}

      {/* Controls hint */}
      <div className="absolute bottom-4 left-4 text-white/60 text-sm">
        WASD or Arrow Keys to move
      </div>
    </div>
  )
}
