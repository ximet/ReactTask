const searchLocation = async (url, token, locationName) => {
  const res = await fetch(url + `/api/v1/location/search/${locationName}`, {
    headers: {
      Authorization: token
    }
  });

  const data = await res.json();

  return data.locations[0];
};

export default searchLocation;
