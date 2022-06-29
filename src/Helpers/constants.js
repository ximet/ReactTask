const endpoints = {
  CURR_WEATHER: (coords) => `current/location=${coords.long},${coords.lat}`,
  LOCATION_DATA: (coords) => `location/${coords.long},${coords.lat}`,
  SYMBOL: (symbol) => `https://developer.foreca.com/static/images/symbols/${symbol}.png`,
  DAILY_WEATHER: (coords) => `forecast/daily/${coords.long},${coords.lat}`
};

export { endpoints };
