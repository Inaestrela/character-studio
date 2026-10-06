import { useState } from 'react'
import CharacterViewer from './CharacterViewer'
import ModelSpinControls from './ModelSpinControls'

function Stage() {
  const [rotation, setRotation] = useState(0)
  const [isRotating, setIsRotating] = useState(true)

  const rotateLeft = () => {
    setRotation((current) => current - Math.PI / 6)
  }

  const rotateRight = () => {
    setRotation((current) => current + Math.PI / 6)
  }

  const toggleRotation = () => {
    setIsRotating((current) => !current)
  }

  return (
    <main className="stage-container">
      {/* 3D character viewer */}
      <CharacterViewer
        rotation={rotation}
        isRotating={isRotating}
        onRotationChange={setRotation}
      />

      {/* Viewer controls */}
      <ModelSpinControls
        onRotateLeft={rotateLeft}
        onToggleRotation={toggleRotation}
        onRotateRight={rotateRight}
        isRotating={isRotating}
      />
    </main>
  )
}

export default Stage