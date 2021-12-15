import { computed, reactive } from 'vue'

export { useSortBy } from './useSortBy'

export function useTable (options, plugins = []) {
  options = reactive(options)

  const instance = {
    rows: computed(() => options.rows),
    columns: computed(() => options.columns),
    hooks: { instance: [] }
  }

  for (const usePlugin of plugins) {
    usePlugin(instance.hooks)
  }

  for (const useInstanceHook of instance.hooks.instance) {
    useInstanceHook(instance)
  }

  return reactive(instance)
}
