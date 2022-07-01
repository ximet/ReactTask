import createWeatherApi from './createWeatherApi';

const getCurrentWeather = async coords => {
  return await createWeatherApi
    .get(`current/location=${coords.latitude},${coords.longitude}&lang=ru`)
    .then(function (response) {
      console.log(response);
      return {
        country: coords.country,
        city: coords.city,
        symbol: response.data.current.symbol,
        temperature: response.data.current.temperature,
        relHumidity: response.data.current.relHumidity,
        windSpeed: response.data.current.windSpeed,
        cloudiness: response.data.current.cloudiness
      };
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getCurrentWeather;
