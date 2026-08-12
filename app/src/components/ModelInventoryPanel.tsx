import { X } from 'lucide-react'

function ModelInventoryPanel() {
  return (
    <section className="asset-panel">

      {/* Panel title */}
      <div className="panel-header">
        <span>BOTTOM</span>

        <button type="button" aria-label="Close inventory">
          <X size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Panel inventory */}
      <div className="asset-inventory">
        {/* Inner inventory / thumbnail container */}
        <div className="asset-selection">
          {/* Asset thumbnails will be added here later */}
        </div>

      </div>

    </section>
  )
}

export default ModelInventoryPanel