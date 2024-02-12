import { defineStore } from 'pinia'
import { normalizeCharactersList } from '@/modules/characters/utils/normalizeCharactersList'
import { normalizeCharacterItem } from '@/modules/characters/utils/normalizeCharacterItem'
import { normalizeCharactersToValueList } from '@/modules/characters/utils/normalizeCharactersToValueList'
import axios from 'axios'
import type { CharacterItem, CharacterListCard } from '@/modules/characters/types'
import { character, characters } from '@/modules/characters/api/urls'

interface CharactersState {
  charactersList: CharacterListCard[]
  character: CharacterItem | null
  isCharactersLoading: boolean
  page: number
  perPage: number
  totalItems: number
  notFound: boolean
}

export const useCharactersStore = defineStore('characters', {
  state: (): CharactersState => ({
    charactersList: [],
    character: null,
    isCharactersLoading: false,
    page: 1,
    perPage: 20,
    totalItems: 0,
    notFound: false
  }),
  actions: {
    async fetchCharacters(data?: { page?: number; queryString?: string }) {
      this.$patch({ isCharactersLoading: true })
      try {
        const response = await axios.get(characters, {
          params: {
            page: data?.page || this.page,
            name: data?.queryString || ''
          }
        })
        if (response) {
          this.$patch({
            totalItems: response.data.info.count,
            charactersList: normalizeCharactersList(response.data.results)
          })
        }
      } catch (e) {
        if (axios.isAxiosError(e) && e.response?.data.error === 'There is nothing here') {
          this.$patch({
            totalItems: 0,
            charactersList: []
          })
        }
      } finally {
        this.$patch({ isCharactersLoading: false })
      }
    },
    async fetchCharacterItem(data: { id: string }) {
      this.$patch({ isCharactersLoading: true })
      try {
        const response = await axios.get(character(data.id))
        if (response) {
          this.$patch({
            character: normalizeCharacterItem(response.data),
            notFound: false
          })
        }
      } catch (e) {
        if (axios.isAxiosError(e) && e.response?.data.error === 'Character not found') {
          this.$patch({
            character: null,
            notFound: true
          })
        }
      } finally {
        this.$patch({ isCharactersLoading: false })
      }
    }
  },
  getters: {
    getCharactersList: (state) => state.charactersList?.map((data) => ({ ...data })),
    getCharacterValueList: (state) =>
      state.character ? normalizeCharactersToValueList(state.character) : [],
    getCharacterImage: (state) => state.character?.image,
    getIsNotFound: (state) => state.notFound,
    getIsLoading: (state) => state.isCharactersLoading,
    getTotalItems: (state) => state.totalItems,
    getPage: (state) => state.page,
    getPerPage: (state) => state.perPage
  }
})
