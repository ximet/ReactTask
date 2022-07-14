import createWeatherApi from './createWeatherApi';

const getDetailWeather = async coords => {
  return await createWeatherApi
    .get(`forecast/daily/location=${coords.latitude},${coords.longitude}&dataset=full&periods=8`)
    .then(function (response) {
      return response.data.forecast.map(item => {
        return {
          date: item.date,
          symbol: item.symbol,
          minTemp: item.minTemp,
          maxTemp: item.maxTemp,
          minRelHumidity: item.minRelHumidity,
          maxRelHumidity: item.maxRelHumidity,
          windSpeed: item.maxWindSpeed,
          cloudiness: item.cloudiness
        };
      });
    });
};

export default getDetailWeather;
