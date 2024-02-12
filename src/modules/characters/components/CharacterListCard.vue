<template>
  <PrimeCard class="character-list-card h-auto overflow-hidden">
    <template #header>
      <img alt="user header" :src="character.image" />
    </template>
    <template #title>
      <div v-truncate-lines="1">
        {{ character.name }}
      </div>
    </template>
    <template #subtitle>
      <div v-truncate-lines="1">
        {{ character.species }}
      </div>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <router-link :to="route" class="w-full">
          <PrimeButton label="Details" class="w-full" />
        </router-link>
      </div>
    </template>
  </PrimeCard>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { CharacterListCard } from '@/modules/characters/types'
import truncateLines from '@/directives/truncateLines'

export default defineComponent({
  name: 'CharacterListCard',
  props: {
    character: {
      required: true,
      type: Object as PropType<CharacterListCard>
    }
  },
  directives: {
    truncateLines
  },
  data() {
    return {
      route: `/character/${this.character.id}`
    }
  }
})
</script>

<style scoped lang="scss">
.character-list-card {
  width: 20rem;
  margin: 1rem;

  img {
    width: 20rem;
  }

  @media (max-width: 400px) {
    margin: 0;
  }
}
</style>
