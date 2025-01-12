/**
 * Sets the value of a nested object property specified by a dot-separated path.
 *
 * @param obj - The object to modify.
 * @param path - The dot-separated path specifying the property to set.
 * @param value - The value to set at the specified property.
 *
 * @example
 * ```typescript
 * const obj = { a: { b: { c: 1 } } };
 * setObjectValueByPath(obj, 'a.b.c', 2);
 * console.log(obj.a.b.c); // 2
 * ```
 */
export function setObjectValueByPath(obj: any, path: string, value: any) {
  const keys = path.split('.')
  let current = obj

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]

    if (!current[key]) {
      current[key] = {}
    }

    current = current[key]
  }

  current[keys[keys.length - 1]] = value
}
