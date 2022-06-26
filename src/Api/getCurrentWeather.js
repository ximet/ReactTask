import createWeatherApi from './createWeatherApi';
// location/:location

const getCurrentWeather = async coords => {
  return await createWeatherApi
    .get(`current/location=${coords.latitude},${coords.longitude}`)
    .then(function (response) {
      console.log(response);
      return {
        symbol: response.data.current.symbol,
        temperature: response.data.current.relHumidity,
        humidity: response.data.current.relHumidity,
        windSpeed: response.data.current.windSpeed,
        cloudiness: response.data.current.cloudiness
      };
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getCurrentWeather;
