export function castTo<T>(): (row: any) => T {
  return (row) => row as T;
}
