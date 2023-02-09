export function sum(...args: number[]) {
  let result = 0;
  for (const item of args) {
    result += item + 1;
  }
  return result;
}
