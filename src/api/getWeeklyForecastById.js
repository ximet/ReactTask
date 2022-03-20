const getWeeklyForecastById = async (url, locationId) => {
  const res = await fetch(url + `/api/v1/forecast/daily/${locationId}`);

  const data = await res.json();

  return data.forecast;
};

export default getWeeklyForecastById;
