<template>
  <div class="flex justify-content-center align-items-center mb-2">
    <PrimeTextInput
      class="max-w-30rem w-30rem m-2"
      placeholder="Search by name..."
      v-model="input"
    />
  </div>
  <div class="flex justify-content-center mb-2">
    <PrimePaginator
      v-show="!!totalItems"
      :rows="perPage"
      :totalRecords="totalItems"
      v-model:first="page"
      @page="pageClick"
    />
    <h2 v-show="!charactersLength">No characters</h2>
  </div>
  <CharactersList />
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import type { PageState } from 'primevue/paginator'
import CharactersList from '@/modules/characters/components/CharactersList.vue'
import { useCharactersStore } from '@/modules/characters/store/characters'

const charactersStore = useCharactersStore()

const perPage = ref(20)
const input = ref('')
const page = ref(0)

const charactersLength = computed(() => charactersStore.getCharactersList.length)
const totalItems = computed(() => charactersStore.getTotalItems)

onMounted(() => {
  charactersStore.fetchCharacters().then(() => {
    page.value = charactersStore.page - 1
  })
  charactersStore.$patch({ character: null })
})

const pageClick = (event: PageState) => {
  charactersStore.fetchCharacters({
    page: event.page + 1,
    queryString: input.value
  })
}

watch(input, async (newValue) => {
  await charactersStore.fetchCharacters({
    page: 1,
    queryString: newValue
  })
  page.value = 0
})
</script>
