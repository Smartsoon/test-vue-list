<template>
  <CharacterListWidget />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CharacterListWidget from '@/modules/characters/widgets/CharacterListWidget.vue'

export default defineComponent({
  name: 'CharactersCardsListPage',
  components: { CharacterListWidget }
})
</script>
