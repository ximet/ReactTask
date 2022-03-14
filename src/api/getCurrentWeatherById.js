const getCurrentWeatherById = async (url, locationId) => {
  const res = await fetch(url + `/api/v1/current/${locationId}`);

  const data = await res.json();

  return data.current;
};

export default getCurrentWeatherById;
