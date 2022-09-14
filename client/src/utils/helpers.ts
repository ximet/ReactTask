export const capitalize = (string?: string): string =>
  `${string && string[0].toUpperCase()}${string?.slice(1)}`;

export const getWeatherSymbol = (symbol?: string): string =>
  `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
