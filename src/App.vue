<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default defineComponent({
  name: 'App',
  components: { MainLayout }
})
</script>

<template>
  <div>
    <main-layout>
      <router-view/>
    </main-layout>
  </div>
</template>

<style lang="scss">

</style>
