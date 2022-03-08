/**
 * Returns a random number between min (inclusive) and max (inclusive).
 */
export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
