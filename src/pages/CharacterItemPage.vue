<template>
  <div class="flex flex-column">
    <div class="flex flex-column">
      <router-link to="/">
        <PrimeButton label="Back" />
      </router-link>
    </div>
    <div class="w-full flex justify-content-center mt-5">
      <CharacterWidget />
    </div>
  </div>
</template>

<script setup lang="ts">

import CharacterWidget from '@/modules/characters/widgets/CharacterWidget.vue'
</script>