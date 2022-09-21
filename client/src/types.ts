export type GeolocationCoordinates = {
  lon: number;
  lat: number;
};

export type LocationData = {
  adminArea: string;
  adminArea2: string;
  adminArea3: null;
  country: string;
  id: number;
  language: string;
  lat: number;
  lon: number;
  name: string;
  timezone: string;
};

export type CommonWeatherData = {
  cloudiness: number;
  precipProb: number;
  pressure: number;
  symbol: string;
  symbolPhrase: string;
  uvIndex: number;
  windDir: number;
};

export type CurrentHourlyCommonData = {
  dewPoint: number;
  feelsLikeTemp: number;
  relHumidity: number;
  temperature: number;
  thunderProb: number;
  time: string;
  visibility: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
};

export type CurrentWeatherData = CommonWeatherData &
  CurrentHourlyCommonData & {
    precipRate: number;
  };

export type HourlyWeather = CommonWeatherData &
  CurrentHourlyCommonData & {
    solarRadiation: number;
    precipType: string;
    precipAccum: number;
    snowAccum: number;
  };

export type DailyWeather = CommonWeatherData & {
  date: string;
  maxTemp: number;
  minTemp: number;
  maxFeelsLikeTemp: number;
  minFeelsLikeTemp: number;
  maxRelHumidity: number;
  minRelHumidity: number;
  maxDewPoint: number;
  minDewPoint: number;
  maxWindSpeed: number;
  maxWindGust: number;
  minVisibility: number;
  sunrise: string;
  sunset: string;
  sunriseEpoch: number;
  sunsetEpoch: number;
  moonrise: string;
  moonset: string;
  moonPhase: number;
  confidence: string;
  solarRadiationSum: number;
  snowAccum: number;
  precipAccum: number;
};

export interface Feedback {
  id?: string;
  nickname: string;
  email: string;
  title: string;
  review: string;
  rating: number;
}
