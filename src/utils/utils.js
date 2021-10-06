export function formatTemperature(temperature) {
  return +temperature <= 0 ? temperature : `+${temperature}`;
}

export function normalizeTimeNumber(number) {
  return `${number}`.length < 2 ? `0${number}`: number;  
}
