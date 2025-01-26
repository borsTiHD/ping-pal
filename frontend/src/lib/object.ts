/**
 * Gets the value of a nested object property specified by a dot-separated path.
 *
 * @param obj - The object to query.
 * @param path - The dot-separated path specifying the property to get.
 * @returns The value at the specified property, or undefined if the property does not exist.
 *
 * @example
 * ```typescript
 * const obj = { a: { b: { c: 1 } } };
 * const value = getObjectValueByPath(obj, 'a.b.c');
 * console.log(value); // 1
 * ```
 */
export function getObjectValueByPath(obj: any, path: string): any {
  const keys = path.split('.')
  let current = obj

  for (let i = 0; i < keys.length; i++) {
    if (!current || !Object.prototype.hasOwnProperty.call(current, keys[i])) {
      return undefined
    }
    current = current[keys[i]]
  }

  return current
}

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
