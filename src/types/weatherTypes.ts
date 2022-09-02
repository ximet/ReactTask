type CommonWeatherType = {
  symbol: string;
  symbolPhrase: string;
  windDir: number;
  precipProb: number;
  cloudiness: number;
  uvIndex: number;
  pressure: number;
};

type CommonCurrentAndHourly = {
  time: string;
  temperature: number;
  feelsLikeTemp: number;
  relHumidity: number;
  dewPoint: number;
  windSpeed: number;
  windGust: number;
  windDirString: string;
  thunderProb: number;
  visibility: number;
};

export type CurrentWeatherType = CommonWeatherType &
  CommonCurrentAndHourly & {
    precipRate: number;
  };

export type HourlyWeatherType = CommonWeatherType &
  CommonCurrentAndHourly & {
    precipAccum: number;
    snowAccum: number;
    precipType: string;
    solarRadiation: number;
  };

export type DailyWeatherType = CommonWeatherType & {
  date: string;
  maxTemp: number;
  minTemp: number;
  maxFeelsLikeTemp: number;
  minFeelsLikeTemp: number;
  maxRelHumidity: number;
  minRelHumidity: number;
  maxDewPoint: number;
  minDewPoint: number;
  precipAccum: number;
  snowAccum: number;
  maxWindSpeed: number;
  maxWindGust: number;
  sunrise: string;
  sunset: string;
  sunriseEpoch: number;
  sunsetEpoch: number;
  moonrise: string;
  moonset: string;
  moonPhase: number;
  minVisibility: number;
  confidence: string;
  solarRadiationSum: number;
};
