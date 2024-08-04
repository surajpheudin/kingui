export type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${NestedKeyOf<T[K]> extends never ? "" : `-${NestedKeyOf<T[K]>}`}`;
    }[keyof T]
  : never;
