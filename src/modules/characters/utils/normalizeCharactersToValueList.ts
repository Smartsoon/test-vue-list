import type { CharacterItem } from '@/modules/characters/types'
import type { ValuesList } from '@/ui/types/valueList'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

export const normalizeCharactersToValueList = (item: CharacterItem): ValuesList[] => {
  return Object.entries(item)
    .filter(value => value[0] !== 'image')
    .map((value: [string, string], index) => {
    return {
      index: index,
      value: value[1],
      label: capitalizeFirstLetter(value[0])
    }
  })
}