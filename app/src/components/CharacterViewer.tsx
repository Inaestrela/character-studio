import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { useCharacterStore } from '../store/characterStore'
import { getAsset } from '../data/assets/getAsset'
import { Component, type ReactNode } from 'react'
import type { AssetCategory } from '../store/characterStore'

const BASE_MODEL = '/assets/models/base/base.glb'

type CharacterConfig = {
  body: string
  head: string
  hair: string
  top: string
  bottom: string
  shoes: string
  base: string
}

type CharacterViewerProps = {
  rotation: number
  isRotating: boolean
  onRotationChange: (rotation: number) => void
}

/* Handle missing or invalid GLB models */
class ModelErrorBoundary extends Component<
  {
    children: ReactNode
    model: string
  },
  {
    hasError: boolean
  }
> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch() {
    console.warn(
      `Failed to load model: ${this.props.model}`,
    )
  }

  render() {
    if (this.state.hasError) {
      return null
    }

    return this.props.children
  }
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

function ModelPart({
  category,
  type,
}: {
  category: AssetCategory
  type: string
}) {
  const asset = getAsset(category, type)

  if (!asset) {
    console.warn(
      `Missing asset: category="${category}", id="${type}"`,
    )

    return null
  }

  return (
  <ModelErrorBoundary model={asset.model}>
    <LoadedModel model={asset.model} />
  </ModelErrorBoundary>
)
}


/* Complete character */
function Character({
  config,
  rotation,
  isRotating,
  onRotationChange,
}: {
  config: CharacterConfig
  rotation: number
  isRotating: boolean
  onRotationChange: (rotation: number) => void
}) {
  const characterGroup = useRef<THREE.Group>(null)

  /* Keep the model rotation synchronized with the viewer */
  useEffect(() => {
    if (!characterGroup.current) {
      return
    }

    characterGroup.current.rotation.y = rotation
  }, [rotation])

  /* Automatic character rotation */
  useFrame((_, delta) => {
    if (!characterGroup.current || !isRotating) {
      return
    }

    const nextRotation =
      characterGroup.current.rotation.y + delta * 0.5

    characterGroup.current.rotation.y = nextRotation

    onRotationChange(nextRotation)
  })

  return (
    <group
      ref={characterGroup}
      rotation={[0, rotation, 0]}
    >
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
      <group position={[0, -0.15, 0]}>
        <ModelErrorBoundary model={BASE_MODEL}>
          <LoadedModel model={BASE_MODEL} />
        </ModelErrorBoundary>
      </group>
    </group>
  )
}

/* 3D SCENE */
function CharacterViewer({
  rotation,
  isRotating,
  onRotationChange,
}: CharacterViewerProps) {
  const characterConfig = useCharacterStore()

  return (
    <Canvas
      camera={{
        position: [0, 5.8, 25],
        fov: 35,
      }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 5.8, 0)
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
      style={{
        background: 'transparent',
      }}
    >
      {/* HDRI lighting */}
      <Environment
        files="/hdri/forest.exr"
        background={false}
        environmentIntensity={0.7}
      />

      {/* Back / fill light */}
      <directionalLight
        position={[0, 5, -5]}
        intensity={1.5}
      />

      {/* Character */}
      <Character
        config={characterConfig}
        rotation={rotation}
        isRotating={isRotating}
        onRotationChange={onRotationChange}
      />
    </Canvas>
  )
}

export default CharacterViewer
