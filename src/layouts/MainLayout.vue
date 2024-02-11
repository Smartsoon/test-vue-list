<template>
  <main>
    <header />
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
  header {
    position: fixed;
    height: 5rem;
    width: 100%;
    background-color: var(--cyan-100);
    top: 0;
    left: 0;
    z-index: 99;
  }

  padding: 6rem 2rem 2rem 2rem;
  @media (max-width: 768px) {
    padding: 6rem 0.5rem 0.5rem 0.5rem;
  }
}
</style>