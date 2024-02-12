<template>
  <main>
    <header class="w-full fixed h-5rem bg-cyan-100 top-0 left-0 z-5" />
    <slot />
  </main>
</template>

<script lang="ts">
export default {
  name: 'MainLayout'
}
</script>

<style lang="scss" scoped>
main {
  padding: 6rem 2rem 2rem 2rem;
  @media (max-width: 768px) {
    padding: 6rem 0.5rem 0.5rem 0.5rem;
  }
}
</style>
