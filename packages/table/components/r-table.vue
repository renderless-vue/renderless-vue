<template>
  <div class="r-table">
    <div class="r-table__container">
      <r-table-head :table="table" :sort-icon-component="sortIconComponent"/>
      <r-table-body :rows="simplifiedRows"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, toRef } from 'vue'

  import { get } from '../../../helpers/lodash'
  import { useTable, useSortBy } from '../composables/useTable'

  import RTableHead from './r-table-head.vue'
  import RTableBody from './r-table-body.vue'

  const props = defineProps({
    items: { type: Array, default: () => [] },
    columns: { type: Array, required: true },
    sortIconComponent: { type: Object, default: null }
  })

  const table = useTable({ rows: toRef(props, 'items'), columns: props.columns }, [useSortBy])
  const simplifiedRows = computed(() => table.rows.map(row => props.columns.map(({ accessor }) => get(accessor, row))))
</script>
