import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useCharacterStore } from '../store/characterStore'
import { getAsset } from '../data/assets/getAsset'

import type { AssetCategory } from '../store/characterStore'

type CharacterConfig = {
  body: string
  head: string
  hair: string
  top: string
  bottom: string
  shoes: string
  base: string
}

/* Load one GLB model */
function LoadedModel({
  model,
}: {
  model: string
}) {
  const { scene } = useGLTF(model)

  return (
    <primitive
      object={scene.clone()}
    />
  )
}

/* Generic character part */
function ModelPart({
  category,
  type,
}: {
  category: AssetCategory
  type: string
}) {
  const asset = getAsset(category, type)

  if (!asset) {
    return null
  }

  return (
    <LoadedModel model={asset.model} />
  )
}

/* Figurine base */
function Base() {
  return (
    <mesh position={[0, -0.7, 0]}>
      <cylinderGeometry
        args={[1.2, 1.2, 0.3, 32]}
      />

      <meshStandardMaterial color="#d0d0d0" />
    </mesh>
  )
}

/* Complete character */
function Character({
  config,
}: {
  config: CharacterConfig
}) {
  return (
    <group>
      {/* Body */}
      <ModelPart
        category="body"
        type={config.body}
      />

      {/* Head */}
      <ModelPart
        category="head"
        type={config.head}
      />

      {/* Hair */}
      <ModelPart
        category="hair"
        type={config.hair}
      />

      {/* Top */}
      <ModelPart
        category="top"
        type={config.top}
      />

      {/* Bottom */}
      <ModelPart
        category="bottom"
        type={config.bottom}
      />

      {/* Shoes */}
      <ModelPart
        category="shoes"
        type={config.shoes}
      />

      {/* Figurine base */}
      <Base />
    </group>
  )
}

/* 3D SCENE */
function CharacterViewer() {
  const characterConfig = useCharacterStore()

  return (
    <Canvas
      camera={{ position: [4, 4, 8] }}
      gl={{ alpha: true }}
      style={{
        background: 'transparent',
      }}
    >
      {/* Scene lighting */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
      />

      <ambientLight intensity={0.5} />

      {/* Character */}
      <Character
        config={characterConfig}
      />

      {/* Camera controls */}
      <OrbitControls
        target={[0, 3.3, 0]}
      />
    </Canvas>
  )
}

export default CharacterViewer