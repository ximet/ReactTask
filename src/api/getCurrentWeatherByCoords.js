const getCurrentWeatherByCoords = async (url, token, location) => {
  const res = await fetch(
    url + `/api/v1/current/:location?location=${location.longitude},${location.latitude}`,
    {
      headers: {
        Authorization: token
      }
    }
  );

  const data = await res.json();

  return data.current;
};

export default getCurrentWeatherByCoords;
