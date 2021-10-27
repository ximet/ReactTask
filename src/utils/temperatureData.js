import { UNIT_SYMBOLS } from '../constants/units';

export function getConvertedUnits(temperature, unit) {
  return unit === UNIT_SYMBOLS.celsius ? temperature : Math.round((temperature * 9) / 5 + 32);
}
