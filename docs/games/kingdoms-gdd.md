# Kingdoms - Game Design Document

## Overview

**Genre:** Co-op Persistent RTS  
**Players:** 1-4 players vs AI  
**Inspiration:** Stronghold Kingdoms  
**Platform:** Web (browser)  
**Session Duration:** Weeks (persistent world)

## Core Concept

A medieval building and warfare game where players collaborate against an AI that develops progressively. Build bases, train armies, and fight to destroy all AI bases.

### Key Features

- **Co-op vs AI** - Players collaborate, not compete
- **Persistent World** - The game continues even when you're offline
- **Auto-Defense** - Your army defends automatically when you're offline
- **Progressive Difficulty** - AI develops naturally over time
- **Production Chains** - Economy based on production chains (like Stronghold)

## Map & Territory

- **Large, open map**
- **No predefined territories** - build anywhere
- **Restriction:** Cannot build while under attack

## Bases

### Player Bases
- Each player has **their own separate base**
- Free positioning on map
- Can be expanded in any direction

### AI Bases
- **Multiple bases** distributed across the map
- **Identical to players** - same buildings, units, economy
- Develop over time (new buildings, larger armies)
- Launch **periodic attacks** on players
- Increasing difficulty as the game progresses

---

## Buildings

### 🏛️ Main

| Building | Function |
|----------|----------|
| Town Hall | Base center, unlocks other buildings |

### ⛏️ Resource Extraction

| Building | Produces |
|----------|----------|
| Iron Mine | Iron |
| Stone Mine | Stone |
| Lumbermill | Wood |

### 🍖 Food Production

| Building | Input | Output |
|----------|-------|--------|
| Pig Farm | - | Meat |
| Cow Farm | - | Milk |
| Dairy | Milk | Cheese |
| Apple Orchard | - | Apples |
| Cherry Orchard | - | Cherries |
| Wheat Field | - | Wheat |
| Wheat Mill | Wheat | Flour |
| Bakery | Flour | Bread |

### 📦 Storage

| Building | Stores |
|----------|--------|
| Food Storage | All food types |
| Raw Material Storage | Wood, stone, iron |
| Weapons Storage | Weapons and armor |

### ⚔️ Weapons Production

| Building | Input | Output |
|----------|-------|--------|
| Bow Workshop | Wood | Bows |
| Spear Workshop | Wood, Iron | Spears |
| Armor Workshop | Iron | Armor |
| Sword Workshop | Iron | Swords |

### 🏠 Population

| Building | Function |
|----------|----------|
| Houses | Shelter workers |
| Barracks | Shelter soldiers, training |

### 🛡️ Defensive

| Building | Function |
|----------|----------|
| Tower | Defense, visibility |
| Wall | Defensive barrier |

---

## Economy Flow

```
┌─────────────┐
│  Town Hall  │
└──────┬──────┘
       │ trains
       ▼
┌─────────────┐
│   Workers   │
└──────┬──────┘
       │ produce
       ▼
┌─────────────────────────────────┐
│    Wood, Stone, Iron, Food     │
└──────┬──────────────────────────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│    Iron     │────▶│  Workshops  │
└─────────────┘     └──────┬──────┘
                           │ produce
                           ▼
                   ┌───────────────┐
                   │  Bows/Swords/ │
                   │ Spears/Armor  │
                   └───────┬───────┘
                           │
       ┌───────────────────┤
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│    Food     │  +  │   Weapons   │
└──────┬──────┘     └──────┬──────┘
       │                   │
       └─────────┬─────────┘
                 ▼
         ┌─────────────┐
         │  Barracks   │
         └──────┬──────┘
                │ trains
                ▼
         ┌─────────────┐
         │  Soldiers   │
         └─────────────┘
```

## Production Chains

```
🌾 BREAD
Wheat Field → Mill → Bakery → Bread

🧀 CHEESE  
Cow Farm → Dairy → Cheese

⚔️ WEAPONS
Iron Mine → Workshops → Swords/Spears/Armor
Lumbermill → Workshops → Bows/Spears
```

---

## Resources

### Raw Materials

| Resource | Source | Use |
|----------|--------|-----|
| **Wood** | Lumbermill | Construction, weapons |
| **Stone** | Stone Mine | Fortifications |
| **Iron** | Iron Mine | Weapons, armor |

### Food

| Type | Source |
|------|--------|
| Meat | Pig Farm |
| Milk | Cow Farm |
| Cheese | Dairy (from milk) |
| Apples | Apple Orchard |
| Cherries | Cherry Orchard |
| Bread | Bakery (from flour) |

### Weapons

| Weapon | Ingredients |
|--------|-------------|
| Bow | Wood |
| Spear | Wood + Iron |
| Sword | Iron |
| Armor | Iron |

---

## Military Units

| Unit | HP | DPS | Range | Required Equipment |
|------|-----|-----|-------|-------------------|
| **Archer** | 40 | 8 | 8 | Bow |
| **Swordsman** | 100 | 15 | melee | Sword |
| **Spearman** | 80 | 12 | melee | Spear |

### Combat System

- **No rock-paper-scissors** - no counters between units
- Each unit has **fixed DPS**
- What matters: number of units, positioning, target focus
- Archers have range advantage but are weak in melee

---

## Workers

- **Trained at Town Hall**
- Manually assigned to production buildings
- No worker = building doesn't produce

---

## Upkeep (Food)

⚠️ **Food is critical!**

- **Everyone consumes food constantly** (workers + soldiers)
- No food = village starves
- Must balance: don't train more than you can feed

---

## Combat

- **Real-time battles**
- **Damage per second (DPS)** - each unit has its own DPS
- **Morale:** Units flee when army drops below 20% HP

### Auto-Defense (Offline)
- When offline, your army **defends automatically**
- Simple defensive AI: attacks enemies in range
- You receive a report when you reconnect

---

## AI Attacks

- Come **periodically** (frequency increases over time)
- Intensity based on:
  - How developed your base is
  - How much time has passed in game
  - How many AI bases have been destroyed

---

## Victory Condition

🏆 **Destroy all AI bases**

Players win when the last AI base is eliminated.

---

## Game Flow

1. **Early Game** - Build base, set up production chains
2. **Mid Game** - Defend against AI attacks, produce weapons
3. **Late Game** - Coordinate attacks with other players on AI bases
4. **End Game** - Final assault on remaining AI bases

---

## To Define (Balancing)

- [ ] Exact building costs
- [ ] Production times
- [ ] Exact DPS and HP per unit

---

*Document Version: 1.0*  
*Last Updated: 2026-01-27*
