<template>
  <component :is="cellComponent" :class="{ sortable }" :sortable="sortable" class="r-table-head-cell" @click.native="onClick" :data-sort-direction="sortDirection" :data-sort-order="sortOrder">
    <span>
      <slot/>
    </span>

    <r-table-sort-icon v-if="sortable" :direction="sortDirection" :order="sortOrder" :component="sortIconComponent"/>
  </component>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  import RTableHeadCellGeneric from './partials/r-table-head-cell-generic.vue'
  import RTableSortIcon from './r-table-sort-icon.vue'

  const props = defineProps({
    accessor: { type: String, required: true },
    component: { type: Object, default: null },
    sortable: { type: Boolean, default: false },
    table: { type: Object, required: true },
    sortIconComponent: { type: Object, default: null }
  })

  const cellComponent = computed(() => props.component || RTableHeadCellGeneric)

  const sortOrder = computed(() => {
    const index = props.table.sortByRules.findIndex(sortByRule => sortByRule.accessor === props.accessor)

    if (props.table.sortByRules.length < 1 || index === -1) return null
    return index + 1
  })

  const sortDirection = computed(() => {
    const sortByRule = props.table.sortByRules.find(sortByRule => sortByRule.accessor === props.accessor)
    return sortByRule ? (sortByRule.desc ? 'DESC' : 'ASC') : null
  })

  const onClick = () => {
    if (props.sortable) props.table.toggleSortBy(props.accessor)
  }
</script>
