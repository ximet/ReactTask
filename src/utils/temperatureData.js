import {
  UNIT_SYMBOLS,
  RATIO_OF_ONE_CELSIUS_TO_FAHRENHEIT,
  ZERO_CELSIUS_TO_FAHRENHEIT
} from '../constants/units';

export function getConvertedTemperature(temperature, unit) {
  return unit === UNIT_SYMBOLS.fahrenheit ? convertFahrenheitToCelsius(temperature) : temperature;
}

function convertFahrenheitToCelsius(temperature) {
  return Math.round(temperature * RATIO_OF_ONE_CELSIUS_TO_FAHRENHEIT + ZERO_CELSIUS_TO_FAHRENHEIT);
}
