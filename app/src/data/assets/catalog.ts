export type AssetCategory =
  | 'body'
  | 'head'
  | 'hair'
  | 'top'
  | 'bottom'
  | 'shoes'

export type Asset = {
  id: string
  category: AssetCategory
  name: string
  thumbnail?: string
  model?: string
}

export const assetCatalog: Asset[] = [
  {
    id: 'body_01',
    category: 'body',
    name: 'Body 01',
  },
  {
    id: 'body_02',
    category: 'body',
    name: 'Body 02',
  },
  {
    id: 'body_03',
    category: 'body',
    name: 'Body 03',
  },

  {
    id: 'head_01',
    category: 'head',
    name: 'Head 01',
  },
  {
    id: 'head_02',
    category: 'head',
    name: 'Head 02',
  },
  {
    id: 'head_03',
    category: 'head',
    name: 'Head 03',
  },

  {
    id: 'hair_01',
    category: 'hair',
    name: 'Hair 01',
  },
  {
    id: 'hair_02',
    category: 'hair',
    name: 'Hair 02',
  },
  {
    id: 'hair_03',
    category: 'hair',
    name: 'Hair 03',
  },

  {
    id: 'top_01',
    category: 'top',
    name: 'Top 01',
  },
  {
    id: 'top_02',
    category: 'top',
    name: 'Top 02',
  },
  {
    id: 'top_03',
    category: 'top',
    name: 'Top 03',
  },

  {
    id: 'bottom_01',
    category: 'bottom',
    name: 'Bottom 01',
  },
  {
    id: 'bottom_02',
    category: 'bottom',
    name: 'Bottom 02',
  },
  {
    id: 'bottom_03',
    category: 'bottom',
    name: 'Bottom 03',
  },

  {
    id: 'shoes_01',
    category: 'shoes',
    name: 'Shoes 01',
  },
  {
    id: 'shoes_02',
    category: 'shoes',
    name: 'Shoes 02',
  },
  {
    id: 'shoes_03',
    category: 'shoes',
    name: 'Shoes 03',
  },
]