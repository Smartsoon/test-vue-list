<template>
  <div v-if="!isLoading" class="characters-list-items flex justify-content-around flex-wrap">
    <CharacterListCard v-for="character in characters" :character="character" :key="character.id" />
  </div>
  <StyledSpinner v-if="isLoading" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCharactersStore } from '@/modules/characters/store/characters'
import CharacterListCard from '@/modules/characters/components/CharacterListCard.vue'
import StyledSpinner from '@/ui/StyledSpinner.vue'

const charactersStore = useCharactersStore()

const isLoading = computed(() => charactersStore.getIsLoading)
const characters = computed(() => charactersStore.getCharactersList)
</script>

<style lang="scss" scoped>
.characters-list-items {
  flex-basis: 20rem;
}
</style>
