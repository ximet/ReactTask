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

export type ForecastType = {
  current: ForecastCurrentType
};

export type ForecastCurrentType = {
  time: string,
  symbol: string,
  symbolPhrase: string,
  temperature: number,
  feelsLikeTemp: number,
  relHumidity: number,
  dewPoint: number,
  windSpeed: number,
  windDirString: string,
  windGust: number,
  precipProb: number,
  precipRate: number,
  cloudiness: number,
  thunderProb: number,
  uvIndex: number,
  pressure: number,
  visibility: number
};

export type CachedForecastCurrentType = {
  [id: number]: {
    cachTime: number,
    forecast: ForecastCurrentType
  }
};

export type HourlyForecastType = {
  forecast: Array<HourlyForecastItemType>
};

export type DailyForecastType = {
  forecast: Array<DailyForecastItemType>
};

export type DailyForecastArrayType = Array<DailyForecastItemType>;
