const endpoints = {
  CURR_WEATHER_BY_COORDS: (coords) => `current/location=${coords.long},${coords.lat}`,
  CURR_WEATHER_BY_ID: (id) => `current/${id}`,
  LOCATION_DATA_BY_COORDS: (coords) => `location/${coords.long},${coords.lat}`,
  LOCATION_NAME: (name) => `location/search/${name}`,
  SYMBOL: (symbol) => `https://developer.foreca.com/static/images/symbols/${symbol}.png`,
  DAILY_WEATHER: (coords) => `forecast/daily/${coords.long},${coords.lat}`,
  HOURLY_WEATHER: (coords) => `forecast/hourly/${coords.long},${coords.lat}`
};

const opts = {
  dateShort: {
    day: 'numeric',
    weekday: 'short',
    month: 'numeric'
  },
  dateLong: {
    day: 'numeric',
    weekday: 'long',
    month: 'long'
  },
  year: { year: 'numeric' },
  time: { hour: '2-digit', minute: '2-digit', hour12: false }
};

export { endpoints, opts };
