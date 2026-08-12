import { useCharacterStore } from '../store/characterStore'
import type { AssetCategory } from '../store/characterStore'

const categories: {
  id: AssetCategory
  label: string
}[] = [
  { id: 'body', label: 'BODY' },
  { id: 'head', label: 'HEAD' },
  { id: 'hair', label: 'HAIR' },
  { id: 'top', label: 'TOP' },
  { id: 'bottom', label: 'BOTTOM' },
  { id: 'shoes', label: 'SHOES' },
]

function ModelMenu() {
  const activeCategory = useCharacterStore(
    (state) => state.activeCategory,
  )

  const setActiveCategory = useCharacterStore(
    (state) => state.setActiveCategory,
  )

  return (
    <nav className="model-menu">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={
            activeCategory === category.id
              ? 'active'
              : ''
          }
          onClick={() =>
            setActiveCategory(category.id)
          }
        >
          {category.label}
        </button>
      ))}
    </nav>
  )
}

export default ModelMenu