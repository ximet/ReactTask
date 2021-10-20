// @flow

export type LocationType = {
  id: number,
  name: string,
  country: string,
  state: string,
  timezone: string,
  adminArea: string,
  lon: number,
  lat: number
};

export type LocationsType = Array<LocationType>;

export type LocationsResponseType = {
  status: boolean,
  locations: LocationsType
};

export type SearchedLocationsType = {
  locations: Array<LocationType>
};

export type LocationForecastType = {
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
