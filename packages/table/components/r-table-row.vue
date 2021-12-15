<template>
  <div class="r-table-row">
    <r-table-row-cell v-for="(item, index) in items" :key="index">{{ item }}</r-table-row-cell>
  </div>
</template>

<script lang="ts" setup>
  import RTableRowCell from "./r-table-row-cell.vue";

  const props = defineProps({
    items: { type: Array, required: true }
  })
</script>

<style>
   .r-table-row {
     display: grid;
     grid-template-columns: var(--r-table-grid-columns, repeat(auto-fit, minmax(100px, 1fr)));
   }
</style>
