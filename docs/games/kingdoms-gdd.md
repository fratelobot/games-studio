# Kingdoms - Game Design Document

## Overview

**Genre:** Real-Time Strategy (RTS) / Multiplayer  
**Inspiration:** Stronghold Kingdoms  
**Platform:** Web (React Three Fiber)  
**Players:** Multiplayer (2-8 players)

## Core Concept

A multiplayer medieval kingdom-building and warfare game where players build castles, gather resources, train armies, and battle for territorial control.

## Visual Style

- **3D with minimalist geometry**
- Basic shapes: cubes, spheres, cylinders, cones
- Low-poly aesthetic, clean and readable
- Color-coded factions
- No complex 3D models in initial version

## Game Mechanics

### 1. Base Building

**Structures:**
| Building | Function | Cost |
|----------|----------|------|
| Castle | Main base, spawn point | Starting |
| Barracks | Train infantry | 100 wood |
| Archery Range | Train archers | 150 wood |
| Stable | Train cavalry | 200 wood, 100 gold |
| Tower | Defense, vision | 80 stone |
| Wall | Defense barrier | 50 stone/segment |
| Farm | Generate food | 50 wood |
| Mine | Generate gold | 100 wood |
| Lumber Mill | Generate wood | 50 wood |

### 2. Resources

- **Wood** - Basic building material
- **Stone** - Defensive structures
- **Gold** - Advanced units, upgrades
- **Food** - Unit upkeep, population cap

### 3. Units

**Infantry:**
| Unit | HP | Attack | Speed | Cost |
|------|-----|--------|-------|------|
| Militia | 50 | 5 | 3 | 10 food |
| Swordsman | 100 | 15 | 2.5 | 30 food, 10 gold |
| Pikeman | 80 | 12 | 2 | 25 food |

**Ranged:**
| Unit | HP | Attack | Range | Cost |
|------|-----|--------|-------|------|
| Archer | 40 | 8 | 8 | 20 food, 5 gold |
| Crossbowman | 50 | 15 | 6 | 30 food, 15 gold |

**Cavalry:**
| Unit | HP | Attack | Speed | Cost |
|------|-----|--------|-------|------|
| Scout | 60 | 8 | 6 | 40 food, 20 gold |
| Knight | 150 | 25 | 5 | 80 food, 50 gold |

### 4. Combat System

- **Real-time battles**
- Units have attack animations (simple geometric transformations)
- Damage calculation: `damage = attack * (1 - armor/100)`
- Critical hits: 10% chance for 2x damage
- Morale system: units flee when army HP < 20%

### 5. Victory Conditions

1. **Conquest** - Destroy all enemy castles
2. **Domination** - Control 75% of map territories for 5 minutes
3. **Economic** - Accumulate 10,000 gold

## Technical Architecture

### Networking Stack

```
┌─────────────────────────────────────────────┐
│                 Client                       │
│  React Three Fiber + Valtio (local state)   │
└──────────────────┬──────────────────────────┘
                   │ WebSocket
                   ▼
┌─────────────────────────────────────────────┐
│              Game Server                     │
│  - Authoritative game state                 │
│  - Tick-based simulation (20 ticks/sec)     │
│  - State delta compression                  │
│  - Client-side prediction                   │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│           State Synchronization             │
│  - Entity interpolation                     │
│  - Input buffering                          │
│  - Lag compensation                         │
└─────────────────────────────────────────────┘
```

### Entity Component System (ECS)

```typescript
// Core components
interface Position { x: number; y: number; z: number }
interface Velocity { x: number; y: number; z: number }
interface Health { current: number; max: number }
interface Faction { playerId: string; color: string }
interface UnitType { type: 'militia' | 'archer' | 'knight' | ... }
interface Target { entityId: string | null }
```

### Networking Protocol

**Client → Server:**
```typescript
type ClientMessage = 
  | { type: 'move'; unitIds: string[]; target: Position }
  | { type: 'attack'; unitIds: string[]; targetId: string }
  | { type: 'build'; buildingType: string; position: Position }
  | { type: 'train'; buildingId: string; unitType: string }
```

**Server → Client:**
```typescript
type ServerMessage =
  | { type: 'state'; tick: number; entities: EntityDelta[] }
  | { type: 'event'; event: GameEvent }
  | { type: 'sync'; fullState: GameState }
```

### Pathfinding: Flowfield

For large unit counts (100+ units), traditional A* is too expensive. 
We'll use **Flowfield pathfinding**:

1. **Navigation grid** - Divide map into cells
2. **Cost field** - Distance from each cell to target
3. **Integration field** - Cumulative cost considering obstacles
4. **Flow field** - Direction vector per cell toward target

Benefits:
- O(1) lookup per unit per frame
- Handles hundreds of units efficiently
- Natural crowd behavior

### State Management

```
Valtio (Game State - mutates every frame)
├── entities: Map<id, Entity>
├── tick: number
├── localPlayerId: string
└── pendingInputs: Input[]

Jotai (UI State - changes occasionally)
├── selectedUnits: string[]
├── buildMode: BuildingType | null
├── camera: CameraState
└── settings: GameSettings
```

## Milestones

### Phase 1: Foundation (Week 1-2)
- [ ] Basic scene with terrain grid
- [ ] Unit spawning and selection
- [ ] Simple movement (click to move)
- [ ] Camera controls

### Phase 2: Combat (Week 3-4)
- [ ] Unit stats and health bars
- [ ] Attack system
- [ ] Death and respawn
- [ ] Basic AI (attack nearest enemy)

### Phase 3: Building (Week 5-6)
- [ ] Building placement system
- [ ] Resource generation
- [ ] Unit training queue
- [ ] Building health and destruction

### Phase 4: Networking (Week 7-10)
- [ ] WebSocket server setup
- [ ] State synchronization
- [ ] Client-side prediction
- [ ] Lag compensation
- [ ] Flowfield pathfinding

### Phase 5: Polish (Week 11-12)
- [ ] UI/HUD improvements
- [ ] Sound effects
- [ ] Particle effects
- [ ] Matchmaking
- [ ] Leaderboards

## File Structure

```
apps/kingdoms/
├── src/
│   ├── components/
│   │   ├── Unit.tsx
│   │   ├── Building.tsx
│   │   ├── Terrain.tsx
│   │   └── UI/
│   ├── systems/
│   │   ├── combat.ts
│   │   ├── movement.ts
│   │   ├── pathfinding.ts
│   │   └── network.ts
│   ├── stores/
│   │   ├── gameStore.ts      # Valtio
│   │   └── uiStore.ts        # Jotai
│   ├── network/
│   │   ├── client.ts
│   │   ├── protocol.ts
│   │   └── interpolation.ts
│   └── utils/
│       ├── flowfield.ts
│       └── ecs.ts
└── server/
    ├── game.ts
    ├── lobby.ts
    └── network.ts
```

## Open Questions

1. **Dedicated server or P2P?** 
   - Recommendation: Dedicated server for authoritative state

2. **Tick rate?**
   - Recommendation: 20 ticks/sec (balance between responsiveness and bandwidth)

3. **Max units per player?**
   - Recommendation: Start with 50, optimize for 100+

4. **Map size?**
   - Recommendation: 100x100 grid cells for 2-4 players

---

*Document Version: 1.0*  
*Last Updated: 2026-01-27*
