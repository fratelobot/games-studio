# Kingdoms - Game Design Document

## Overview

**Genre:** Co-op Persistent RTS  
**Players:** 1-4 jucători vs AI  
**Inspiration:** Stronghold Kingdoms  
**Platform:** Web (browser)  
**Session Duration:** Săptămâni (persistent world)

## Core Concept

Un joc medieval de construcție și război în care jucătorii colaborează împotriva unui AI care se dezvoltă progresiv. Construiești baze, antrenezi armate și lupți pentru a distruge toate bazele AI.

### Key Features

- **Co-op vs AI** - Jucătorii colaborează, nu concurează
- **Persistent World** - Jocul continuă și când ești offline
- **Auto-Defense** - Armata ta apără automat baza când nu ești online
- **Progressive Difficulty** - AI-ul se dezvoltă natural în timp
- **Production Chains** - Economia bazată pe lanțuri de producție (ca în Stronghold)

## Map & Territory

- **Hartă mare și deschisă**
- **Fără teritorii predefinite** - construiești oriunde
- **Restricție:** Nu poți construi dacă ești sub atac

## Baze

### Baze Jucători
- Fiecare jucător are **baza lui separată**
- Poziționare liberă pe hartă
- Poate fi extinsă în orice direcție

### Baze AI
- **Multiple baze** distribuite pe hartă
- **Identice cu jucătorii** - aceleași clădiri, unități, economie
- Se dezvoltă în timp (clădiri noi, armate mai mari)
- Lansează **atacuri periodice** asupra jucătorilor
- Dificultate crescătoare pe măsură ce jocul avansează

---

## Clădiri

### 🏛️ Principal

| Clădire | Funcție |
|---------|---------|
| Primărie | Centrul bazei, deblocă alte clădiri |

### ⛏️ Extracție Resurse

| Clădire | Produce |
|---------|---------|
| Mină de fier | Fier |
| Mină de piatră | Piatră |
| Lumbermill | Lemn |

### 🍖 Producție Mâncare

| Clădire | Input | Output |
|---------|-------|--------|
| Fermă de porci | - | Carne |
| Fermă de vaci | - | Lapte |
| Brânzărie | Lapte | Brânză |
| Livadă meri | - | Mere |
| Livadă cireși | - | Cireșe |
| Lan de grâu | - | Grâu |
| Moară de grâu | Grâu | Făină |
| Brutărie | Făină | Pâine |

### 📦 Depozite

| Clădire | Stochează |
|---------|-----------|
| Depozit mâncare | Toate tipurile de mâncare |
| Depozit materie primă | Lemn, piatră, fier |
| Depozit arme | Arme și armuri |

### ⚔️ Producție Arme

| Clădire | Input | Output |
|---------|-------|--------|
| Atelier arcuri | Lemn | Arcuri |
| Atelier sulițe | Lemn, Fier | Sulițe |
| Atelier armuri | Fier | Armuri |
| Atelier săbii | Fier | Săbii |

### 🏠 Populație

| Clădire | Funcție |
|---------|---------|
| Case | Adăpostesc muncitori |
| Barracks | Adăpostesc soldați, antrenare |

### 🛡️ Defensive

| Clădire | Funcție |
|---------|---------|
| Turn | Apărare, vizibilitate |
| Zid | Barieră defensivă |

---

## Economy Flow

```
┌─────────────┐
│  Primărie   │
└──────┬──────┘
       │ antrenează
       ▼
┌─────────────┐
│  Muncitori  │
└──────┬──────┘
       │ produc
       ▼
┌─────────────────────────────────┐
│  Lemn, Piatră, Fier, Mâncare   │
└──────┬──────────────────────────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│    Fier     │────▶│   Ateliere  │
└─────────────┘     └──────┬──────┘
                           │ produc
                           ▼
                   ┌───────────────┐
                   │ Arcuri/Săbii/ │
                   │ Sulițe/Armuri │
                   └───────┬───────┘
                           │
       ┌───────────────────┤
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│   Mâncare   │ + │    Arme     │
└──────┬──────┘     └──────┬──────┘
       │                   │
       └─────────┬─────────┘
                 ▼
         ┌─────────────┐
         │  Barracks   │
         └──────┬──────┘
                │ antrenează
                ▼
         ┌─────────────┐
         │   Soldați   │
         └─────────────┘
```

