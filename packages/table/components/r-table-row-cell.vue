<template>
  <component :is="cellComponent" :class="{ empty }" class="r-table-row-cell">
    <span>
      <slot>—</slot>
    </span>
  </component>
</template>

<script lang="ts" setup>
  import { computed, getCurrentInstance } from 'vue'
  import RTableRowCellGeneric from './partials/r-table-row-cell-generic.vue'

  const { slots } = getCurrentInstance()

  const props = defineProps({
    component: { type: Object, default: null }
  })

  const cellComponent = computed(() => props.component || RTableRowCellGeneric)
  const empty = computed(() => !slots.default)
</script>
