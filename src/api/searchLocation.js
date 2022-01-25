const searchLocation = async (url, token) => {
  const res = await fetch(url + '/api/v1/location/search/Minsk', {
    headers: {
      Authorization: token
    }
  });

  const location = await res.json();

  return location;
};

export default searchLocation;
