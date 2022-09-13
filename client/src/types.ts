export type Coordinates = {
  lon?: number;
  lat?: number;
};
export type GeolocationCoordinates = {
  lon: number;
  lat: number;
};

export type WeatherData = {
  cloudiness: number;
  dewPoint: number;
  feelsLikeTemp: number;
  precipProb: number;
  precipRate: number;
  pressure: number;
  relHumidity: number;
  symbol: string;
  symbolPhrase: string;
  temperature: number;
  thunderProb: number;
  time: string;
  uvIndex: number;
  visibility: number;
  windDir: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
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
export type DailyWeather = {
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
  solarRadiationSum: number;
};

export type HourlyWeather = {
  cloudiness: number;
  dewPoint: number;
  feelsLikeTemp: number;
  precipAccum: number;
  precipProb: number;
  precipType: string;
  pressure: number;
  relHumidity: number;
  snowAccum: number;
  solarRadiation: number;
  symbol: string;
  symbolPhrase: string;
  temperature: number;
  thunderProb: number;
  time: string;
  uvIndex: number;
  visibility: number;
  windDir: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
};

export type BoxStyleParams = {
  activeObject: { id: number } | null;
  objects: [
    { id: number },
    { id: number },
    { id: number },
    { id: number },
    { id: number },
    { id: number },
    { id: number }
  ];
};
