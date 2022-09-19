import { CurrentWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';

export const defaultCurrentWeather: CurrentWeatherType = {
  time: '',
  symbol: '',
  symbolPhrase: '',
  temperature: 0,
  feelsLikeTemp: 0,
  relHumidity: 0,
  dewPoint: 0,
  windSpeed: 0,
  windDir: 0,
  windDirString: '',
  windGust: 0,
  precipProb: 0,
  precipRate: 0,
  cloudiness: 0,
  thunderProb: 0,
  uvIndex: 0,
  pressure: 0,
  visibility: 0
};

export const defaultLocationInfo: LocationInfoType = {
  id: 0,
  name: '',
  country: '',
  timezone: '',
  language: '',
  adminArea: '',
  adminArea2: '',
  adminArea3: '',
  lon: 0,
  lat: 0
};