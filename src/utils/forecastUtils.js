import { FORECAST_SYMBOL_LINK, FORECAST_SYMBOL_EXT } from '../utils/constants';

export function getForecastSymbolUrl(forecast) {
  const forecastSymbol = forecast?.symbol;

  return forecastSymbol ? `${FORECAST_SYMBOL_LINK}${forecastSymbol}${FORECAST_SYMBOL_EXT}` : '';
}
