export function removeItemAtIndex(arr: any[], index: any) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
