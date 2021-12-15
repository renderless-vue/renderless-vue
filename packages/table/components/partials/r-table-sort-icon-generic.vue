<template>
  <div class="r-table-sort-icon-generic">
    <span>{{ icon }}</span>
    <small>{{ order }}</small>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps({
    direction: { type: String, default: null },
    order: { type: Number, default: null }
  })

  const icon = computed(() => {
    if (props.direction === 'DESC') return '▴'
    if (props.direction === 'ASC') return '▾'
    return '▴▾'
  })
</script>

<style>
  .r-table-sort-icon-generic {
    justify-self: flex-end;
    margin-left: auto;
  }
</style>