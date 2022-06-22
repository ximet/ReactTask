const endpoints = {
    CURR_WEATHER: (coords) => `current/location=${coords.long},${coords.lat}`,
    LOCATION_DATA: (coords) => `location/${coords.long},${coords.lat}`
    // TODO FOR FUTURE USE
    // DAILY_FORECAST_BY_ID: (id) => `forecast/daily/${locationId}`,
    // HOURLY_FORECAST_BY_ID: (id) => `forecast/hourly/${locationId}`,
};

export default endpoints;
