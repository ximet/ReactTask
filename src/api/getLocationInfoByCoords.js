const getLocationInfoByCoords = async (url, token, coords) => {
  if (!coords || !(coords.longitude && coords.latitude)) {
    return;
  }

  const res = await fetch(
    url + `/api/v1/location/:location?location=${coords.longitude},${coords.latitude}`,
    {
      headers: {
        Authorization: token
      }
    }
  );

  const location = await res.json();

  return location;
};

export default getLocationInfoByCoords;
