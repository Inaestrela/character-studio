import { useCharacterStore } from '../store/characterStore'

const colors = [
  '#D92C30',
  '#138A36',
  '#2E63A6',
  '#7045A8',
  '#E23B88',
  '#FF7A32',
  '#A2C582',
  '#8CC5DC',
  '#A889C8',
  '#E7A7C4',
  '#FFD329',
  '#4EAAA5',
  '#FAFAFA',
  '#9A9A9E',
  '#2C2C30',
  '#93620E',
  '#D4B08F',
]

function ColorPanel() {
  const selectedColor = useCharacterStore(
    (state) => state.selectedColor,
  )

  const setSelectedColor = useCharacterStore(
    (state) => state.setSelectedColor,
  )

  return (
    <section className="color-panel">

      {/* Color panel header */}
      <div className="panel-header">
        <span>COLOR</span>
      </div>

      {/* Color selection */}
      <div className="color-grid">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-option ${
              selectedColor === color ? 'active' : ''
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>

    </section>
  )
}

export default ColorPanel