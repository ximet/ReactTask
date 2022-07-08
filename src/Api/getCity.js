import createWeatherApi from './createWeatherApi';

const getCity = async coords => {
  return await createWeatherApi
    .get(`location/${coords.latitude},${coords.longitude}`)
    .then(function (response) {
      return {
        country: response.data.country,
        city: response.data.name,
        latitude: response.data.lat,
        longitude: response.data.lon
      };
    });
};

export default getCity;
