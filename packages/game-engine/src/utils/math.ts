import * as THREE from 'three'

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

export function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function randomVector3(scale = 1): THREE.Vector3 {
  return new THREE.Vector3(
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale
  )
}
