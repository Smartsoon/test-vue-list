import type { Character, CharacterListCard } from '@/modules/characters/types'

export const normalizeCharactersList = (list: Character[]): CharacterListCard[] => {
  return list
    ? list.map(({ id, name, image, species }) => {
        return { id, name, image, species }
      })
    : []
}
