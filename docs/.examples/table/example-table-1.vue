<template>
  <div class="example-table-1">
    <r-table :columns="columns" :items="items"/>
  </div>
</template>

<script lang="ts" setup>
  import RTable from '../../../packages/table/components/r-table.vue'

  const items = [
    { id: 1, firstName: 'Piter', lastName: 'Brandy', phone: '(730)-677-4165' },
    { id: 2, firstName: 'Monica', lastName: 'Brandy', phone: '(317)-134-4411' },
    { id: 3, firstName: 'Peyton', lastName: 'Watts', phone: '(422)-380-2696' },
    { id: 4, firstName: 'Jared', lastName: 'Cunningham', phone: '(454)-908-5535' },
    { id: 5, firstName: 'Rebecca', lastName: 'Barnes', phone: '(317)-559-9945' }
  ]

  const columns = [
    { label: 'ID', accessor: 'id', sortable: true },
    { label: 'Last name', accessor: 'lastName', sortable: true },
    { label: 'First name', accessor: 'firstName', sortable: true },
    { label: 'Phone number', accessor: 'phone' }
  ]
</script>

<style lang="scss" scoped>
  .example-table-1 {
    --r-table-grid-columns:  50px 1fr 1fr 1fr;
  }
</style>
