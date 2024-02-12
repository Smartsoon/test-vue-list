<template>
  <div class="character-widget">
    <img class="w-full h-auto" v-if="image" :src="image" alt="image" />
    <ValueList v-if="character" :values="character" />

    <h2 v-if="notFound" class="flex justify-content-center">Character not found</h2>
    <div v-if="isLoading" class="character-widget__spinner">
      <PrimeSpinner class="flex justify-content-center align-items-center" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ValueList from '@/ui/ValueList.vue'
import { useCharactersStore } from '@/modules/characters/store/characters'

const charactersStore = useCharactersStore()
const router = useRoute()

const character = computed(() => charactersStore.getCharacterValueList)
const image = computed(() => charactersStore.getCharacterImage)
const isLoading = computed(() => charactersStore.getIsLoading)
const notFound = computed(() => charactersStore.getIsNotFound)

onMounted(() => {
  if (typeof router?.params?.id === 'string' && !isNaN(parseInt(router?.params?.id))) {
    charactersStore.fetchCharacterItem({ id: router.params.id })
  } else {
    charactersStore.$patch({ notFound: true })
  }
})

onUnmounted(() => {
  charactersStore.$patch({ character: null })
})
</script>

<style lang="scss" scoped>
.character-widget {
  width: 500px;

  img {
    width: 500px;
  }

  &__spinner {
    margin-top: 15rem;
  }
}
</style>
