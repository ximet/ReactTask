const getCurrentWeatherByCoords = async (url, coords) => {
  if (!coords || !(coords.longitude && coords.latitude)) {
    return;
  }

  const res = await fetch(
    url + `/api/v1/current/:location?location=${coords.longitude},${location.coords}`
  );

  const data = await res.json();

  return data.current;
};

export default getCurrentWeatherByCoords;
