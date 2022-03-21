const sortLocations = locations => {
  const locationsCopy = JSON.parse(JSON.stringify(locations));
  return locationsCopy.sort((a, b) => {
    if (a.name === b.name) {
      if (a.country === b.country) {
        return 0;
      }
      return a.country > b.country ? 1 : -1;
    }
    return a.name > b.name ? 1 : -1;
  });
};

export default sortLocations;