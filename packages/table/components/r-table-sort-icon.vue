<template>
  <component :is="iconComponent" :direction="direction" :order="order" class="r-table-sort-icon"/>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import RTableSortIconGeneric from './partials/r-table-sort-icon-generic.vue'

  const props = defineProps({
    component: { type: Object, default: null },
    direction: { type: String, default: null },
    order: { type: Number, default: null }
  })

  const iconComponent = computed(() => props.component || RTableSortIconGeneric)
</script>
