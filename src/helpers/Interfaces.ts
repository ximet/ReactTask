export interface EndpointsConfig {
  [property: string]: string;
}

export interface RequestDataConfig<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export interface LocationSearch {
  locations: LocationInfo[];
}

export interface LocationInfo {
  id: number;
  name: string;
  country: string;
  timezone: string;
  adminArea: string;
  lon: number;
  lat: number;
}

interface WeatherData {
  time: string;
  symbol: string;
  symbolPhrase: string;
  temperature: number;
  feelsLikeTemp: number;
  windSpeed: number;
  windGust: number;
  relHumidity: number;
  dewPoint: number;
  windDir: number;
  windDirString: string;
  precipProb: number;
  cloudiness: number;
  thunderProb: number;
  uvIndex: number;
  pressure: number;
  visibility: number;
  precipType?: string;
  precipAccum?: number;
  snowAccum?: number;
}

export interface CurrentData {
  current: WeatherData;
}
export interface ThreeHourlyData {
  forecast: WeatherData[];
}
export interface HourlyData {
  forecast: WeatherData[];
}

export interface DailyForecastData {
  forecast: {
    date: string;
    symbol: string;
    symbolPhrase: string;
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
    windDir: number;
    maxWindGust: number;
    precipProb: number;
    cloudiness: number;
    sunrise: string;
    sunset: string;
    sunriseEpoch: number;
    sunsetEpoch: number;
    moonrise: string;
    moonset: string;
    moonPhase: number;
    uvIndex: number;
    minVisibility: number;
    pressure: number;
    confidence: string;
  }[];
}
