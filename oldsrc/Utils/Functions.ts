export const swapElments = (arr: any[], x: number, y: number) => {
  let b = arr[x];
  arr[x] = arr[y];
  arr[y] = b;
};
