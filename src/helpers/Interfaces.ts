export interface EndpointsConfig {
  [property: string]: string;
}

export interface LocationSearch {
  locations: {
    id: number;
    name: string;
    country: string;
    timezone: string;
    adminArea: string;
    lon: number;
    lat: number;
  }[];
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

export interface CurrentData {
  current: {
    time: string;
    symbol: string;
    symbolPhrase: string;
    temperature: number;
    feelsLikeTemp: number;
    relHumidity: number;
    dewPoint: number;
    windSpeed: number;
    windDir: number;
    windDirString: string;
    windGust: number;
    precipProb: number;
    precipRate: number;
    cloudiness: number;
    thunderProb: number;
    uvIndex: number;
    pressure: number;
    visibility: number;
  };
}

export interface ForecastData {
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
