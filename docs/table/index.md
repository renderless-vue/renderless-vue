<script setup>
    import ExampleTable1 from '../.examples/table/example-table-1.vue'
</script>

# Table

## Usage 

### Table component

Our `r-table` component is ready to use and fully customizable with your own components (for head cell, row cell and sort icon) and styles. By default, it contains only the minimum necessary styles (some grid and flex properties) and it looks like that:

<example-table-1/>

<br/>

#### Input data

```js
const items = [
  { id: 1, firstName: 'Piter', lastName: 'Brandy', phone: '(730)-677-4165' },
  { id: 2, firstName: 'Monica', lastName: 'Brandy', phone: '(317)-134-4411' },
  { id: 3, firstName: 'Peyton', lastName: 'Watts', phone: '(422)-380-2696' },
  { id: 4, firstName: 'Jared', lastName: 'Cunningham', phone: '(454)-908-5535' },
  { id: 5, firstName: 'Rebecca', lastName: 'Barnes', phone: '(317)-559-9945' }
]
```

#### Code Example

```vue
<template>
  <r-table :columns="columns" :items="items" class="example-table-1"/>
</template>

<script lang="ts" setup>
  import RTable from '@renderless-vue/components'
  import { items } from 'file/or/fetch/from/your/api'

  const columns = [
    { label: 'ID', accessor: 'id', sortable: true },
    { label: 'Last name', accessor: 'lastName', sortable: true },
    { label: 'First name', accessor: 'firstName', sortable: true },
    { label: 'Phone number', accessor: 'phone' }
  ]
</script>

<style>
  .example-table-1 {
    --r-table-grid-columns:  50px 1fr 1fr 1fr;
  }
</style>
```
