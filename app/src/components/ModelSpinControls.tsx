import {
  ChevronsLeft,
  ChevronsRight,
  Pause,
} from 'lucide-react'

function ModelSpinControls() {
  return (
    <div className="model-spin-controls">
      {/* Previous */}
      <button aria-label="Previous">
        <ChevronsLeft size={22} />
      </button>

      {/* Pause */}
      <button aria-label="Pause">
        <Pause size={20} />
      </button>

      {/* Next */}
      <button aria-label="Next">
        <ChevronsRight size={22} />
      </button>
    </div>
  )
}

export default ModelSpinControls