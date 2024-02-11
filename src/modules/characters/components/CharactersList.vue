<template>
  <div class="characters-list">
    <div v-if="!isLoading" class="characters-list__items">
      <CharacterListCard
        v-for="character in characters"
        :character="character"
        :key="character.id"
      />
    </div>
    <div v-if="isLoading" class="characters-list__spinner">
      <PrimeSpinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import CharacterListCard from '@/modules/characters/components/CharacterListCard.vue'

const store = useStore(key)

const isLoading = computed(() => store.state.characters.isCharactersLoading)
const characters = computed(() => store.state.characters.characters)

</script>

<style lang="scss" scoped>
.characters-list {
  &__items {
    display: flex;
    justify-content: space-around;
    flex-basis: 20rem;
    flex-wrap: wrap;
  }

  &__spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
  }
}
</style>