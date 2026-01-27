# Games Studio 🎮

A monorepo for building web-based games with React Three Fiber.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **3D:** React Three Fiber + Three.js + Rapier (physics)
- **State:** Jotai (global) + Valtio (game state)
- **UI:** Tailwind CSS + shadcn/ui
- **Build:** Vite + Turborepo
- **Linting:** Oxlint
- **Testing:** Vitest + Playwright

## Structure

```
games-studio/
├── apps/
│   └── demo-game/        # Demo game application
├── packages/
│   ├── ui/               # Shared UI components
│   ├── game-engine/      # Shared game logic & hooks
│   └── utils/            # Shared utilities
└── ...
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test
```

## Performance Notes

- Use `useFrame` for game loop updates (imperative)
- Use Valtio for state that changes every frame
- Use Jotai for global state (settings, UI)
- Avoid React state updates in the render loop
