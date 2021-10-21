import PropTypes, { number, string } from 'prop-types';

export const CurrentLocationInfoType = PropTypes.shape({
  id: number.isRequired,
  name: string.isRequired,
  country: string.isRequired,
  timezone: string.isRequired,
  adminArea: string.isRequired,
  lon: number.isRequired,
  lat: number.isRequired
});

export const CurrentLocationWeatherType = PropTypes.shape({
  time: string.isRequired,
  symbol: string.isRequired,
  symbolPhrase: string.isRequired,
  temperature: number.isRequired,
  feelsLikeTemp: number.isRequired,
  relHumidity: number.isRequired,
  dewPoint: number.isRequired,
  windSpeed: number.isRequired,
  windDirString: string.isRequired,
  windGust: number.isRequired,
  precipProb: number.isRequired,
  precipRate: number.isRequired,
  cloudiness: number.isRequired,
  thunderProb: number.isRequired,
  uvIndex: number.isRequired,
  pressure: number.isRequired,
  visibility: number.isRequired
});

export const DayDataType = PropTypes.shape({
  date: string.isRequired,
  symbol: string.isRequired,
  maxTemp: number.isRequired,
  minTemp: number.isRequired,
  precipAccum: number.isRequired,
  maxWindSpeed: number.isRequired,
  windDir: number.isRequired
});

export const CurrentLocationDailyWeatherType = PropTypes.arrayOf(DayDataType);

export const DetailedDataType = PropTypes.shape({
  time: string.isRequired,
  symbol: string.isRequired,
  temperature: number.isRequired,
  feelsLikeTemp: number.isRequired,
  windSpeed: number.isRequired,
  windGust: number.isRequired,
  windDir: number.isRequired,
  windDirString: string.isRequired,
  precipProb: number.isRequired,
  precipAccum: number.isRequired
});

export const CurrentLocationDetailedWeatherType = PropTypes.arrayOf(DetailedDataType);

export const SelectedLocationType = PropTypes.shape({
  id: string.isRequired,
  locationInfo: CurrentLocationInfoType,
  locationWeather: CurrentLocationWeatherType
});
