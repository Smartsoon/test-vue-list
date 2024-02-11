import axios, { type AxiosResponse } from 'axios'
import type { CharactersRequest } from '@/modules/characters/types'
import { characters } from '@/modules/characters/api/urls'

export const getCharacterList = async (page: number, name?: string): Promise<AxiosResponse<CharactersRequest>> => {
  return await axios.get(characters(page, name))
}