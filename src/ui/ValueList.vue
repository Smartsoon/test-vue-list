<template>
  <div class="value-list" v-for="value in values" :key="value.index">
    <div class="value-list-item">
      <h3 class="m-2">{{ value.label }}:</h3>
      <p class="font-italic m-2 white-space-nowrap">{{ value.value || 'unknown' }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { ValuesList } from '@/ui/types/valueList'

export default {
  props: {
    values: Array as PropType<ValuesList[]>
  }
}
</script>

<style lang="scss" scoped>
.value-list-item {
  // for some reason inline class doesn't work
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h3,
  p {
    max-width: calc(50% - 10px);
  }

  h3 {
    justify-self: start;
  }

  p {
    justify-self: start;
  }
}
</style>
