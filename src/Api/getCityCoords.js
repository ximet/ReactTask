import createWeatherApi from './createWeatherApi';

const getCityCoords = async query => {
  return await createWeatherApi.get(`location/search/${query}`).then(function (response) {
    return {
      country: response.data.locations[0].country,
      city: response.data.locations[0].name,
      latitude: response.data.locations[0].lat,
      longitude: response.data.locations[0].lon
    };
  });
};
export default getCityCoords;
