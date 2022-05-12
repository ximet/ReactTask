const endpoints = {
  CURRENT_LOCATION: location => `current/location=${location.lon},${location.lat}`,
  GET_CITY: cityName => `location/search/${cityName}`,
  GET_DAILY_ID: id => `forecast/daily/${id}`
};

export default endpoints;
