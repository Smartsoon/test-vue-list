import type { Character, CharacterItem } from '@/modules/characters/types'

export const normalizeCharacterItem = (item: Character): CharacterItem => {
  const {
    name,
    status,
    species,
    type,
    gender,
    image
  } = item
  return {
    name,
    status,
    species,
    type,
    gender,
    image
  }
}