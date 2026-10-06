import {
  ChevronsLeft,
  ChevronsRight,
  Pause,
  Play,
} from 'lucide-react'

type ModelSpinControlsProps = {
  onRotateLeft: () => void
  onToggleRotation: () => void
  onRotateRight: () => void
  isRotating: boolean
}

function ModelSpinControls({
  onRotateLeft,
  onToggleRotation,
  onRotateRight,
  isRotating,
}: ModelSpinControlsProps) {
  return (
    <div className="model-spin-controls">
      {/* Rotate Left */}
      <button
        type="button"
        aria-label="Rotate left"
        onClick={onRotateLeft}
      >
        <ChevronsLeft size={22} />
      </button>

      {/* Pause / Play */}
      <button
        type="button"
        aria-label={isRotating ? 'Pause rotation' : 'Play rotation'}
        onClick={onToggleRotation}
      >
        {isRotating ? (
          <Pause size={20} />
        ) : (
          <Play size={20} />
        )}
      </button>

      {/* Rotate Right */}
      <button
        type="button"
        aria-label="Rotate right"
        onClick={onRotateRight}
      >
        <ChevronsRight size={22} />
      </button>
    </div>
  )
}

export default ModelSpinControls