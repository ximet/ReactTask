const getCurrentWeatherById = async (url, token, locationId) => {
  const res = await fetch(url + `/api/v1/current/${locationId}`, {
    headers: {
      Authorization: token
    }
  });

  const data = await res.json();

  return data.current;
};

export default getCurrentWeatherById;
