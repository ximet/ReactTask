import createWeatherApi from './createWeatherApi';

const getDetailWeather = async coords => {
  return await createWeatherApi
    .get(`forecast/daily/location=${coords.latitude},${coords.longitude}&dataset=full&periods=8`)
    .then(function (response) {
      let i = 0;
      return response.data.forecast.map(item => {
        i++;
        return {
          id: i,
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
