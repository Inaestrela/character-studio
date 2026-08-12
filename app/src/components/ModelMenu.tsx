import { useState } from 'react'

const categories = [
  'head',
  'hair',
  'body',
  'top',
  'bottom',
  'shoes',
] as const

function ModelMenu() {
  const [activeCategory, setActiveCategory] = useState('bottom')

  return (
    <nav className="model-menu">
      {/* Model categories */}
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </nav>
  )
}

export default ModelMenu