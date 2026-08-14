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
  model: string
  thumbnail: string
}

export const assetCatalog: Asset[] = [
  // BODY
  {
    id: 'body_01',
    category: 'body',
    name: 'Body 01',
    model: '/assets/models/body/Dummy_body_001.glb',
    thumbnail: '/assets/thumbnails/body/Dummy_body_001.webp',
  },
  {
    id: 'body_02',
    category: 'body',
    name: 'Body 02',
    model: '/assets/models/body/Dummy_body_002.glb',
    thumbnail: '/assets/thumbnails/body/Dummy_body_002.webp',
  },
  {
    id: 'body_03',
    category: 'body',
    name: 'Body 03',
    model: '/assets/models/body/Dummy_body_003.glb',
    thumbnail: '/assets/thumbnails/body/Dummy_body_003.webp',
  },

  // HEAD
  {
    id: 'head_01',
    category: 'head',
    name: 'Head 01',
    model: '/assets/models/head/Dummy_head_001.glb',
    thumbnail: '/assets/thumbnails/head/Dummy_head_001.webp',
  },
  {
    id: 'head_02',
    category: 'head',
    name: 'Head 02',
    model: '/assets/models/head/Dummy_head_002.glb',
    thumbnail: '/assets/thumbnails/head/Dummy_head_002.webp',
  },
  {
    id: 'head_03',
    category: 'head',
    name: 'Head 03',
    model: '/assets/models/head/Dummy_head_003.glb',
    thumbnail: '/assets/thumbnails/head/Dummy_head_003.webp',
  },

  // HAIR
  {
    id: 'hair_01',
    category: 'hair',
    name: 'Hair 01',
    model: '/assets/models/hair/Dummy_hair_001.glb',
    thumbnail: '/assets/thumbnails/hair/Dummy_hair_001.webp',
  },
  {
    id: 'hair_02',
    category: 'hair',
    name: 'Hair 02',
    model: '/assets/models/hair/Dummy_hair_002.glb',
    thumbnail: '/assets/thumbnails/hair/Dummy_hair_002.webp',
  },
  {
    id: 'hair_03',
    category: 'hair',
    name: 'Hair 03',
    model: '/assets/models/hair/Dummy_hair_003.glb',
    thumbnail: '/assets/thumbnails/hair/Dummy_hair_003.webp',
  },

  // TOP
  {
    id: 'top_01',
    category: 'top',
    name: 'Top 01',
    model: '/assets/models/top/Dummy_top_001.glb',
    thumbnail: '/assets/thumbnails/top/Dummy_top_001.webp',
  },
  {
    id: 'top_02',
    category: 'top',
    name: 'Top 02',
    model: '/assets/models/top/Dummy_top_002.glb',
    thumbnail: '/assets/thumbnails/top/Dummy_top_002.webp',
  },
  {
    id: 'top_03',
    category: 'top',
    name: 'Top 03',
    model: '/assets/models/top/Dummy_top_003.glb',
    thumbnail: '/assets/thumbnails/top/Dummy_top_003.webp',
  },

  // BOTTOM
  {
    id: 'bottom_01',
    category: 'bottom',
    name: 'Bottom 01',
    model: '/assets/models/bottom/Dummy_bottom_001.glb',
    thumbnail: '/assets/thumbnails/bottom/Dummy_bottom_001.webp',
  },
  {
    id: 'bottom_02',
    category: 'bottom',
    name: 'Bottom 02',
    model: '/assets/models/bottom/Dummy_bottom_002.glb',
    thumbnail: '/assets/thumbnails/bottom/Dummy_bottom_002.webp',
  },
  {
    id: 'bottom_03',
    category: 'bottom',
    name: 'Bottom 03',
    model: '/assets/models/bottom/Dummy_bottom_003.glb',
    thumbnail: '/assets/thumbnails/bottom/Dummy_bottom_003.webp',
  },

  // SHOES
  {
    id: 'shoes_01',
    category: 'shoes',
    name: 'Shoes 01',
    model: '/assets/models/shoes/Dummy_shoes_001.glb',
    thumbnail: '/assets/thumbnails/shoes/Dummy_shoes_001.webp',
  },
  {
    id: 'shoes_02',
    category: 'shoes',
    name: 'Shoes 02',
    model: '/assets/models/shoes/Dummy_shoes_002.glb',
    thumbnail: '/assets/thumbnails/shoes/Dummy_shoes_002.webp',
  },
  {
    id: 'shoes_03',
    category: 'shoes',
    name: 'Shoes 03',
    model: '/assets/models/shoes/Dummy_shoes_003.glb',
    thumbnail: '/assets/thumbnails/shoes/Dummy_shoes_003.webp',
  },
]