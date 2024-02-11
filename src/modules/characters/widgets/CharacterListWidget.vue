<template>
  <div class="flex justify-content-center align-items-center mb-2">
    <PrimeTextInput class="max-w-30rem w-30rem m-2"
                    placeholder="Search by name..."
                    v-model="input"
    />
  </div>
  <div class="flex justify-content-center mb-2">
    <PrimePaginator v-show="!!totalItems"
                    :rows="perPage"
                    :totalRecords="totalItems"
                    v-model:first="page"
                    @page="pageClick"
    />
    <h2 v-show="!charactersLength">No characters</h2>
  </div>
  <CharactersList/>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
  import { useStore } from 'vuex'
  import type { PageState } from 'primevue/paginator'
  import { key } from '@/store'
  import CharactersList from '@/modules/characters/components/CharactersList.vue'

  const store = useStore(key)

  // API blocked by 20
  const perPage = ref(20)
  const totalItems = ref(0)
  const input = ref('')
  const page = ref(0)

  const charactersLength = computed(() => store.state.characters.characters.length)

  onMounted(() => {
    store.dispatch('characters/fetchCharacters').then(() => {
      totalItems.value = store.state.characters.totalItems
    })
  })
  const pageClick = (event: PageState) => {
    store.dispatch('characters/fetchCharacters', {
      page: event.page + 1,
      queryString: input.value
    })
  }

  watch(input, async (newValue) => {
    store.dispatch('characters/fetchCharacters', {
      page: 1,
      queryString: newValue
    }).then(() => {
      page.value = 0
      totalItems.value = store.state.characters.totalItems
    })
  })

</script>

<style lang="scss" scoped>

</style>