const getDailyForecastById = async (url, locationId) => {
  const res = await fetch(url + `/api/v1/forecast/hourly/${locationId}`);

  const data = await res.json();

  return data.forecast;
};

export default getDailyForecastById;
