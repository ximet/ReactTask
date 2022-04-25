const endpoints = {
  CURRENT_LOCATION: location => `current/location=${location.lon},${location.lat}`,
  HOURLY_FORECAST: location => `forecast/hourly/location=${location.lon},${location.lat}`
};

export default endpoints;
