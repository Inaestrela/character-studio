import CharacterViewer from './CharacterViewer'
import ModelSpinControls from './ModelSpinControls'

function Stage() {
  return (
    <main className="stage-container">
      {/* 3D character viewer */}
      <CharacterViewer />

      {/* Viewer controls */}
      <ModelSpinControls />
    </main>
  )
}

export default Stage