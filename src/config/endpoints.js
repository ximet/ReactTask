const endpoints = {
  GET_CURRENT_LOCATION: location => `current/location=${location.lon},${location.lat}`,
  GET_CITIES: cityName => `location/search/${cityName}`,
  GET_CITY_BY_ID: id => `forecast/daily/${id}`
};

export default endpoints;
