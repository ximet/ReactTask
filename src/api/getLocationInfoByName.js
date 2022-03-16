const getLocationInfoByName = async (url, locationName) => {
  const res = await fetch(url + `/api/v1/location/search/${locationName}`);

  const data = await res.json();

  return data.locations[0];
};

export default getLocationInfoByName;
