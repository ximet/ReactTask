const getCurrentWeatherByCoords = async (url, location) => {
  const res = await fetch(
    url + `/api/v1/current/:location?location=${location.longitude},${location.latitude}`
  );

  const data = await res.json();

  return data.current;
};

export default getCurrentWeatherByCoords;
