<template>
  <div :class="{ sortable }" class="r-table-head-cell-generic">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    sortable: { type: Boolean, default: false }
  })
</script>


<style>
  .r-table-head-cell-generic {
    display: flex;
    user-select: none;
  }

  .r-table-head-cell-generic.sortable {
    cursor: pointer;
  }
</style>

