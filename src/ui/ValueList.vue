<template>
  <div class="value-list" v-for="value in values"
       :key="value.index">
    <div class="value-list__item">
      <h3>{{ value.label }}:</h3>
      <p class="font-italic">{{ value.value }}</p>
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
.value-list {
  padding: 0 1rem;

  &__item {
    margin-bottom: 0.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    h3,
    p {
      max-width: calc(50% - 10px);
      white-space: nowrap;
    }
    h3 {
      justify-self: start;
    }
    p {
      justify-self: start;
    }
  }
}
</style>