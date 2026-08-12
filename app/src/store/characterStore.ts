import { create } from 'zustand'

type CharacterConfig = {
  body: string
  head: string
  hair: string
  top: string
  bottom: string
  shoes: string
  base: string
}

type CharacterStore = CharacterConfig & {
  setPart: (part: keyof CharacterConfig, value: string) => void
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  /* Default character configuration */
  body: 'body_01',
  head: 'head_01',
  hair: 'hair_01',
  top: 'top_01',
  bottom: 'bottom_01',
  shoes: 'shoes_01',
  base: 'base_01',

  /* Update a character part */
  setPart: (part, value) =>
    set({
      [part]: value,
    }),
}))