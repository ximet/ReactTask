import createWeatherApi from './createWeatherApi';

const getCityCoords = async query => {
  return await // getInstanse.get(`current/location=${coords.latitude},${coords.longitude}`)
  createWeatherApi
    .get(`location/search/${query}`)
    .then(function (response) {
      console.log(response);
      // return {
      //   symbol: response.data.current.symbol,
      //   temperature: response.data.current.relHumidity,
      //   humidity: response.data.current.relHumidity,
      //   windSpeed: response.data.current.windSpeed,
      //   cloudiness: response.data.current.cloudiness,
      // };
    })
    .catch(function (error) {
      console.log(error);
    });
};
export default getCityCoords;
