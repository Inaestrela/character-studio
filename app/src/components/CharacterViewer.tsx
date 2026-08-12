import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useCharacterStore } from '../store/characterStore'

type CharacterConfig = {
  body: string
  head: string
  hair: string
  top: string
  bottom: string
  shoes: string
  base: string
}

function Body({ type }: { type: string }) {
  if (type === 'body_02') {
    return (
      <group>
        {/* Alternative body */}
        <mesh position={[0, 1.25, 0]}>
          <boxGeometry args={[1.2, 1.6, 0.7]} />
          <meshStandardMaterial color="#6b4f8a" />
        </mesh>

        {/* Left arm */}
        <mesh position={[-0.85, 1.3, 0]}>
          <boxGeometry args={[0.45, 1.2, 0.45]} />
          <meshStandardMaterial color="#6b4f8a" />
        </mesh>

        {/* Right arm */}
        <mesh position={[0.85, 1.3, 0]}>
          <boxGeometry args={[0.45, 1.2, 0.45]} />
          <meshStandardMaterial color="#6b4f8a" />
        </mesh>

        {/* Left leg */}
        <mesh position={[-0.35, 0, 0]}>
          <boxGeometry args={[0.45, 1, 0.45]} />
          <meshStandardMaterial color="#444444" />
        </mesh>

        {/* Right leg */}
        <mesh position={[0.35, 0, 0]}>
          <boxGeometry args={[0.45, 1, 0.45]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
      </group>
    )
  }

  return (
    <group>
      {/* Default body */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[1, 1.5, 0.6]} />
        <meshStandardMaterial color="#4f6d7a" />
      </mesh>

      {/* Left arm */}
      <mesh position={[-0.75, 1.3, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#4f6d7a" />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.75, 1.3, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#4f6d7a" />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  )
}

function Head({ type }: { type: string }) {
  if (type === 'head_02') {
    return (
      <mesh position={[0, 2.4, 0]}>
        {/* Alternative head */}
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial color="#d9a066" />
      </mesh>
    )
  }

  return (
    <mesh position={[0, 2.4, 0]}>
      {/* Default head */}
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#d9a066" />
    </mesh>
  )
}

function Hair({ type }: { type: string }) {
  if (type === 'hair_02') {
    return (
      <mesh position={[0, 2.75, 0]}>
        {/* Alternative hair */}
        <boxGeometry args={[1, 0.35, 1]} />
        <meshStandardMaterial color="#6b3f20" />
      </mesh>
    )
  }

  return (
    <mesh position={[0, 2.75, 0]}>
      {/* Default hair */}
      <sphereGeometry args={[0.52, 32, 16]} />
      <meshStandardMaterial color="#3b2416" />
    </mesh>
  )
}

function Top({ type }: { type: string }) {
  if (type === 'top_02') {
    return (
      <mesh position={[0, 1.2, 0]}>
        {/* Alternative top */}
        <boxGeometry args={[1.15, 1.4, 0.75]} />
        <meshStandardMaterial color="#8a4f4f" />
      </mesh>
    )
  }

  return (
    <mesh position={[0, 1.2, 0]}>
      {/* Default top */}
      <boxGeometry args={[1.05, 1.55, 0.65]} />
      <meshStandardMaterial color="#4f6d7a" />
    </mesh>
  )
}

function Bottom({ type }: { type: string }) {
  const color = type === 'bottom_02' ? '#6b4f8a' : '#333333'
  const width = type === 'bottom_02' ? 0.5 : 0.43

  return (
    <group>
      {/* Left bottom */}
      <mesh position={[-0.3, 0.1, 0]}>
        <boxGeometry args={[width, 1.05, width]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Right bottom */}
      <mesh position={[0.3, 0.1, 0]}>
        <boxGeometry args={[width, 1.05, width]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

function Shoes({ type }: { type: string }) {
  const color = type === 'shoes_02' ? '#8a4f4f' : '#222222'

  return (
    <group>
      {/* Left shoe */}
      <mesh position={[-0.3, -0.45, 0.15]}>
        <boxGeometry
          args={
            type === 'shoes_02'
              ? [0.55, 0.3, 0.8]
              : [0.5, 0.25, 0.7]
          }
        />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Right shoe */}
      <mesh position={[0.3, -0.45, 0.15]}>
        <boxGeometry
          args={
            type === 'shoes_02'
              ? [0.55, 0.3, 0.8]
              : [0.5, 0.25, 0.7]
          }
        />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

function Base() {
  return (
    <mesh position={[0, -0.7, 0]}>
      {/* Figurine base */}
      <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
      <meshStandardMaterial color="#222222" />
    </mesh>
  )
}

function Character({ config }: { config: CharacterConfig }) {
  return (
    <group>
      {/* Character body */}
      <Body type={config.body} />

      {/* Character head */}
      <Head type={config.head} />

      {/* Character hair */}
      <Hair type={config.hair} />

      {/* Character top */}
      <Top type={config.top} />

      {/* Character bottom */}
      <Bottom type={config.bottom} />

      {/* Character shoes */}
      <Shoes type={config.shoes} />

      {/* Figurine base */}
      <Base />
    </group>
  )
}

function CharacterViewer() {
  const characterConfig = useCharacterStore()

  return (
    <Canvas
      camera={{ position: [4, 3, 5] }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Scene lighting */}
      <ambientLight intensity={0.5} />

      {/* Main scene light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
      />

      {/* Test character */}
      <Character config={characterConfig} />

      {/* Camera controls */}
      <OrbitControls />
    </Canvas>
  )
}

export default CharacterViewer