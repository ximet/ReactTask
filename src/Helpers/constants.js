const endpoints = {
  CURR_WEATHER: (coords) => `current/location=${coords.long},${coords.lat}`,
  LOCATION_DATA: (coords) => `location/${coords.long},${coords.lat}`,
  LOCATION_NAME: (name) => `location/search/${name}`,
  SYMBOL: (symbol) => `https://developer.foreca.com/static/images/symbols/${symbol}.png`,
  DAILY_WEATHER: (coords) => `forecast/daily/${coords.long},${coords.lat}`
};

const optsDate = {
  day: 'numeric',
  weekday: 'long',
  month: 'long'
};
const optsYear = { year: 'numeric' };
const optsTime = { hour: '2-digit', minute: '2-digit', hour12: false };

export { endpoints, optsDate, optsYear, optsTime };
