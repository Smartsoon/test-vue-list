<template>
  <div class="character-widget">
    <img v-if="image" :src="image" alt="image">
    <ValueList v-if="character" :values="character"/>

    <h2 v-if="notFound"
        class="flex justify-content-center"
    >
      Character not found
    </h2>
    <div v-if="isLoading" class="character-widget__spinner">
      <PrimeSpinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import ValueList from '@/ui/ValueList.vue'
import { key } from '@/store'

const store = useStore(key)
const router = useRoute()

const character = computed(() => store.getters['characters/characterValueList']);
const image = computed(() => store.getters['characters/characterImage']);
const isLoading = computed(() => store.getters['characters/loading']);
const notFound = computed(() => store.getters['characters/notFound']);

onMounted(() => {
  if (typeof router?.params?.id === 'string' && isNaN((parseInt(router?.params?.id)))) {
    return store.commit('characters/setNotFound', true);
  }
  store.dispatch('characters/fetchCharacterItem', {
    id: router.params.id
  })
})
1
onUnmounted(() => {
  store.commit('characters/setCharacterItem', null);
})

</script>

<style lang="scss" scoped>
.character-widget {
  width: 500px;
  img {
    max-width: 100%;
    width: 500px;
    height: auto;
  }
  &__spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
  }
}

</style>