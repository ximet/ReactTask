const getLocationInfoByCoords = async (url, coords) => {
  if (!coords || !(coords.longitude && coords.latitude)) {
    return;
  }

  const res = await fetch(
    url + `/api/v1/location/:location?location=${coords.longitude},${coords.latitude}`
  );

  const location = await res.json();

  return location;
};

export default getLocationInfoByCoords;
