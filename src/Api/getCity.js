import createWeatherApi from './createWeatherApi';

const getCity = async coords => {
  return await createWeatherApi
    .get(`location/${coords.latitude},${coords.longitude}&lang=ru`)
    .then(function (response) {
      console.log(response);
      return {
        country: response.data.country,
        city: response.data.name,
        latitude: response.data.lat,
        longitude: response.data.lon
      };
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getCity;
