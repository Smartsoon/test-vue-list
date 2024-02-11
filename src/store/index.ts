import { createStore, Store, type StoreOptions } from 'vuex'
import charactersModule, { type CharactersState } from '@/modules/characters/store/characters';
import type { InjectionKey } from 'vue'

export interface RootState {
    characters: CharactersState;
}

const root: StoreOptions<RootState> = {
    modules: {
        characters: charactersModule,
    },
};

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore(root);