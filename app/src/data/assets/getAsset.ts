import { assetCatalog } from './catalog'
import type { Asset, AssetCategory } from './catalog'

export function getAsset(
  category: AssetCategory,
  id: string,
): Asset | undefined {
  return assetCatalog.find(
    (asset) =>
      asset.category === category &&
      asset.id === id,
  )
}