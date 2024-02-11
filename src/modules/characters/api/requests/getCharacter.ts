import axios, { type AxiosResponse } from 'axios'
import type { CharacterRequest, CharactersRequest } from '@/modules/characters/types'
import {character} from "@/modules/characters/api/urls";

export const getCharacter = async (id: number): Promise<AxiosResponse<CharacterRequest>> => {
    return await axios.get(character(id))
}