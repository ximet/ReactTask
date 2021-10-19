import PropTypes, { number, string } from 'prop-types';

export const CityInfoTypes = PropTypes.shape({
  country: string.isRequired,
  id: number.isRequired,
  name: string.isRequired,
  adminArea: string,
  lat: number,
  lon: number,
  timezone: string
});

export const CityForecastTypes = PropTypes.shape({
  relHumidity: number.isRequired,
  symbol: string.isRequired,
  symbolPhrase: string.isRequired,
  temperature: number.isRequired,
  windSpeed: number.isRequired,
  cloudiness: number,
  dewPoint: number,
  feelsLikeTemp: number,
  precipProb: number,
  precipRate: number,
  pressure: number,
  thunderProb: number,
  time: string,
  uvIndex: number,
  visibility: number,
  windDirString: string,
  windGust: number
});

export const HourlyCityForecastTypes = PropTypes.arrayOf(
  PropTypes.shape({
    feelsLikeTemp: number,
    precipAccum: number,
    precipProb: number,
    symbol: string,
    temperature: number,
    time: string,
    windDir: number,
    windDirString: string,
    windGust: number,
    windSpeed: number
  })
);

export const DailyCityForecastTypes = PropTypes.arrayOf(
  PropTypes.shape({
    date: string,
    maxTemp: number,
    maxWindSpeed: number,
    minTemp: number,
    precipAccum: number,
    symbol: string,
    windDir: number
  })
);

export const HourlyChartData = PropTypes.shape({
  time: PropTypes.arrayOf(string).isRequired,
  temperature: PropTypes.arrayOf(number).isRequired,
  wind: PropTypes.arrayOf(number).isRequired
});
