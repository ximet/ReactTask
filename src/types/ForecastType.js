// @flow

export type HourlyForecastItemType = {
  time: string,
  symbol: string,
  temperature: number,
  feelsLikeTemp: number,
  windSpeed: number,
  windGust: number,
  windDir: number,
  windDirString: string,
  precipProb: number,
  precipAccum: number
};

export type DailyForecastItemType = {
  date: string,
  symbol: string,
  maxTemp: number,
  minTemp: number,
  precipAccum: number,
  maxWindSpeed: number,
  windDir: number
};

export type HourlyForecastType = {
  forecast: Array<HourlyForecastItemType>
};

export type DailyForecastType = {
  forecast: Array<DailyForecastItemType>
};

export type DailyForecastArrayType = Array<DailyForecastItemType>;
