/**
 * Compare arrays
 *
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @return {Boolean} - Arrays are equals
 */
export function equal<T>(arr1: Array<T>, arr2: Array<T>): boolean {
  const length = arr1.length;
  if (arr1 === arr2) return true;
  if (length !== arr2.length) return false;
  for (let i = 0; i < length; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
}
