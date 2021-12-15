<template>
  <div class="r-table-head">
    <r-table-head-cell v-for="(column, index) in table.columns" :key="index" :accessor="column.accessor" :sort-icon-component="sortIconComponent" :sortable="column.sortable" :table="table">{{ column.label }}</r-table-head-cell>
  </div>
</template>

<script lang="ts" setup>
  import RTableHeadCell from './r-table-head-cell.vue'

  const props = defineProps({
    table: { type: Object, required: true },
    sortIconComponent: { type: Object, default: null }
  })
</script>

<style>
  .r-table-head {
    display: grid;
    grid-template-columns: var(--r-table-grid-columns, repeat(auto-fit, minmax(100px, 1fr)));
  }
</style>
