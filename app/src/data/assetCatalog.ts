export type AssetCategory =
  | 'body'
  | 'head'
  | 'hair'
  | 'top'
  | 'bottom'
  | 'shoes'

export type CharacterAsset = {
  id: string
  category: AssetCategory
  name: string
  model?: string
  thumbnail?: string
  tags?: string[]
  enabled: boolean
}

export const assetCatalog: CharacterAsset[] = [
  /* Body assets */
  {
    id: 'body_01',
    category: 'body',
    name: 'Body 1',
    enabled: true,
  },
  {
    id: 'body_02',
    category: 'body',
    name: 'Body 2',
    enabled: true,
  },

  /* Head assets */
  {
    id: 'head_01',
    category: 'head',
    name: 'Head 1',
    enabled: true,
  },
  {
    id: 'head_02',
    category: 'head',
    name: 'Head 2',
    enabled: true,
  },

  /* Hair assets */
  {
    id: 'hair_01',
    category: 'hair',
    name: 'Hair 1',
    enabled: true,
  },
  {
    id: 'hair_02',
    category: 'hair',
    name: 'Hair 2',
    enabled: true,
  },

  /* Top assets */
  {
    id: 'top_01',
    category: 'top',
    name: 'Top 1',
    enabled: true,
  },
  {
    id: 'top_02',
    category: 'top',
    name: 'Top 2',
    enabled: true,
  },

  /* Bottom assets */
  {
    id: 'bottom_01',
    category: 'bottom',
    name: 'Bottom 1',
    enabled: true,
  },
  {
    id: 'bottom_02',
    category: 'bottom',
    name: 'Bottom 2',
    enabled: true,
  },

  /* Shoes assets */
  {
    id: 'shoes_01',
    category: 'shoes',
    name: 'Shoes 1',
    enabled: true,
  },
  {
    id: 'shoes_02',
    category: 'shoes',
    name: 'Shoes 2',
    enabled: true,
  },
]

export function getAssetsByCategory(category: AssetCategory) {
  return assetCatalog.filter(
    (asset) =>
      asset.category === category &&
      asset.enabled,
  )
}

export function getAsset(
  category: AssetCategory,
  id: string,
) {
  return assetCatalog.find(
    (asset) =>
      asset.category === category &&
      asset.id === id &&
      asset.enabled,
  )
}