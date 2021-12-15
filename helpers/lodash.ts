export function get (path, obj, separator = '.') {
  const properties = path.split(separator)
  return properties.reduce((prev, key) => prev[key], obj)
}
