const searchLocation = async (url, token, locationName) => {
  const res = await fetch(url + `/api/v1/location/search/${locationName}`, {
    headers: {
      Authorization: token
    }
  });

  const data = await res.json(); // ?? is the name "data" ok in this case?

  return data.locations[0]; // ?? ok or magic number?
};

export default searchLocation;
