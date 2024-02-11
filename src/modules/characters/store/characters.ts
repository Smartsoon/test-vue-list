import type { Module, ActionContext } from 'vuex';
import { getCharacterList } from '@/modules/characters/api/requests/getPaginatedCharactersList';
import type { CharacterItem, CharacterListCard } from '@/modules/characters/types'
import { normalizeCharactersList } from '@/modules/characters/utils/normalizeCharactersList';
import axios from 'axios';
import type { RootState } from '@/store'
import { getCharacter } from '@/modules/characters/api/requests/getCharacter'
import { normalizeCharacterItem } from '@/modules/characters/utils/normalizeCharacterItem'
import { normalizeCharactersToValueList } from '@/modules/characters/utils/normalizeCharactersToValueList'

export interface CharactersState {
  characters: CharacterListCard[];
  character: CharacterItem | null
  isCharactersLoading: boolean;
  page: number;
  perPage: number;
  totalItems: number;
}

export interface CharactersModule extends Module<CharactersState, RootState> {
  state: () => CharactersState;
  mutations: {
    setCharacters(state: CharactersState, characters: CharacterListCard[]): void;
    setCharacterItem(state: CharactersState, character: CharacterItem): void;
    setLoading(state: CharactersState, bool: boolean): void;
    setPage(state: CharactersState, page: number): void;
    setTotalItems(state: CharactersState, totalItems: number): void;
  };
  actions: {
    fetchCharacters(context: ActionContext<CharactersState, RootState>, data?: { page: number; queryString?: string }): Promise<void>;
    fetchCharacterItem(context: ActionContext<CharactersState, RootState>, data: { id: number }): Promise<void>;
  };
  namespaced: true;
}

const charactersModule: CharactersModule = {
  state: () => ({
    characters: [],
    character: null,
    isCharactersLoading: false,
    page: 1,
    perPage: 20,
    totalItems: 0,
  }),
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setCharacterItem(state, character) {
      state.character = character;
    },
    setLoading(state, bool) {
      state.isCharactersLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalItems(state, totalItems) {
      state.totalItems = totalItems;
    },
  },
  getters: {
    charactersList(state) {
      return [...state.characters].map(data => data);
    },
    characterValueList(state) {
      return state.character ? normalizeCharactersToValueList({ ...state.character }) : []
    },
    characterImage(state) {
      return state.character?.image
    },
  },
  actions: {
    async fetchCharacters({ state, commit }, data) {
      try {
        commit('setLoading', true);
        const response = await getCharacterList(data?.page || state.page, data?.queryString || '');
        if (response) {
          commit('setTotalItems', response.data.info.count);
          commit('setCharacters', normalizeCharactersList(response?.data?.results));
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          if (e?.response?.data.error === 'There is nothing here') {
            commit('setTotalItems', 0);
            commit('setCharacters', []);
          }
        }
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchCharacterItem({ state, commit }, data) {
      try {
        commit('setLoading', true);
        const response = await getCharacter(data?.id);
        if (response) {
          console.log(response)
          commit('setCharacterItem', normalizeCharacterItem(response.data));
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          if (e?.response?.data.error === 'Character not found') {
            commit('setCharacterItem', null);
          }
        }
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default charactersModule;