import PropTypes, { number, string } from 'prop-types';

export const CurrentLocationInfoType = PropTypes.shape({
  id: number.isRequired,
  name: string.isRequired,
  country: string.isRequired,
  timezone: string,
  adminArea: string,
  lon: number,
  lat: number
});

export const CurrentLocationWeatherType = PropTypes.shape({
  time: string.isRequired,
  symbol: string.isRequired,
  symbolPhrase: string.isRequired,
  temperature: number.isRequired,
  feelsLikeTemp: number.isRequired,
  relHumidity: number,
  dewPoint: number,
  windSpeed: number.isRequired,
  windDirString: string.isRequired,
  windGust: number,
  precipProb: number,
  precipRate: number,
  cloudiness: number,
  thunderProb: number,
  uvIndex: number,
  pressure: number,
  visibility: number
});

export const DayDataType = PropTypes.shape({
  date: string.isRequired,
  symbol: string.isRequired,
  maxTemp: number.isRequired,
  minTemp: number.isRequired,
  precipAccum: number,
  maxWindSpeed: number.isRequired,
  windDir: number
});

export const CurrentLocationDailyWeatherType = PropTypes.arrayOf(DayDataType);

export const DetailedDataType = PropTypes.shape({
  time: string.isRequired,
  symbol: string.isRequired,
  temperature: number.isRequired,
  feelsLikeTemp: number,
  windSpeed: number.isRequired,
  windGust: number,
  windDir: number,
  windDirString: string.isRequired,
  precipProb: number,
  precipAccum: number
});

export const CurrentLocationDetailedWeatherType = PropTypes.arrayOf(DetailedDataType);
