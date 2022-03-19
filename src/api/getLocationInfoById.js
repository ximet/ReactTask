const getLocationInfoById = async (url, locationId) => {
  const res = await fetch(url + `/api/v1/location/${locationId}`);

  const location = await res.json();

  return location;
};

export default getLocationInfoById;
