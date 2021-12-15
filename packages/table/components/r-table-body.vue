<template>
  <div class="r-table-body">
    <r-table-row v-for="(row, index) in rows" :key="index" :items="row"/>
  </div>
</template>

<script lang="ts" setup>
  import RTableRow from './r-table-row.vue'

  const props = defineProps({
    rows: { type: Array, default: () => [] }
  })
</script>
