import { UNIT_SYMBOLS } from '../constants/units';

export function getConvertedTemperature(temperature, unit) {
  return unit === UNIT_SYMBOLS.celsius ? temperature : Math.round((temperature * 9) / 5 + 32);
}
