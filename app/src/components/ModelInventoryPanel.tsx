import { X } from 'lucide-react'
import { useCharacterStore } from '../store/characterStore'
import { assetCatalog } from '../data/assets/catalog'

function ModelInventoryPanel() {
  const activeCategory = useCharacterStore(
    (state) => state.activeCategory,
  )

  const selectedAsset = useCharacterStore(
    (state) => state[activeCategory],
  )

  const setPart = useCharacterStore(
    (state) => state.setPart,
  )

  const assets = assetCatalog.filter(
    (asset) => asset.category === activeCategory,
  )

  return (
    <section className="asset-panel">

      {/* Panel title */}
      <div className="panel-header">
        <span>
          {activeCategory.toUpperCase()}
        </span>

        <button
          type="button"
          aria-label="Close inventory"
        >
          <X size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Panel inventory */}
      <div className="asset-inventory">

        {/* Inner inventory */}
        <div className="asset-selection">

          {assets.map((asset) => (
            <button
              key={asset.id}
              type="button"
              className={
                selectedAsset === asset.id
                  ? 'asset-option active'
                  : 'asset-option'
              }
              onClick={() =>
                setPart(activeCategory, asset.id)
              }
            >
              <img
                src={asset.thumbnail}
                alt={asset.name}
              />
            </button>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ModelInventoryPanel