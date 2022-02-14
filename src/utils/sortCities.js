const sortCitiesByCountryAndName = (cities) => {
  const citiesClone = JSON.parse(JSON.stringify(cities));
  return citiesClone.sort((a, b) => {
    if (a.country > b.country) {
      return 1;
    }

    if (a.country < b.country) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
};

export default sortCitiesByCountryAndName;
