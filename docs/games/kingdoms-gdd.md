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
- Se dezvoltă în timp (clădiri noi, armate mai mari)
- Lansează **atacuri periodice** asupra jucătorilor
- Dificultate crescătoare pe măsură ce jocul avansează

## Clădiri

| Clădire | Funcție | Cost |
|---------|---------|------|
| Castel | Baza principală, spawn point | Start |
| Cazarmă | Antrenează infanterie | 100 lemn |
| Poligon | Antrenează arcași | 150 lemn |
| Grajd | Antrenează cavalerie | 200 lemn, 100 aur |
| Turn | Apărare, vizibilitate | 80 piatră |
| Zid | Barieră defensivă | 50 piatră/segment |
| Fermă | Generează mâncare | 50 lemn |
| Mină | Generează aur | 100 lemn |
| Fierăstrău | Generează lemn | 50 lemn |

## Resurse

| Resursă | Utilizare |
|---------|-----------|
| **Lemn** | Material de construcție de bază |
| **Piatră** | Structuri defensive |
| **Aur** | Unități avansate, upgrade-uri |
| **Mâncare** | Întreținere unități, limită populație |

## Unități

### Infanterie

| Unitate | HP | Atac | Viteză | Cost |
|---------|-----|------|--------|------|
| Milițian | 50 | 5 | 3 | 10 mâncare |
| Spadasin | 100 | 15 | 2.5 | 30 mâncare, 10 aur |
| Suliță | 80 | 12 | 2 | 25 mâncare |

### Arcași

| Unitate | HP | Atac | Rază | Cost |
|---------|-----|------|------|------|
| Arcaș | 40 | 8 | 8 | 20 mâncare, 5 aur |
| Arbaletier | 50 | 15 | 6 | 30 mâncare, 15 aur |

### Cavalerie

| Unitate | HP | Atac | Viteză | Cost |
|---------|-----|------|--------|------|
| Cercetaș | 60 | 8 | 6 | 40 mâncare, 20 aur |
| Cavaler | 150 | 25 | 5 | 80 mâncare, 50 aur |

## Combat

- **Bătălii în timp real**
- **Damage per second (DPS)** - fiecare unitate are DPS-ul ei
- **Formula damage:** `damage = attack * (1 - armor/100)`
- **Critical hit:** 10% șansă pentru 2x damage
- **Morală:** Unitățile fug când armata scade sub 20% HP

### Auto-Defense (Offline)
- Când ești offline, armata ta **apără automat** baza
- AI defensiv simplu: atacă inamicii din rază
- Primești raport când te reconectezi

## Atacuri AI

- Vin **periodic** (frecvența crește în timp)
- Intensitate bazată pe:
  - Cât de dezvoltată e baza ta
  - Cât timp a trecut în joc
  - Câte baze AI au fost distruse

## Condiție de Victorie

🏆 **Distrugeți toate bazele AI**

Jucătorii câștigă când ultima bază AI este eliminată.

## Flux de Joc

1. **Early Game** - Construiești baza, aduni resurse
2. **Mid Game** - Aperi împotriva atacurilor AI, te extinzi
3. **Late Game** - Coordonezi atacuri cu alți jucători asupra bazelor AI
4. **End Game** - Asalt final pe bazele AI rămase

## Dificultate Progresivă

- AI-ul **se dezvoltă în paralel** cu jucătorii
- Bazele AI produc unități și se întăresc
- Atacurile devin mai frecvente și mai puternice
- Nu există "grind" - trebuie să avansezi activ

---

*Document Version: 2.0*  
*Last Updated: 2026-01-27*
