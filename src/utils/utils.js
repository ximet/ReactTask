export function formatTemperature(temperature) {
  return Number(temperature) <= 0 ? temperature : `+${temperature}`;
}
