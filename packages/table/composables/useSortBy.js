import { computed, ref, toRef, unref } from 'vue'
import { get } from '../../../helpers/lodash'

const sortTypes = {
  basic (rowA, rowB, columnAccessor) {
    const [lhs, rhs] = getRowValues(rowA, rowB, columnAccessor)
    return compareBasic(lhs, rhs)
  }
}

function getRowValues (rowA, rowB, columnAccessor) {
  return [
    get(columnAccessor, rowA),
    get(columnAccessor, rowB)
  ]
}

function compareBasic (a, b) {
  return a === b ? 0 : a > b ? 1 : -1
}

function reducerFn ({ rows, columns, sortByRules }) {
  const sortFns = sortByRules
    .map(sortByRule => ({
      sortByRule,
      column: columns.find(column => column.accessor === sortByRule.accessor)
    }))
    .filter(({ sortByRule, column }) => {
      // Do not use columns which do not exist
      return !!column
    })
    .map(({ sortByRule, column }) => {
      const sortFn = typeof column.sortFn === 'function'
        ? column.sortFn
        : sortTypes[column.sortFn || 'basic']

      return (rowA, rowB) => {
        const result = sortFn(rowA, rowB, sortByRule.accessor)
        return sortByRule.desc ? -result : result
      }
    })

  return [...rows].sort((rowA, rowB) => {
    for (const sortFn of sortFns) {
      const result = sortFn(rowA, rowB)
      if (result !== 0) return result
    }

    return 0
  })
}

function useInstance (instance) {
  instance.sortByRules = ref([])

  instance.toggleSortBy = accessor => {
    const sortByRules = unref(instance.sortByRules)
    const sortByRuleIndex = sortByRules.findIndex(sortByRule => sortByRule.accessor === accessor)

    if (sortByRuleIndex !== -1) {
      const sortByRule = sortByRules[sortByRuleIndex]

      if (sortByRule.desc) {
        // Toggle order
        sortByRule.desc = false
      } else {
        // Delete rule
        sortByRules.splice(sortByRuleIndex, 1)
      }
    } else {
      // Add rule
      sortByRules.push({ accessor, desc: true })
    }

    console.log(sortByRules, sortByRuleIndex)
  }

  const rowsComputed = toRef(instance, 'rows')
  instance.preSortRows = computed(() => unref(rowsComputed))
  instance.rows = computed(() => {
    return reducerFn({
      rows: unref(rowsComputed),
      columns: unref(instance.columns),
      sortByRules: unref(instance.sortByRules)
    })
  })
}

export function useSortBy (hooks) {
  hooks.instance.push(useInstance)
}
