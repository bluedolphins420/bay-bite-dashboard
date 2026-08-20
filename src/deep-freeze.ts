export type DeepReadonly<T> =
  T extends (...args: never[]) => unknown ? T
    : T extends readonly (infer Item)[] ? readonly DeepReadonly<Item>[]
      : T extends object ? { readonly [Key in keyof T]: DeepReadonly<T[Key]> }
        : T;

/**
 * Recursively freezes a repository-owned runtime data graph.
 *
 * Accessors are rejected so freezing cannot preserve executable getters/setters.
 * The cycle guard makes shared and cyclic object graphs safe to traverse.
 */
export function deepFreeze<T>(value: T): T {
  const seen = new WeakSet<object>();
  const freeze = (nested: unknown): void => {
    if (nested === null || typeof nested !== 'object' || seen.has(nested)) return;
    seen.add(nested);
    for (const descriptor of Object.values(Object.getOwnPropertyDescriptors(nested))) {
      if (!('value' in descriptor)) throw new TypeError('Runtime data must not contain accessors');
      freeze(descriptor.value);
    }
    Object.freeze(nested);
  };
  freeze(value);
  return value;
}