## Production Chains

```
🌾 PÂINE
Lan de grâu → Moară → Brutărie → Pâine

🧀 BRÂNZĂ  
Fermă de vaci → Brânzărie → Brânză

⚔️ ARME
Mină de fier → Ateliere → Săbii/Sulițe/Armuri
Lumbermill → Ateliere → Arcuri/Sulițe
```

---

## Resurse

### Materii Prime

| Resursă | Sursă | Utilizare |
|---------|-------|-----------|
| **Lemn** | Lumbermill | Construcții, arme |
| **Piatră** | Mină de piatră | Fortificații |
| **Fier** | Mină de fier | Arme, armuri |

### Mâncare

| Tip | Sursă |
|-----|-------|
| Carne | Fermă de porci |
| Lapte | Fermă de vaci |
| Brânză | Brânzărie (din lapte) |
| Mere | Livadă meri |
| Cireșe | Livadă cireși |
| Pâine | Brutărie (din făină) |

### Arme

| Armă | Ingrediente |
|------|-------------|
| Arc | Lemn |
| Suliță | Lemn + Fier |
| Sabie | Fier |
| Armură | Fier |

---

## Unități Militare

| Unitate | HP | DPS | Rază | Echipament necesar |
|---------|-----|-----|------|-------------------|
| **Arcaș** | 40 | 8 | 8 | Arc |
| **Spadasin** | 100 | 15 | melee | Sabie |
| **Sulițaș** | 80 | 12 | melee | Suliță |

### Rock-Paper-Scissors Combat?

*(De definit - propunere:)*
- 🏹 Arcași > Sulițași (îi nimeresc de la distanță)
- 🔱 Sulițași > Spadasini (rază mai mare)
- ⚔️ Spadasini > Arcași (rapid, ajung în melee)

---

## Muncitori

- **Antrenați la Primărie**
- Alocați manual la clădiri de producție
- Fără muncitor = clădirea nu produce

---

## Upkeep (Mâncare)

⚠️ **Mâncarea e critică!**

- **Toți consumă mâncare constant** (muncitori + soldați)
- Fără mâncare = satul moare de foame
- Trebuie balansat: nu antrena mai mulți decât poți hrăni

---

## Combat

- **Bătălii în timp real**
- **Damage per second (DPS)** - fiecare unitate are DPS-ul ei
- **Morală:** Unitățile fug când armata scade sub 20% HP

### Auto-Defense (Offline)
- Când ești offline, armata ta **apără automat** baza
- AI defensiv simplu: atacă inamicii din rază
- Primești raport când te reconectezi

---

## Atacuri AI

- Vin **periodic** (frecvența crește în timp)
- Intensitate bazată pe:
  - Cât de dezvoltată e baza ta
  - Cât timp a trecut în joc
  - Câte baze AI au fost distruse

---

## Condiție de Victorie

🏆 **Distrugeți toate bazele AI**

Jucătorii câștigă când ultima bază AI este eliminată.

---

## Flux de Joc

1. **Early Game** - Construiești baza, setezi production chains
2. **Mid Game** - Aperi împotriva atacurilor AI, produci arme
3. **Late Game** - Coordonezi atacuri cu alți jucători asupra bazelor AI
4. **End Game** - Asalt final pe bazele AI rămase

---

## De Definit

- [x] ~~Upkeep~~ → **Constant** (toți consumă mâncare)
- [x] ~~Baze AI~~ → **Identice cu playerii**
- [ ] **Combat counters:** Rock-paper-scissors sau toate unitățile egale?
- [ ] Costuri exacte pentru clădiri
- [ ] Timpi de producție

---

*Document Version: 2.1*  
*Last Updated: 2026-01-27*
