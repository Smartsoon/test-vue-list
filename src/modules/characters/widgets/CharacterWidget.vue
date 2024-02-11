<template>
  <div class="character-widget">
    <img v-if="image" :src="image" alt="image">
    <ValueList v-if="!!character" :values="character"/>

    <h2 v-if="!image"
        class="flex justify-content-center"
    >
      Character not found</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import ValueList from '@/ui/ValueList.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
const store = useStore(key)

const router = useRoute()

const character = computed(() => store.getters['characters/characterValueList']);
const image = computed(() => store.getters['characters/characterImage']);

onMounted(() => {
  store.dispatch('characters/fetchCharacterItem', {
    id: router.params.id
  })
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
}

</style>